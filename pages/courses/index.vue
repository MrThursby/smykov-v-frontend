<template>
  <div>
    <Headline headline="Курсы"/>
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
        <div v-if="courses !== null" class="flex flex-row flex-wrap mt-6" key="courses-loaded">
          <!--<div v-for="(course, i) of courses" class="px-4 sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6" :key="i">
            <a href="#" @click.prevent="courseOpen(course)">
              <div class="rounded bg-white overflow-hidden transform sm:hover:-translate-y-3 transition-all duration-300 shadow-md sm:hover:shadow-xl">
                <img :src="course.preview_src" :alt="course.title">
                <p class="text-center py-4">{{ course.title }}</p>
              </div>
            </a>
          </div>-->
          <CourseCard v-for="(course, index) of courses"
                      class="sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6"
                      :course="course"
                      :key="index" />
        </div>
        <Loading v-if="courses === null" key="courses-loading" />
      </transition>
      <div
        class="w-full flex flex-row justify-between my-4 border-t-4 px-4 border-secondary-200">
        <button @click="paginatorLinkSelect(prev.url)"
                class="-mt-1 py-1 px-2 border-t-4 w-auto text-base font-semibold font-mono text-secondary focus:outline-none"
                :class="{'text-gray-400': prev.url === null, 'hover:border-primary-300': prev.url !== null}"
        >
          ← Назад
        </button>
        <div class="w-4/6 hidden md:block">
          <ul class="flex flex-row justify-center">
            <li v-for="(link, index) of links" :key="'paginator-link-'+index">
              <button
                class="py-1 px-2 -mt-1 cursor-pointer mx-2 border-t-4 hover:border-primary-300 focus:outline-none"
                :class="{'border-primary-600 hover:border-primary-600 text-primary-600': link.active === true}"
                @click="paginatorLinkSelect(link.url)">
                {{ link.label }}
              </button>
            </li>
          </ul>
        </div>
        <button @click="paginatorLinkSelect(next.url)"
                class="-mt-1 py-1 px-2 border-t-4 w-auto text-base font-semibold font-mono text-secondary focus:outline-none"
                :class="{'text-gray-400': next.url === null, 'hover:border-primary-300': next.url !== null}"
        >
          Вперёд →
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Headline from "../../components/Headline";
  import Loading from "../../components/Loading";
  import CourseCard from "../../components/CourseCard";

  export default {
    name: "index",
    async asyncData({$axios}) {
      let paginator = await $axios.$get('/api/school/courses')
      paginator = paginator.data
      let courses = paginator.data
      let next = paginator.links.pop()
      paginator.links.reverse()
      let prev = paginator.links.pop()
      paginator.links.reverse()
      let links = paginator.links
      return {courses, links, next, prev}
    },
    data() {
      return {
        current_page: 1,
        count_courses: 0,
        limit: 12
      }
    },
    components: {CourseCard, Loading, Headline},
    methods: {
      async paginatorLinkSelect(link){
        if(link !== '...' && link !== null){
          this.courses = null
          let courses = await this.$axios.$get(link)
          let paginator = courses.data
          this.courses = courses.data.data
          this.next = paginator.links.pop()
          paginator.links.reverse()
          this.prev = paginator.links.pop()
          paginator.links.reverse()
          this.links = paginator.links
          //this.$forceUpdate()
        }
      }
    }
  }
</script>

<style scoped>

</style>
