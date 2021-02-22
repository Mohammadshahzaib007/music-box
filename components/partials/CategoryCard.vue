<template>
  <v-card
    v-tilt
    width="14.0625rem"
    height="8rem"
    style="border-radius: 8px; overflow: hidden"
    color="transparent"
    elevation="0"
  >
    <div
      :class="['d-flex', centerText ? 'align-center' : 'align-end', centerText ? 'justify-center' :'justify-end']"
      :style="{width: '100%', height: '100%', background: bgColor}"
    >
      <h1
        :class="['text-uppercase', 'text-center', !centerText && 'mb-5', !centerText && 'mr-5']"
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
title!: string

@Prop()
centerText!: boolean

@Prop()
bgColor!: string
}
</script>
