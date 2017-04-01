import * as types from './mutation-types';

export const addToDetail = ({commit}, data) => {
    commit(types.ADD_TO_DETAIL, data);
};
