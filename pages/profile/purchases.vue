<template>
  <div>
    <Headline headline="Купленные курсы"/>
    <div class="container mx-auto">
      <transition
        duration="400"
        mode="out-in"

        enter-active-class="transition duration-200"
        enter-class="opacity-0"
        enter-to-class="opacity-1"

        leave-active-class="transition duration-200"
        leave-class="opacity-1"
        leave-to-class="opacity-0"
      >
        <div v-if="purchases !== null" class="flex flex-row flex-wrap mt-6" key="courses-loaded">
          <!--<div v-for="(course, i) of courses" class="px-4 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6" :key="i">
            <a href="#" @click.prevent="courseOpen(course)">
              <div class="rounded bg-white overflow-hidden transform sm:hover:-translate-y-3 transition-all duration-300 shadow-md sm:hover:shadow-xl">
                <img :src="course.preview_src" :alt="course.title">
                <p class="text-center py-4">{{ course.title }}</p>
              </div>
            </a>
          </div>-->
          <CourseCard v-for="(purchase, index) of purchases"
                      class="sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6"
                      :course="purchase.course"
                      :key="index"/>
        </div>
        <Loading v-if="purchases === null" key="courses-loading"/>
      </transition>
    </div>
  </div>
</template>

<script>
  import Headline from "../../components/Headline";
  import Loading from "../../components/Loading";
  import CourseCard from "../../components/CourseCard";

  export default {
    name: "purchases",
    async asyncData({$axios}) {
      let purchases = await $axios.$get('/api/profile/purchases')
      purchases = purchases.data
      return {purchases}
    },
    components: {CourseCard, Loading, Headline}
  }
</script>

<style scoped>

</style>
