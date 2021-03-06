"use strict";
var brd = brd || {}
brd = (()=>{
	const WHEN_ERR = '호출된 JS를 찾을 수 없습니다.'
	let _, js, brd_vue_js, router_js, cid, cname
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		brd_vue_js = js+'/vue/brd_vue.js'
		router_js = js+'/cmm/router.js'
		cname = $.cname()
		cid = $.cid()
	}
	let onCreate =d=>{
		init()
		$.when(
			$.getScript(brd_vue_js)
		)
		.done(()=>{
			setContentView()
			navigate()
			})
		.fail(()=>{
			alert(WHEN_ERR)}
		)
	}
	
	let setContentView =()=>{
			alert('setcontent')
			$('head').html(brd_vue.brd_head()),
	   	    $('body').html(brd_vue.brd_body()).addClass('text-center')
	   	    recent_updates()
	   	    
	}
	let recent_updates =()=>{
		alert('recent')
		$('#recent_updates .media').remove()
		$('#suggestions').remove()
   	    $('#recent_updates .d-block').remove()
   	    $.getJSON(_+'/brds/', d=>{
   	    	let i = 0
   	   	    let res = ''
   			$.each(d,(i,j)=>{
   				$('<div class="media text-muted pt-3">'+
   	   	        '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
   	   	  		'          <p id = "id_'+i+'" class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
   	   	  		'          </p>'+
   	   	  		'        </div>').appendTo('#recent_updates')
   	   	  		$('<strong class="d-block text-gray-dark"><a href ="#" style=color:gray>@'+j.writer+'</a></strong>')
   	   	  		.appendTo('#id_'+i)
   	   	  		.click(()=>{
   	   	  			alert(j.writer)
   	   	  		})
   	   	  		$('<a href ="#" style=color:black>'+j.title+'</a>')
   	   	  		.appendTo('#id_'+i)
   	   	  		.click(()=>{
   	   	  			alert(j.content)
   	   	  			detail(j)
   	   	  		})
   			})
   			
   	    })
   	    
  		
   	    
	}

	let write=()=>{
		$('#recent_updates').html(brd_vue.brd_write()).addClass('text-center')
		$('#suggestions').remove()
		$('#write_button input[name="writer"]').val(cname)
		$('<input>',{
			value: "cancel",
			style: "float:right;width:100px;margin-right:10px"
			})
		.addClass("btn btn-danger")
		.appendTo('#write_button')
		.click(()=>{
			setContentView()
		})
		
		$('<input>',{
			type : 'submit',
			value: '글쓰기',
			style: "float:right;width:100px;margin-right:10px"
		})
		.addClass("btn btn-primary")
		.appendTo('#write_button')
		.click(e=>{
			e.preventDefault()
			let json = {
				writer : $('#write_button input[name="writer"]').val(),
				title : $('#write_button input[name="title"]').val(),
				content : $('#write_button textarea[name="content"]').val()
			}
			$.ajax({
				url: _+'/brds/',
				type: 'POST',
				dataType: 'json',
				data: JSON.stringify(json),
				contentType:'application/json',
				success: d=>{
					$('#recent_updates div.container-fluid').remove()
					recent_updates()	
				},
				error: e=>{
					alert('글쓰기 실패')
				}
			})
		})
	}
	let navigate=()=>{
		$('<a>',{
			href: '#',
	   	    	click: e=>{
	   	    		e.preventDefault()
		   	    	write()
	   	    	},
	   	    	text : '글입력하기'
	   	    })
	   	    .addClass('nav-link')
	   	    .appendTo('#go_write')

	}
	let detail=x=>{
		alert('넘기는 num값'+x.brdnum)
		$('#recent_updates').html(brd_vue.brd_write()).addClass('text-center')
		$('#suggestions').remove()
		$('#recent_updates .container-fluid h1').html('상세보기')
		$('#write_button input[name="writer"]').val(x.writer)
		$('#write_button input[name="title"]').val(x.title)
		$('#write_button textarea[name="content"]').val(x.content)
		$('<input>',{
			value: "삭제",
			style: "float:right;width:100px;margin-right:10px"
			})
		.addClass("btn btn-danger")
		.appendTo('#write_button')
		.click(e=>{
			e.preventDefault()
			deleteBrd(x)
		})
		
		$('<input>',{
			type : 'submit',
			value: '수정',
			style: "float:right;width:100px;margin-right:10px"
		})
		.addClass("btn btn-primary")
		.appendTo('#write_button')
		.click(e=>{
			e.preventDefault
			updateBrd(x)
		})
	}
	let updateBrd=x=>{
		$.ajax({
			url: _+'/brds/'+x.brdnum,
			type: 'PUT',
			dataType: 'json',
			data: JSON.stringify({
				brdnum : x.brdnum,
				writer : x.writer,
				title : $('#write_button input[name="title"]').val(),
				content : $('#write_button textarea[name="content"]').val()}),
			contentType:'application/json',
			success: d=>{
				alert("dd")
				$('#recent_updates div.container-fluid').remove()
				recent_updates(d)	
			},
			error: e=>{
				alert('수정실패')
			}
		})
		
	}
	let deleteBrd=x=>{
		$.ajax({
			url: _+'/brds/'+x.brdnum,
			type: 'DELETE',
			dataType: 'json',
			data: JSON.stringify({brdnum : x.brdnum}),
			contentType: 'application/json',
			success: d=>{
				$('#recent_updates div.container-fluid').remove()
				setContentView()	
				alert(x.writer+'님,'+x.writer+'님의 글이 삭제되었습니다.')
			},
			error: e =>{
				alert('삭제실패')
			}
		})
	}
		return {onCreate}
	})();
