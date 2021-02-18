import colors from 'vuetify/es5/util/colors';

import Logo from '@/components/icons/Logo.vue';
import Profile from '@/components/icons/Profile.vue';
import Search from '@/components/icons/Search.vue';
import Play from '@/components/icons/Play.vue';
import Plus from '@/components/icons/Plus.vue';
import Heart from '@/components/icons/Heart.vue';
import More from '@/components/icons/More.vue';
import RightArrow from '@/components/icons/RightArrow.vue';
import LeftArrow from '@/components/icons/LeftArrow.vue';
import AddToFavourit from '@/components/icons/AddToFavourit.vue';
import RightTick from '@/components/icons/RightTick.vue';
import Queue from '@/components/icons/Queue.vue';
import Volume from '@/components/icons/Volume.vue';
import Shuffle from '@/components/icons/Shuffle.vue';
import Pause from '@/components/icons/Pause.vue';
import Prev from '@/components/icons/Prev.vue';
import Next from '@/components/icons/Next.vue';
import Repeat from '@/components/icons/Repeat.vue';
import Podcast from '@/components/icons/Podcast.vue';

export default {
  theme: {
    light: true,
    themes: {
      light: {
        primary: '#F53838',
        accent: colors.grey.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
  icons: {
    values: {
      logo: {
        component: Logo
      },
      profile: {
        component: Profile
      },
      search: {
        component: Search
      },
      play: {
        component: Play
      },
      plus: {
        component: Plus
      },
      heart: {
        component: Heart
      },
      more: {
        component: More
      },
      rightArrow: {
        component: RightArrow
      },
      leftArrow: {
        component: LeftArrow
      },
      addToFavourit: {
        component: AddToFavourit
      },
      rightTick: {
        component: RightTick
      },
      queue: {
        component: Queue
      },
      volume: {
        component: Volume
      },
      shuffle: {
        component: Shuffle
      },
      pause: {
        component: Pause
      },
      prev: {
        component: Prev
      },
      next: {
        component: Next
      },
      repeat: {
        component: Repeat
      },
      podcast: {
        component: Podcast
      }
    }
  }
};
