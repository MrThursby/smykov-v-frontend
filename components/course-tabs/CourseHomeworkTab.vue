<template>
  <div class="container mx-auto px-4">
    <div v-if="!loading">
      <div class="text-2xl mt-3">Задание</div>
      <p v-if="!!lesson.homework">{{ lesson.homework }}</p>
      <div v-if="homework_list.length !== 0" class="text-2xl mt-3">Ваши ответы</div>
      <div v-for="(homework, index) of homework_list"
           class="border-l-4 pl-4"
           :class="{
           'border-success-400': homework.mark === 5,
           'border-info-400': homework.mark === 4,
           'border-warning-400': homework.mark === 3,
           'border-danger-400': homework.mark === 2,
           'border-danger-400': homework.mark === 1,
           'border-secondary': homework.mark === false,
         }"
      >
        <div class="text-xl mt-1">#{{ homework_list.length - index }}</div>
        <p>{{ homework.content }}</p>
        <p v-if="!!homework.response">
          <span class="text-secondary pt-4">Учитель:</span> {{ homework.response }}
        </p>
      </div>
      <Comments/>
    </div>
    <Loading v-else />
  </div>
</template>

<script>
  import Loading from "../Loading";
  export default {
    name: "CourseHomeworkTab",
    components: {Loading},
    data() {
      return {
        loading: false
      }
    },
    mounted() {
      const course_id = this.$store.getters['course/id']
      const lesson_id = this.$store.getters['lesson/id']
      const section_id = this.$store.getters['lesson/section_id']

      if(course_id !== null && lesson_id !== null){
        if(course_id !== this.$store.getters['lesson/course_id']){
          this.loading = true
          this.$store.dispatch("lesson/fetch", {
            course_id: course_id,
            section_id: section_id,
            lesson_id: lesson_id
          })
        }

        if(lesson_id !== this.$store.getters['homework/lesson_id']) {
          this.loading = true
          this.$store.dispatch("homework/fetch", {
            course_id: course_id,
            section_id: section_id,
            lesson_id: lesson_id
          }).then(() => {
            this.loading = false
          })
        }
      }
    },
    computed: {
      lesson() {
        return this.$store.getters['lesson/lesson']
      },
      homework_list() {
        return this.$store.getters['homework/list']
      },
    },
  }
</script>

<style scoped>

</style>
