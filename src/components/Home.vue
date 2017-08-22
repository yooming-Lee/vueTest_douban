<template>
    <div>
        <HomeContainer :items="events" class="pd_66"></HomeContainer>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
            <Loading slot="spinner"></Loading>
        </infinite-loading>
    </div>
</template>
<script>

import { mapState, mapActions } from 'vuex'

import InfiniteLoading from 'vue-infinite-loading'
import HomeContainer from './HomeContainer.vue'
import Loading from './Loading.vue'

export default {
    components: {
        InfiniteLoading,
        HomeContainer,
        Loading
    },
    computed: {
        ...mapState({
            events: state => state.events.events
        })
    },
    methods: {
        // fetchData() {
        // var self = this;
        // https://api.douban.com/v2/event/list?loc=108288&start=0&count=3
        // self.$http.get('api/event/list?loc=108288&start=0&count=3').then(function (res) {
        //     console.log(res);
        // }).catch(function (err) {
        //     console.log(err);
        // })
        // }
        onInfinite() {
            setTimeout(() => {
                this.loadEvents();
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
            }, 1000);
        },
        ...mapActions([
            'loadEvents'
        ])
    }
}
</script>
<style scoped>

</style>
