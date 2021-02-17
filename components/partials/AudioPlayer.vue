<template>
  <v-sheet
    width="100%"
    height="5.375rem"
    class="d-flex align-center justify-space-between"
    style="border-radius: 8px"
    color="#3A3A3D"
  >
    <!-- SONGS DETAILS -->
    <div class="d-flex align-center justify-center mx-3 my-3">
      <div>
        <v-avatar
          tile
          size="58"
        >
          <img
            :src="require('@/assets/images/audioPlayerImg.jpg')"
            alt="John"
          >
        </v-avatar>
      </div>
      <div class="ml-3 px-0 py-0">
        <p
          class="mb-0"
          style="font-weight: normal; font-size: 1rem; letter-spacing: 0.01em; color: #fff;"
        >
          Rabel Rabel
        </p>
        <p
          class="mb-0"
          style="font-weight: normal; font-size: 0.875rem; letter-spacing: 0.01em; color: #99999f; margin-top: -5px"
        >
          David Bowie
        </p>
      </div>
      <div class="ml-5">
        <v-btn
          elevation="0"
          fab
          small
          color="transparent"
          class="mr-7"
        >
          <v-icon
            color="white"
          >
            $addToFavourit
          </v-icon>
        </v-btn>
        <v-btn
          elevation="0"
          fab
          small
          color="transparent"
        >
          <v-icon>$rightTick</v-icon>
        </v-btn>
      </div>
    </div>

    <!-- MUSIC CONTROLLS -->
    <div class="d-flex align-center flex-column">
      <div
        style="width: 18.375rem"
        class="d-flex align-center justify-space-between"
      >
        <v-btn
          v-for="(icon,i) in musicControllerIcons"
          :key="i"
          elevation="0"
          fab
          small
          color="transparent"
        >
          <v-icon
            color="white"
            size="18"
          >
            ${{ icon }}
          </v-icon>
        </v-btn>
      </div>
      <div class="d-flex align-center">
        <p
          class="mb-0 mr-3"
          style="font-weight: normal; font-size: 14px; letter-spacing: 0.01em; line-height: 32px;color: #fff;"
        >
          2:05
        </p>
        <div style="width: 35rem; height: 3px; background: #99999F">
          <div style="width: 18.75rem; height: 3px; background:  linear-gradient(#9b2def 0%, #2d9bef 100%)" />
        </div>
        <p
          class="mb-0 ml-3"
          style="font-weight: normal; font-size: 14px; letter-spacing: 0.01em; line-height: 32px;color: #99999f;"
        >
          4:29
        </p>
      </div>
    </div>

    <!-- VOLUME CONTROLLS -->
    <div
      class="d-flex"
      style="margin-right: 5rem"
    >
      <v-btn
        elevation="0"
        fab
        small
        color="transparent"
        class="mr-7"
      >
        <v-icon

          color="white"
        >
          $queue
        </v-icon>
      </v-btn>
      <div class="d-flex align-center">
        <v-btn
          elevation="0"
          fab
          small
          color="transparent"
        >
          <v-icon
            class="mr-2"
            color="white"
          >
            $volume
          </v-icon>
        </v-btn>
        <div

          style="width: 80px; height: 3px; background: #99999F;"
        >
          <div style="width: 48px; height: 3px; background: #fff" />
        </div>
      </div>
    </div>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class AudioPlayer extends Vue {
    musicControllerIcons: Array<string> = ['shuffle', 'prev', 'pause', 'next', 'repeat']

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

<style>

</style>
