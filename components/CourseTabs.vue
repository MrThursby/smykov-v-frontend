<template>
  <div class="">
    <div class="bg-dark -mt-1 border-b-4 border-primary-800">
      <ul class="list-none flex container mx-auto text-gray-200 px-4 -mb-1">
        <li :class="activeTab === 0 || $auth.loggedIn === false ? 'border-4 border-primary-800 bg-light text-gray-800' : 'border-4 border-dark cursor-pointer hover:bg-gray-800 hover:border-gray-800'"
            class="w-1/4 border-b-0 text-center py-2 md:text-left md:px-4 transition duration-500 overflow-hidden whitespace-no-wrap"
            @click="$store.dispatch('course/changeActiveTab', 0)"
        >
          <slot name="course-tab-btn">
            <span class="block w-full truncate">Курс</span>
          </slot>
        </li>
        <li v-if="$auth.loggedIn"
            :class="activeTab === 1 ? 'border-4 border-primary-800 bg-light text-gray-800' : 'border-4 border-dark cursor-pointer hover:bg-gray-800 hover:border-gray-800'"
            class="w-1/4 border-b-0 text-center py-2 md:text-left md:px-4 transition duration-500 overflow-hidden whitespace-no-wrap"
            @click="$store.dispatch('course/changeActiveTab', 1)"
        >
          <slot name="lessons-tab-btn">
            <span class="block w-full truncate">Уроки</span>
          </slot>
        </li>
        <li v-if="$auth.loggedIn && activeLesson !== null"
            :class="activeTab === 2 ? 'border-4 border-primary-800 bg-light text-gray-800' : 'border-4 border-dark cursor-pointer hover:bg-gray-800 hover:border-gray-800'"
            class="w-1/4 border-b-0 text-center py-2 md:text-left md:px-4 transition duration-500 overflow-hidden whitespace-no-wrap"
            @click="$store.dispatch('course/changeActiveTab', 2)"
        >
          <slot name="current-lesson-tab-btn">
            <span v-if="lesson.length === 0" class="block w-full truncate">Урок</span>
            <span v-else class="block w-full truncate">{{ lesson.title }}</span>
          </slot>
        </li>
        <li v-if="$auth.loggedIn && activeLesson !== null"
            :class="activeTab === 3 ? 'border-4 border-primary-800 bg-light text-gray-800' : 'border-4 border-dark cursor-pointer hover:bg-gray-800 hover:border-gray-800'"
            class="w-1/4 border-b-0 text-center py-2 md:text-left md:px-4 transition duration-500 overflow-hidden whitespace-no-wrap"
            @click="$store.dispatch('course/changeActiveTab', 3)"
        >
          <slot name="homework-tab-btn">
            <span class="block w-full hidden lg:inline-block truncate">Домашнее задание</span>
            <span class="block w-full inline-block lg:hidden truncate">Д/з</span>
          </slot>
        </li>
      </ul>
    </div>
    <transition mode="out-in"
                duration="200"
                enter-active-class="transition duration-200"
                enter-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition duration-200"
                leave-class="opacity-100"
                leave-to-class="opacity-0"
    >
      <CoursePreviewTab key="course-tab-1"
                        v-if="activeTab === 0 || $auth.loggedIn === false"
                        :course="course" />
      <CourseLessonsTab key="course-tab-2"
                        v-if="$auth.loggedIn && activeTab === 1" :course_id="course.id" />
      <CourseCurrentLessonTab key="course-tab-3"
                              v-if="$auth.loggedIn && activeTab === 2" />
      <CourseHomeworkTab key="course-tab-4"
                         v-if="$auth.loggedIn && activeTab === 3"/>
    </transition>
  </div>
</template>

<script>
  import CoursePreviewTab from "./course-tabs/CoursePreviewTab";
  import CourseLessonsTab from "./course-tabs/CourseLessonsTab";
  import CourseCurrentLessonTab from "./course-tabs/CourseCurrentLessonTab";
  import CourseHomeworkTab from "./course-tabs/CourseHomeworkTab";
  export default {
    name: "CourseTabs",
    props: {
      course: {required: true}
    },
    computed: {
      activeTab() {
        return this.$store.getters['course/activeTab']
      },
      activeLesson() {
        return this.$store.getters['lesson/id']
      },
      lesson() {
        return this.$store.getters['lesson/lesson']
      },
    },
    mounted() {
      this.$store.dispatch('lesson/unload')
    },
    components: {CourseHomeworkTab, CourseCurrentLessonTab, CourseLessonsTab, CoursePreviewTab},
  }
</script>

<style scoped>

</style>
