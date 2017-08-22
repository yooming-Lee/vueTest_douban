<template>
  <div id="theaters" class="pd_66">
    <h1 v-html="title"></h1>
    <div class="movie_container clearfix">
      <a href="javascript: void(0);" v-for="movie in movies[dataType]">
        <div class="movieImg">
          <img :src="movie.images.large" alt="...">
        </div>
        <div class="movieInfo">
          <h3 v-html="movie.title"></h3>
          <rating :rating="movie.rating"></rating>
        </div>
      </a>
    </div>
    <loading v-show="showLoading"></loading>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import Rating from '../Rating.vue';
import Loading from '../Loading.vue';

export default {
  data() {
    return {
      title: '',
      dataType: '',
      showLoading: true
    }
  },
  components: {
    Rating,
    Loading
  },
  computed: {
    ...mapState({
      movies: state => state.movies
    })
  },
  methods: {
    // getAllMovie(data) {
    //   this.$store.dispatch('getAllMovie', data).then(res => {
    //     console.log(res);
    //     this.showLoading = false;
    //   });
    // }
  },
  created() {
    let movieType = this.$route.params.movieType
    // this.getAllMovie(movieType);  // 将路由中params的movieType传递到函数中，便于请求对应的电影数据

    this.$store.dispatch('getAllMovie', movieType).then(res => {
      console.log(res);
      this.showLoading = false;
    });

    switch (movieType) {
      case "in_theaters":
        this.title = "影院热映";
        this.dataType = "intheaters";
        break;
      case "coming_soon":
        this.title = "免费在线观看新片";
        this.dataType = "comingSoon";
        break;
      case "top250":
        this.title = "新片速递";
        this.dataType = "top250";
        break;
      default:
        this.title = "影院热映";
        this.dataType = "intheaters";
    }
  }
}
</script>
<style scoped>
h1 {
  font-size: 2.4rem;
  padding-left: 6%;
  padding-right: 6%;
}

.movie_container {
  padding: 2rem 2%;
}

.movie_container>a {
  float: left;
  width: 33.33333%;
  padding-left: 4%;
  padding-right: 4%;
  text-align: center;
  overflow: hidden;
  margin-bottom: 1.7rem;
}

.movie_container img {
  width: 6.5rem;
  height: 9.2rem;
}

.movieInfo {
  height: 45px;
  overflow: hidden;
}

.movieInfo h3 {
  font-size: 1.4rem;
  margin-top: .1rem;
  margin-top: .5rem;
  overflow: hidden;
  /* 控制内容只能显示一行，不能换行 */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  /* 控制内容只能显示一行，不能换行 */
}

.movieInfo #rating {
  white-space: nowrap;
  overflow: hidden;
  -ms-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
</style>
