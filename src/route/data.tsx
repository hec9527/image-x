import React from 'react';

const Routes: IRouter[] = [
    {
        path: '/',
        component: React.lazy(() => import('@src/pages/home')),
    },
    {
        path: '/search',
        component: React.lazy(() => import('@src/pages/search')),
    },
    {
        path: '/my',
        component: React.lazy(() => import('@src/pages/my')),
    },
    {
        path: '/bing',
        component: React.lazy(() => import('@src/pages/bing')),
    },
];

export default Routes;
