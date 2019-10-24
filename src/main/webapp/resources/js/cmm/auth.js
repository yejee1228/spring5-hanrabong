"use strict";
var auth = auth || {};
auth = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
    let _, js,auth_vue_js
    let init = ()=>{
        _ = $.ctx()
        js = $.js()
        auth_vue_js= js +'/vue/auth_vue.js'
    }
    let onCreate =()=>{
        init()
        $.getScript(auth_vue_js).done(()=>{
        	setContentView()
        	$('#a_go_join').click(e=>{
	        	e.preventDefault();
	            alert('회원가입 클릭!!')
	            join()
        	})
        }).fail(()=>{
            	alert(WHEN_ERR)
            
        })
    }
    let setContentView=()=>{
    	login()
    }
    let join=()=>{
    	$.getScript(auth_vue_js).done(()=>{
        	$('head').html(auth_vue.join_head()),
    	    $('body').html(auth_vue.join_body())
	        $('<button>',{
	        		text : 'Continue to checkout',
	        		href : '#',
	        		click : e=>{
	        			e.preventDefault();
	        			let data = {cid : $('#cId').val(), cpw : $('#cPw').val(), cname : $('#cname').val()}
	                    $.ajax({
	                    	url : _+ '/hcust/join',
	                    	type : 'POST',
	                    	dataType : 'json',
	                    	data : JSON.stringify(data),
	                    	contentType : 'application/json',
	                    	success : d => {
	                    		alert('ajax 성공  >'+d.cid+', '+d.cpw + ', '+d.cname)
	                    		login()
	                    	},
	                    	error : e => {
	                    		alert('회원가입 실패')
	                    	}
	                    })
	                }
	        })	
        .addClass('btn btn-primary btn-lg btn-block')
        .appendTo('#btn_join')
        })
        .fail(()=>{
        	alert(WHEN_ERR)
        })
    }
    let login =()=>{
    	let x = {css: $.css(), img : $.img(), js : $.js()}
		$('head').html(auth_vue.login_head(x)),
		$('body').html(auth_vue.login_body(x))
		.addClass('text-center')
		$('<button>',{
			type : 'submit',
			text: '로그인',
			click: e=>{
				e.preventDefault()
				let data = {cid : $('#inputcid').val(), cpw : $('#inputPassword').val()}
				$.ajax({
					url : _+'/hcust/login',
					type: 'POST',
					dataType: 'json',
					data : JSON.stringify(data),
                	contentType : 'application/json',
                	success : d =>{
                		alert(d.cname +'님 환영합니다.')
                		$('body').html('<h1>마이페이지<br/></h1>'+
                				'id : '+d.cid+',pw : '+d.cpw+',이름: '+d.cname+',회원번호:'+d.cnum)
                		.addClass('text-center')},
                	error: e =>{
                		alert('실풰')
                	}
                
				})
			}
		})
		.addClass('btn btn-lg btn-primary btn-block')
		.appendTo('#btn_login')
    }
   
    return {onCreate, join, login}
})();