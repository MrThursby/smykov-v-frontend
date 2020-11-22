<template>
  <div>
    <h2 class="text-2xl text-center mb-4 text-light">Вход</h2>
    <form @submit.prevent="userLogin">
      <auth-input
        v-model="login.username"
        placeholder="Введите E-Mail">E-Mail</auth-input>
      <auth-input
        v-model="login.password"
        type="password"
        placeholder="********">Пароль</auth-input>
      <btn tag='button' type="submit" class="w-full mt-8 mb-4">Войти</btn>
      <div class="text-center text-light">
        <a href="#" class="mr-1 text-primary-300">Забыли пароль?</a>
        <br>
        <nuxt-link to="/auth/register" class="ml-1 text-primary-300">Зарегистрироваться</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
  import AuthInput from '../../components/auth/auth-input'
  export default {
    name: "login",
    data() {
      return {
        login: {
          grant_type: 'password',
          client_id: 2,
          client_secret: '5cMqAeAP9rFA3QVJyZhhEl7taUydWkEVl8Dr5kSR',
          scope: '*',
          username: null,
          password: null,
        }
      }
    },
    methods: {
      async userLogin() {
        try {
          await this.$auth.loginWith('primary', {data: this.login})
          await this.$router.back()
        } catch (e) {
          console.log(e)
        }
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
