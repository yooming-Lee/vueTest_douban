/**
 * 路由控制
 */


import Pages from './components/Pages.vue'; // 主页面
import Home from './components/Home.vue'; // home
import Login from './components/Login.vue';  // 登录
import Register from './components/Register.vue';  // 注册
import Movie from './components/movie/Movie.vue'; // 电影
import Book from './components/book/Book.vue';  // 图书

import Theaters from './components/movie/Theaters.vue';  // 影院热映
import MoreBooks from './components/book/MoreBooks.vue';  // 更多书籍
import Subject from './components/Subject.vue';  // 电影/图书明细

export default [{
        path: '/',
        redirect: '/pages/'
    },
    {
        path: '/pages',
        component: Pages,
        children: [{ // 默认显示home
                path: '',
                redirect: '/pages/home'
            },
            {
                path: 'home',
                name: 'HomeView',
                component: Home
            },
            {
                path: 'movie',
                name: 'MovieView',
                component: Movie
            },
            {
                path: 'book',
                name: 'BookView',
                component: Book
            }
        ]
    },
    {
        path: '*',
        redirect: '/pages/'
    },
    {
        path: '/pages/movie/:movieType',
        name: 'theatersView',
        component: Theaters
    },
    {
        path: '/pages/book/:bookType',
        name: 'moreBooksView',
        component: MoreBooks
    },
    {
        path: '/pages/:type/subject/:id',
        name: 'subjectView',
        component: Subject
    },
    {
        path: '/login',
        name: 'loginView',
        component: Login
    },
    {
        path: '/register',
        name: 'registerView',
        component: Register
    }
]