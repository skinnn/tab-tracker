<template>
  <div>
    <panel class="song-metadata" :title="this.song.artist + ' - ' + this.song.title">
        <v-layout>
          <!-- Left side -->
          <v-flex xs6>
            <div class="song-artist">
              Artist: <span class="songSecondaryColor">{{ song.artist }}</span>
            </div>
            <div class="song-title">
              Title: <span class="songSecondaryColor">{{ song.title }}</span>
            </div>
            <div class="song-genre">
              Genre: <span class="songSecondaryColor">{{ song.genre }}</span>
            </div>

            <v-btn
              dark
              class="cyan"
              :to="{
                name: 'song-edit',
                params() {
                  return {
                    songId: song.id
                  }
                }
              }">
              Edit
            </v-btn>

            <!-- Bookmark buttons -->
            <v-btn
              v-if="isUserLoggedIn && !bookmark"
              dark
              class="cyan"
              @click="setAsBookmark">
              Set As Bookmark
            </v-btn>
            <v-btn
              v-if="isUserLoggedIn && bookmark"
              dark
              class="cyan"
              @click="unsetAsBookmark">
              Unset As Bookmark
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
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: [
    'song'
  ],
  data() {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song() {
      if (!this.isUserLoggedIn) {
        return console.log('User is not logged in!')
      } else {
        try {
          const bookmarks = (await BookmarksService.index({
            songId: this.song.id,
            userId: this.user.id
          })).data
          if (bookmarks.length) {
            this.bookmark = bookmarks[0]
          }
        } catch (err) {
          console.log(err)
        }
      }
    }
  },
  methods: {
    async setAsBookmark() {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id,
          userId: this.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unsetAsBookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

  .song-metadata {
    height: 393px;
    font-size: 19px;
    color: grey;
  }

  .songSecondaryColor {
    color: black;
    font-size: 21px;
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

  .album-image {
    width: 100%;
    max-height: 100%;
  }

</style>
