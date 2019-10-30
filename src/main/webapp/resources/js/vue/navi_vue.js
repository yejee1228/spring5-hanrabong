var navi_vue = navi_vue || {}
navi_vue = {
	navi_body : ()=>{
		return '    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">'+
		'      <a class="navbar-brand" href="#"><i class="fas fa-air-freshener"></i></a>'+
		'      <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">'+
		'        <span class="navbar-toggler-icon"></span>'+
		'      </button>'+

		'      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">'+
		'        <ul class="navbar-nav mr-auto">'+
		'          <li id = "go_write" class="nav-item active">'+
		'          </li>'+
		'          <li id = "logout" class="nav-item">'+
		'          </li>'+
		'          <li class="nav-item">'+
		'            <a class="nav-link" href="#">Profile</a>'+
		'          </li>'+
		'          <li class="nav-item">'+
		'            <a class="nav-link" href="#">Switch account</a>'+
		'          </li>'+
		'          <li class="nav-item dropdown">'+
		'            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Settings</a>'+
		'            <div class="dropdown-menu" aria-labelledby="dropdown01">'+
		'              <a class="dropdown-item" href="#">Action</a>'+
		'              <a class="dropdown-item" href="#">Another action</a>'+
		'              <a class="dropdown-item" href="#">Something else here</a>'+
		'            </div>'+
		'          </li>'+
		'        </ul>'+
		'        <form class="form-inline my-2 my-lg-0">'+
		'          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">'+
		'          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>'+
		'        </form>'+
		'      </div>'+
		'    </nav>'
	}
}