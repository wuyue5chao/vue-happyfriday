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
export default {
	name: 'home',
	components: {
		homecontainer,
	},
}
</script>
<style scoped>

</style>