<template>
  <div>
    <panel class="song-metadata" title="Song Metadata">
        <v-layout>
          <!-- Left side -->
          <v-flex xs6>
            <div class="song-artist">
              {{ song.artist }}
            </div>
            <div class="song-title">
              {{ song.title }}
            </div>
            <div class="song-genre">
              {{ song.genre }}
            </div>

            <v-btn
              dark
              class="cyan"
              @click="navigateTo({
                name: 'song-edit',
                params: {
                  songId: song.id
                }
              })">
              View
            </v-btn>
          </v-flex>

          <!-- Right side -->
          <v-flex xs6>
            <img class="album-image" :src="song.albumImageUrl" alt="Image" />
            <br>
            <span class="album-name">
              {{ song.album }}
            </span>
          </v-flex>
        </v-layout>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
  .song-metadata {
    height: 393px;
  }

  textarea {
    width: 100%;
    font-family: monospace;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
    padding: 20px;
  }
</style>
