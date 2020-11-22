<template>
  <div class="pt-4">
    <div class="text-2xl">Комментарии:</div>
    <Comment v-for="i of 20" :key="i" :i="i" />
  </div>
</template>

<script>
  import Comment from "./comments/Comment";
  export default {
    name: "Comments",
    components: {Comment}
  }
</script>

<style scoped>

</style>
