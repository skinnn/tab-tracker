<template>
  <v-toolbar fixed class="toolbar">
    <v-toolbar-title class="mr-4 home">
      <router-link to="/">
        TabTracker
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <!-- Browse button -->
      <v-btn flat dark>
        <router-link to="/songs">
          Browse
        </router-link>
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <!-- Logged in as -->
        <v-btn v-if="$store.state.isUserLoggedIn" white>
          {{this.$store.state.user.email}}
        </v-btn>
      <!-- Register button -->
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark>
        <router-link to="/register">
          Sign Up
        </router-link>
      </v-btn>
      <!-- Login button -->
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark>
        <router-link to="/login">
          Log In
        </router-link>
      </v-btn>
      <!-- Logout button -->
      <v-btn v-if="$store.state.isUserLoggedIn" @click="logout" flat dark>
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'songs'
        })
      }
    }
  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: cyan;
  }

  .home {
    cursor: pointer;
  }

  .toolbar {
    background: #161616;
  }


</style>
