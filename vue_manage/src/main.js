import Vue from 'vue'
import App from './App.vue'
import {
  Button, Row, Container, Header, Footer, Main, Aside, Menu, Submenu, MenuItem, MenuItemGroup,
  Dropdown, DropdownMenu, DropdownItem, Card, Col, Table, TableColumn, Breadcrumb,
  BreadcrumbItem, Tag, Form, FormItem, Input, Select, Switch, DatePicker, Dialog, Option, Pagination,
  MessageBox, Message
}
  from 'element-ui';
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import './assets/less/index.less'
import http from 'axios'
import './api/mock'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Row)
Vue.use(Container)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Card)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.$http = http
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$confirm = MessageBox.confirm
    Vue.prototype.$message = Message
  }
}).$mount('#app')
