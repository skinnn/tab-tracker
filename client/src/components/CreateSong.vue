<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <panel title="Song Metadata">
          <v-text-field
            required
            :rules="[required]"
            label="Artist"
            v-model="song.artist"
            outline
          ></v-text-field>

          <v-text-field
            required
            :rules="[required]"
            label="Title"
            v-model="song.title"
            outline
          ></v-text-field>

          <v-text-field
            required
            :rules="[required]"
            label="Genre"
            v-model="song.genre"
            outline
          ></v-text-field>

          <v-text-field
            required
            :rules="[required]"
            label="Album"
            v-model="song.album"
            outline
          ></v-text-field>

          <v-text-field
            required
            :rules="[required]"
            label="Album Image URL"
            v-model="song.albumImageUrl"
            outline
          ></v-text-field>

          <v-text-field
            required
            :rules="[required]"
            label="YouTube ID"
            v-model="song.youtubeId"
            outline
          ></v-text-field>
        </panel>
      </v-flex>
      <v-flex xs8>
        <panel title="Song Structure" class="ml-3">
          <v-text-field
            required
            :rules="[required]"
            label="Tab"
            v-model="song.tab"
            multi-line
          ></v-text-field>

          <v-text-field
            required
            :rules="[required]"
            label="Lyrics"
            v-model="song.lyrics"
            multi-line
          ></v-text-field>

          <br>
          <div class="danger-alert" v-if="error">
            {{ error }}
          </div>

          <v-btn dark block class="cyan" @click="create">Create Song</v-btn>
        </panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required field.'
    }
  },
  components: {
    Panel
  },
  methods: {
    async create() {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
