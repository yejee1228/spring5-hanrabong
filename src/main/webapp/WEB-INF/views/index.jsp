<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	
	<script src="<%=application.getContextPath() %>/resources/js/app.js"></script>
	<script src="<%=application.getContextPath() %>/resources/js/cmm/router.js"></script>
	<script src="<%=application.getContextPath() %>/resources/js/cmm/auth.js"></script>
	<script src="<%=application.getContextPath() %>/resources/js/brd/brd.js"></script>
	<script src="<%=application.getContextPath() %>/resources/js/vue/auth_vue.js"></script>
	<script src="<%=application.getContextPath() %>/resources/js/vue/brd_vue.js"></script>
	<script>
		app.run('<%=application.getContextPath() %>');
	</script> 
</html>
