import axios from 'axios';

// 获取当前时间 Begin：
var nowDate = new Date();
var year = nowDate.getFullYear();
var month = nowDate.getMonth() + 1;
if (month >= 1 && month <= 9) {
    month = '0' + month;
}
var date = nowDate.getDate();
if (date >= 1 && date <= 9) {
    date = '0' + date;
}
// 获取当前时间 End
var lastDate = 0;

const state = {
    events: [],
    year: 2017,
    month: "07",
    date: "12",
};

const mutations = {
    loadEvents(state, payload) {
        lastDate = (new Date(state.year, parseInt(state.month), 0)).getDate(); // 获取当前月的总天数
        state.date = parseInt(state.date) - 1;
        if (state.date == 0) {
            state.month = parseInt(state.month) - 1;
            state.date = (new Date(state.year, parseInt(state.month), 0)).getDate();
            if (state.month >= 1 && state.month <= 9) {
                state.month = '0' + state.month;
            }
        }

        if (state.date >= 1 && state.date <= 9) {
            state.date = '0' + state.date;
        }
        state.events = state.events.concat(payload.state); // 将数据存储到events中
    }
};

const actions = {
    loadEvents: ({
        commit,
        state
    }) => {
        axios.get('http://localhost:8888/src/data/homeData/' + state.year + '-' + state.month + '-' + state.date + '.json').then(function (res) {
            commit({
                type: "loadEvents",
                state: res.data
            });
        }).catch(function (err) {
            console.log(err);
        });
    }
};

export default {
    state,
    mutations,
    actions
}