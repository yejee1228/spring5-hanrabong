<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<form id="login_form">
	<div><h3 id = "join_text">로그인</h3></div>
	<div class = "login_spac">
		<div id = "text">부서번호</div><div id = "input"><input id = "input_deptNo" type="text" name = "deptNo"/></div>
		<div id = "text">사원번호</div><div id = "input"><input id = "input_empNo" type="text" name = "empNo"/></div>
		<div id = "text">비밀번호</div><div id = "input"><input id = "input_eName" type="text" name = "eName"/></div>
		<input type="hidden" name= "action" value = "login"/>
		<input type="hidden" name= "page" value = "main"/>
		<div><input id = 'login_btn' type="button" value = '로그인' /></div>
		<div></div>
		<div><input id = 'a_join' type="button" value = '회원가입' /></div>
		</div>
</form>
