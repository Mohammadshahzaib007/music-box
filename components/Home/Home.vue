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
            :bg-image-src="require('@/assets/images/flowImg1.png')"
            :cover-img-src="require('@/assets/images/FlowCover@3x.png')"
            sub-heading="Your Personal Soundtrack"
            bottom-text="Based on your listening history"
            icon="$play"
            heading-color="#fff"
          />

          <FlowCard
            :bg-image-src="require('@/assets/images/flowBg2@3x.png')"
            :cover-img-src="require('@/assets/images/flowCover2@3x.png')"
            sub-heading="Create your own perfect soundtrack"
            bottom-text="Select multiple genres and moods to create the perfect soundtrack"
            icon="$plus"
            heading-color="#7190F2"
          />

          <FlowCard
            :bg-image-src="require('@/assets/images/flowBg3@3x.png')"
            :cover-img-src="require('@/assets/images/flowCover3@3x.png')"
            sub-heading="Create your own concert with your favorite singers"
            bottom-text="Select multiple artists to create the perfect soundtrack"
            icon="$plus"
            heading-color="#6BEEAE"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Home extends Vue {

};
</script>
