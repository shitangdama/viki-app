

export interface routeType {
    path: string
    component?: any
    children?: Array<routeType>
    meta?: {
        title?: string
        needLogin?: boolean
    }
    redirect?: string
}

const routes: Array<routeType> = [
    {
        path: '/',
        component: () => import('@/layouts'),
        children: [
            {
                path: '/',
                redirect: '/home',
            },
            {
                path: '/home',
                component: () => import('@/pages/dashboard'),
                meta: {
                    title: "首页",
                }
            },
            {
                path: '/detail',
                component: () => import('@/pages/detail'),
                meta: {
                    title: "关于",
                }
            },
        ]
    }
]

export default routes;