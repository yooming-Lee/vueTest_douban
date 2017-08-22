<template>
  <div id="movieView" class="pd_66">
    <movieList title="影院热映" type="movie" params="in_theaters" :items="hotMovies"></movieList>
    <movieList title="免费在线观影" type="movie" params="coming_soon" :items="freeMovies"></movieList>
    <movieList title="新片速递" type="movie" params="top250" :items="latestMovies"></movieList>
    <movieList title="发现好电影" type="interests" :items="movieTags"></movieList>
    <types :baseUrl="baseUrl" :types="movieTypes" :movie="true"></types>
    <download-app></download-app>
  </div>
</template>
<script>
import MovieList from '../List.vue';  // 电影列表
import Types from '../types.vue';  // 电影类型列表
import DownloadApp from '../DownloadApp.vue'; // 底部下载豆瓣APP

import store from '../../store'
import { mapState } from 'vuex';

export default {
  components: {
    MovieList,
    Types,
    DownloadApp
  },
  computed: {
    ...mapState({
      hotMovies: state => state.movies.hotMovies,
      freeMovies: state => state.movies.freeMovies,
      latestMovies: state => state.movies.latestMovies,
      movieTags: state => state.movies.movieTags,
      baseUrl: state => state.movies.baseUrl,
      movieTypes: state => state.movies.movieTypes
    })
  },
  methods: {
    getMovies() {  // 发送请求
      this.$store.dispatch('getMovies', 8);
    }
  },
  created() {
    this.getMovies();
  }
}
</script>
<style scoped>

</style>