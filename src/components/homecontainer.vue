<template>
	<section>
		<header>
			<span>{{level}}</span>
		</header>
		<div>
			<p>home logo</p>
			<router-link to="item">开始</router-link>
		</div>
	</section>
</template>
<script>
import {mapState, mapActions} from 'vuex'
export default {
	name: 'homecontainer',
	data(){
		return {

		}
	},
	computed: {
		...mapState(['level']),
	},
	created: function(){
		this.initializeDate()
	},
	methods: {
		...mapActions(['initializeDate'])
	},
}
</script>
<style scoped>

</style>