<template>
  <div>
    <h2 class="text-2xl text-center mb-4 text-light">Регистрация</h2>
    <form>
      <auth-input
        v-model="email"
        placeholder="Введите E-Mail">E-Mail</auth-input>
      <auth-input
        v-model="password"
        type="password"
        placeholder="********">Пароль</auth-input>
      <btn class="w-full mt-8 mb-4">Зарегистрироваться</btn>
      <div class="text-center text-light">
        Есть аккаунт?
        <nuxt-link to="/auth/login" class="text-primary-300">Войти</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
  import AuthInput from '../../components/auth/auth-input'
  export default {
    name: "register",
    data() {
      return {
        email: null,
        password: null,
      }
    },
    layout: "auth",
    components: {
      AuthInput
    }
  }
</script>

<style scoped>

</style>
