import axios from 'axios';

const state = {
    hotMovies: [],
    freeMovies: [],
    latestMovies: [],
    movieTags: [{
            "color": "#FF4055",
            "href": "https://m.douban.com/doulist/968362/",
            "title": "同时入选IMDB250和豆瓣电影250的电影"
        },
        {
            "color": "#C34",
            "href": "https://m.douban.com/doulist/16002/",
            "title": "带你进入不正常的世界"
        },
        {
            "color": "#FFAC2D",
            "href": "https://m.douban.com/doulist/190343/",
            "title": "用电【影】来祭奠逝去的岁月"
        },
        {
            "color": "#3BA94D",
            "href": "https://m.douban.com/doulist/1125971/",
            "title": "女孩们的故事【电影】"
        },
        {
            "line": true
        },
        {
            "color": "#42BD56",
            "href": "https://m.douban.com/doulist/4253902/",
            "title": "科幻是未来的钥匙——科幻启示录【科幻题材】"
        },
        {
            "color": "#FFC46C",
            "href": "https://m.douban.com/doulist/121326/",
            "title": "美国生活面面观"
        },
        {
            "color": "#ff4055",
            "href": "https://m.douban.com/doulist/37479562/",
            "title": "2015终极期待"
        },
        {
            "color": "#2384E8",
            "href": "https://m.douban.com/doulist/458087/",
            "title": "经典韩国电影——收集100部"
        }
    ],
    baseUrl: 'https://m.douban.com/movie/',
    movieTypes: [{
            "title": '经典',
            "url": 'classic'
        },
        {
            "title": '冷门佳片',
            "url": 'underrated'
        },
        {
            "title": '豆瓣高分',
            "url": 'doubantop'
        },
        {
            "title": '动作',
            "url": 'action'
        },
        {
            "title": '喜剧',
            "url": 'comedy'
        },
        {
            "title": '爱情',
            "url": 'love'
        },
        {
            "title": '悬疑',
            "url": 'mystery'
        },
        {
            "title": '恐怖',
            "url": 'horror'
        },
        {
            "title": '科幻',
            "url": 'scifi'
        },
        {
            "title": '治愈',
            "url": 'sweet'
        },
        {
            "title": '文艺',
            "url": 'artfilm'
        },
        {
            "title": '成长',
            "url": 'youth'
        },
        {
            "title": '动画',
            "url": 'animation'
        },
        {
            "title": '华语',
            "url": 'chinese'
        },
        {
            "title": '欧美',
            "url": 'western'
        },
        {
            "title": '韩国',
            "url": 'korean'
        },
        {
            "title": '日本',
            "url": 'japanese'
        }
    ],
    intheaters: [],
    comingSoon: [],
    top250: []
}

const mutations = {
    getMovies(state, payload) {
        switch (payload.tag) {
            case "hotMovies":
                state.hotMovies = payload.res;
                break;
            case "freeMovies":
                state.freeMovies = payload.res;
                break;
            case "latestMovies":
                state.latestMovies = payload.res;
                break;
            default:
                state.hotMovies = payload.res;
        }
    },
    getAllMovie(state, payload) {
        switch (payload.tag) {
            case "in_theaters":
                state.intheaters = payload.res;
                break;
            case "coming_soon":
                state.comingSoon = payload.res;
                break;
            case "top250":
                state.top250 = payload.res;
                break;
            default:
                state.intheaters = payload.res;
        }
    }
}

const actions = {
    getMovies: ({
        commit
    }) => {
        // https://api.douban.com/v2/movie/in_theaters?count=8
        axios.get('/api/movie/in_theaters?count=8').then((res) => { // 注意：api前面必须添加：/
            commit({
                type: 'getMovies',
                tag: 'hotMovies',
                res: res.data.subjects
            });
        }).catch((err) => {
            console.log(err);
        });
        axios.get('/api/movie/coming_soon?count=8').then((res) => {
            commit({
                type: 'getMovies',
                tag: 'freeMovies',
                res: res.data.subjects
            });
        }).catch((err) => {
            console.log(err);
        });
        axios.get('/api/movie/top250?count=8').then((res) => {
            commit({
                type: 'getMovies',
                tag: 'latestMovies',
                res: res.data.subjects
            });
        }).catch((err) => {
            console.log(err);
        });
    },
    getAllMovie: ({
        commit
    }, data) => {
        axios.get('/api/movie/' + data).then((res) => {
            commit({
                type: 'getAllMovie',
                tag: data,
                res: res.data.subjects
            });
            resolve(res);
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