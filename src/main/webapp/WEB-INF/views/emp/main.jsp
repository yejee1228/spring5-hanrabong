<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:include page="../common/head.jsp"/>
<div>
	<div><h1 id = "main_text">HANLABONG</h1></div>
	<div>
	<c:choose>
		<c:when test = "${page eq 'myPage'}">
			<jsp:include page = "mypage.jsp"/>
		</c:when>
	</c:choose>
	</div>
</div>
<script>
app.init('${ctx}');

</script> 
<jsp:include page="../common/foot.jsp"/>