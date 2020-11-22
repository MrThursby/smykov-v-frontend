export const state = () => ({
  course_id: null,
  lessons: []
})

export const mutations = {
  setCourseId(state, course_id) {
    state.course_id = course_id
  },
  setLessons(state, lessons) {
    state.lessons = lessons
  },
}
export const actions = {
  async fetch({commit}, course_id) {
    const lessons = await this.$axios.$get('/api/school/sections?course_id='+course_id)
    commit('setCourseId', course_id)
    commit('setLessons', lessons.data)
  },
  unload({commit}) {
    commit('setCourseId', null)
    commit('setLessons', [])
  }
}

export const getters = {
  lessons: s => s.lessons,
  course_id: s => s.course_id
}
