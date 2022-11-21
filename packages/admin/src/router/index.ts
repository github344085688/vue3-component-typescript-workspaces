import AdminLayout from '../layouts/admin-layout'
import {filterRouterTopMap} from '@project/share'
import UserRouters from './user-routers'
import MainRouters from './main-routers'
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw,
    Router,
    createWebHistory
} from 'vue-router';


type ScrollPositionCoordinates = {
    behavior?: ScrollOptions['behavior'];
    left?: number;
    top?: number;
};

interface ScrollPositionElement extends ScrollToOptions {
    el: string | Element;
}

const childrenRouters = ()=>{
    let childRouters:Array<any> = [];
    filterRouterTopMap(MainRouters, childRouters, ['path','name','component','redirect'] );
    return childRouters;
}
const mainRoutes:any=[
     {
    path: '/main',
    name: 'Main',
    component: AdminLayout,
    redirect: {name: 'Dashboard'},
    children:childrenRouters()
}
];

const routes: Array<RouteRecordRaw> = [...UserRouters,...mainRoutes];

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
