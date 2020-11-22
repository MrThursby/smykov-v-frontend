<template>
  <div class="px-4">
    <a href="#" @click.prevent="courseOpen(course)">
      <div
        class="rounded bg-white overflow-hidden transform sm:hover:-translate-y-3 transition-all duration-300 shadow-md sm:hover:shadow-xl">
        <img :src="course.preview_src" :alt="course.title">
        <p class="text-center py-4">{{ course.title }}</p>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "course-card",
    props: {
      course: {required: true}
    },
    methods: {
      courseOpen(course) {
        this.$router.push('/courses/' + course.id)
      },
    }
  }
</script>

<style scoped>

</style>
