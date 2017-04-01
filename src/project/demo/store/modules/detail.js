import * as types from '../mutation-types';

// initial state
const state = {
    obj: {}
};

// mutations
const mutations = {
    [types.ADD_TO_DETAIL](state, data) {
        state.obj = data;
    }
};

export default {
    state,
    mutations
};
