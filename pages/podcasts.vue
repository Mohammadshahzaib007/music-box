<template>
  <section style="margin-top: 3.4375rem">
    <nuxt-child />
    <v-container
      style="max-width: 92.5rem;"
      class="px-0 py-0"
    >
      <v-row>
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between"
        >
          <h1
            class="mb-4"
            style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
          >
            Popular in these week
          </h1>
        </v-col>
        <v-col
          cols="12"
          class="px-0 py-0 d-flex justify-space-between flex-wrap"
        >
          <RecentCard
            v-for="(item,i) in forYouData"
            :key="i"
            class="mt-10"
            :is-rounded="item.isRounded"
            :img-src="item.imgSrc"
            :title="item.title"
            :heading-sub-tex="item.headingSubTex"
          />
        </v-col>
        <v-col
          cols="12"
          class="mt-3 d-flex align-center justify-center px-0 py-0"
        >
          <v-btn
            outlined
            color="white"
            class="font-weight-bold"
          >
            SHOW MORE
          </v-btn>
        </v-col>
      </v-row>

      <v-row style="margin-top: 4.0625rem">
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between "
        >
          <h1
            class="mb-4"
            style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
          >
            Featured episodes
          </h1>
          <nuxt-link
            to="#"
            class="text-uppercase mb-0 text-decoration-none"
            style=" font-weight: normal; font-size: 1rem; letter-spacing: 0.01em; line-height: 61px; color: #d5d5d5;"
          >
            view all
          </nuxt-link>
        </v-col>
        <v-col
          cols="12"
          class="px-0 py-0 d-flex justify-space-between flex-wrap"
        >
          <FeaturedEpisodeCard
            v-for="(item, i) in featureEpisodeData"
            :key="i"
            class="mb-7"
            :title="item.title"
            :sub-title="item.subTitle"
            :img-link="item.imgLink"
          />
        </v-col>
      </v-row>

      <v-row style="margin-top: 4.0625rem">
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between "
        >
          <h1
            class="mb-4"
            style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
          >
            Categories
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
export default class Podcasts extends Vue {
  // for rendering HTML hello
 forYouData: Array<{
     isRounded: boolean,
     imgSrc: string,
     title: string,
     rating?: string | number,
     headingSubTex: string
   }> = [
     {
       isRounded: false,
       imgSrc: require('@/assets/images/lp5.png'),
       title: 'LP5',
       headingSubTex: 'Apparat'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/numbNumb.png'),
       title: 'Numb Numb Juice',
       headingSubTex: 'Schoolboy Q'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/dripDown.png'),
       title: 'Drip or Down 2',
       headingSubTex: 'Gunna'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/shadows.png'),
       title: 'Shadows',
       headingSubTex: 'Remy Van Kesteren'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/brainFood.png'),
       title: 'Don\'t Feed the Pop Monster',
       headingSubTex: 'broods'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/hef.png'),
       title: 'Hef',
       headingSubTex: 'Koud'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/lp5.png'),
       title: 'LP5',
       headingSubTex: 'Apparat'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/numbNumb.png'),
       title: 'Numb Numb Juice',
       headingSubTex: 'Schoolboy Q'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/dripDown.png'),
       title: 'Drip or Down 2',
       headingSubTex: 'Gunna'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/shadows.png'),
       title: 'Shadows',
       headingSubTex: 'Remy Van Kesteren'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/brainFood.png'),
       title: 'Don\'t Feed the Pop Monster',
       headingSubTex: 'broods'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/hef.png'),
       title: 'Hef',
       headingSubTex: 'Koud'
     }
   ]

     moodsData: Array<{
    title: string,
    imgLink: string
    centerText: boolean
    bgColor: string
  }> = [
    { centerText: true, title: 'party', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'chill', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'workout', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'focus', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'driving', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'rainy day', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },

    { centerText: true, title: 'romance', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'sleep', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'comedy', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'fmily', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'dinner', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' },
    { centerText: true, title: 'travel', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' }

  ]

  featureEpisodeData: Array<{title: string, subTitle: string, imgLink: string}> = [
    {
      title: 'We\'re Losing Our Jobs? - Dude Soup #212',
      subTitle: 'I see the crotch of a polygon man',
      imgLink: require('@/assets/images/audioPlayerImg.jpg')
    },
    {
      title: 'Kristen Bell',
      subTitle: 'Actress Kristen Bell feels supercharged about being Conan O\'Brien\'s friend! Kristen joins Conan to...',
      imgLink: require('@/assets/images/audioPlayerImg.jpg')
    },
    {
      title: 'What\'s the deal with ASMR?',
      subTitle: 'ASMR is soothing to some, maddening to others. Learn all about whisper tones in today\'s episode.',
      imgLink: require('@/assets/images/audioPlayerImg.jpg')
    },
    {
      title: '1 - They\'ve Taken Her',
      subTitle: 'Madeleine McCann and her family travel to Portugal with a group of friends who will become knows as...',
      imgLink: require('@/assets/images/audioPlayerImg.jpg')
    },
    {
      title: '1 - REALISING',
      subTitle: 'What do you do when you realise you\'re non-binary? How do you come out yourself? How...',
      imgLink: require('@/assets/images/audioPlayerImg.jpg')
    },
    {
      title: 'How to teach kids to talk about taboo topics...',
      subTitle: 'When one of Liz Kleinrock\'s fourth-grade students said the unthinkable at the start of a class on...',
      imgLink: require('@/assets/images/audioPlayerImg.jpg')
    }
  ]
};
</script>
