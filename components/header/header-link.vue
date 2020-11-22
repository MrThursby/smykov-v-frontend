<template>
  <nuxt-link :to="href"
             class="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
    <slot />
  </nuxt-link>
</template>

<script>
  export default {
    name: "header-link",
    props: {
      href: {type: String, required: true}
    }
  }
</script>

<style scoped>

</style>
