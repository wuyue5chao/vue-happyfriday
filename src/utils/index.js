/**
 * utils 公共方法库
 */

export const locals = {
	obj: window.localStorage || false,
	set: function(key, val){
		var arr = {}
		if(this.obj) {
			if(Array.isArray(val)) {
				for (var item in val) {
					arr[item] = val[item]
				}
				// 为数组设置标识
				val = '<array>' + JSON.stringify(arr)
			}else if(typeof val === 'object') {
				// 为对象设置标识
				val = '<json>' + JSON.stringify(val)
			}
			this.obj.setItem(key, val)
			return this.get(key)
		}
		return false
	},
	get: function(key){
		var result
		if(this.obj) {
			result = this.obj.getItem(key)
			if(!result) return false
			if(result.substr(0,6) === '<json>') {
				// 返回对象
				return JSON.parse(result.slice(6))
			}else if(result.substr(0,7) === '<array>') {
				// 返回数组
				var res =  JSON.parse(result.slice(7))
				var arr = []
				for(var item in res){
					arr.push(res[item])
				}
				return arr
			}else {
				// 返回字符串
				return result
			}
		}
		return false
	},
	remove: function(key) {
		if(this.obj) {
			if(!key) return false
			this.obj.removeItem(key)
			return this.get(key)
		}
		return false
	}
}