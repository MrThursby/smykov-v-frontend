<template>
  <div>
    <Headline :headline="course.title"/>
    <CourseTabs :course="course"></CourseTabs>
  </div>
</template>

<script>
  import Headline from "../../components/Headline";
  import Comments from "../../components/Comments";
  import btn from "../../components/btn";
  import CourseTabs from "../../components/CourseTabs";

  export default {
    validate({params}) {
      return /^\d+$/.test(params.id)
    },
    async fetch({store, params}) {
      await store.dispatch('course/fetch', params.id)
    },
    mounted() {
      if(this.$route.params.id !== this.$store.getters['lessons/course_id']){
        this.$store.dispatch('lessons/unload');
      }
      if(this.$route.params.id !== this.$store.getters['lesson/course_id']){
        this.$store.dispatch('lesson/unload');
      }
      if(this.$route.params.id !== this.$store.getters['homework/course_id']){
        this.$store.dispatch('homework/unload');
      }
      this.$store.dispatch('course/changeActiveTab', 0)

    },
    computed: {
      course() {
        return this.$store.getters['course/course']
      }
    },
    components: {CourseTabs, Comments, Headline, btn}
  }
</script>

<style scoped>

</style>
