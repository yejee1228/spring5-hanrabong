"use strict";
var adm = adm||{}
adm = (()=>{
	const WHEN_ERR = '호출된 JS를 찾을 수 없습니다. brd'
	let _, js, img, css, adm_vue_js
	let init =()=>{
			_ = $.ctx()
		    js = $.js()
		    img = $.img()
	        css = $.css()
			adm_vue_js = js+'/vue/adm_vue.js'
		}
	let onCreate=()=>{
		init()
		setContentView()
	}
	let setContentView=()=>{
		alert("adm_js 드러옴")
	} 
	return {onCreate}
})()