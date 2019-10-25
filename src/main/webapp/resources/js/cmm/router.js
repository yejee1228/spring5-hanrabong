"use strict";
function Session(x){
	sessionStorage.setItem('ctx', x);
	sessionStorage.setItem('js',x +'/resources/js');
	sessionStorage.setItem('css',x +'/resources/css');
	sessionStorage.setItem('img',x +'/resources/img');
	return {
		ctx : ()=>{return sessionStorage.getItem('ctx');},
		js : ()=>{return sessionStorage.getItem('js');},
		css : ()=>{return sessionStorage.getItem('css');},
		img : ()=>{return sessionStorage.getItem('img');}
	}
}
function User(x){
	sessionStorage.setItem('cid',x.cid);
	sessionStorage.setItem('cpw',x.cpw);
	sessionStorage.setItem('cname',x.cname);
	return {
		cid : ()=>{return sessionStorage.getItem('cid');},
		cpw : ()=>{return sessionStorage.getItem('cpw');},
		cname : ()=>{return sessionStorage.getItem('cname');}
	}
}

