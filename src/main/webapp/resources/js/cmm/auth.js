"use strict";
var auth = auth || {};
auth = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
    let _, js, img, css, auth_vue_js,brd_js, router_js, cookie_js, adm_js
    let init =()=>{
        _ = $.ctx()
        js = $.js()
        img = $.img()
        css = $.css()
        auth_vue_js= js +'/vue/auth_vue.js'
        brd_js = js +'/brd/brd.js'
        router_js = js +'/cmm/router.js'
        cookie_js = js +'/cmm/cookie.js'
        adm_js = js +'/adm/adm.js'
    }
    let onCreate =()=>{
        init()
        $.when(
        	$.getScript(auth_vue_js),
        	$.getScript(brd_js),
        	$.getScript(router_js),
        	$.getScript(cookie_js),
        	$.getScript(adm_js)
        		
        ).done(()=>{
        	setContentView()
        	$('#a_go_join').click(e=>{
	        	e.preventDefault();
	        	$('head').html(auth_vue.join_head()),
	    	    $('body').html(auth_vue.join_body())
	    	    $('#cId').keyup(()=>{
	    	    	if($('#cId').val().length > 2){
	    	    		$.ajax({
	    	            	url : _+ '/customers/'+$('#cId').val()+'/exist',
	    	            	type : 'GET',
	    	            	contentType : 'application/json',
	    	            	success : d => {
	    	            		if(d.msg==='SUCCESS'){
	    	            			$('#dupl_check')
	    	            			.val('사용가능한 아이디임다.')
	    	            			.css('color','gray')
	    	            		}else{
	    	            			$('#dupl_check')
	    	            			.val('이미 사용중인 아이디임다.')
	    	            			.css('color','red')
	    	            		}
	    	            		
	    	            	},
	    	            	error : e => {
	    	            		alert('AJAX 실패1')
	    	            	}
	    	            })
    	    	}
    	    	
    	    })
	        $('<button>',{
	        		text : '회원가입',
	        		href : '#',
	        		click : e=>{
	        			e.preventDefault();
	        			join()
	        		}
	        })	
	        .addClass('btn btn-primary btn-lg btn-block')
	        .appendTo('#btn_join')
	        })
        
       }).fail(()=>{
       	alert(WHEN_ERR)
       })
        
    }
    let setContentView=()=>{
    	$('head').html(auth_vue.login_head({css: $.css()})),
		$('body').html(auth_vue.login_body({img : $.img()}))
		.addClass('text-center')
    	login()
    	access()
    }
    let join=()=>{
        $.ajax({
        	url : _+ '/customers/',
        	type : 'POST',
        	dataType : 'json',
        	data : JSON.stringify({
        		cid : $('#cId').val(), 
        		cpw : $('#cPw').val(),
				cname : $('#cname').val(), 
				cnum: $('#cnum').val()}),
        	contentType : 'application/json',
        	success : d => {
        		alert('ajax 성공  >'+d.msg)
        		$('head').html(auth_vue.login_head({css: $.css()})),
				$('body').html(auth_vue.login_body({img : $.img()}))
				.addClass('text-center')
        		login()
        		
        	},
        	error : e => {
        		alert('AJAX 실패2')
        	}
        })
    }
    

    let login =()=>{
		$('<button>',{
			type : 'submit',
			text: '로그인',
			click: e=>{
				e.preventDefault()
				$.ajax({
					url : _+'/customers/'+$('#inputcid').val(),
					type: 'POST',
					dataType: 'json',
					data : JSON.stringify({
						cid : $('#inputcid').val(), 
						cpw : $('#inputPassword').val()
						}),
                	contentType : 'application/json',
                	success : d =>{
                		setCookie("cname",d.cname)
                		alert(getCookie("cname")+'님 환영합니다')
                		brd.onCreate()
                	},
                	error: e =>{
                		alert('실풰')
                	}
                
				})
			}
		})
		.addClass('btn btn-lg btn-primary btn-block')
		.appendTo('#btn_login')
    }
    let access = ()=>{
    	$('#a_go_admin')
    	.css({color:"gray"})
    	.click(()=>{
    		let ok = confirm('사원입니까?')
        	if(ok){
        		/*let aid = prompt('사원번호를 입력하시오');
        		let apw;
        		$.ajax({
        			url:_+'/admins/'+aid,
        			type: 'POST',
        			dataType:'JSON',
        			data:JSON.stringify({aid: aid, apw : prompt('사원비번을 입력하시오')}),
        			contentType:'application/json',
        			success: d=>{
        				if(d.msg === 'SUCCESS'){*/
        					adm.onCreate()
        				/*}else{
        					alert('사원번호와 비밀번호를 잘 생각해 보시오.')	
        					app.run(_)
        				}
        				
        			},
        			error: e =>{
        				alert('access 자체를 실패했다.')
        			}
        		})*/
        	}
    	})
    }

    return {onCreate, join, login}
})();