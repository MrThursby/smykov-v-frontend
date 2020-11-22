<template>
  <div class="mb-3">
    <label class="block text-light mb-2" for="login-input">
      <slot/>
    </label>
    <input class="bg-transparent px-4 py-3 text-light rounded w-full bg-light bg-opacity-15 placeholder-gray-200
                  transition-all ease-in-out duration-500
                  focus:bg-opacity-25"
           :value="value"
           :type="type"
           @input="updateValue($event.target.value)"
           id="login-input"
           :placeholder="placeholder">
    <span class="text-xs"
          :class="{'text-gray-500': validationStatus === 'neutral', 'text-danger-600': validationStatus === 'danger', 'text-success-600': validationStatus === 'success'}"
          v-if="validationMessage != null">{{ validationMessage }}</span>
  </div>
</template>

<script>
  export default {
    name: "auth-input",
    model: {
      prop: "value",
      event: "input"
    },
    props: {
      value: {type: String, default: ""},
      type: {type: String, default: "text"},
      placeholder: {type: String, default: ""},
      validationMessage: {type: String, default: null},
      validationStatus: {type: String, default: "neutral"} // can be: "success" or "danger" or "neutral"
    },
    methods: {
      updateValue(value) {
        this.$emit("input", value);
      }
    }
  }
</script>

<style scoped>

</style>
