<template>
  <v-app-bar
    id="navbar"
    color="transparent"
    elevation="0"
    app
    absolute
    class="mt-5"
  >
    <v-container style="max-width: 1760px">
      <v-row>
        <v-col
          cols="6"
          class="d-flex align-center"
        >
          <v-toolbar-title>
            <v-icon
              size="88.45px"
              color="#fff"
              style="margin-right: 43.5px"
            >
              $logo
            </v-icon>
          </v-toolbar-title>

          <nuxt-link
            v-for="navLink in navLinks"
            :key="navLink"
            text
            to="#"
            class=""
            style="font-size: 1.25rem; color: #99999F; line-height: 52px; font-weight: 700; margin-right: 1.875rem; text-decoration: none"
          >
            {{ navLink }}
          </nuxt-link>
        </v-col>
        <v-col
          cols="6"
          class="d-flex justify-end align-center"
        >
          <div
            style="width: 12.5rem"
            class="mr-7"
          >
            <v-text-field
              id="search-bar"
              height="2.5rem"
              rounded
              hide-details
              label="Search"
              prepend-inner-icon="$search"
              solo
              style="width: 12.5rem; color: white"
              background-color="#898B91"
              flat
            />
          </div>

          <v-icon
            size="30"
            color="white"
          >
            $profile
          </v-icon>
          <nuxt-link
            to="#"
            text
            class="text-capitalize px-0 py-0 mx-0 my-0 ml-7 g-link"
            style="font-size: 1rem; font-weight: 400; line-height: 32px; color:white; text-decoration: none"
          >
            John Doe
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
  navLinks: Array<String> = ['Browse', 'Library', 'Home']
};
</script>

<style lang="scss" scoped>
  #search-bar ::v-deep  .v-label  {
    color: white !important;
  }
</style>
