<template>
  <div id="app">
    <HeaderView v-show="showHeader"></HeaderView>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderView from './components/Header.vue'
import Pages from './components/Pages.vue'

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    Pages,
    HeaderView
  },
  computed: {
    ...mapState({
      showHeader: state => state.showHeader.showHeader
    })
  },
  watch: {
    $route(to) {  // 通过监听跳转的路径来控制显示头部
      if (to.path == "/register" || to.path == "/login") {
        this.$store.dispatch('hideHeader');
      } else {
        this.$store.dispatch('showHeader');
      }
    }
  }
}
</script>

<style>
html {
  font-size: 62.5%;
}

.pd_66 {
  padding-top: 66px;
}
</style>
