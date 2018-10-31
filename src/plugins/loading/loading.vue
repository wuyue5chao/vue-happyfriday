<template>
	<div class="loading-box" v-show="show">
		<div class="loading-mask"></div>
		<div class="loading-content">
			<div class="animate"></div>
			<div class="text">{{text}}</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default{
	name: 'Loading',
	data(){
		return{
			
		}
	},
	props: {
		show: Boolean,
		tetx: {
			type: String,
			default: '正在加载中...'
		}
	},
	methods: {

	}
}
</script>
<style type="text/css" scoped>

</style>