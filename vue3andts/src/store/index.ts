import { createStore } from 'vuex';
import state from './state/index';
import actions from './action/index';
import mutations from './mutations/index';
import getters from './getters/index';

export default createStore({
  state,
  actions,
  mutations,
  getters,
});
