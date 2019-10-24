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
	            $.getScript(auth_vue_js).done(()=>{
        	$('head').html(auth_vue.join_head()),
    	    $('body').html(auth_vue.join_body())
	        $('<button>',{
	        		text : 'Continue to checkout',
	        		href : '#',
	        		click : e=>{
	        			e.preventDefault();
	        			existId($('#cId').val())
	        			
	            			
	            		
	        		}
	        })	
        .addClass('btn btn-primary btn-lg btn-block')
        .appendTo('#btn_join')
        })
        .fail(()=>{
        	alert(WHEN_ERR)
        })
        	})
        }).fail(()=>{
            	alert(WHEN_ERR)
            
        })
    }
    let setContentView=()=>{
    	login()
    }
    let join=()=>{
    	let data = {cid : $('#cId').val(), cpw : $('#cPw').val(), 
				cname : $('#cname').val(), cnum: $('#email').val()}
        $.ajax({
        	url : _+ '/hcusts/',
        	type : 'POST',
        	dataType : 'json',
        	data : JSON.stringify(data),
        	contentType : 'application/json',
        	success : d => {
        		alert('ajax 성공  >'+d.msg)
        		login()
        		
        	},
        	error : e => {
        		alert('AJAX 실패2')
        	}
        })
    }
    
    let existId =x=>{
    	alert(x)
        $.ajax({
        	url : _+ '/hcusts/'+x+'/exist',
        	type : 'GET',
        	contentType : 'application/json',
        	success : d => {
        		alert('ajax exist성공  >'+d.msg)
        		if(d.msg==='SUCCESS'){
    				alert('회원가입완료')
        			join()
        		}else{
        			alert('중복된 아이디입니다.')
        		}
        		
        	},
        	error : e => {
        		alert('AJAX 실패1')
        	}
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
					url : _+'/hcusts/'+$('#inputcid').val(),
					type: 'POST',
					dataType: 'json',
					data : JSON.stringify(data),
                	contentType : 'application/json',
                	success : d =>{
                		alert(d.cname +'님 환영합니다.')
                		mypage()},
                	error: e =>{
                		alert('실풰')
                	}
                
				})
			}
		})
		.addClass('btn btn-lg btn-primary btn-block')
		.appendTo('#btn_login')
    }
   let mypage=()=>{
	   $('head').html(auth_vue.mpg_head()),
	    $('body').html(auth_vue.mpg_body()).addClass('text-center')
   }
    return {onCreate, join, login, mypage}
})();