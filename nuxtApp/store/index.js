import Vue from 'vue'
import Vuex from 'vuex'
import service from '~/api/index'
import s from '~/service'
const serve = service.setApi

Vue.use(Vuex)
export const actions = {
  GET_STUDENT ({commit}, data) {
    serve.getStudent(data)
  }
}
export const mutation = {
  SET_COOKIES (state, cookies) {
    state.cookies = cookies
    s.ININT_DATA.cookies = cookies
  },
  SET_QUERY (state, query) {
    state.query = query
    s.INIT_DATA.query = query
  },
  SET_USER_INFO (state, userInfo) {
    state.userInfo = userInfo
    s.INIT_DATA.userInfo = userInfo
    Event.trigger('userInfo.loaded', userInfo)
  }
}
