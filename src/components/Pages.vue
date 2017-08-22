<template>
    <div id="pagesView">
        <!-- <HeaderView></HeaderView> -->
        <router-view v-show="!talion"></router-view>
    </div>
</template>
<script>
import {mapGetters} from 'vuex';

// import HeaderView from './Header.vue';
import HomeView from './Home.vue';

export default {
    components: {
        // HeaderView,
        HomeView
    },
    computed: mapGetters([
        'talion'
    ])
}
</script>
<style scoped>

</style>
