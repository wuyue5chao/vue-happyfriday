<template>
	<div>
		<itemcontainer></itemcontainer>

		<br/>
		<router-link to="/">回首页</router-link>
	</div>
</template>
<script>
import itemcontainer from '@/components/itemcontainer'
export default {
	name: 'item',
	components: {
		itemcontainer,
	},
}
</script>
<style scoped>

</style>