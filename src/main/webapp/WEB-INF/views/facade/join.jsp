<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div></div>
<div></div><div></div>
<div></div><div>
<form id = "join_form">
	<div><h3 id ="join_text">회원가입</h3></div>
	<div class = "join_spac">
		<div id = "text">사원번호</div><div id = "input"><input id = "input_empNo" type="text" name= "empNo"/></div>
		<div>영문명</div><div id = "input"><input id = "input_eName" type="text" name= "eName"/></div>
		<div>직업</div><div id = "input"><input id = "input_job" type="text" name= "job"/></div>
		<div>직책</div><div id = "input"><input id = "input_mgr" type="text" name= "mgr"/></div>
		<div>입사날짜</div><div id = "input"><input id = "input_hireDate" type="text" name= "hireDate"/></div>
		<div>연봉</div><div id = "input"><input id = "input_sal" type="text" name= "sal"/></div>
		<div>COMM</div><div id = "input"><input id = "input_comm" type="text" name= "comm"/></div>
		<div>부서번호</div><div id = "input"><input id = "input_deptNo" type="text" name= "deptNo"/></div>
		<input type="hidden" name= "action" value = "join"/>
		<input type="hidden" name= "page" value = "login"/>
		<div></div><div><input id = 'join_btn' type="button" value = '회원가입' /></div>
	</div>
</form>
</div>