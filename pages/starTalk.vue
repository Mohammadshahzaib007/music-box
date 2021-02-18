<template>
  <v-container>
    <CategoryPreview />
    <v-row
      style="width: 115rem; position: fixed; bottom: -18px; left: 50%; transform: translate(-50%, -50%)"
    >
      <v-col class="px-0 py-0">
        <AudioPlayer />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class StartTalk extends Vue {

};
</script>
