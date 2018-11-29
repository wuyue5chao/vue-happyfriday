<template>
	<div>
		<homecontainer></homecontainer>
		<!-- <router-link to="item">item</router-link>
		<router-link to="score">score</router-link> -->
		<!-- <div class="test">
			<div class="menu" :class="{'menu-fixed': showMenu}">menu</div>
			<div class="box">vue监听滚动事件实现滚动监听</div>
			<p>hahaha</p>
		</div> -->
		
	</div>
</template>
<script>
// import itemcontainer from '@/components/itemcontainer'
import homecontainer from '@/components/homecontainer'
import { locals } from '@/utils'

export default {
	name: 'home',
	data(){
		return {
			scroll: null,
			showMenu: false  // 是否显示固定菜单
		}
	},
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
	},
	mounted: function(){
		window.addEventListener('scroll', this.menuFixed)
	},	
	methods: {
		menuFixed: function(){
			this.scroll = document.documentElement.scrollTop || document.body.scrollTop
			// console.log(this.scroll)
			if(this.scroll > 50){
				this.showMenu = true
			}else{
				this.showMenu = false
			}
		}
	}
}
</script>
<style scoped>
.menu-fixed{
	position: fixed;
	top: 0;
	left: 0;
}
.menu{
	background: #f5f5f5;
	width: 100%;
	height: 30px;
}
.box{
	width: 100%; 
	height: 700px;
	background: #eee;
}
</style>