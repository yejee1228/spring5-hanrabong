"use strict";
var auth = auth || {};
auth = (()=>{
	const WHEN_ERR = '호출하는 JS 파일을 찾지 못했습니다.'
    let _, js,auth_vue_js,brd_js
    let init = ()=>{
        _ = $.ctx()
        js = $.js()
        auth_vue_js= js +'/vue/auth_vue.js'
        brd_js = js +'/brd/brd.js'
    }
    let onCreate =()=>{
        init()
        $.when(
        		$.getScript(auth_vue_js)
        		)
        .done(()=>{
        	setContentView()
        	$('#a_go_join').click(e=>{
	        	e.preventDefault();
	            alert('회원가입 클릭!!')
	            $.getScript(auth_vue_js).done(()=>{
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
        .fail(()=>{
        	alert(WHEN_ERR)
        })
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
                		$.when($.getScript(brd_js, ()=>{
                			$.extend(new User(d))
                		})
                		).done(()=>{
                			alert($.cname()+'님 환영합니다')
                			brd.onCreate(d)
                		})
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

    return {onCreate, join, login}
})();