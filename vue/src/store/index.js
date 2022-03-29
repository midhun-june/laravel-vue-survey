import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            data :{
                name : 'Alex',
                loggedIn: true
            },
            token:null
        },
        isLoading:false
      
    },
    getters: {
        isLoading: state => state.isLoading,
        auth(state) {
            return state.user.data
        }
    },
    actions: {

        setLoading({commit}, type){
            commit('setLoading', type);
          },

    },
    mutations: {

        setLoading ( state, type ){
            state.isLoading = type;
          },
    },
    modules: {}
})

export default store;