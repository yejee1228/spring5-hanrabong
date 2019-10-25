"use strict";
var brd = brd || {}
brd = (()=>{
	const WHEN_ERR = '호출된 JS를 찾을 수 없습니다.'
	let _, js, brd_vue_js, router_js, cname
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		brd_vue_js = js+'/vue/brd_vue.js'
		router_js = js+'/cmm/router.js'
		cname = $.cname()
	}
	let onCreate =d=>{
		init()
		$.when(
			$.getScript(brd_vue_js)
			
		)
		.done(()=>{
			
			setContentView()
			$('<a>',{
				href: '#',
		   	    	click: e=>{
		   	    	    alert(cname+'brd 들어옴')
		   	    		e.preventDefault()
			   	    	write()
		   	    	},
		   	    	text : '글쓰기'
		   	    })
		   	    .addClass('nav-link')
		   	    .appendTo('#go_write')
		   	  
			})
		.fail(()=>{
			alert(WHEN_ERR)}
		)
	}
	
	let setContentView =()=>{
			$('head').html(brd_vue.brd_head()),
	   	    $('body').html(brd_vue.brd_body()).addClass('text-center')
	   	    $('#recent_updates .media').remove()
	   	    $('#recent_updates .d-block').remove()
	   	    $('#recent_updates').append('<h1>등록된 글이 없습니다</h1>')
	   	    
	}

	let write=()=>{
		alert('글쓰기로 이동'+ cname)
		$('#brd_write_box').html(brd_vue.brd_write()).addClass('text-center')
		$('#suggestions').remove()
		$('#id_box').val(cname)
		
	}
		return {onCreate}
	})();
