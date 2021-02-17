<template>
  <section style="margin-top: 4.9375rem">
    <v-container style="max-width: 92.5rem">
      <v-row>
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between"
        >
          <h1
            class="mb-1"
            style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
          >
            Flow
          </h1>
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
        <v-col
          cols="12"
          class="px-0 py-0 d-flex justify-space-between"
        >
          <FlowCard
            v-for="(item, i) in flowSectionData"
            :key="i"
            :bg-image-src="item.bgImage"
            :cover-img-src="item.coverImgSrc"
            :sub-heading="item.subHeading"
            :bottom-text="item.bottomText"
            :icon="item.icon"
            :heading-color="item.headingColor"
          />
        </v-col>
      </v-row>

      <v-row style="margin-top: 5.625rem">
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between"
        >
          <h1
            class="mb-4"
            style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
          >
            Recently played
          </h1>
          <div>
            <v-icon color="#303033">
              $leftArrow
            </v-icon>
            <v-icon color="white">
              $rightArrow
            </v-icon>
          </div>
        </v-col>
        <v-col
          cols="12"
          class="px-0 py-0 d-flex justify-space-between"
        >
          <RecentCard
            v-for="(item,i) in recentlyPlayedData"
            :key="i"
            :is-rounded="item.isRounded"
            :img-src="item.imgSrc"
            :title="item.title"
            :rating="item.rating"
          />
        </v-col>
      </v-row>

      <v-row style="margin-top: 5.625rem">
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between"
        >
          <div>
            <h1
              style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
            >
              Browse
            </h1>
            <p
              style="font-weight: normal; font-size: 0.875rem; letter-spacing: 0.01em;  color: #99999f; margin-top: -15px"
            >
              Explore by genre and mood
            </p>
          </div>
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
          class="px-0 py-0 d-flex justify-space-between"
        >
          <CategoryCard
            v-for="(item, i) in categoryData"
            :key="i"
            :title="item.title"
            :bg-color="item.bgColor"
          />
        </v-col>
      </v-row>

      <v-row style="margin-top: 5.625rem">
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between"
        >
          <h1
            class="mb-4"
            style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
          >
            Make monday more productive
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
          class="px-0 py-0 d-flex justify-space-between"
        >
          <RecentCard
            v-for="(item,i) in makeMondayData"
            :key="i"
            :is-rounded="item.isRounded"
            :img-src="item.imgSrc"
            :title="item.title"
            :rating="item.rating"
          />
        </v-col>
      </v-row>

      <v-row style="margin-top: 5.625rem">
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between"
        >
          <div>
            <h1
              style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
            >
              Podcasts
            </h1>
            <p
              style="font-weight: normal; font-size: 0.875rem; letter-spacing: 0.01em;  color: #99999f; margin-top: -15px"
            >
              Explore by categories and popularity
            </p>
          </div>
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
          class="px-0 py-0 d-flex justify-space-between"
        >
          <CategoryCard
            v-for="(item, i) in podcastsCategoryData"
            :key="i"
            :title="item.title"
            :center-text="item.centerText"
            :bg-color="item.bgColor"
          />
        </v-col>
      </v-row>

      <v-row style="margin-top: 5.625rem">
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between"
        >
          <div>
            <h1
              style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
            >
              Playlist picks
            </h1>
            <p
              style="font-weight: normal; font-size: 0.875rem; letter-spacing: 0.01em;  color: #99999f; margin-top: -15px"
            >
              Selected for you based on your recent activity
            </p>
          </div>
          <div>
            <v-icon color="#303033">
              $leftArrow
            </v-icon>
            <v-icon color="white">
              $rightArrow
            </v-icon>
          </div>
        </v-col>
        <v-col
          cols="12"
          class="px-0 py-0 d-flex justify-space-between"
        >
          <RecentCard
            v-for="(item,i) in playListsPickData"
            :key="i"
            :is-rounded="item.isRounded"
            :img-src="item.imgSrc"
            :title="item.title"
            :rating="item.rating"
          />
        </v-col>
      </v-row>

      <v-row style="margin-top: 5.625rem">
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between"
        >
          <h1
            class="mb-4"
            style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
          >
            New releases for you
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
          class="px-0 py-0 d-flex justify-space-between"
        >
          <RecentCard
            v-for="(item,i) in forYouData"
            :key="i"
            :is-rounded="item.isRounded"
            :img-src="item.imgSrc"
            :title="item.title"
            :heading-sub-tex="item.headingSubTex"
          />
        </v-col>
      </v-row>

      <v-row style="margin-top: 5.625rem">
        <v-col
          cols="12"
          class="px-0 py-0 d-flex align-center justify-space-between"
        >
          <h1
            class="mb-4"
            style="font-size: 1.5rem; color: #fff; line-height: 52px; font-weight: 700"
          >
            You might like these artists
          </h1>
          <div>
            <v-icon color="#303033">
              $leftArrow
            </v-icon>
            <v-icon color="white">
              $rightArrow
            </v-icon>
          </div>
        </v-col>
        <v-col
          cols="12"
          class="px-0 py-0 d-flex justify-space-between"
        >
          <RecentCard
            v-for="(item,i) in youMightLikeData"
            :key="i"
            :is-rounded="item.isRounded"
            :img-src="item.imgSrc"
            :title="item.title"
            :rating="item.rating"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Home extends Vue {
  // for rendering HTML hello
  flowSectionData: Array<{
    bgImage:string,
    coverImgSrc: string,
    subHeading: string,
    bottomText: string,
    icon:string,
    headingColor:string
  }> = [
    {
      bgImage: require('@/assets/images/flowImg1.png'),
      coverImgSrc: require('@/assets/images/FlowCover@3x.png'),
      subHeading: 'Your Personal Soundtrack',
      bottomText: 'Based on your listening history',
      icon: '$play',
      headingColor: '#fff'
    },
    {
      bgImage: require('@/assets/images/flowBg2@3x.png'),
      coverImgSrc: require('@/assets/images/flowCover2@3x.png'),
      subHeading: 'Create your own perfect soundtrack',
      bottomText: 'Select multiple genres and moods to create the perfect soundtrack',
      icon: '$plus',
      headingColor: '#7190F2'
    },
    {
      bgImage: require('@/assets/images/flowBg3@3x.png'),
      coverImgSrc: require('@/assets/images/flowCover3@3x.png'),
      subHeading: 'Create your own concert with your favorite singers',
      bottomText: 'Select multiple artists to create the perfect soundtrack',
      icon: '$plus',
      headingColor: '#6BEEAE'
    }
  ]

   recentlyPlayedData: Array<{
     isRounded: boolean,
     imgSrc: string,
     title: string,
     rating: string | number
   }> = [
     {
       isRounded: true,
       imgSrc: require('@/assets/images/queen.png'),
       title: 'Queen',
       rating: '948,117'
     },
     {
       isRounded: true,
       imgSrc: require('@/assets/images/playListRadio.png'),
       title: '70s Rock Anthems Radio  ',
       rating: 'Progressive Rock'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/progRock.png'),
       title: 'Progressive Rock',
       rating: '128,045'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/starTalk.png'),
       title: 'StarTalk Radio',
       rating: '87,444'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/70sRock.png'),
       title: '70s Rock Anthems',
       rating: '387,722'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/theNextDay.png'),
       title: 'The Next Day',
       rating: 'Album by David Bowie'
     }
   ]

  categoryData: Array<{
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
    { centerText: false, title: 'indie', imgLink: '', bgColor: 'rgba(197, 92, 249, 0.20)' }
  ]

   makeMondayData: Array<{
     isRounded: boolean,
     imgSrc: string,
     title: string,
     rating: string | number
   }> = [
     {
       isRounded: false,
       imgSrc: require('@/assets/images/deepFocus.png'),
       title: 'Deep Focus',
       rating: '678,612'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/productiveMorning.png'),
       title: 'Productive Morning',
       rating: '244,412'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/whiteNoise.png'),
       title: 'White Noise',
       rating: '146,264'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/nature.png'),
       title: 'Nature Song',
       rating: '89,460'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/brainFood.png'),
       title: 'Brain Food',
       rating: '727,743'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/morningRush.png'),
       title: 'Morning Rush',
       rating: '291,818'
     }
   ]

   podcastsCategoryData: Array<{
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
    { centerText: true, title: 'games', imgLink: '', bgColor: 'linear-gradient(71deg, rgba(168,116,208,0.7903536414565826) 15%, rgba(116,121,209,0.7931547619047619) 100%)' }
  ]

   playListsPickData: Array<{
     isRounded: boolean,
     imgSrc: string,
     title: string,
     rating?: string | number,
     headingSubTex?: string
   }> = [
     {
       isRounded: false,
       imgSrc: require('@/assets/images/composers.png'),
       title: 'russian composers',
       rating: '71,622'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/guitarSolo.png'),
       title: 'Guitar Solos',
       rating: '299,154'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/workoutrock.png'),
       title: 'workout rock',
       rating: '414,228'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/rockBallads.png'),
       title: 'Rock ballads',
       rating: '160,896'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/80sAlternativRock.png'),
       title: '80s Alternative',
       rating: '498,112'
     },
     {
       isRounded: false,
       imgSrc: require('@/assets/images/rockAbilly.png'),
       title: 'Rockabilly',
       rating: '82,127'
     }
   ]

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
     }
   ]

   youMightLikeData: Array<{
     isRounded: boolean,
     imgSrc: string,
     title: string,
     rating?: string | number,
     headingSubTex?: string
   }> = [
     {
       isRounded: true,
       imgSrc: require('@/assets/images/lp5.png'),
       title: 'The Smiths',
       rating: '371,228'
     },
     {
       isRounded: true,
       imgSrc: require('@/assets/images/numbNumb.png'),
       title: 'The Clash',
       rating: '367,784'
     },
     {
       isRounded: true,
       imgSrc: require('@/assets/images/dripDown.png'),
       title: 'David Bowie',
       rating: '490,415'
     },
     {
       isRounded: true,
       imgSrc: require('@/assets/images/shadows.png'),
       title: 'Kurt Cobain',
       rating: '699,228'
     },
     {
       isRounded: true,
       imgSrc: require('@/assets/images/brainFood.png'),
       title: 'Lou Reed',
       rating: '429,222'
     },
     {
       isRounded: true,
       imgSrc: require('@/assets/images/hef.png'),
       title: 'The Velvet Underground',
       rating: '147,123'
     }
   ]
};
</script>
