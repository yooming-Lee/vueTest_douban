<template>
    <div id="movieList">
        <header>
            <h2>{{title}}</h2>
            <router-link class="f_r" :to="{name: 'theatersView', params: {movieType: params}}" v-if="type == 'movie'" append>更多</router-link>
            <router-link class="f_r" :to="{name: 'moreBooksView', params: {bookType: bookParams}}" v-if="type == 'book'" append>更多</router-link>
        </header>
        <div class="container">
            <ul class="movieInfo" v-if="type == 'book' || type == 'movie'">
                <li v-for="item in items">
                    <router-link :to="{name: 'subjectView', params: {type: type, id: item.id}}">
                        <div class="imgBox">
                            <!--<div :style="{backgroundImg: 'url('+item.images.large+')'}"></div>-->
                            <img :src="item.images.large" alt="">
                        </div>
                        <p v-html="item.title"></p>
                        <rating class="rating-star" :rating="item.rating"></rating>
                    </router-link>
                </li>
            </ul>
            <ul class="interests" v-if="type == 'interests'">
                <li v-for="item in items" :style="{borderColor: item.color}">
                    <a :href="item.href || item.url" v-if="!item.line" v-html="item.title" :style="{color: item.color}"></a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Rating from './Rating.vue';

export default {
    props: ['title', 'type', 'params', 'bookParams', 'items'],
    components: {
        Rating
    }
}
</script>
<style scoped>
#movieList header {
    padding: 0 1.5rem;
}

#movieList header h2 {
    display: inline-block;
    font-size: 1.6rem;
}

#movieList header a {
    font-size: 1.4rem;
    color: #42BD56;
}

.movieInfo {
    white-space: nowrap;
    overflow-x: auto;
    padding: 1.25rem 0 2.5rem .75rem;
}

.movieInfo::-webkit-scrollbar,
.interests::-webkit-scrollbar {
    /* 设置滚动条样式 */
    background-color: transparent;
}

.movieInfo li {
    width: 10rem;
    text-align: center;
    display: inline-block;
    margin-right: .8rem;
}

.movieInfo li:last-of-type {
    margin-right: 1.5rem;
}

.movieInfo li a {
    display: block;
}

.movieInfo li img {
    width: 100%;
    height: 14rem;
}

.movieInfo li p {
    font-size: 1.5rem;
    color: #333;
    word-wrap: normal;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    margin-top: .5rem;
}

.interests {
    overflow-x: auto;
    white-space: nowrap;
    padding: 1.25rem 0 1.25rem .8rem;
}

.interests li {
    border: 1px solid;
    -webkit-border-radius: .5rem;
    -moz-border-radius: .5rem;
    border-radius: .5rem;
    display: inline-block;
    margin-left: .67rem;
    margin-bottom: .67rem;
}

.interests li:empty {
    border: 0 none;
    display: block;
    margin-left: 0;
    margin-bottom: 0;
}

.interests li a {
    display: inline-block;
    height: 4.17rem;
    line-height: 4.17rem;
    font-size: 1.5rem;
    padding-left: 2.1rem;
    padding-right: 2.1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
