import router from "@/router"
import Cookie from "js-cookie"
export default {
    namespaced: true,
    action: {},
    mutations: {
        COLLAPSE(state, value) {
            state.isCollapse = !state.isCollapse
        },
        SELECTMENU(state, value) {
            if (value.name !== 'home') {
                state.currentMenu = value
                const result = state.tabsList.findIndex(item => item.name === value.name)
                if (result == -1) {
                    state.tabsList.push(value)
                }
            } else {
                // console.log("@");
                state.currentMenu = null
            }
        },
        CLOSETAG(state, value) {
            const result = state.tabsList.findIndex(item => item.name === value.name)
            state.tabsList.splice(result, 1)
        },
        SETMENU(state, value) {
            state.menu = value
            Cookie.set('menu', JSON.stringify(value))
        },
        CLEARMENU(state, value) {
            state.menu = []
            Cookie.remove('menu')
        },
        ADDMENU(state, router) {
            if (!Cookie.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            //路由的动态添加
            menuArray.forEach(item => {
                router.addRoute('Main', item)
            })
            console.log(555, menuArray);


        }
    },
    state: {
        isCollapse: false,
        tabsList: [
            {
                path: '/home',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null,
        menu: []
    }
}