import axios from 'axios'

export default {
	addNum({commit, state}, id){
		commit('REMBER_ANSWER', id)
		if(state.itemNum < state.itemDetail.length){
			commit('ADD_ITEMNUM', 1)
		}
	},
	initializeDate({commit}){
		commit('INITIALIZE_DATA')
	},
	getData({commit, state}){
		axios.get('/static/data.json').then(data => {
			console.log(data)
			commit('SET_DATA', data.data)
		})
	}
}