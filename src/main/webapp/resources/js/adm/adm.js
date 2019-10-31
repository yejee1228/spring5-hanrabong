"use strict";
var adm = adm||{}
adm = (()=>{
	const WHEN_ERR = '호출된 JS를 찾을 수 없습니다. brd'
	let _, js, img, css, adm_vue_js, navi_js
	let init =()=>{
			_ = $.ctx()
		    js = $.js()
		    img = $.img()
	        css = $.css()
			adm_vue_js = js+'/vue/adm_vue.js'
			navi_js = js +'/brd/brd.js'
		}
	let onCreate=()=>{
		$.when(
			$.getScript(navi_js)
		).done(()=>{
			init(),
			setContentView()
		}).fail(()=>{
			alert('adm 접근실패')
		})
		
	}
	let setContentView=()=>{
		$('body')
		.empty()
		.append(navi_vue.navi_body())
		navi.onCreate()
		
		$('<table id="customers">'+
		'  <tr>'+
		'    <td id="left"></td>'+
		'    <td id="right"></td>'+
		'  </tr>'+
		'</table>')
		.appendTo('body')
		.css({border: '1px solid #ddd', width: '80%', height: '80%', margin: '0 auto'})
		$('#left')
		.css({border: '1px solid #ddd', width: '20%', 'vertical-align': 'top'})
		.append('<div id = "custManager">고객관리</div>')
		.append('<div>상품등록</div>')
		.append('<div>상품조회</div>')
		.append('<div>상품관리</div>')
		.append('<div>상품삭제</div>')
		$('#left div').css({border: '1px solid #ddd', margin: 'auto 0', 'line-height': '50px'})
		
		$('#custManager')
		.click(()=>{
			custManager()
		})
		
		
	} 
	let custManager=()=>{
		alert('고객관리')
	}
	return {onCreate}
})()