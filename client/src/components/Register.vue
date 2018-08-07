<template>
  <v-layout row align-center justify-center>
    <v-flex xs6>
      <div class="white elevation-2">
        <v-toolbar class="cyan" flat dense dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <br>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form">
            <v-text-field
              label="Email"
              v-model="email"
              outline
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              type="password"
              autocomplete="new-password"
              outline
            ></v-text-field>
          </form>
          <v-btn dark flat class="cyan" @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
  .error {
    color: red;
  }

</style>
