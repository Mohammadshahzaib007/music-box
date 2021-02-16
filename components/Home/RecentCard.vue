<template>
  <v-card
    width="14.0625rem"
    height="17.1875rem"
    color="transparent"
    elevation="0"
    class="d-flex align-center justify-center flex-column"
  >
    <v-sheet
      class="rounded-circle"
      width="14.0625rem"
      height="14.0625rem"
      style="overflow: hidden"
    >
      <v-img
        width="100%"
        height="100%"

        :src="require('@/assets/images/queen.png')"
      />
    </v-sheet>
    <p
      class="mt-1 mb-1"
      style="font-weight: normal; font-size: 1rem; letter-spacing: 0.01em; color: #fff;"
    >
      Queen
    </p>
    <p
      class="mb-0"
      style="font-weight: normal; font-size: 0.875rem; letter-spacing: 0.01em;  color: #99999f; margin-top: -2px"
    >
      <v-icon
        color="#99999F"
        size="14"
      >
        $heart
      </v-icon> 287
    </p>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class RecentCard extends Vue {
    @Prop()
    imgSrc:string

    @Prop()
    title:string

    @Prop()
    rating: string | number

    @Prop()
    isRounded: boolean
}
</script>

<style lang="scss" scoped>

</style>
