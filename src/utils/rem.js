/**
 * [description]
 * @param  {[type]} doc [description]
 * @param  {[type]} win [description]
 * @return {[type]}     [description]
 * screenWidth = 375px
 * html font-size --> 100 * (375/750) = 50px
 * div font-size 14px --> 14/50 = 0.28rem
 */
(function(doc, win){
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function(){
			var clientWidth = docEl.clientWidth
			if(!clientWidth) return
			// docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
			if(clientWidth >= 750){
				docEl.style.fontSize = '100px'
			}else{
				docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
			}
		}
	if(!doc.addEventListener) return
	win.addEventListener(resizeEvt, recalc, false)
	doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)