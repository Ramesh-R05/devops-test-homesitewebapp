import { Flux } from '@bxm/flux';
import AdStore from '@bxm/ad/lib/google/stores/ad';
import ArticleStore from '@bxm/article/lib/stores/articleStore';
import HtmlStore from '@bxm/server/lib/stores/html';
import VerticalGalleryStore from '@bxm/article/lib/stores/verticalGalleryStore';
import NavigationStore from '@bxm/site-header/lib/stores/navigation';
import PageStore from './stores/page';
import RouteStore from './stores/route';
import TrackingStore from './stores/tracking';
import AppComponent from './components/app';
import SearchStore from './stores/search';
import DirectoryStore from './stores/directory';
import EmailStore from './stores/email';

export const stores = [
    AdStore,
    ArticleStore,
    HtmlStore,
    VerticalGalleryStore,
    RouteStore,
    PageStore,
    RouteStore,
    TrackingStore,
    NavigationStore,
    SearchStore,
    DirectoryStore,
    EmailStore
];

const app = new Flux({
    component: AppComponent,
    stores
});

export default app;
