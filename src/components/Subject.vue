<template>
    <div id="subject">
        <div class="sub_banner p_r">
            <div class="banner_img">
                <img src="../assets/images/subBanner_bg.jpg" alt="背景图片">
            </div>
            <div class="banner_inner p_a">
                <div class="banner_title">
                    <span>用 App 打开</span>
                    <br>
                    <span>查看影人相册</span>
                </div>
                <div class="banner_btn">
                    <a href="https://www.douban.com/doubanapp/app?model=B&copy=1&page=movie&channel=card_movie&direct_dl=1">极速下载</a>
                    <a href="https://www.douban.com/doubanapp/app">打开</a>
                </div>
            </div>
        </div>
        <div class="subject_container">
            <h1 v-html="subject.title"></h1>
            <div class="subject_info">
                <div class="subInfo_top clearfix">
                    <div class="sub_img f_r">
                        <img :src="subject.images.large" alt="">
                    </div>
                    <div class="sub_con">
                        <div class="rating">
                            <rating :rating="subject.rating"></rating>
                            <span v-if="subject.ratings_count">{{subject.ratings_count}}人评价</span>
                        </div>
                        <div v-if="subject.genres && subjectMeta">
                            <!-- 电影 -->
                            <p class="movieMeta">{{subjectMeta}}</p>
                            <a class="link-group" href="javascript: void(0);">用App查看影人资料</a>
                        </div>
                        <!-- 书籍 -->
                        <p v-if="subject.author && subjectMeta" class="bookMeta">{{subjectMeta}}</p>
                    </div>
                </div>
                <div class="book_linkGroup" v-if="subject.author && subjectMeta">
                    <a class="link-group" href="javascript: void(0);">在豆瓣购买</a>
                    <a class="link-group" href="javascript: void(0);">其他电商购买</a>
                </div>
                <div class="subMark flex">
                    <template v-if="subject.genres">
                        <!-- 电影 -->
                        <router-link class="mginRg_85" :to="{name: 'loginView'}">想看</router-link>
                        <router-link :to="{name: 'loginView'}">看过</router-link>
                    </template>
                    <template v-else>
                        <!-- 书籍 -->
                        <router-link class="mginRg_85" :to="{name: 'loginView'}">想读</router-link>
                        <router-link class="mginRg_85" :to="{name: 'loginView'}">在读</router-link>
                        <router-link :to="{name: 'loginView'}">读过</router-link>
                    </template>
                </div>
                <div class="sub_intro">
                    <template v-if="subject.genres">
                        <h3>{{subject.title}}的剧情简介</h3>
                    </template>
                    <template v-else>
                        <h3>{{subject.title}}的内容简介</h3>
                    </template>
                    <p class="onlyShow3Row">
                        <template v-if="subject.summary">
                            <!-- {{isExpand ? summary : subject.summary}}......
                                                            <a href="javascript: void(0);" v-show="isExpand" @click="expand">(展开)</a> -->
                            {{subject.summary}}......
                        </template>
                        <template v-else>
                            暂无简介
                        </template>
                    </p>
                    <a href="javascript: void(0);" v-show="isExpand" @click="expand">(展开)</a>
                </div>
                <div class="celebrities" v-if="subject.genres">
                    <h3>影人</h3>
                    <div class="celebritie_info">
                        <ul>
                            <!-- <li class="celebritie" v-for="celebritie in celebrities">
                                                        <a href="javascript: void(0);">
                                                            <img :src="celebritie.avatars.large" :alt="celebritie.alt">
                                                            <span>{{}}</span>
                                                            <span></span>
                                                        </a>
                                                    </li> -->
                            <li class="celebritie" v-for="item in subject.directors">
                                <a href="javascript: void(0);">
                                    <img :src="item.avatars.medium" :alt="item.alt">
                                    <span>{{item.name}}</span>
                                    <span>导演</span>
                                </a>
                            </li>
                            <li class="celebritie" v-for="data in subject.casts">
                                <a href="javascript: void(0);">
                                    <img :src="data.avatars.medium" :alt="data.alt">
                                    <span>{{data.name}}</span>
                                    <span>演员</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tags">
                    <template v-if="subject.genres">
                        <h3>查看更多豆瓣高分电影电视剧</h3>
                        <ul>
                            <li v-for="genre in subject.genres">
                                <a href="javascript:void(0);">{{genre}}</a>
                            </li>
                        </ul>
                    </template>
                    <template v-if="subject.tags">
                        <h3>查看更多豆瓣高分好书</h3>
                        <ul>
                            <li v-for="tag in subject.tags">
                                <a href="javascript:void(0);">{{tag.name}}</a>
                            </li>
                        </ul>
                    </template>
                </div>
            </div>
        </div>
        <download-app></download-app>
        <loading v-show="showLoading"></loading>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import Rating from './Rating.vue';
