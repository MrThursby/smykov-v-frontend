<template>
  <div class="bg-light">
    <Header class="fixed right-0 left-0 top-0"/>
    <main class="mt-16">
      <Nuxt/>
    </main>
  </div>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    @apply .transition .duration-300;
  }

  .page-enter,
  .page-leave-to {
    @apply .opacity-0;
  }

</style>
<script>
  import Header from "../components/Header";

  export default {
    components: {Header}
  }
</script>
