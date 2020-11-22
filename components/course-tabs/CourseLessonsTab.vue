<template>
  <div class="container mx-auto px-4 pt-4">
    <div v-if="loading === false" class="flex flex-col-reverse flex-wrap">
      <div v-for="(section, index) of sections"
           :key="'section-'+index">
        <h2 class="text-2xl">{{ section.title }}</h2>
        <div class="w-full flex flex-row flex-wrap">
          <div
            v-for="(lesson, lesson_index) of section.lessons"
            :key="'lesson-' + lesson_index"
            class="w-full px-2 pb-4"
          >
            <div @click="selectLesson(lesson.id, section.id)"
                 class="cursor-pointer w-auto bg-white rounded shadow-md p-4 transition duration-200 transform hover:-translate-y-1 hover:shadow-lg">
              {{ lesson.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading v-else />
  </div>
</template>

<script>
  import Loading from "../Loading";
  export default {
    name: "CourseLessonsTab",
    components: {Loading},
    mounted() {
      let course_id = this.$store.getters['course/id']
      if(course_id !== this.$store.getters['lessons/course_id']){
        this.loading = true
        this.$store.dispatch("lessons/fetch", course_id)
          .then(() => this.loading = false)
      }
    },
    data() {
      return {
        loading: false
      }
    },
    computed: {
      sections() {
        return this.$store.getters['lessons/lessons']
      }
    },
    methods: {
      selectLesson(lesson_id, section_id){
        const course_id = this.$store.getters['course/id']
        this.$store.dispatch("lesson/fetch", {
          course_id: course_id,
          section_id: section_id,
          lesson_id: lesson_id
        })
        this.$store.dispatch("course/changeActiveTab", 2)
      }
    },
  }
</script>

<style scoped>

</style>
