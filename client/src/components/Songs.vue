<template>
  <v-layout row align-center justify-center>
    <v-flex xs6>
      <panel title="Songs">
        <v-btn
        slot="action"
        @click="navigateTo({ name: 'songs-create' })"
        class="green accent-3"
        fab light absolute right middle>
          <v-icon>add</v-icon>
        </v-btn>
        <div class="song" v-for="song in songs" :key="song.id">

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

              <v-btn dark class="cyan"
                @click="navigateTo({
                  name: 'song',
                  params: {
                    songId: song.id
                  }
                })">
                View more
              </v-btn>
            </v-flex>
            <!-- Right side -->
            <v-flex xs6>
              <img class="album-image" :src="song.albumImageUrl" alt="Image" />
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async mounted() {
    // Do a request to the backend for all the songs
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }

  .song-title {
    font-size: 30px;
  }

  .song-artist {
    font-size: 24px;
  }

  .song-genre {
    font-size: 18px;
  }

  .album-image {
    height: 100%;
    width: 100%;
    max-width: 290px;
    max-height: 160px;
  }
</style>
