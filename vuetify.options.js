import colors from 'vuetify/es5/util/colors';

import Logo from '@/components/icons/Logo.vue';
import Profile from '@/components/icons/Profile.vue';
import Search from '@/components/icons/Search.vue';
import Play from '@/components/icons/Play.vue';
import Plus from '@/components/icons/Plus.vue';

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
      }
    }
  }
};
