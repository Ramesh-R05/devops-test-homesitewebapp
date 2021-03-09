import loadDirectoryContent from '../actions/loadDirectoryContent';
import loadPageContent from '../actions/loadPageContent';
import loadSearch from '../actions/loadSearch';
import pageNotFound from '../actions/pageNotFound';
import Article from '../components/pages/article';
import Brand from '../components/pages/brand';
import Campaign from '../components/pages/campaign';
import directoryPage from '../components/pages/directory';
import ErrorPage from '../components/pages/error';
import Home from '../components/pages/home';
import NavigationTag from '../components/pages/navigationSection';
import SearchResults from '../components/pages/search';
import Tag from '../components/pages/tag';

export default {
    home: {
        path: '/',
        method: 'get',
        handler: Home,
        action: loadPageContent
    },
    tags: {
        path: '/tags/:tag*',
        method: 'get',
        handler: Tag,
        action: loadPageContent,
        validators: {
            tag: /^[^\W_]+(-[^\W_]+)*$/g
        }
    },
    campaigns: {
        path: '/campaigns/:campaign',
        method: 'get',
        handler: Campaign,
        action: loadPageContent,
        validators: {
            campaign: /^[^\W_]+(-[^\W_]+)*$/g
        }
    },
    search: {
        path: '/search/:query',
        method: 'get',
        handler: SearchResults,
        action: loadSearch
    },
    preview: {
        path: '/:preview(preview)/:page(.*-):id([0-9]+)',
        method: 'get',
        handler: Article,
        action: loadPageContent,
        validators: {
            page: /^[^\W_]+(-[^\W_]+)*-$/g,
            id: /^[0-9]*$/g
        }
    },
    directoryListingSinglePreview: {
        path: '/:preview(preview)/directory([/])?:category([^/]+)?([/])?:listing(.*-)?:id([0-9]+)?([/])?',
        method: 'get',
        handler: directoryPage,
        action: loadDirectoryContent,
        validators: {
            category: /^[^\W_]+(-[^\W_]+)*$/g
        }
    },
    directory: {
        path: '/directory([/])?:category([^/]+)?([/])?:listing(.*-)?:id([0-9]+)?([/])?',
        method: 'get',
        handler: directoryPage,
        action: loadDirectoryContent
    },
    page: {
        path: '/:page(.*-):id([0-9]+)',
        method: 'get',
        handler: Article,
        action: loadPageContent
    },
    brand: {
        path: '/:brand(belle|real-living|homes-plus|australian-house-and-garden|inside-out|country-style|homelife|home-beautiful)',
        method: 'get',
        handler: Brand,
        action: loadPageContent
    },
    navSection: {
        path: '/:navSection*',
        method: 'get',
        handler: NavigationTag,
        action: loadPageContent,
        validators: {
            navSection: /^[^\W_]+(-[^\W_]+)*$/g
        }
    },
    all: {
        path: '/:all*',
        method: 'get',
        handler: ErrorPage,
        action: pageNotFound
    }
};
