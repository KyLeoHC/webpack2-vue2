// import List from './views/list'
// import Detail from './views/detail'

const routeConfig = {
    routes: [
        {
            path: '/list',
            name: 'list',
            component: resolve => {
                require.ensure(['./views/list/index.vue'], () => {
                    resolve(require('./views/list/index.vue'))
                }, 'demo-list')
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: resolve => {
                require.ensure(['./views/detail/index.vue'], () => {
                    resolve(require('./views/detail/index.vue'))
                }, 'demo-detail')
            }
        }
    ]
};

export default routeConfig
