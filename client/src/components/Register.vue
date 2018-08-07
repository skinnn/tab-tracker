<template>
  <v-layout row align-center justify-center>
    <v-flex xs6>
      <panel title="Register">
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
        <div class="error" v-html="error" />
        <br>
        <v-btn dark flat class="cyan" @click="register">Register</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'

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
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }

</style>
