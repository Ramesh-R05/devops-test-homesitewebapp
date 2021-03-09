var articleTemplate = require('../templates/videoArticle');

var articles = [];
articles.push(articleTemplate(0));

module.exports = {
    entity: articles[0],
    next: {},
    previous: {
        entity: {
            campaign: [],
            tags: ['food:Topic:Before and after', 'food:Homes navigation:DIY & How To'],
            source: 'homes+',
            body: [
                {
                    type: 'heading',
                    label: 'Heading',
                    content: 'How Builders Make New Homes More Spacious, Inside and Out'
                },
                {
                    type: 'image',
                    label: 'Image',
                    content: {
                        url: 'http://dev.assets.cougar.bauer-media.net.au/s3/digital-cougar-assets-dev/homes/2015/06/02/1433204812800_Home02.jpg',
                        valid: true,
                        caption: 'Image 01 - Content Body - Image Caption',
                        link: 'https://www.google.com',
                        title: 'Image 01 - Content Body - Title'
                    }
                },
                {
                    type: 'heading',
                    label: 'Heading',
                    content: 'High Ceilings'
                },
                {
                    type: 'paragraph',
                    label: 'Paragraph',
                    content:
                        'Perhaps the best way to make a house feel much larger is to raise the ceilings to 9, 10 or even 12 or 15 feet, says Trey Bitteker, general sales manager at Pulte Homes in Arizona. “High ceiling heights will certainly open up a house. When someone walks through it, every room feels a little bit larger,” he says.'
                },
                {
                    type: 'paragraph',
                    label: 'Paragraph',
                    content:
                        'New homes today commonly have double-height or one-and-a half height ceilings in one or more rooms such as an entry hall, family room or formal living room, says Michael Malone, principal at Michael Malone Architects in Dallas. “No matter how small a room is,” Malone says, “that extra vertical height makes a lot of difference.”'
                }
            ],
            author: [],
            title: 'Article 16 - Before & After - Long Title',
            summaryTitle: 'Article 16 - Before & After - Short Title',
            summary:
                'Article 16 - Before & After - Short Teaser - abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789 !@#$%^&*()_+-={}|[]\\:";\'<>?,./',
            imageUrl: 'http://dev.assets.cougar.bauer-media.net.au/s3/digital-cougar-assets-dev/homes/2015/06/03/1224/home_17.jpg',
            redirect: {
                mode: 2
            },
            imageFacebookUrl: {},
            accessLevels: ['-1'],
            dateCreated: '2015-06-02T10:55:05',
            tracking: {
                dateIndexed: '2015-06-04T02:43:01'
            },
            month: 6,
            year: 2015,
            id: 'HOMES-1224',
            parentId: 'HOMES-1206',
            level: 3,
            sortOrder: 16,
            name: 'Article 16 - Before & After',
            dateIndexed: '2015-06-04T02:43:01',
            pathIds: ['HOMES--1', 'HOMES-1158', 'HOMES-1206', 'HOMES-1224'],
            urlName: 'article-16-before-and-after',
            url: '/section/article-16-before-and-after',
            nodeType: 'HomesArticle',
            template: 'Index',
            siteCode: '56421e16-b4ab-417c-9645-a6a89644d4b4',
            siteName: 'Homes',
            siteUrl: 'http://localhost/',
            nodeTypeAliasPath: ['Page', 'Editorial', 'Articles', 'HomesArticle']
        },
        url: '/section/article-16-before-and-after'
    },
    section: {
        urlName: 'section',
        title: 'Section',
        redirect: {
            mode: 2
        },
        imageFacebookUrl: {},
        accessLevels: ['-1'],
        dateCreated: '2015-06-02T09:57:24',
        tracking: {
            dateIndexed: '2015-06-04T02:04:50'
        },
        month: 6,
        year: 2015,
        id: 'HOMES-1206',
        parentId: 'HOMES-1158',
        level: 2,
        sortOrder: 3,
        name: 'Section',
        dateIndexed: '2015-06-04T02:04:50',
        pathIds: ['HOMES--1', 'HOMES-1158', 'HOMES-1206'],
        url: '/section',
        nodeType: 'Section',
        template: 'Index',
        siteCode: '56421e16-b4ab-417c-9645-a6a89644d4b4',
        siteName: 'Homes',
        siteUrl: 'http://localhost/',
        nodeTypeAliasPath: ['Page', 'Sections', 'Section']
    },
    subsection: {
        urlName: 'section',
        title: 'Section',
        redirect: {
            mode: 2
        },
        imageFacebookUrl: {},
        accessLevels: ['-1'],
        dateCreated: '2015-06-02T09:57:24',
        tracking: {
            dateIndexed: '2015-06-04T02:04:50'
        },
        month: 6,
        year: 2015,
        id: 'HOMES-1206',
        parentId: 'HOMES-1158',
        level: 2,
        sortOrder: 3,
        name: 'Section',
        dateIndexed: '2015-06-04T02:04:50',
        pathIds: ['HOMES--1', 'HOMES-1158', 'HOMES-1206'],
        url: '/section',
        nodeType: 'Section',
        template: 'Index',
        siteCode: '56421e16-b4ab-417c-9645-a6a89644d4b4',
        siteName: 'Homes',
        siteUrl: 'http://localhost/',
        nodeTypeAliasPath: ['Page', 'Sections', 'Section']
    },
    headerMetaData: {
        robots: 'NOINDEX,NOFOLLOW',
        intId: '1231',
        googleTagManagerEnvironment: 'Development',
        googleTagManagerMasthead: 'HOMES',
        appId: 'GTM-WJRM8R',
        title: 'Article Long Title',
        pageName: 'Article - Hero Image',
        pageDescription: 'Article Long Title, Article Short Teaser',
        faceBookAdmins: '100002740190640',
        breadcrumbs: [
            {
                siteName: 'Homes',
                social: {
                    siteUrl: 'http://localhost/'
                },
                homepageTracking: {
                    dateIndexed: '2015-05-27T01:42:08'
                },
                urlName: 'homes',
                title: 'Homes',
                redirect: {
                    mode: 2
                },
                imageFacebookUrl: {},
                accessLevels: ['-1'],
                dateCreated: '2015-04-24T12:49:11',
                tracking: {
                    dateIndexed: '2015-05-27T01:42:08'
                },
                month: 4,
                year: 2015,
                id: 'HOMES-1158',
                parentId: 'HOMES--1',
                level: 1,
                name: 'Homes',
                dateIndexed: '2015-05-27T01:42:08',
                pathIds: ['HOMES--1', 'HOMES-1158'],
                url: '/',
                nodeType: 'Homepage',
                template: 'Index',
                siteCode: '56421e16-b4ab-417c-9645-a6a89644d4b4',
                siteUrl: 'http://localhost/',
                nodeTypeAliasPath: ['Page', 'Sections', 'Homepage']
            },
            {
                urlName: 'section',
                title: 'Section',
                redirect: {
                    mode: 2
                },
                imageFacebookUrl: {},
                accessLevels: ['-1'],
                dateCreated: '2015-06-02T09:57:24',
                tracking: {
                    dateIndexed: '2015-06-04T02:04:50'
                },
                month: 6,
                year: 2015,
                id: 'HOMES-1206',
                parentId: 'HOMES-1158',
                level: 2,
                sortOrder: 3,
                name: 'Section',
                dateIndexed: '2015-06-04T02:04:50',
                pathIds: ['HOMES--1', 'HOMES-1158', 'HOMES-1206'],
                url: '/section',
                nodeType: 'Section',
                template: 'Index',
                siteCode: '56421e16-b4ab-417c-9645-a6a89644d4b4',
                siteName: 'Homes',
                siteUrl: 'http://localhost/',
                nodeTypeAliasPath: ['Page', 'Sections', 'Section']
            },
            {
                campaign: [],
                tags: ['food:Topic:Creative home', 'food:Homes navigation:Indoor', 'food:Profiles:Designer'],
                source: 'Australian House and Garden',
                body: [
                    {
                        type: 'heading',
                        label: 'Heading',
                        content: 'How Builders Make New Homes More Spacious, Inside and Out'
                    },
                    {
                        type: 'image',
                        label: 'Image',
                        content: {
                            url: 'http://dev.assets.cougar.bauer-media.net.au/s3/digital-cougar-assets-dev/homes/2015/06/02/1433204812800_Home02.jpg',
                            valid: true,
                            caption:
                                'Inline Image Caption - abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789 !@#$%^&*()_+-={}|[]\\:";\'<>?,./',
                            link: 'https://www.google.com',
                            title: 'Inline Image Title'
                        }
                    },
                    {
                        type: 'heading',
                        label: 'Heading',
                        content: 'High Ceilings'
                    },
                    {
                        type: 'paragraph',
                        label: 'Paragraph',
                        content:
                            'Perhaps the best way to make a house feel much larger is to raise the ceilings to 9, 10 or even 12 or 15 feet, says Trey Bitteker, general sales manager at Pulte Homes in Arizona. “High ceiling heights will certainly open up a house. When someone walks through it, every room feels a little bit larger,” he says.'
                    },
                    {
                        type: 'paragraph',
                        label: 'Paragraph',
                        content:
                            'New homes today commonly have double-height or one-and-a half height ceilings in one or more rooms such as an entry hall, family room or formal living room, says Michael Malone, principal at Michael Malone Architects in Dallas. “No matter how small a room is,” Malone says, “that extra vertical height makes a lot of difference.”'
                    }
                ],
                author: [],
                title: 'Article Long Title',
                summaryTitle: 'Article Short Title',
                summary: 'Article Short Teaser',
                imageUrl:
                    'http://dev.assets.cougar.bauer-media.net.au/s3/digital-cougar-assets-dev/homes/2015/06/12/1209/fb_palmbeachtower_2014_hr_006.jpg',
                redirect: {
                    mode: 2
                },
                imageFacebookUrl: {},
                accessLevels: ['-1'],
                dateCreated: '2015-06-18T10:40:39',
                tracking: {
                    dateIndexed: '2015-06-18T21:16:27'
                },
                month: 6,
                year: 2015,
                id: 'HOMES-1231',
                parentId: 'HOMES-1206',
                level: 3,
                sortOrder: 17,
                name: 'Article - Hero Image',
                dateIndexed: '2015-06-18T21:16:27',
                pathIds: ['HOMES--1', 'HOMES-1158', 'HOMES-1206', 'HOMES-1231'],
                urlName: 'article-hero-image',
                url: '/section/article-hero-image',
                nodeType: 'HomesArticle',
                template: 'Index',
                siteCode: '56421e16-b4ab-417c-9645-a6a89644d4b4',
                siteName: 'Homes',
                siteUrl: 'http://localhost/',
                nodeTypeAliasPath: ['Page', 'Editorial', 'Articles', 'HomesArticle']
            }
        ]
    },
    request: {
        pathAndQuery: '/section/article-hero-image',
        userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36',
        queryString: [],
        dnsSafeHost: 'dev.homes-api.wn.bauer-media.net.au'
    },
    stores: {
        leftHandRail: {
            module: {
                includeDynamic: true,
                contentType: 'Editorials',
                contentSections: 'Custom',
                sections: ['HOMES-1161', 'HOMES-1237'],
                sorting: 'DateCreatedDesc',
                facetConfiguration: [
                    {
                        label: 'Tag',
                        field: 'tags',
                        query: 'tags',
                        sortBy: 0,
                        sortDirection: 0
                    }
                ],
                enableTextSearch: true,
                textSearchConfiguration: {
                    label: 'Search',
                    criteria: 'query',
                    queryString: 'q'
                },
                supportsPreview: true,
                pageSize: 20,
                moduleName: 'leftHandRail',
                storeName: 'leftHandRail',
                id: 'feed-articles',
                parentId: 'HOMES-1159',
                level: 3,
                name: 'Left Hand Rail',
                dateIndexed: '2015-07-08T21:34:54',
                pathIds: ['HOMES--1', 'HOMES-1158', 'HOMES-1159', 'HOMES-1313'],
                urlName: 'left-hand-rail',
                url: '/modules/left-hand-rail',
                nodeType: 'FacetedModule',
                template: 'Index',
                siteCode: '56421e16-b4ab-417c-9645-a6a89644d4b4',
                siteName: 'Homes',
                siteUrl: 'http://dev.homes-api.wn.bauer-media.net.au',
                nodeTypeAliasPath: ['Modules', 'PagedModules', 'FacetedModule']
            },
            items: []
        }
    }
};
