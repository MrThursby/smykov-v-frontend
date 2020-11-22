export const state = () => ({
  lesson_id: null,
  list: []
})

export const mutations = {
  setLessonId(state, lesson_id) {
    state.lesson_id = lesson_id
  },
  setList(state, list) {
    state.list = list
  },
}
export const actions = {
  async fetch({commit}, payload) {
    const course_id = payload.course_id
    const section_id = payload.section_id
    const lesson_id = payload.lesson_id

    const list = await this.$axios.$get('/api/school/homework?lesson_id='+lesson_id)
    commit('setLessonId', lesson_id)
    commit('setList', list.data)
  },
  unload({commit}) {
    commit('setLessonId', null)
    commit('setList', [])
  }
}

export const getters = {
  list: s => s.list,
  lesson_id: s => s.lesson_id
}
