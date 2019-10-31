"use strict";
var navi = navi || {}
navi =(()=>{
	const WHEN_ERR = '호출된 JS를 찾을 수 없습니다.navi'
	let _, js, img, css, cid, brd_js, auth_js
	let init =()=>{
		_ = sessionStorage.getItem('ctx')
	    js = _+'/resources/js'
	    img = _+'/resources/img'
        css = _+'/resources/css'
		brd_js = js +'/brd/brd.js'
		auth_js = js+'/cmm/auth.js'
	}
	
	let onCreate=()=>{
		$.when(
			$.getScript(auth_js),
			$.getScript(brd_js)
		).done(()=>{
			init(),
			setContentView()
		}).fail(()=>{
			alert("실패")
		})
	}

	let setContentView=()=>{
		$('<a>',{
			href: '#',
	   	    text : '글입력하기'
	   	    })
	   	    .addClass('nav-link')
	   	    .appendTo('#go_write')
	   	    .click(e=>{
   	    		e.preventDefault()
	   	    	$.getScript(brd_js, ()=>{
	   	    		brd.write()
	   	    	})
   	    	})
		
		$('<a>',{
			href: '#',
	   	    text : '로그아웃'
	   	    })
	   	    .addClass('nav-link')
	   	    .appendTo('#logout')
	   	    .click(e=>{
		    	e.preventDefault()
		    	alert('로그아웃')
	   	    	deleteCookie()
	   	    	app.run(_)
		    })
	}
	return {onCreate}
})()