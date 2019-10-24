<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="../common/head.jsp"/>
<div class = "container">
	<div><h1 id = "main_text">HANLABONG</h1></div>
	<div class = "content">
	<c:choose>
		<c:when test = "${page eq 'join'}">
			<jsp:include page = "join.jsp"/>
		</c:when>
		<c:when test = "${page eq 'login'}">
			<jsp:include page = "login.jsp"/>
		</c:when>
	</c:choose>
	</div>
	<div>
	</div>
</div>
<script>
app.init('${ctx}');

</script> 
<jsp:include page="../common/foot.jsp"/>