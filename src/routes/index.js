import routesCofig from '~/config/routes';

// Layouts
import { HeaderOnly } from '~/components/Layout';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
    { path: routesCofig.home, component: Home },
    { path: routesCofig.following, component: Following },
    { path: '/:nickname', component: Profile },
    { path: routesCofig.upload, component: Upload, layout: HeaderOnly },
    { path: routesCofig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
