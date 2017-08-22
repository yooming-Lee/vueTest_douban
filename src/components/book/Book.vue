<template>
    <div id="book" class="pd_66">
        <bookList title="最受关注图书 | 虚构类" type="book" bookParams="fictions" :items="fiction"></bookList>
        <bookList title="最受关注图书 | 非虚构类" type="book" bookParams="nonfictions" :items="nonfiction"></bookList>
        <bookList title="豆瓣书店" type="book" bookParams="youth" :items="doubanBook"></bookList>
        <bookList title="发现好图书" type="interests" :items="bookTags"></bookList>
        <types :baseUrl="baseUrl" :types="bookTypes" :movie="false"></Types>
        <download-app></download-app>
    </div>
</template>
<script>
import {mapState} from 'vuex';

import BookList from '../List.vue';  // 图书列表
import Types from '../types.vue';  // 图书类型
import DownloadApp from '../DownloadApp.vue';  // 下载豆瓣APP

export default {
    components: {
        BookList,
        Types,
        DownloadApp
    },
    computed: {
        ...mapState({
            fiction: state => state.book.fiction,
            nonfiction: state => state.book.nonfiction,
            doubanBook: state => state.book.doubanBook,
            bookTags: state => state.book.bookTags,
            baseUrl: state => state.book.baseUrl,
            bookTypes: state => state.book.bookTypes
        })
    },
    methods: {
        getBooks() {
            this.$store.dispatch('getBooks');
        }
    },
    created() {
        this.getBooks();
    }
}
</script>
<style scoped>

</style>