const ADD_ITEMNUM = 'ADD_ITEMNUM'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const SET_DATA = 'SET_DATA'

export default {
	// 获取题目信息
	[SET_DATA](state, v){
		state.itemDetail = v
		state.itemLength = v.length
	},
	// 点击进入下一题
	[ADD_ITEMNUM](state, num) {
		state.itemNum += num
	},
	// 记录答案
	[REMBER_ANSWER](state, id) {
		state.answerid.push(id)
		console.log(state.answerid)
	},
	// 记录做题时间
	[REMBER_TIME](state) {
		state.timer = setInterval(() =>{
			state.allTime++
		}, 1000)
	},
	// 初始化信息
	[INITIALIZE_DATA](state) {
		state.itemNum = 1
		state.allTime = 0
		state.answerid = []
	}
}