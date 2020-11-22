<template>
  <NuxtLink :to="href" :is="tag"
       class="px-4 py-2 text-center border focus:outline-none inline-block rounded transition ease-in-out duration-200"
       :class="variants[variant]">
    <slot></slot>
  </NuxtLink>
</template>

<script>
  export default {
    name: "btn",
    props: {
      tag: {type: String, default: "nuxt-link"},
      href: {type: String, default: ""},
      variant: {type: String, default: "primary"}
    },
    data() {
      return {
        variants: {
          primary:
            'focus:shadow-outline-primary ' +
            'bg-primary-600 border-primary-600 text-light hover:bg-primary-500 ' +
            'active:bg-primary-700 ',
          secondary:
            'focus:shadow-outline-secondary ' +
            'bg-gray-700 border-gray-700 text-light hover:bg-gray-600 ' +
            'active:bg-gray-800 ',
          dark:
            'focus:shadow-outline-dark ' +
            'bg-dark border-dark text-light hover:bg-gray-700 ' +
            'active:bg-black ',
          light:
            'focus:shadow-outline-light ' +
            'bg-light border-gray-200 text-dark hover:bg-gray-200 ' +
            'active:bg-gray-300 ',
          'outline-light':
            'bg-light bg-opacity-75 border-light text-dark hover:bg-light hover:text-dark ' +
            'focus:shadow-outline-light focus:text-dark ' +
            'active:bg-gray-300 ',
          success:
            'focus:shadow-outline-success ' +
            'bg-success-600 border-success-600 text-light hover:bg-success-500 ' +
            'active:bg-success-700 ',
          danger:
            'focus:shadow-outline-danger ' +
            'bg-danger-600 border-danger-600 text-light hover:bg-danger-500 ' +
            'active:bg-danger-700 ',
          info:
            'focus:shadow-outline-info ' +
            'bg-info-600 border-info-600 text-light hover:bg-info-500 ' +
            'active:bg-info-700 ',
          warning:
            'focus:shadow-outline-warning ' +
            'bg-warning-600 border-warning-600 text-light hover:bg-warning-500 ' +
            'active:bg-warning-700 ',
          gold:
            'focus:shadow-outline-gold ' +
            'bg-gold-500 border-gold-500 text-dark hover:bg-gold-400 ' +
            'active:bg-gold-600 ',
        }
      }
    }
  }
</script>

<style>
.btn {
  padding: 5px 15px;
}
</style>
