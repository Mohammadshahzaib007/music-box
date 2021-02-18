<template>
  <v-card
    style="border-radius: 8px; overflow: hidden"
    color="transparent"
    elevation="0"
    width="29.5625rem"
  >
    <v-sheet
      color="transparent"
      elevation="0"
      class="d-flex"
    >
      <v-avatar
        tile
        size="100"
      >
        <img
          :src="imgLink"
          alt="John"
        >
      </v-avatar>
      <div class="ml-5 d-flex justify-center flex-column">
        <nuxt-link
          to="#"
          class="text-decoration-none mb-0"
          style="font-weight: bold; font-size: 1rem; letter-spacing: 0.01em; color: #fff;"
        >
          {{ title }}
        </nuxt-link>
        <p
          class="mb-0"
          style="font-weight: normal; font-size: 0.875rem; letter-spacing: 0.01em; line-height: 22px; color: #99999f;"
        >
          {{ subTitle }}
        </p>
      </div>
    </v-sheet>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class FeaturedEpisodeCard extends Vue {
    @Prop()
    title!: string

    @Prop()
    subTitle!: string

    @Prop()
    imgLink!: string
}
</script>
