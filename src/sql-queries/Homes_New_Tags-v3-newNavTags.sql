declare @paths varchar(max)
declare @docTypes varchar(50)


--HOMES migration

set @paths ='-1,1158'
set @docTypes = 'HomesArticle,Gallery'


	DECLARE @articleContentTypeNodeId INT, @splitChar CHAR(1) = ',',  @xml XML

	DECLARE @articles TABLE (
		id int,
		title varchar(255),
		documentType varchar(255),
		CountNavTag int,
		navTag varchar(max),
		newTags varchar(max),
		originalTags varchar(max)
	)

	DECLARE @contentTypes TABLE (
		nodeid int,
		alias nvarchar(255)
	)

	DECLARE @IdAndNodeId TABLE (
	    id int,
		nodeid int
	)


	DECLARE @NodeAndTag TABLE (
		nodeid int,
		tag nvarchar(max),
		originalTags nvarchar(max),
		newTags nvarchar(max),
		navTagCounter int
	)


	-- split any comma seperated names
	SELECT @xml = CONVERT(xml,'<root><s>' + REPLACE(@docTypes,@splitChar,'</s><s>') + '</s></root>')

	-- get document type node id's
	INSERT INTO @contentTypes (nodeid, alias)
	SELECT nodeid, alias
	FROM dbo.cmsContentType
	WHERE alias IN (SELECT LTRIM(RTRIM((T.c.value('.','varchar(255)'))))
					FROM @xml.nodes('/root/s') T(c))

    INSERT INTO @IdAndNodeId (id, nodeid)
	select max(id), contentNodeId from cmsPropertyData 
        where (propertytypeid = 183 or propertytypeid = 223) and datalength(dataNtext) > 4
		group by contentNodeId

    INSERT INTO @NodeAndTag (nodeid, tag, newtags, originalTags, navTagCounter)
	select contentNodeId, dbo.GetNewNavigationTag(dataNtext), dbo.UpdateTagsWithNewTag(dataNtext,dbo.GetNewNavigationTag(dataNtext)), dbo.CleanTags(dataNtext), dbo.CountOccurancesOfString(dataNtext, 'food:Homes navigation:') from cmsPropertyData a
	    INNER JOIN @IdAndNodeId b on b.id = a.id

	INSERT INTO @articles (id, title, documentType, CountNavTag, originalTags, navTag, newTags)
	SELECT distinct 
	       n.id,
		   n.[text],
		   b.alias,
		   navTagCounter,
		   originalTags,
		   e.tag,
		   newTags
            
	FROM umbracoNode (NOLOCK) n
	INNER JOIN cmsDocument (NOLOCK) d ON n.id = d.nodeId
	INNER JOIN cmsContent (NOLOCK) c ON n.id = c.nodeId
	INNER JOIN cmsContentType (NOLOCK) b ON b.nodeid = c.contentType
	INNER JOIN @NodeAndTag e on e.nodeId = n.id
	
	WHERE 
	    n.nodeObjectType =  'C66BA18E-EAF3-4CFF-8A22-41B16D66A972' AND
		c.contentType IN (SELECT nodeid FROM @contentTypes) AND
		n.[path] like @paths + '%' --and


	select * from @articles-- where id = 1570
