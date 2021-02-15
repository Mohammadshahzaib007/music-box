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
          class="px-0 py-0"
        >
          <FlowCard />
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
