import axios from 'axios';

const state = {
    subject: {},
    classify: ''
};

const mutations = {
    getSubject(state, payload) {
        state.classify = payload.classify;
        state.subject = payload.res;
    }
};

const getters = {
    subjectMeta: state => {
        if (state.classify == 'movie/subject') {
            return state.subject.year + ' /' +
                state.subject.genres.join(' / ') + ' /' +
                state.subject.directors.map(item => item.name).join(' / ') + ' /' +
                state.subject.casts.map(item => item.name).join(' / ') + ' /' +
                state.subject.year +
                (state.subject.countries.join(' / ')) + '上映';
        } else if (state.classify == 'book') {
            return state.subject.author.join(' / ') +
                state.subject.translator.join(' / ') + ' / ' +
                state.subject.publisher + ' / ' +
                state.subject.pages + '页 / ' +
                state.subject.binding + ' / ' +
                state.subject.price + '元 / ' +
                state.subject.pubdate;
        }
    }
    // celebrities: state => {
    //     return state.subject.directors.concat(state.subject.casts);
    // }
};

const actions = {
    getSubject: ({
        commit
    }, data) => {
        data.type = data.type == 'movie' ? (data.type + '/subject') : data.type;
        axios.get('/api/' + data.type + "/" + data.id).then((res) => { // /api/(movie/subject)或(book)/26270502  ---- 【/api === https://api.douban.com/v2】
            commit({
                type: 'getSubject',
                classify: data.type,
                res: res.data
            });
        }).catch((err) => {
            console.log(err);
        })
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}