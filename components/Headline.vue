<template>
  <div class="flex-row bg-dark text-gray-200 border-b-4 border-primary-800">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl py-3 md:text-6xl">{{headline}}</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Headline",
    props: {
      headline: {type: String, required: true}
    }
  }
</script>

<style scoped>

</style>
