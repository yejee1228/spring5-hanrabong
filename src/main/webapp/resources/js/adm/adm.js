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
		
		$('<table id="tab">'+
		'  <tr></tr>'+
		'</table>')
		.appendTo('body')
		.css({border: '1px solid #ddd', width: '80%', height: '80%', margin: '0 auto'})
		
		$.each([{id:'left',width:'20%'},{id:'right',width:'80%'}],(i,j)=>{
			$('<td id= "'+j.id+'"></td>')
			.css({border: '1px solid #ddd', width: j.width, 'vertical-align': 'top'})
			.appendTo('#tab tr')
		})
			
		$.each([
			{txt:'웹크롤링', name :'web_crawl'},
			{txt:'고객관리', name :'cust-mgmt'},
			{txt:'상품등록', name :'item-reg'},
			{txt:'상품조회', name :'item-srch'},
			{txt:'상품관리', name :'item-mod'},
			{txt:'상품삭제', name :'item-del'}],
			(i,j)=>{
				$('<div name="'+j.name+'"><a href="#" style = "color : gray">'+j.txt+'</a></div>')
				.css({border: '1px solid #ddd', margin: 'auto 0', 'line-height': '50px'})
				.appendTo('#left')
				.hover(function(e){
					$(this).addClass('active')
					$(this).siblings().removeClass('active')})
				.click(function(e){
					e.preventDefault()
					switch($(this).attr('name')){
					case 'web_crawl' :
						webCrawl()
						break;
					case 'cust-mgmt' :
						custManager()
						break;
					case 'item-reg' :
						break;
					case 'item-srch' :
						break;
					case 'item-mod' :
						break;
					case 'item-del' :
						break;
					}
			})
		})
				
		
	} 
	let webCrawl=()=>{
		$('#right').empty()
		$('<h1>Web Crawling</h1><br/><br/><form id = "crawl_form">'+
		'  <select name="site" size="1"></select>'+
		'  <input type="text" style = "width:80%" placeholder="insert URL for crawling"/>'+
		'</form>').appendTo('#right')
		$.each(['google','daum','naver'],
				(i,j)=>{
			$('<option value="'+j+'">'+j+'</option>')
			.appendTo('#crawl_form select[name="site"]')
			})
		$('<button type="submit">go</button>').appendTo('#crawl_form')
		.click(e=>{
			e.preventDefault()
			let arr = [$('#crawl_form select[name="site"]').val(),
						$('#crawl_form input[type="text"]').val()]
			if(!$.fn.nullChecker(arr)){
				$.getJSON(_+'/tx/crawling/'+arr[0]+'/'+arr[1],
						d=>{
							
							$('#right').empty().append('<div>'+d+'</div>')
						})
			}
		})
	}
	
	let custManager=x=>{
		alert('회원관리')
		
	}
	return {onCreate}
})()