import Init from '../layouts/Init'

import BasicLayout from '../layouts/BasicLayout'

import Login from '../layouts/Login'

import IndexLayout from '../layouts/IndexLayout'


import Info from '../pages/info'

import ArticleList from '../pages/article/list'
// import DeployEdit from '../pages/article/edit'

const routes = [
    {
        path: "/",
        exact: true,
        component: Init,
    },
    {
        path: "/login",
        exact: true,
        component: Login,
    },
    {
        path: "/dashboard",
        component: BasicLayout,
        routes: [
            {
                path: "/dashboard",
                exact: true,
                component: Info,
            },
            {
                path: "/dashboard/articles",
                component: IndexLayout,
                routes: [
                    {
                        path: "/dashboard/articles",
                        exact: true,
                        component: ArticleList,
                    },
                    // {
                    //     path: "/dashboard/articles/:id",
                    //     exact: true,
                    //     component: DeployEdit,
                    // },
                ]
            },
            {
                path: "/dashboard/users",
                component: IndexLayout,
                routes: [
                    // {
                    //     path: "/dashboard/users",
                    //     exact: true,
                    //     component: ArticleList,
                    // },
                    // {
                    //     path: "/dashboard/articles/:id",
                    //     exact: true,
                    //     component: DeployEdit,
                    // },
                ]
            }
        ]
    },
    // {
    //     path: '*',
    //     component: NotFound
    // }
];

export default routes;