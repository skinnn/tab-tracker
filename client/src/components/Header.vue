<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title class="mr-4 home">
      <router-link class="home-link" to="/">
        TabTracker
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <!-- <v-btn flat dark>
        Browse
      </v-btn> -->
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark>
        <router-link to="/register">
          Sign Up
        </router-link>
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark>
        <router-link to="/login">
          Log In
        </router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  a {
    text-decoration: none;
    color: white;
  }

  .home {
    cursor: pointer;
  }

  .home-link:hover {
    color: grey;
  }


</style>
