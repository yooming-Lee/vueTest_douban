import axios from 'axios'

const state = {
    fiction: [],
    nonfiction: [],
    doubanBook: [],
    bookTags: [{
            "color": "#c34",
            "url": "https://m.douban.com/doulist/10372/",
            "title": "小波看书"
        },
        {
            "color": "#4F9DED",
            "url": "https://m.douban.com/doulist/105583/",
            "title": "村上春树周边"
        },
        {
            "color": "#42BD56",
            "url": "https://m.douban.com/doulist/99294/",
            "title": "我凭名字认定了你"
        },
        {
            "color": "#FF4055",
            "url": "https://m.douban.com/doulist/35573/",
            "title": "不可饶恕的女人们"
        },
        {
            "line": true
        },
        {
            "color": "#FFAC2D",
            "url": "https://m.douban.com/doulist/38088147/",
            "title": "爱欲书"
        },
        {
            "color": "#2384E8",
            "url": "https://m.douban.com/doulist/645579/",
            "title": "他们还写侦探小说"
        },
        {
            "color": "#3BA94D",
            "url": "https://m.douban.com/doulist/192653/",
            "title": "人生识字始忧患"
        },
        {
            "color": "#FFC46C",
            "url": "https://m.douban.com/doulist/89925/",
            "title": "詩歌書店"
        }
    ],
    baseUrl: 'https://m.douban.com/book/',
    bookTypes: [{
            "title": "小说",
            "url": "novel"
        },
        {
            "title": "爱情",
            "url": "love"
        },
        {
            "title": "历史",
            "url": "history"
        },
        {
            "title": "外国文学",
            "url": "foreign"
        },
        {
            "title": "青春",
            "url": "youth"
        },
        {
            "title": "励志",
            "url": "motivation"
        },
        {
            "title": "随笔",
            "url": "essay"
        },
        {
            "title": "传记",
            "url": "bio"
        },
        {
            "title": "奇幻",
            "url": "fantasy"
        },
        {
            "title": "经管",
            "url": "business"
        }
    ],
    fictions: [],
    nonfictions: [],
    youth: []
}

const mutations = {
    getBooks(state, payload) {
        switch (payload.tag) {
            case "fiction":
                state.fiction = payload.res
                break;
            case "nonfiction":
                state.nonfiction = payload.res
                break;
            case "doubanBook":
                state.doubanBook = payload.res
                break;
            default:
                state.fiction = payload.res
        }
    },
    getMoreBooks(state, payload) {
        switch (payload.tag) {
            case "虚构类":
                state.fictions = payload.res;
                break;
            case "非虚构类":
                state.nonfictions = payload.res;
                break;
            case "青春":
                state.youth = payload.res;
                break;
            default:
                state.fictions = payload.res;
                break;
        }
    }
}

const actions = {
    getBooks: ({
        commit
    }) => {
        axios.get('/api/book/search?q=虚构类&count=8').then((res) => {
            commit({
                type: 'getBooks',
                tag: 'fiction',
                res: res.data.books
            })
        }).catch((err) => {
            console.log(err);
        });
        axios.get('/api/book/search?q=非虚构类&count=8').then((res) => {
            commit({
                type: 'getBooks',
                tag: 'nonfiction',
                res: res.data.books
            })
        }).catch((err) => {
            console.log(err);
        });
        axios.get('/api/book/search?q=青春&count=8').then((res) => {
            commit({
                type: 'getBooks',
                tag: 'doubanBook',
                res: res.data.books
            })
        }).catch((err) => {
            console.log(err);
        })
    },
    getMoreBooks: ({
        commit
    }, data) => {
        axios.get('/api/book/search?q=' + data).then((res) => {
            commit({
                type: 'getMoreBooks',
                tag: data,
                res: res.data.books
            })
        }).catch((err) => {
            console.log(err);
        });
    }
}

export default {
    state,
    mutations,
    actions
}