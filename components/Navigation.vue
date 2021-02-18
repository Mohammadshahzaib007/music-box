<template>
  <v-app-bar
    id="navbar"
    color="transparent"
    elevation="0"
    app
    absolute
    class="mt-5 px-0 py-0"
  >
    <v-container style="max-width: 115rem">
      <v-row>
        <v-col
          cols="4"
          class="d-flex align-center px-0 py-0"
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
            v-for="(navLink, i) in navLinks"
            :key="i"
            text
            :to="navLink.link"
            class=""
            style="font-size: 1.25rem; color: #99999F; line-height: 52px; font-weight: 700; margin-right: 1.875rem; text-decoration: none"
          >
            {{ navLink.name }}
          </nuxt-link>
        </v-col>

        <v-col

          cols="4"
          class="px-0 py-0"
        >
          <div
            v-if="currentPage ==='/gener&mood' || currentPage === '/podcasts'"
            style="width: 100%; height: 100%"
            class="d-flex align-center justify-center"
          >
            <nuxt-link
              v-for="(navLink, i) in categoryLinks"
              :key="i"
              text
              :to="navLink.link"
              class=""
              style="font-size: 1.25rem; color: #99999F; line-height: 52px; font-weight: 700; margin-right: 1.875rem; text-decoration: none"
            >
              {{ navLink.name }}
            </nuxt-link>
          </div>
        </v-col>

        <v-col
          cols="4"
          class="d-flex justify-end align-center px-0 py-0"
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
import { Component, Vue, Watch } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
  navLinks: Array<{name: string, link: string}> = [
    { name: 'Browse', link: '/gener&mood' },
    { name: 'Library', link: '#' },
    { name: 'Home', link: '/' }
  ]

  categoryLinks: Array<{name: string, link: string}> = [
    { name: 'Genres & Moods', link: '/gener&mood' },
    { name: 'New Releases', link: '#' },
    { name: 'Podcasts', link: '/podcasts' }
  ]

  currentPage: string | null = null;

  @Watch('$route.path')
  handler (v: string) {
    this.currentPage = v;
  }
};
</script>

<style lang="scss" scoped>
  #search-bar ::v-deep  .v-label  {
    color: white !important;
  }
</style>
