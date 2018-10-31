<template>
	<div>
		<p>your score is {{score}}</p>
		<div>{{scoreTips}}</div>
		<br/>
		<router-link to="/">回首页</router-link>
	</div>
</template>
<script>
import {mapState} from 'vuex'
export default {
	name: 'score',
	data(){
		return {
			score: 0,
			scoreTips: '',
			scoreTipsArr: ['竟然全错了', '你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
			rightAnswer: [2, 7, 12, 13, 18],
		}
	},
	computed: mapState(['answerid']),
	created: function(){
		this.computedScore()
		this.getScoreTip()
	},
	methods: {
		computedScore: function(){
			this.answerid.forEach((item, index) => {
				if(item == this.rightAnswer[index]){
					this.score += 20
				}
			})
		},
		getScoreTip: function(){
			let index = Math.ceil(this.score/20)
			this.scoreTips = this.scoreTipsArr[index]
		}
	},
}
</script>
<style scoped>

</style>