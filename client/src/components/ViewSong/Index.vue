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
import Lyrics from './Lyrics'
import Tab from './Tab'
import SongMetadata from './SongMetadata'
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import YouTube from '@/components/ViewSong/YouTube'

export default {
  data() {
    return {
      song: {}
    }
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>

</style>
