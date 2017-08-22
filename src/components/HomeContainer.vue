<template>
    <div class="homeView">
        <div class="container">
            <div class="quickNav">
                <ul class="clearfix">
                    <li>
                        <router-link :to="{name: 'theatersView', params: {movieType: 'in_theaters'}}">影院热映</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'theatersView', params: {movieType: 'top250'}}">欧美新碟榜</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'registerView'}">注册账号</router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'loginView'}">登录豆瓣</router-link>
                    </li>
                </ul>
            </div>
            <div class="activeList_box">
                <div class="activeList" v-for="item in items">
                    <h2>{{item.date}}</h2>
                    <a href="javascript: void(0);" class="eventBox" v-for="feeds in item.recommend_feeds">
                        <div class="content">
                            <!--<div class="bg_img" style="background: url('feeds.target.cover_url');"></div>-->
                            <img :src="feeds.target.cover_url" v-show="feeds.target.cover_url == '' ? false : true" alt="">
                            <h3 v-html="feeds.title"></h3>
                            <p v-html="feeds.target.desc"></p>
                        </div>
                        <div class="author">by&nbsp;{{feeds.target.author.name}}</div>
                        <span class="label">{{feeds.source_cn}}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped>
/*.container {
    padding-top: 66px;
}*/

.quickNav {
    padding-left: 1.67rem;
    padding-right: 1.67rem;
}

.quickNav li {
    width: 50%;
    float: left;
    text-align: center;
    padding: .25rem;
    font-size: 1.25rem;
}

.quickNav li a {
    display: block;
    background-color: #F6F6F6;
    padding: 1rem 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.activeList_box {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-top: 1.7rem;
}

.activeList h2 {
    border-top: .1rem solid #e3e3e3;
    border-bottom: .1rem solid #e3e3e3;
    margin-top: -.1rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.activeList a {
    display: block;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-bottom: .1rem solid #e3e3e3;
    overflow: hidden;
}

.activeList h3 {
    font-size: 1.6rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: .42rem;
}

.activeList img {
    width: 26%;
    float: right;
    margin-left: 2.1rem;
}

.activeList p {
    font-size: 1rem;
    line-height: 1.5;
    color: #bbb;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
    -ms-word-break: break-all;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-box-orient: vertical;
    margin-bottom: .85rem;
}

.activeList .author {
    color: #ccc;
    float: left;
}

.activeList .label {
    color: #ccc;
    float: right;
}
</style>

