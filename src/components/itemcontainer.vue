<template>
	<section>
		<header>
			<span>题目{{itemNum}}</span>
		</header>
		<div v-if="itemLength>0">
			<p>{{itemDetail[itemNum-1].topic_name}}</p>
			<ul class="list">
				<li v-for="(item,index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index, item.topic_answer_id)">
					<span class="block" :class="{'selected': choosedNum===index}">{{chooseType(index)}}</span>
					<span>{{item.answer_name}}</span>
				</li>
			</ul>
		</div>
		<span @click="nextItem" v-if="itemNum < itemLength">下一题</span>
		<span @click="submitAnswer" v-else>提交</span>
	</section>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
	name: 'itemcontainer',
	data(){
		return {
			choosedNum: null,
			choosedId: null
		}
	},
	created: function(){
		this.getData()
	},
	computed: {
		...mapState(['itemNum', 'itemDetail', 'itemLength'])
	},
	components: {

	},
	methods: {
		...mapActions(['addNum', 'initializeDate', 'getData']),
		nextItem: function(){
			if(this.choosedNum != null){
				this.choosedNum = null
				// 保存答案 题目 索引加一 跳至下一题
				this.addNum(this.choosedId)
			}else{
				alert('请选择答案')
			}
		},
		choosed: function(index, id){
			this.choosedNum = index
			this.choosedId = id
		},
		chooseType: function(type){
			switch(type){
				case 0: return 'A';
				case 1: return 'B';
				case 2: return 'C';
				case 3: return 'D';
			}
		},
		submitAnswer: function(){
			if(this.choosedNum !== null){
				this.addNum(this.choosedId)
				clearInterval(this.timer)
				this.$router.push('score')
			}else{
				alert('请选择答案')
			}
			
		}
	},
}
</script>
<style scoped>
.list > li{padding: 5px 0;}
.block{margin-right: 10px; display: inline-block; width: 20px; height: 20px; border:1px solid #ddd; border-radius: 50%; text-align: center; line-height: 20px;}
.block.selected{background: red; color: #fff;}
</style>