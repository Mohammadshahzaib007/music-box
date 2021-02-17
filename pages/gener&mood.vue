<template>
  <section style="margin-top: 4.9375rem">
    <v-container style="max-width: 92.5rem; position: relative">
      <v-row style="margin-top: 5.625rem">
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between"
        >
          <h1
            class="mb-4"
            style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
          >
            Genres
          </h1>
        </v-col>
        <v-col
          cols="12"
          class="px-0 py-0 d-flex justify-space-between flex-wrap"
        >
          <CategoryCard
            v-for="(item, i) in generData"
            :key="i"
            class="mb-6"
            :title="item.title"
            :bg-color="item.bgColor"
          />
        </v-col>
      </v-row>

      <v-row style="margin-top: 5.625rem">
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between "
        >
          <h1
            class="mb-4"
            style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
          >
            Moods
          </h1>
        </v-col>
        <v-col
          cols="12"
          class="px-0 py-0 d-flex justify-space-between flex-wrap"
        >
          <CategoryCard
            v-for="(item, i) in moodsData"
            :key="i"
            class="mb-6"
            :title="item.title"
            :center-text="item.centerText"
            :bg-color="item.bgColor"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class GenerAndMood extends Vue {
  // for rendering HTML hello

  generData: Array<{
    title: string,
    imgLink: string
    centerText: boolean
    bgColor: string
  }> = [
    { centerText: false, title: 'hip-hop', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'pop', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'rock', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'country', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'dance/Electro', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'indie', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },

    { centerText: false, title: 'latin', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'k-pop', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'metal', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'r&b', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'decades', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'classical', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },

    { centerText: false, title: 'jazz', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'instumentals', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'punks', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'blus', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'soul/Funk', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' },
    { centerText: false, title: 'reggae', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' }

  ]

     moodsData: Array<{
    title: string,
    imgLink: string
    centerText: boolean
    bgColor: string
  }> = [
    { centerText: true, title: 'stories', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'educational', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'music', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'Lifestyle & Health', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'busniess & technology', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'games', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },

    { centerText: true, title: 'stories', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'educational', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'music', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'Lifestyle & Health', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'busniess & technology', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'games', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' }

  ]
};
</script>
