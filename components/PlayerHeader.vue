<template>
  <v-sheet
    color="transparent"
    elevation="0"
    class="d-flex align-center justify-space-between"
  >
    <div
      style="color: white"
      class="d-flex"
    >
      <div style="width: 14.0625rem; height: 14.0625rem;">
        <v-img
          height="100%"
          width="100%"
          contain
          :src="require('@/assets/images/starTalk.png')"
        />
      </div>

      <div class="d-flex flex-column ml-10 justify-end ">
        <p
          class="mb-0"
          style="font-size: 1.125rem; letter-spacing: 0.01em;  color: #fff;"
        >
          Podcasts
        </p>

        <h1
          style="font-weight: 900; font-size: 3.125rem; letter-spacing: 0.01em; color: #fff;"
        >
          StarTalk Radio
        </h1>

        <p
          style="font-weight: normal; font-size: 0.875rem; letter-spacing: 0.01em; color: #99999f;"
        >
          Neil deGrasse Tyson
        </p>
        <div class="d-flex mt-7">
          <nuxt-link
            to="#"
            class="text-uppercase mr-10 mb-2"
            style="font-weight: bold; font-size: 1rem; letter-spacing: 0.01em; text-decoration: none;  color: #fff;"
          >
            episodes
          </nuxt-link>
          <nuxt-link
            to="#"
            class="text-uppercase mb-2"
            style="font-weight: bold; font-size: 1rem; letter-spacing: 0.01em; text-decoration: none;  color: #fff;"
          >
            ABOUT
          </nuxt-link>
        </div>
      </div>
    </div>

    <div
      class="d-flex flex-column align-self-end"
    >
      <div class="mb-16">
        <v-btn
          style="background:  linear-gradient(90deg,#9b2def 0%, #2d9bef 60.83%, #35edfb 100%); color: white; width: 10.5rem; height: 2.5rem;"

          class="font-weight-bold text-uppercase mr-5"
        >
          PLAY
        </v-btn>

        <v-btn
          fab
          small
          color="transparent"
        >
          <div
            class="d-flex align-center justify-center mr-5"
            style="width: 2.5rem; height: 2.5rem; border-radius: 20px; background: transparent; border: 1.5px solid #fff;"
          >
            <v-icon color="#2DCEEF">
              $addToFavourit
            </v-icon>
          </div>
        </v-btn>

        <v-btn
          fab
          small
          color="transparent"
        >
          <div
            class="d-flex align-center justify-center"
            style="width: 2.5rem; height: 2.5rem; border-radius: 20px; background: transparent; border: 1.5px solid #fff;"
          >
            <v-icon color="#FFFFFF">
              $more
            </v-icon>
          </div>
        </v-btn>
      </div>

      <p
        class="mb-0 text-right"
        style="font-weight: normal; font-size: 1rem; letter-spacing: 0.01em; line-height: 32px; color: #99999f;"
      >
        87,444 FOLOWERS
      </p>
    </div>
  </v-sheet>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Playerheader extends Vue {

};
</script>
