export default {
  state: {
    list: [
      {
        name: "hacklover's lab",
        url: "https://hacklover.net",
        image: "hacklover.net.png"
      }
    ],
    active: 0
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
  }
}