import DownloadApp from './DownloadApp.vue';
import Loading from './Loading.vue';

export default {
    data() {
        return {
            isExpand: true,
            showLoading: true
        }
    },
    components: {
        Rating,
        DownloadApp,
        Loading
    },
    computed: {
        ...mapState({
            subject: state => state.subject.subject
        }),
        ...mapGetters({
            subjectMeta: 'subjectMeta',
            summary: 'summary'
            // celebrities: 'celebrities'
        })
    },
    methods: {
        getSubject(data) {
            this.$store.dispatch('getSubject', data).then(res => {
                this.showLoading = false;
            });
        },
        expand() {
            this.isExpand = false;
            document.querySelector(".sub_intro p").removeAttribute("class");  // 显示全部
        }
    },
    created() {
        // 将路由中的参数传递到方法中，调用store中的getSubject方法
        this.getSubject(this.$route.params);   // this.$route.params === {type: "book或movie", id: "1683754"}
    }
}
</script>
<style scoped>
#subject {
    padding-top: 4rem;
}

.banner_inner {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    display: -webkit-flex;
    justify-content: space-around;
    /* 水平方向的留白一致，即：相当于两个div居中显示 */
    align-items: center;
    /* 设置div里面的span和a垂直居中 */
}

.banner_img img {
    width: 100%;
}

.banner_title span {
    font-size: 1.4rem;
    color: #2CA532;
}

.banner_btn a {
    display: inline-block;
    padding: 0 1.17rem;
    font-weight: 700 !important;
    font-size: 1.4rem;
    line-height: 2;
    border: .1rem solid #42bd56;
    -webkit-border-radius: .42rem;
    -moz-border-radius: .42rem;
    border-radius: .42rem;
}

.banner_btn a:first-of-type {
    background-color: #42bd56;
    color: #fff;
}

.banner_btn a:last-of-type {
    color: #42bd56;
    margin-left: 5px;
}

.sub_img img {
    width: 9rem;
}

.subject_container {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
}

.subject_container h1 {
    font-size: 2.4rem;
    margin-top: 2.5rem;
    margin-bottom: .5rem;
}

#rating .star-full {
    width: 1rem;
    height: 1rem;
}

.subInfo_top {
    margin-bottom: 2.5rem;
}

.sub_con {
    padding-right: 9rem;
}

.rating {
    margin-bottom: 1.25rem;
}

#rating {
    display: inline-block;
    font-size: 1.5rem;
    margin-right: 1rem;
}

.rating span {
    font-size: 1.5rem;
    color: #aaa;
}

.movieMeta,
.bookMeta {
    font-size: 1.4rem;
    color: #494949;
    line-height: 1.6;
    padding-right: 2rem;
}

.subMark {
    margin-bottom: 2.5rem;
}

.link-group {
    display: block;
    margin-top: 1rem;
    font-size: 1.4rem;
    color: #42bd56;
}

.book_linkGroup {
    margin-top: 1.25rem;
    margin-bottom: 2.5rem;
}

.book_linkGroup .link-group {
    margin: 0;
    padding: 1rem;
    border-top: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    margin-top: -1px;
}

.subMark a {
    flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    font-size: 1.5rem;
    color: #ffb712;
    border: 1px solid #ffb712;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}

.mginRg_85 {
    margin-right: .85rem;
}

.sub_intro {
    margin-bottom: 2.5rem;
}

.sub_intro>h3 {
    margin-bottom: 1.25rem;
}

.sub_intro>p {
    font-size: 1.5rem;
    color: #494949;
}

.sub_intro>p.onlyShow3Row {
    /* 只能显示3行 */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.sub_intro>a {
    color: #42bd56;
}

.celebrities>h3 {
    color: #aaa;
    margin-bottom: 1.25rem;
}

.celebritie_info>ul {
    white-space: nowrap;
    overflow-x: auto;
}

.celebritie_info>ul::-webkit-scrollbar {
    background-color: transparent;
}

.celebritie {
    display: inline-block;
    margin-right: .85rem;
}

.celebritie:last-of-type {
    margin-right: 0;
}


.celebritie a {
    display: block;
    width: 6.5rem;
}

.celebritie img {
    width: 100%;
}

.celebritie span {
    display: block;
    font-size: 1.3rem;
    margin-top: .67rem;
    text-align: center;
    color: #494949;
}

.celebritie span:last-of-type {
    color: #aaa;
}

.tags li {
    display: inline-block;
    margin-top: .85rem;
    margin-right: .85rem;
}

.tags li a {
    display: block;
    font-size: 1.5rem;
    padding: 0.4rem 1rem;
    color: #494949;
    background-color: #f5f5f5;
    -webkit-border-radius: 1.5rem;
    -moz-border-radius: 1.5rem;
    border-radius: 1.5rem;
}
</style>