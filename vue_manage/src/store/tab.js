export default {
    namespaced: true,
    action: {

    },
    mutations: {
        COLLAPSE(state, value) {
            state.isCollapse = !state.isCollapse
        }
    },
    state: {
        isCollapse: false
    }
}