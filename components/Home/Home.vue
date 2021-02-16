<template>
  <section style="margin-top: 4.9375rem">
    <v-container style="max-width: 92.5rem">
      <v-row>
        <v-col
          cols="12"
          class="px-0 py-0"
        >
          <h1
            class="mb-1"
            style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
          >
            Flow
          </h1>
        </v-col>
        <v-col
          cols="12"
          class="px-0 py-0 d-flex justify-space-between"
        >
          <FlowCard
            v-for="(item, i) in flowSectionData"
            :key="i"
            :bg-image-src="item.bgImage"
            :cover-img-src="item.coverImgSrc"
            :sub-heading="item.subHeading"
            :bottom-text="item.bottomText"
            :icon="item.icon"
            :heading-color="item.headingColor"
          />
        </v-col>
      </v-row>

      <v-row style="margin-top: 5.625rem">
        <v-col
          cols="12"
          class="px-0 py-0"
        >
          <h1
            class="mb-7"
            style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
          >
            Recently played
          </h1>
        </v-col>
        <v-col
          cols="12"
          class="px-0 py-0 d-flex justify-space-between"
        >
          <RecentCard />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Home extends Vue {
  flowSectionData: Array<{
    bgImage:string,
    coverImgSrc: string,
    subHeading: string,
    bottomText: string,
    icon:string,
    headingColor:string
  }> = [
    {
      bgImage: require('@/assets/images/flowImg1.png'),
      coverImgSrc: require('@/assets/images/FlowCover@3x.png'),
      subHeading: 'Your Personal Soundtrack',
      bottomText: 'Based on your listening history',
      icon: '$play',
      headingColor: '#fff'
    },
    {
      bgImage: require('@/assets/images/flowBg2@3x.png'),
      coverImgSrc: require('@/assets/images/flowCover2@3x.png'),
      subHeading: 'Create your own perfect soundtrack',
      bottomText: 'Select multiple genres and moods to create the perfect soundtrack',
      icon: '$plus',
      headingColor: '#7190F2'
    },
    {
      bgImage: require('@/assets/images/flowBg3@3x.png'),
      coverImgSrc: require('@/assets/images/flowCover3@3x.png'),
      subHeading: 'Create your own concert with your favorite singers',
      bottomText: 'Select multiple artists to create the perfect soundtrack',
      icon: '$plus',
      headingColor: '#6BEEAE'
    }
  ]
};
</script>
