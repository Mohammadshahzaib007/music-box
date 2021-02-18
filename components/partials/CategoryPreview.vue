<template>
  <div>
    <PlayerHeader class="mt-15" />
    <v-row style="margin-top: 3.125rem">
      <v-col
        cols="12"
        class="d-flex align-center justify-space-between mb-5"
      >
        <div
          id="table-search-bar-container"
          class="ml-4"
          style="width: 240px; height: 1.875rem;"
        >
          <!-- v-model="search" -->
          <v-text-field
            id="table-search-bar"
            prepend-inner-icon="$search"
            placeholder="Search episode"
            hide-details
            class="ml-8"
            color="white"
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

<style lang="scss" scoped>
#table-search-bar-container ::v-deep #table-search-bar {
  color: white  !important;

  &::placeholder {
    color: white !important;
  }
}

#table-search-bar-container ::v-deep .v-icon__component {
  color: #fff  !important;
}

#table-search-bar-container ::v-deep  .v-input__slot:before {
  border-color: #fff !important;
}

</style>
