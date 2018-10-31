import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
	level: '第12周',
	itemNum: 1,
	itemDetail: null,
	itemLength: 0,
	allTime: 0,
	timer: '',
	answerid: []
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})