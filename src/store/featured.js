import axios from "axios";

export default {
  state: {
    list: [],
    active: -1
  },
  getters: {
    featuredList(state) {
      return state.list
    },
    featuredCount(state) {
      return state.list.length
    },
    featuredActive(state) {
      return state.list[state.active]
    }
  },
  mutations: {
    SET_LIST(state, list) {
      state.list = list
    },
    SET_ACTIVE(state, id) {
      state.active = id
    },
    PREV(state) {
      if (state.active > 0) {
        state.active--
      } else {
        state.active = state.list.length - 1
      }
    },
    NEXT(state) {
      if (state.active + 1 < state.list.length) {
        state.active++
      } else {
        state.active = 0
      }
    }
  },
  actions: {
    loadFeaturedList({commit}) {
      return axios.get('https://raw.githubusercontent.com/owdproject/owdproject.org/master/config/featured/config.json')
        .then(response => {
          commit('SET_LIST', response.data)
          return true
        })
        .catch(e => false)
    }
  }
}