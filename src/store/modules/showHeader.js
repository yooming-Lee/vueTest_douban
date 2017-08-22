const state = {
    showHeader: true
};

const mutations = {
    showHeader(state) {
        state.showHeader = true;
    },
    hideHeader(state) {
        state.showHeader = false;
    }
}

const actions = {
    showHeader: ({
        commit
    }) => {
        commit('showHeader');
    },
    hideHeader: ({
        commit
    }) => {
        commit('hideHeader');
    }
}

export default {
    state,
    mutations,
    actions
}