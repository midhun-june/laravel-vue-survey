import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            data :{},
            token: sessionStorage.getItem('TOKEN')
            
        },
  
      
    },
    getters: {
        isLoading: state => state.isLoading,
        auth(state) {
            return state.user;
        }
    },
    actions: {

    register({commit},user){

        return fetch('http://localhost:8000/api/register',{
            headers:{
                "Content-Type": "application/json",
                Accept:"application/json"
            },
            method:'POST',
            body:JSON.stringify(user),
        })
        .then((response)=> response.json())
        .then((response)=> {
          commit('setUser',response);
          return response;
        })
    }

    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.clear();

        },
        setUser: (state,userData) =>{

            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN',userData.token)


        }
    },
    modules: {}
})

export default store;