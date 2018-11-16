
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    global: {
      userInfo: {},
      cityShortName: [
        '京', '津', '沪', '渝', '冀', '豫',
        '云', '辽', '黑', '湘', '皖', '鲁',
        '新', '苏', '浙', '赣', '鄂', '桂',
        '甘', '晋', '蒙', '陕', '吉', '闽',
        '贵', '粤', '青', '藏', '川', '宁',
        '琼'
      ]
    }
  },
  getters: {
    userInfo(state) {
      return state.global.userInfo;
    },
    cityShortName(state) {
      return state.global.cityShortName;
    }
  },
  actions,
  mutations
});
