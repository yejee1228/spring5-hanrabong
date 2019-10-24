<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

	<div><h3>마이페이지</h3></div>
	<div class = "join_spac">
		<div>사원번호</div> <div id = "input"> ${emp.getEmpNo()}</div>		
		<div>영문명</div> <div id = "input"> ${emp.getEName()}</div>
		<div>직업</div> <div id = "input"> ${emp.getJob()}</div>
		<div>직책</div> <div id = "input"> ${emp.getMgr()}</div>
		<div>입사날짜</div> <div id = "input"> ${emp.getHireDate()}</div>
		<div>연봉</div> <div id = "input"> ${emp.getSal()}</div>
		<div>COMM</div> <div id = "input"> ${emp.getComm()}</div>
		<div>부서번호</div> <div id = "input"> ${emp.getDName()}</div>
		<div ></div>
		<div > <a id ="mypage_back"href="#">뒤로가기</a></div>
		
	<div>	

	</div>
	<div id = dept>
	<c:forEach items="${dept}" var="dto">
	${dto.getDeptNo()},${dto.getDName()},${dto.getLoc()}  <br>
	</c:forEach>
	</div>
	</div>

