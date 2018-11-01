<template>
	<div>
		<homecontainer></homecontainer>
		<!-- <router-link to="item">item</router-link>
		<router-link to="score">score</router-link> -->
	</div>
</template>
<script>
// import itemcontainer from '@/components/itemcontainer'
import homecontainer from '@/components/homecontainer'
import { locals } from '@/utils'

export default {
	name: 'home',
	components: {
		homecontainer,
	},
	created: function(){
		// locals.set('ws1', 'hahah')
		// locals.set('ws2', ['a', 'b'])
		// locals.set('ws3', {data: [{a:1,b:2},{c:1,d:2}]})
		// var ws1 = locals.get('ws1')
		// var ws2 = locals.get('ws2')
		// var ws3 = locals.get('ws3')
		// console.log(ws1)
		// console.log(ws2)
		// console.log(ws3)
		// locals.remove('ws21')
	}
}
</script>
<style scoped>

</style>