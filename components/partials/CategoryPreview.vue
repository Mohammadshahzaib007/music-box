<template>
  <div>
    <PlayerHeader class="mt-15" />
    <v-row>
      <v-col
        cols="12"
        class="d-flex align-center justify-space-between"
      >
        <div style="width: 8.75rem; height: 1.875rem;">
          <!-- v-model="search" -->
          <v-text-field
            prepend-inner-icon="$search"
            label="Search episode"
            single-line
            hide-details
            color="white"
            background-color="white"
          />
        </div>
        <v-btn

          fab
          dark
          small
          color="transparent"
        >
          <v-icon
            color="white"
            size="24"
          >
            $more
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <MusicPlayListTable />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class CategoryPreview extends Vue {

};
</script>
