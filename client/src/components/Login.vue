<template>
  <v-layout row align-center justify-center>
    <v-flex xs6>
      <div class="white elevation-2">
        <v-toolbar class="cyan" flat dense dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <br>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            label="Email"
            v-model="email"
            outline
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            :type="'password'"
            outline
          ></v-text-field>
          <v-btn dark flat class="cyan" @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }

</style>
