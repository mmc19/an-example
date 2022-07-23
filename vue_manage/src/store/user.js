import Cookie from "js-cookie"
export default {
    namespaced: true,
    actions: {

    },
    mutations: {
        SETTOKEN(state, value) {
            state.token = value
            Cookie.set('token', value)
        },
        CLEARTOKEN(state, value) {
            state.token = ''
            Cookie.remove('token')
        },
        GETTOKEN(state, value) {
            state.token = state.token || Cookie.get("token")
        }
    },
    state: {
        token: ''
    }
}