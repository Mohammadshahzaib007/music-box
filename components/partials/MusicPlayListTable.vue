
<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="itemsList"
      class="elevation-0"
      :footer-props="{
        showFirstLastPage: false,
      }"
      disable-pagination
      :hide-default-footer="true"
    >
      <template #item.title="{ item }">
        <PreviewTableItemCard
          :title="item.cardData.heading"
          :description="item.cardData.description"
          class="mb-8"
        />
      </template>

      <template #item.progress="{item}">
        <div

          style="width: 120px; height: 3px; background: #99999F; border-raius: 2px"
        >
          <div :style="{width: `${item.songProgressBar}%`, height: '3px', background: '#2dceef', borderRaius: '2px', transition: 'all .3s'}" />
        </div>
      </template>

      <template #item.uploadTime="{item}">
        <span
          style="font-weight: normal; font-size: 0.9375rem; letter-spacing: 0.01em; line-height: 32px; color: #99999f;"
        >{{ item.uploadTime }}</span>
      </template>

      <template #item.time="{item}">
        <span
          style="font-weight: normal; font-size: 0.9375rem; letter-spacing: 0.01em; line-height: 32px; color: #99999f;"
        >{{ item.time }}</span>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

interface CardData {
   heading: string,
   description: string
  }

@Component
export default class MusicPlayListTable extends Vue {
headers: Array<{
   text: string,
    align?: string,
    sortable?: boolean,
    value: string,
    class: string
}>= [
  {
    text: 'title',
    // align: 'start',
    // sortable: false,
    value: 'title',
    class: 'thTitle margin'
  },
  {
    text: 'progress',
    value: 'progress',
    class: 'thTitle'
  },
  {
    text: 'upload time',
    value: 'uploadTime',
    class: 'thTitle'
  },
  {
    text: 'time',
    value: 'time',
    class: 'thTitle'
  }]

  itemsList: Array<{cardData: CardData, songProgressBar:number, uploadTime: string, time: string}> = [
    {
      cardData: {
        heading: 'Cosmic Queries - Neuroscience',
        description: 'Psychodelic drugs, dreams, mental health awareness, understanding our reality, and more - Neil deGrasse Tyson, neuroscientist Heather Berlin, PhD, and first-time comic co-host Jackie Hoffman answer fan-submitted questions about neuroscience. NOTE: StarTalk All-Access subscribers...'
      },
      songProgressBar: 80,
      uploadTime: '22/03/19',
      time: '49:45'
    },
    {
      cardData:
      {
        heading: 'Einstein\'s Genius, with Ron Howard',
        description: 'Neil deGrasse Tyson, filmmaker Ron Howard, astrophysicist Janna Levit, and comic co-host Harrison Greenbaum celebrate and explore the life of Albert Einstein, including his path to scientific enlightenment and the impact of his genius on the world. NOTE: StarTalk All-Access subscrib...'
      },
      songProgressBar: 0,
      uploadTime: '15/03/19',
      time: '52:19'
    },
    {
      cardData: {
        heading: '#ICYMI - NASCAR vs Formula 1',
        description: 'In case you missed this episode on the Playing with Science channel... NASCAR of Formula 1? Which one do you choose? Our host Chuck Nice and Gary O\'Reilly sit down with science communicator Diandra Leslie-Pelecky, PhD, to try and determine who takes the checkered flag.'
      },
      songProgressBar: 0,
      uploadTime: '14/03/19',
      time: '51:35'
    },
    {
      cardData: {
        heading: 'Vaccines - Let\'s Make America Smart Again',
        description: 'Continuing our Let\'s Make America Smart Again series, Neil deGrasse Tyson, comic co-host Felicia Madison, and Pulitzer Prize-winning science journalist Laurie Garret eradicate unfounded disinformation and dish out smart, sensible knowledge and understanding about vaccines...'
      },
      songProgressBar: 0,
      uploadTime: '08/03/19',
      time: '51:42'
    },
    {
      cardData: {
        heading: 'Cosmic Queries - Across the Universe',
        description: 'Continuing our Let\'s Make America Smart Again series, Neil deGrasse Tyson, comic co-host Felicia Madison, and Pulitzer Prize-winning science journalist Laurie Garret eradicate unfounded disinformation and dish out smart, sensible knowledge and understanding about vaccines...'
      },
      songProgressBar: 0,
      uploadTime: '01/03/19',
      time: '52:15'
    }

  ]
};
</script>

<style lang="scss" scoped>
.theme--light.v-data-table {
    background-color: transparent;
    color: #fff;
    padding-bottom: 3.125rem;
}

</style>
