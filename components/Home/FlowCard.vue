<template>
  <v-card
    width="29.75rem"
    height="18.75rem"
    class="d-flex"
  >
    <div
      class="card-bg d-flex"
      :style="{ backgroundImage: `url(${bgImageSrc})` }"
    >
      <!-- <div class="half-bg d-flex"> -->

      <div
        style="position: absolute;
               width: 100%; height: 100%;
               background: yellow; clip-path: polygon(65% 0, 100% 0, 100% 100%, 15% 100%);
               z-index: 1; background: rgb(58, 58, 61, .45);;
               backdrop-filter: blur(10px); top: 0; right: -2px"
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
            :src="coverImgSrc"
          />
        </div>
        <div
          style="width: 3.75rem; height: 3.75rem; background-color: rgba(0, 0, 0, .5); cursor: pointer; border-radius: 50%; margin-top: -33px; z-index: 1;"
          class="d-flex align-center justify-center"
        >
          <v-icon
            size="20"
            color="white"
          >
            {{ icon }}
          </v-icon>
        </div>
      </v-sheet>
      <v-sheet
        color="transparent"
        width="50%"
        style="z-index: 2"
        class="d-flex align-center justify-center flex-column"
      >
        <h1 :style="{fontSize: '2rem', lineHeight: '52px', fontWeight: '900', opacity: '.45', color: headingColor, letterSpacing: '-0.03em', marginTop: '6.25rem'}">
          Flow
        </h1>
        <p
          class="px-0 py-0"
          style="max-width: 9.9375rem; text-align: center; font-weight: normal; font-size: 0.875rem; letter-spacing: line-height: 22px; color: #fff; margin-top: -5px"
        >
          {{ subHeading }}
        </p>

        <p
          class="mt-auto mb-4 text-center"
          style="max-width: 11.5rem; font-weight: normal; font-size: 0.75rem; letter-spacing: 0.01em; color: #d5d5d5; opacity: 0.8;"
        >
          {{ bottomText }}
        </p>
      </v-sheet>
      <!-- </div> -->
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class FlowCard extends Vue {
  @Prop()
  bgImageSrc!: string

  @Prop()
  coverImgSrc!: string

  @Prop()
  subHeading!: string

  @Prop()
  bottomText!: string

  @Prop()
  icon!:string

  @Prop()
  headingColor!: string
}
</script>

<style lang="scss" scoped>
.card-bg {
  width: 100%;
  background-image: var(--bg-image);

  // for background blur
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparent;
    backdrop-filter: blur(5px);
  }
}

.half-bg {
  width: 100%;
  background-color: grey;
  clip-path: polygon(65% 0, 100% 0, 100% 100%, 0% 100%);
}
</style>
