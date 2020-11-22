export const state = () => ({
  id: null,
  lesson: [],
  section_id: null,
  course_id: null,
})

export const mutations = {
  setId(state, lesson_id) {
    state.id = lesson_id
  },
  setLesson(state, lesson) {
    state.lesson = lesson
  },
  setSectionId(state, section_id) {
    state.section_id = section_id
  },
  setCourseId(state, course_id) {
    state.course_id = course_id
  },
}
export const actions = {
  async fetch({commit}, payload) {
    const course_id = payload.course_id
    const section_id = payload.section_id
    const lesson_id = payload.lesson_id

    commit('setId', lesson_id)
    commit('setSectionId', section_id)

    const lesson = await this.$axios
      .$get('/api/school/courses/' + course_id +
                '/sections/' + section_id + '/lessons/' + lesson_id)

    commit('setCourseId', course_id)
    commit('setLesson', lesson.data)
  },
  unload({commit}){
    commit('setId', null)
    commit('setSectionId', null)
    commit('setLesson', [])
    commit('setCourseId', null)
  }
}

export const getters = {
  id: s => s.id,
  lesson: s => s.lesson,
  section_id: s => s.section_id,
  course_id: s => s.course_id
}
