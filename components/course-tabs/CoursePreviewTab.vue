<template>
  <div class="container mx-auto flex flex-row flex-wrap px-4 pt-4 justify-between">
    <div class="w-full lg:w-7/12 lg:mb-4">
      <p>{{course.description}}</p>
    </div>
    <hr class="lg:hidden border-b-4 w-full my-8 mx-12 border-primary-900">
    <div class="w-full lg:w-4/12 mb-4 px-4">
      <div class="flex flex-row flex-wrap justify-center">
        <div class="flex items-center lg:w-full lg:max-w-xs lg:mx-auto w-1/3 lg:px-8">
          <img class="w-full rounded-full" src="https://picsum.photos/400/400/"
               alt="Author">
        </div>
        <div class="lg:w-full w-2/3 flex flex-col px-4 justify-center">
          <div class="text-center pt-4">
            <a href="#" class="text-2xl">Владимир Смыков</a><br>
            <a href="#" class="hover:underline text-gray-700">О себе</a>
          </div>
          <div class="text-center flex flex-row justify-center mt-3">
            <a href="#" class="w-8 mx-2">
              <svg class="w-6 text-vk fill-current" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 511.962 511.962">
                <path
                  d="M507.399 370.471c-1.376-2.304-9.888-20.8-50.848-58.816-42.88-39.808-37.12-33.344 14.528-102.176 31.456-41.92 44.032-67.52 40.096-78.464-3.744-10.432-26.88-7.68-26.88-7.68l-76.928.448s-5.696-.768-9.952 1.76c-4.128 2.496-6.784 8.256-6.784 8.256s-12.192 32.448-28.448 60.032c-34.272 58.208-48 61.28-53.6 57.664-13.024-8.416-9.76-33.856-9.76-51.904 0-56.416 8.544-79.936-16.672-86.016-8.384-2.016-14.528-3.36-35.936-3.584-27.456-.288-50.72.096-63.872 6.528-8.768 4.288-15.52 13.856-11.392 14.4 5.088.672 16.608 3.104 22.72 11.424 7.904 10.72 7.616 34.848 7.616 34.848s4.544 66.4-10.592 74.656c-10.4 5.664-24.64-5.888-55.2-58.72-15.648-27.04-27.488-56.96-27.488-56.96s-2.272-5.568-6.336-8.544c-4.928-3.616-11.84-4.768-11.84-4.768l-73.152.448s-10.976.32-15.008 5.088c-3.584 4.256-.288 13.024-.288 13.024s57.28 133.984 122.112 201.536c59.488 61.92 127.008 57.856 127.008 57.856h30.592s9.248-1.024 13.952-6.112c4.352-4.672 4.192-13.44 4.192-13.44s-.608-41.056 18.464-47.104c18.784-5.952 42.912 39.68 68.48 57.248 19.328 13.28 34.016 10.368 34.016 10.368l68.384-.96s35.776-2.208 18.816-30.336z"/>
              </svg>
            </a>
            <a href="#" class="w-8 mx-2">
              <svg class="w-6 text-fb fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
                   fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2">
                <path
                  d="M255.022 511.998l.229.001h-.079l-.15-.001zm1.806.001h-.079l.229-.001-.15.001zm-2.588-.005l.247.001h-.142l-.105-.001zm3.415.001h-.142l.247-.001-.105.001zm-4.169-.007l.165.001-.132-.001h-.033zm4.995 0l-.132.001.165-.001h-.033zm.826-.009l-.058.001.223-.003-.165.002zm-6.779-.002l.223.003-.058-.001-.165-.002zm7.604-.01l-.135.002.275-.004-.14.002zm-8.404-.002l.275.004-.135-.002-.14-.002zm9.228-.012l-.182.003.254-.005-.072.002zm-9.984-.002l.254.005-.182-.003-.072-.002zm-.937-.019l.225.005-.04-.001-.185-.004zm11.745.004l-.04.001.225-.005-.185.004zm-12.567-.025l.309.008-.125-.003-.184-.005zm13.39.005l-.125.003.309-.008-.184.005zm.823-.022l-.201.006.316-.009-.115.003zm-14.967-.003l.316.009-.201-.006-.115-.003zm-.72-.022l.225.007-.212-.007-.194-.006.181.006zm16.509 0l-.212.007.225-.007.181-.006-.194.006zm.821-.027l-.112.004.345-.012-.233.008zm-18.371-.008l.345.012-.112-.004-.233-.008zm-.749-.028l.362.013-.201-.007-.161-.006zm19.941.006l-.201.007.362-.013-.161.006zm-20.676-.036l.354.015-.277-.011-.077-.004zm21.495.004l-.277.011.354-.015-.077.004zm-22.525-.049l.38.017-.093-.003-.287-.014zm23.345.014l-.093.003.38-.017-.287.014zm-24.084-.048l.394.018-.186-.008-.208-.01zm24.902.01l-.186.008.394-.018-.208.01zm-25.63-.047l.397.02-.279-.013-.118-.007zm26.448.007l-.279.013.397-.02-.118.007zm.818-.043l-.362.019.321-.017.378-.021-.337.019zm-27.925.002l.321.017-.362-.019-.337-.019.378.021zm28.741-.048l-.16.009.406-.023-.246.014zm-29.844-.014l.406.023-.16-.009-.246-.014zm-.722-.043l.405.024-.253-.014-.152-.01zm31.382.01l-.253.014.405-.024-.152.01zm-32.071-.053l.365.023-.34-.021-.342-.022.317.02zm32.887.002l-.34.021.365-.023.317-.02-.342.022zm.814-.053l-.122.008.387-.026-.265.018zm-34.755-.018l.387.026-.122-.008-.265-.018zm-.721-.05l.38.027-.208-.014-.172-.013zm36.29.013l-.208.014.38-.027-.172.013zm-37.009-.064l.349.025-.271-.019-.078-.006zm37.822.006l-.271.019.349-.025-.078.006zm-38.789-.079l.306.023-.074-.005-.232-.018zm39.602.018l-.074.005.306-.023-.232.018zm.811-.063l-.146.011.311-.025-.165.014zm-41.157-.014l.311.025-.146-.011-.165-.014zm-.725-.059l.264.022-.186-.015-.078-.007zm42.694.007l-.186.015.264-.022-.078.007zm-43.492-.074l.079.007-.013-.001-.066-.006zm44.302.006l-.013.001.079-.007-.066.006zm.81-.071l-.072.006.181-.016-.109.01zm-45.965-.01l.181.016-.072-.006-.109-.01zm-.75-.068l.135.013-.084-.008-.051-.005zm47.523.005l-.084.008.135-.013-.051.005zM216 508.887C93.681 489.661 0 383.684 0 256 0 114.71 114.71 0 256 0c141.29 0 256 114.71 256 256 0 127.684-93.681 233.661-216 252.887V330h59.65L367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.887z"/>
              </svg>
            </a>
            <a href="#" class="w-8 mx-2">
              <svg class="w-6 text-instagram fill-current" data-name="Layer 1" viewBox="0 0 128 128"
                   xmlns="http://www.w3.org/2000/svg">
                <path class="cls-1"
                      d="M83 23a22 22 0 0122 22v38a22 22 0 01-22 22H45a22 22 0 01-22-22V45a22 22 0 0122-22h38m0-8H45a30.09 30.09 0 00-30 30v38a30.09 30.09 0 0030 30h38a30.09 30.09 0 0030-30V45a30.09 30.09 0 00-30-30z"/>
                <path class="cls-1"
                      d="M90.14 32a5.73 5.73 0 105.73 5.73A5.73 5.73 0 0090.14 32zM64.27 46.47A17.68 17.68 0 1146.6 64.14a17.7 17.7 0 0117.67-17.67m0-8A25.68 25.68 0 1090 64.14a25.68 25.68 0 00-25.73-25.67z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Fork -->
    <section v-if="course.use_fork === true" class="w-full mb-4 -mx-1 flex flex-wrap">
      <div class="w-full md:w-1/3 p-1">
        <div class="bg-dark text-gray-200 p-8">
          <h2 class="text-2xl text-center">Light</h2>
          <hr class="border-b-4 border-light mx-8 mt-2 mb-4">
          <ul class="list-disc ml-4 mb-3">
            <li>Гугл фишки</li>
            <li>Рекламщик</li>
            <li>Фихтовальщик</li>
            <li>Я Директ</li>
          </ul>
          <hr class="border-b-4 border-light mx-8 my-4">
          <div class="flex flex-row justify-between">
              <span class="w-auto text-2xl">
                3000<small class="text-sm"> руб. </small></span>
            <btn tag="a" href="#" variant="light">Купить</btn>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-1">
        <div class="bg-dark text-gray-200 p-8">
          <h2 class="text-2xl text-center">Primary</h2>
          <hr class="border-b-4 border-blue-600 mx-8 mt-2 mb-4">
          <ul class="list-disc ml-4 mb-3">
            <li>Гугл фишки</li>
            <li>Рекламщик</li>
            <li>Фихтовальщик</li>
            <li>Я Директ</li>
          </ul>
          <hr class="border-b-4 border-blue-600 mx-8 my-4">
          <div class="flex flex-row justify-between">
              <span class="w-auto text-2xl">
                3000<small class="text-sm"> руб. </small></span>
            <btn tag="a" href="#" variant="info">Купить</btn>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 p-1">
        <div class="bg-dark text-gray-200 p-8">
          <h2 class="text-2xl text-center">Gold</h2>
          <hr class="border-b-4 border-yellow-500 mx-8 mt-2 mb-4">
          <ul class="list-disc ml-4 mb-3">
            <li>Гугл фишки</li>
            <li>Рекламщик</li>
            <li>Фихтовальщик</li>
            <li>Я Директ</li>
          </ul>
          <hr class="border-b-4 border-yellow-500 mx-8 my-4">
          <div class="flex flex-row justify-between">
              <span class="w-auto text-2xl">
                3000<small class="text-sm"> руб. </small></span>
            <btn tag="a" href="#" variant="gold">Купить</btn>
          </div>
        </div>
      </div>
    </section>
    <!-- Comments -->
    <Comments />
  </div>
</template>

<script>
  import Comments from "../Comments";
  export default {
    name: "CoursePreview",
    props: {
      course: {required: true}
    },
    components: {Comments},
  }
</script>

<style scoped>

</style>
