<template>
  <Home />
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
  apiKey = 'e7e8f907110d692e5113920ca4d34018'

  sharedSecret = '4fcee85513e3acafcb19fcf44872ec94'

  //  URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=india&api_key=${this.apiKey}&format=json`
  //  URL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${this.apiKey}&format=json`
  URL = `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${this.apiKey}&artist=Cher&album=Believe&format=json`

  // getApiToken () {
  //   console.log('exicuting');
  //   fetch(this.URL).then(response => response.json()).then(data => console.log(data));
  // }

  // mounted () {
  //   this.getApiToken();
  // }
};
// font-family: 'Poppins', sans-serif;
// font-family: 'Lato', sans-serif;
</script>
