import axios from 'axios'

export default {
  state: () => ({
    tags: [],
  }),
  getters: {
    lastTagCurrent(state) {
      if (state.tags.length === 0) {
        return null
      }

      return state.tags.find(tag => {
        return tag.name.startsWith('v1.')
      })
    },
    lastTagNext(state) {
      if (state.tags.length === 0) {
        return null
      }

      return state.tags.find(tag => {
        return tag.name.startsWith('v2.')
      })
    }
  },
  mutations: {
    SET_TAGS(state, tags) {
      state.tags = tags
    }
  },
  actions: {
    loadTags({commit}) {
      return axios.get('https://api.github.com/repos/owdproject/owd-client/tags')
        .then(response => {
          commit('SET_TAGS', response.data)
          return true
        })
        .catch(e => false)
    }
  }
}