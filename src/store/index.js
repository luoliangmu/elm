import { createStore } from 'vuex'

export default createStore({
  state: {
    showTabBar:true,
    loginInfo:{}
  },
  getters: {

  },
  mutations: {

    changeTabBarShowStatus(state,param){
      state.showTabBar=param;
    },

    initLoginInfo(state,loginInfo){
      state.loginInfo=loginInfo;
    },

  },
  actions: {

  },
  modules: {
  }
})
