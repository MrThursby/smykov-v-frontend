export const state = () => ({
  courses: []
})

export const mutations = {
  setCourses(state, courses) {
    state.courses = courses
  }
}
export const actions = {
  async fetch({commit}) {
    const courses = await this.$axios.$get('/api/school/courses')
    commit('setCourses', courses)
  }
}

export const getters = {
  courses: s => s.courses
}
