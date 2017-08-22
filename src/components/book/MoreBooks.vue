<template>
    <div id="moreBooks" class="pd_66">
        <h1 v-html="title"></h1>
        <div class="bookContainer">
            <a class="clearfix" href="javascript: void(0);" v-for="book in books[bookType]">
                <div class="bookImg f_l">
                    <img :src="book.images.medium" :alt="book.title">
                </div>
                <div class="bookInfo">
                    <h3>
                        {{book.title}}
                    </h3>
                    <rating :rating="book.rating"></rating>
                    <p v-html="book.summary"></p>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Rating from '../Rating.vue';

export default {
    components: {
        Rating
    },
    data() {
        return {
            title: '',
            dataType: '',
            bookType: ''
        }
    },
    computed: {
        ...mapState({
            books: state => state.book
        })
    },
    methods: {
        getMoreBooks(data) {
            this.$store.dispatch("getMoreBooks", data);
        }
    },
    created() {
        this.bookType = this.$route.params.bookType;
        switch (this.bookType) {
            case "fictions":
                this.title = "最受关注图书 | 虚构类";
                this.dataType = "虚构类";
                break;
            case "nonfictions":
                this.title = "最受关注图书 | 非虚构类";
                this.dataType = "非虚构类";
                break;
            case "youth":
                this.title = "最受关注图书 | 青春";
                this.dataType = "青春";
                break;
            default:
                this.title = "最受关注图书 | 虚构类";
                this.dataType = "虚构类";
                break;
        }
        this.getMoreBooks(this.dataType);
    }
}
</script>
<style scoped>
h1 {
    font-size: 2.4rem;
    padding-left: 6%;
    padding-right: 6%;
}

.bookContainer a {
    display: block;
    padding: 20px 6%;
    border-bottom: 1px solid #ccc;
}

.bookContainer a:last-of-type {
    border-bottom: 0 none;
}

.bookImg {
    width: 100px;
    margin-right: 1.25rem;
}

.bookImg img {
    width: 100%;
}

.bookInfo {
    overflow: hidden;
}

.bookInfo h3 {
    margin-bottom: .42rem;
}

.bookInfo p {
    margin-top: .42rem;
    /* 设置文字显示行数 Begin */
    display: -webkit-box;
    -webkit-box-orient: vertical;  /* 规定文本的排列方式(水平/垂直) */
    -moz-box-orient: vertical;
    -webkit-line-clamp: 5;  /* 显示最多显示5行，其余隐藏并显示... */
    overflow: hidden;
    /* 设置文字显示行数 End */
}
</style>