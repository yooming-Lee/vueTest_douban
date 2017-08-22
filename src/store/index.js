import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import events from './modules/events';
import showTalion from './modules/showTalion';
import movies from './modules/movieList';
import book from './modules/book';
import showHeader from './modules/showHeader';
import subject from './modules/subject';

export default new Vuex.Store({
    modules: {
        events,
        showTalion,
        movies,
        book,
        showHeader,
        subject
    }
});