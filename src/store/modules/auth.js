import api from '@/common/api.services';
import errorHandler from '@/common/error.handler';
import { SIGN_IN, SET_AUTH } from '@/store/types';

const state = {
  isAuthed: false,
  dummy: '',
};

const getters = {
  isAuthed: state => state.isAuthed,
};

const actions = {
  async [SIGN_IN]({ commit, dispatch }, formData) {
    try {
      api.setHeaders(formData.token, () => {});
    } catch (e) {
      errorHandler(e);
    }
  },
};

const mutations = {
  [SET_AUTH](state, status) {
    state.isAuthed = status;
  },
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations,
};

