<template>
  <v-card
    v-tilt
    width="14.0625rem"
    height="17.1875rem"
    color="transparent"
    elevation="0"
    :class="['d-flex' ,'flex-column', isRounded && 'align-center']"
  >
    <v-sheet
      :class="[isRounded && 'rounded-circle']"
      width="14.0625rem"
      height="14.0625rem"
      style="overflow: hidden; border-radius: 8px"
      elevation="0"
    >
      <v-img
        width="100%"
        height="100%"
        :src="imgSrc"
        style="background-size: cover"
      />
    </v-sheet>
    <p
      class="mt-1 mb-1 text-capitalize"
      style="font-weight: normal; font-size: 1rem; letter-spacing: 0.01em; color: #fff;"
    >
      {{ title }}
    </p>
    <p
      class="mb-0"
      style="font-weight: normal; font-size: 0.875rem; letter-spacing: 0.01em;  color: #99999f; margin-top: -2px"
    >
      <v-icon
        v-if="rating"
        color="#99999F"
        size="14"
      >
        $heart
      </v-icon>
      {{ headingSubTex ? headingSubTex : rating }}
    </p>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class RecentCard extends Vue {
    @Prop()
    imgSrc!:string

    @Prop()
    title!:string

    @Prop()
    rating!: string | number

    @Prop()
    isRounded!: boolean

    @Prop()
    headingSubTex!: string
}
</script>
