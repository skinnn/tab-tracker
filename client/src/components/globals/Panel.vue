<template>
  <div class="white elevation-2">
    <v-toolbar class="panelToolbar" flat dense>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <slot name="action" />
    </v-toolbar>

    <br>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

.panelToolbar {
  color: white;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(1,54,54,1) 35%, rgba(0,92,92,1) 65%, rgba(0,222,222,1) 100%);
}

</style>
