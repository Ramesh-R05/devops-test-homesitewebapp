import API from '../api';
import { parseEntity, parseEntities } from '../helper/parseEntity';
import tagsToQuery from '../helper/tagsToQuery';

export default async function navSectionMiddleware(req, res, next) {
    try {
        const itemsCount = 6;
        const { navSection } = req.query;

        if (!navSection) {
            next();

            return;
        }

        const entityResponse = await API.getEntity(`section/${navSection}`);

        if (!entityResponse) {
            const err = new Error('No section found!');
            err.status = 404;
            throw err;
        }

        const nodeTypeAlias = entityResponse.nodeTypeAlias || '';

        const sectionTag = (entityResponse.tagsDetails && Array.isArray(entityResponse.tagsDetails) && entityResponse.tagsDetails[0]) || {};
        entityResponse.kingtag = (sectionTag && sectionTag.urlName) || '';

        const pageSize = 12;
        const pageNo = parseInt(req.query.pageNo || 1, 10);
        const skip = (pageNo - 1) * pageSize;

        const sectionTagQuery = `tagsDetails/fullName eq '${sectionTag.fullName}'`;
        const heroModuleName = `${navSection.replace(/-/g, '')}hero`;

        let teaserfilter;
        const allTagSectionsPath = 'alltagsections';
        const allTagSectionsResponse = await API.getEntity(allTagSectionsPath);

        const allTagSections = allTagSectionsResponse || [];

        if (!allTagSections || !Array.isArray(allTagSections) || !allTagSections.length) {
            const err = new Error(`Path ${allTagSectionsPath} does not match page`);
            err.status = 404;
            throw err;
        }

        const commercialTagSections = allTagSections.filter(tag => tag.nodeTypeAlias === 'CommercialTagSection');

        const tagsToExclude = commercialTagSections.reduce((fullNameList, currentTag) => {
            const tagsDetails = Array.isArray(currentTag.tagsDetails) && currentTag.tagsDetails.length ? currentTag.tagsDetails : [];
            const newFullNames = tagsDetails.map(t => t.fullName);

            return [...fullNameList, ...newFullNames];
        }, []);
        const excludedTagQuery = tagsToQuery(tagsToExclude);

        if (nodeTypeAlias === 'CommercialTagSection') {
            const isEmptyTagsDetails = !Array.isArray(entityResponse.tagsDetails) || !entityResponse.tagsDetails.length;

            if (isEmptyTagsDetails) {
                res.body.items = [];
                next();

                return;
            }

            const commercialTagFullNames = entityResponse.tagsDetails.map(tag => tag.fullName);
            teaserfilter = tagsToQuery(commercialTagFullNames, 'eq');
        } else {
            teaserfilter = excludedTagQuery ? `${sectionTagQuery} and ${excludedTagQuery}` : sectionTagQuery;
        }

        const [latestTeasersResp, galleryListingResponse, heroResp] = await Promise.all([
            API.getLatestTeasers(itemsCount, skip, teaserfilter),
            API.getLatestTeasers(5, 0, `nodeTypeAlias eq 'Gallery' and ${teaserfilter}`),
            API.getModules([`${heroModuleName}`])
        ]);

        const latestTeasers = (latestTeasersResp && latestTeasersResp.data) || [];
        const heroModule = (heroResp && heroResp.data && heroResp.data[0]) || {};

        const section = {
            name: entityResponse.nodeName,
            id: entityResponse.id,
            urlName: entityResponse.urlName
        };
        const list = {
            params: {
                listName: navSection,
                basePath: `/${navSection}`,
                offset: itemsCount,
                pageNo,
                pageSize,
                filter: teaserfilter
            }
        };

        res.body = {
            ...res.body,
            entity: parseEntity(entityResponse),
            items: parseEntities(latestTeasers),
            list,
            section,
            galleries: parseEntities(galleryListingResponse.data),
            hero: parseEntity((heroModule && heroModule.moduleManualContent && heroModule.moduleManualContent.data[0]) || {})
        };

        next();
    } catch (error) {
        next(error);
    }
}
