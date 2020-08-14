const state = {
    roomName:null
}

const mutations = {
    setRoom(state , name){
        state.roomName = name
    }
}

const getters = {
    getRoom:state => state.roomName
}

const actions = {
    createRoom(context , name){
        context.commit('setRoom' , name)
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}