const state = {
    showTalion: false
}

const mutations = {
    showTalion(state) {
        state.showTalion = true;
    },
    hideTalion(state) {
        state.showTalion = false;
    }
}

const actions = {
    showTalion: ({
        commit
    }) => {
        commit({
            type: 'showTalion'
        });
    },
    hideTalion: ({
        commit
    }) => {
        commit({
            type: 'hideTalion'
        });
    }
}

const getters = {
    talion(state) {
        return state.showTalion;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}