<template>
    <panel title="YouTube Video">
      <youtube
        :video-id="youtubeId"
        :player-width="550"
        :player-height="300">
      </youtube>
    </panel>
</template>

<script>
import Panel from '@/components/Panel'
import VueYouTubeEmbed from 'vue-youtube-embed'

export default {
  props: [
    'youtubeId'
  ],
  components: {
    Panel,
    VueYouTubeEmbed
  }
}
</script>

<style scoped>

</style>
