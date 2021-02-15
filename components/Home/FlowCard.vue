<template>
  <v-card
    width="29.75rem"
    height="18.75rem"
    class="d-flex"
  >
    <div class="card-bg d-flex">
      <!-- <div class="half-bg d-flex"> -->

      <div
        style="position: absolute;
    width: 100%;
    height: 100%;
    background: yellow;
    clip-path: polygon(65% 0, 100% 0, 100% 100%, 15% 100%);
    z-index: 1;
    background: rgb(58, 58, 61, .45);;
    backdrop-filter: blur(10px);
    top: 0; right: -2px"
      />
      <v-sheet
        width="50%"
        color="transparent"
        style=" z-index: 2"
        class="d-flex align-center justify-center flex-column"
      >
        <div style="width: 11.25rem; height: 11.25rem; border-radius: 8px">
          <v-img
            width="100%"
            height="100%"
            contain
            :src="require('@/assets/images/FlowCover@3x.png')"
          />
        </div>
        <div
          style="width: 3.75rem; height: 3.75rem; background-color: rgba(0, 0, 0, .5); border-radius: 50%; margin-top: -33px; z-index: 1;"
          class="d-flex align-center justify-center"
        >
          <v-icon
            size="20"
            color="white"
          >
            $play
          </v-icon>
        </div>
      </v-sheet>
      <v-sheet
        color="transparent"
        width="50%"
        style="z-index: 2"
        class="d-flex align-center justify-center flex-column"
      >
        <h1 style="font-size: 2rem; line-height: 52px; font-weight: 900; opacity: .45; color: #fff; letter-spacing: -0.03em; margin-top: 6.25rem">
          Flow
        </h1>
        <p
          style="font-weight: normal; font-size: 0.875rem; letter-spacing: 0.01em; line-height: 52px; color: #fff; margin-top: -20px"
        >
          Your Personal Soundtrack
        </p>

        <p
          class="mt-auto mb-4"
          style="font-weight: normal; font-size: 0.75rem; letter-spacing: 0.01em; color: #d5d5d5; opacity: 0.8;"
        >
          Based on your listening history
        </p>
      </v-sheet>
      <!-- </div> -->
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class FlowCard extends Vue {

};
</script>

<style lang="scss" scoped>
.card-bg {
    width: 100%;
    background-image: url(../../assets/images/flowImg1.png);
&::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparent;

    backdrop-filter: blur(8px);
}
}

.half-bg {
    width: 100%;
    background-color: grey;
    clip-path: polygon(65% 0, 100% 0, 100% 100%, 0% 100%);

}
</style>
