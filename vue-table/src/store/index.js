import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const placeholderURL = "https://jsonplaceholder.typicode.com"

export default new Vuex.Store({
    state: {
        headers: [
            {text: 'id', sortable: true, align: "start", value: 'id'},
            {text: 'Name', value: 'name'},
            {text: 'Body', value: 'body'},
            {text: 'Email', value: 'email'},
        ],
        posts: []
    },
    mutations: {
        setPosts(state, payload) {
            state.posts = payload;
        }
    },
    actions: {
        async getPosts({commit}) {
            const url = new URL("/comments", placeholderURL);
            const res = await fetch(url.toString());
            const posts = await res.json();
            commit("setPosts", posts)
        }
    },
    modules: {}
})
