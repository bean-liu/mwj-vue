import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var propertyUser = {};
var propertyUsername = window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username;
Object.defineProperty(propertyUser, "username", {
    get() {
        console.log('initUsername')
        return propertyUsername
    },
    set(newValue) { propertyUsername = newValue; },
    enumerable: true,
    configurable: true
});

export default new Vuex.Store({
    state: {
        user: {
            // username:window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
            username: propertyUser.username

        }
    },
    mutations: {
        login(state, user) {
            state.user = user
            window.localStorage.setItem('user', JSON.stringify(user))
        }
    }


})