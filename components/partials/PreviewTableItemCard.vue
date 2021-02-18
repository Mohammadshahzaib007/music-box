<template>
  <v-sheet
    color="transparent"
    elevation="0"
    class="d-flex align-center"
    max-width="62.5rem"
  >
    <v-icon
      class="mr-5"
      color="white"
      size="12"
    >
      $podcast
    </v-icon>
    <div>
      <p
        class="mb-0"
        style="font-weight: normal; font-size: 0.9375rem; letter-spacing: 0.01em; color: #fff;"
      >
        Cosmic Queries - Neuroscience
      </p>
      <p
        style=" font-weight: normal; font-size: 0.875rem; letter-spacing: 0.01em;  color: #99999f; line-height: 24px"
      >
        Psychodelic drugs, dreams, mental health awareness, understanding our reality, and more - Neil deGrasse Tyson, neuroscientist Heather Berlin,
        PhD, and first-time comic co-host Jackie Hoffman answer fan-submitted questions about neuroscience. NOTE: StarTalk All-Access subscribers...
      </p>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class PreviewTableItemCard extends Vue {

};
</script>
