
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
        <PreviewTableItemCard class="mb-8" />
      </template>

      <template #item.progress="{item}">
        <div

          style="width: 120px; height: 3px; background: #99999F; border-raius: 2px"
        >
          <div style="width: 80px; height: 3px; background: #2dceef; border-raius: 2px" />
        </div>
      </template>

      <template #item.uploadTime="{item}">
        <span
          style="font-weight: normal; font-size: 0.9375rem; letter-spacing: 0.01em; line-height: 32px; color: #99999f;"
        >22/03/19</span>
      </template>

      <template #item.time="{item}">
        <span
          style="font-weight: normal; font-size: 0.9375rem; letter-spacing: 0.01em; line-height: 32px; color: #99999f;"
        >49:45</span>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class MusicPlayListTable extends Vue {
headers= [
  {
    text: 'title',
    align: 'start',
    sortable: false,
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

        itemsList = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%'
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%'
          }
        ]
};
</script>

<style lang="scss" scoped>
.theme--light.v-data-table {
    background-color: transparent;
    color: #fff;
}

</style>
