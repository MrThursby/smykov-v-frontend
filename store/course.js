export const state = () => ({
  id: null,
  course: [],
  activeTab: 0
})

export const mutations = {
  setId(state, id) {
    state.id = id
  },
  setCourse(state, course) {
    state.course = course
  },
  setActiveTab(state, tab_id) {
    state.activeTab = tab_id
  }
}
export const actions = {
  async fetch({commit}, course_id) {
    commit('setId', course_id)
    const course = await this.$axios.$get('/api/school/courses/' + course_id)
    commit('setCourse', course.data)
  },
  changeActiveTab({commit}, tab_id){
    commit('setActiveTab', tab_id)
  }
}

export const getters = {
  id: s => s.id,
  course: s => s.course,
  activeTab: s => s.activeTab
}
