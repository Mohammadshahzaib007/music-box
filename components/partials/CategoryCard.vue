<template>
  <v-card
    width="14.0625rem"
    height="8rem"
    style="border-radius: 8px"
    color="transparent"
    elevation="0"
  >
    <div
      class="d-flex align-end justify-end"
      style="width: 100%; height: 100%; background: rgba(197, 92, 249, 0.20)"
    >
      <h1
        class="text-uppercase mb-5 mr-5"
        style="font-size: 20px; color: white; font-weight: 900;"
      >
        {{ title }}
      </h1>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class RecentCard extends Vue {
@Prop()
title: string
}
</script>
