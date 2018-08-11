<template>
  <div>
    <v-layout>
      <v-flex xs5>
        <song-metadata :song="song" />
      </v-flex>

      <v-flex xs7 class="ml-3">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs5 class="mt-3">
        <lyrics :song="song" />
      </v-flex>

      <v-flex xs7 class="ml-3 mt-3">
        <tab :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongMetadata from './SongMetadata'
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'
import YouTube from './YouTube'

export default {
  data() {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted() {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId,
        userId: this.user.id
      })
    }
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab,
    SongHistoryService
  }
}
</script>

<style scoped>

</style>
