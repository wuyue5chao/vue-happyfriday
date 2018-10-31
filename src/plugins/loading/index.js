// import Loading from './loading'

/*Loading.install = function(Vue){
	Vue.component(Loading.name, Loading)
}

export default Loading*/

import LoadingComponent from './loading.vue'

let $vm

export default{
	install(Vue, options){
		if(!$vm){
			const LoadingPlugin = Vue.extend(LoadingComponent)

			$vm = new LoadingPlugin({
				el: document.createElement('div')
			})

			document.body.appendChild($vm.$el)
		}

		$vm.show = false

		let loading = {
			show(text){
				$vm.show = true
				$vm.text = text
			},
			hide(){
				$vm.show = false
			}
		}

		if(!Vue.$loading){
			Vue.$loading = loading
		}

		Vue.mixin({
			created(){
				this.$loading = Vue.$loading
			}
		})
	}
}