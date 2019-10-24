"use strict";
var auth_vue = auth_vue || {};
auth_vue = {
	join_head:()=>{
		return '<head>'+
        '    <meta charset="utf-8">'+
        '    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
        '    <meta name="description" content="">'+
        '    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
        '    <meta name="generator" content="Jekyll v3.8.5">'+
        '    <title>Checkout example · Bootstrap</title>'+
        '    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/checkout/">'+
        '    <!-- Bootstrap core CSS -->'+
        '<link href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
        '    <style>'+
        '      .bd-placeholder-img {'+
        '        font-size: 1.125rem;'+
        '        text-anchor: middle;'+
        '        -webkit-user-select: none;'+
        '        -moz-user-select: none;'+
        '        -ms-user-select: none;'+
        '        user-select: none;'+
        '      }'+
        '      @media (min-width: 768px) {'+
        '        .bd-placeholder-img-lg {'+
        '          font-size: 3.5rem;'+
        '        }'+
        '      }'+
        '    </style>'+
        '    <!-- Custom styles for this template -->'+
        '    <link href="https://getbootstrap.com/docs/4.3/examples/checkout/form-validation.css" rel="stylesheet">'+
        '  </head>'
	},
	join_body:()=>{
		return '<div class="container" >'+
        '  <div class="py-5 text-center">'+
        '    <img class="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">'+
        '    <h2>Checkout form</h2>'+
        '  </div>'+
        '  <div class="row">'+
        '    <div class="col-md-4 order-md-2 mb-4">'+
        '      <h4 class="d-flex justify-content-between align-items-center mb-3">'+
        '        <span class="text-muted">Your cart</span>'+
        '        <span class="badge badge-secondary badge-pill">3</span>'+
        '      </h4>'+
        '      <ul class="list-group mb-3">'+
        '        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
        '          <div>'+
        '            <h6 class="my-0">Product name</h6>'+
        '            <small class="text-muted">Brief description</small>'+
        '          </div>'+
        '          <span class="text-muted">$12</span>'+
        '        </li>'+
        '        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
        '          <div>'+
        '            <h6 class="my-0">Second product</h6>'+
        '            <small class="text-muted">Brief description</small>'+
        '          </div>'+
        '          <span class="text-muted">$8</span>'+
        '        </li>'+
        '        <li class="list-group-item d-flex justify-content-between lh-condensed">'+
        '          <div>'+
        '            <h6 class="my-0">Third item</h6>'+
        '            <small class="text-muted">Brief description</small>'+
        '          </div>'+
        '          <span class="text-muted">$5</span>'+
        '        </li>'+
        '        <li class="list-group-item d-flex justify-content-between bg-light">'+
        '          <div class="text-success">'+
        '            <h6 class="my-0">Promo code</h6>'+
        '            <small>EXAMPLECODE</small>'+
        '          </div>'+
        '          <span class="text-success">-$5</span>'+
        '        </li>'+
        '        <li class="list-group-item d-flex justify-content-between">'+
        '          <span>Total (USD)</span>'+
        '          <strong>$20</strong>'+
        '        </li>'+
        '      </ul>'+
        '      <form class="card p-2">'+
        '        <div class="input-group">'+
        '          <input type="text" class="form-control" placeholder="Promo code">'+
        '          <div class="input-group-append">'+
        '            <button type="submit" class="btn btn-secondary">Redeem</button>'+
        '          </div>'+
        '        </div>'+
        '      </form>'+
        '    </div>'+
        '    <div class="col-md-8 order-md-1">'+
        '      <h4 class="mb-3">Billing address</h4>'+
        '      <form class="needs-validation" novalidate="">'+
        '        <div class="row">'+
        '          <div class="col-md-6 mb-3">'+
        '            <label for="cId">아이디</label>'+
        '            <input type="text" class="form-control" id="cId" placeholder="" value="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Valid first name is required.'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-6 mb-3">'+
        '            <label for="cPw">password</label>'+
        '            <input type="text" class="form-control" id="cPw" placeholder="" value="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Valid last name is required.'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="mb-3">'+
        '          <label for="cname">이름</label>'+
        '          <div class="input-group">'+
        '            <div class="input-group-prepend">'+
        '              <span class="input-group-text">@</span>'+
        '            </div>'+
        '            <input type="text" class="form-control" id="cname" placeholder="" required="">'+
        '            <div class="invalid-feedback" style="width: 100%;">'+
        '              Your username is required.'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="mb-3">'+
        '          <label for="email">Email <span class="text-muted">(Optional)</span></label>'+
        '          <input type="email" class="form-control" id="email" placeholder="you@example.com">'+
        '          <div class="invalid-feedback">'+
        '            Please enter a valid email address for shipping updates.'+
        '          </div>'+
        '        </div>'+
        '        <div class="mb-3">'+
        '          <label for="address">Address</label>'+
        '          <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="">'+
        '          <div class="invalid-feedback">'+
        '            Please enter your shipping address.'+
        '          </div>'+
        '        </div>'+
        '        <div class="mb-3">'+
        '          <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>'+
        '          <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">'+
        '        </div>'+
        '        <div class="row">'+
        '          <div class="col-md-5 mb-3">'+
        '            <label for="country">Country</label>'+
        '            <select class="custom-select d-block w-100" id="country" required="">'+
        '              <option value="">Choose...</option>'+
        '              <option>United States</option>'+
        '            </select>'+
        '            <div class="invalid-feedback">'+
        '              Please select a valid country.'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-4 mb-3">'+
        '            <label for="state">State</label>'+
        '            <select class="custom-select d-block w-100" id="state" required="">'+
        '              <option value="">Choose...</option>'+
        '              <option>California</option>'+
        '            </select>'+
        '            <div class="invalid-feedback">'+
        '              Please provide a valid state.'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-3 mb-3">'+
        '            <label for="zip">Zip</label>'+
        '            <input type="text" class="form-control" id="zip" placeholder="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Zip code required.'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <hr class="mb-4">'+
        '        <div class="custom-control custom-checkbox">'+
        '          <input type="checkbox" class="custom-control-input" id="same-address">'+
        '          <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>'+
        '        </div>'+
        '        <div class="custom-control custom-checkbox">'+
        '          <input type="checkbox" class="custom-control-input" id="save-info">'+
        '          <label class="custom-control-label" for="save-info">Save this information for next time</label>'+
        '        </div>'+
        '        <hr class="mb-4">'+
        '        <h4 class="mb-3">Payment</h4>'+
        '       <div class="d-block my-3">'+
        '          <div class="custom-control custom-radio">'+
        '            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">'+
        '            <label class="custom-control-label" for="credit">Credit card</label>'+
        '          </div>'+
        '          <div class="custom-control custom-radio">'+
        '            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="">'+
        '            <label class="custom-control-label" for="debit">Debit card</label>'+
        '          </div>'+
        '          <div class="custom-control custom-radio">'+
        '            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="">'+
        '            <label class="custom-control-label" for="paypal">PayPal</label>'+
        '          </div>'+
        '        </div>'+
        '        <div class="row">'+
        '          <div class="col-md-6 mb-3">'+
        '            <label for="cc-name">Name on card</label>'+
        '            <input type="text" class="form-control" id="cc-name" placeholder="" required="">'+
        '            <small class="text-muted">Full name as displayed on card</small>'+
        '            <div class="invalid-feedback">'+
        '              Name on card is required'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-6 mb-3">'+
        '            <label for="cc-number">Credit card number</label>'+
        '            <input type="text" class="form-control" id="cc-number" placeholder="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Credit card number is required'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <div class="row">'+
        '          <div class="col-md-3 mb-3">'+
        '            <label for="cc-expiration">Expiration</label>'+
        '            <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Expiration date required'+
        '            </div>'+
        '          </div>'+
        '          <div class="col-md-3 mb-3">'+
        '            <label for="cc-cvv">CVV</label>'+
        '            <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">'+
        '            <div class="invalid-feedback">'+
        '              Security code required'+
        '            </div>'+
        '          </div>'+
        '        </div>'+
        '        <hr class="mb-4">'+
        '       <div id = "btn_join"></div>'+
        '      </form>'+
        '    </div>'+
        '  </div>'+
        '  <footer class="my-5 pt-5 text-muted text-center text-small">'+
        '    <p class="mb-1">© 2017-2019 Company Name</p>'+
        '    <ul class="list-inline">'+
        '      <li class="list-inline-item"><a href="#">Privacy</a></li>'+
        '      <li class="list-inline-item"><a href="#">Terms</a></li>'+
        '      <li class="list-inline-item"><a href="#">Support</a></li>'+
        '    </ul>'+
        '  </footer>'+
        '</div>'
	},
	login_head : x=>{
		return '<head>'+
		'  <meta charset="UTF-8">'+
		'  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'  <title>Document</title>'+
		'  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">'+
		'   <meta charset="utf-8">'+
		'    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'    <meta name="description" content="">'+
		'    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">'+
		'    <meta name="generator" content="Jekyll v3.8.5">'+
		'    <title>Signin Template · Bootstrap</title>'+
		'    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/sign-in/">'+
		'    <style>'+
		'      .bd-placeholder-img {'+
		'        font-size: 1.125rem;'+
		'        text-anchor: middle;'+
		'        -webkit-user-select: none;'+
		'        -moz-user-select: none;'+
		'        -ms-user-select: none;'+
		'        user-select: none;'+
		'      }'+
		'      @media (min-width: 768px) {'+
		'        .bd-placeholder-img-lg {'+
		'          font-size: 3.5rem;'+
		'        }'+
		'      }'+
		'    </style>'+
		'    <link href="'+x.css+'/signin.css" rel="stylesheet">'+
		'</head>'
	},
	login_body : x=>{
		return '<body>'+
		'  <form id="form_join" class="form-signin">'+
		'    <img class="mb-4" src="'+x.img+'/bootstrap-solid.svg" alt="" width="72" height="72">'+
		'    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>'+
		'    <label for="inputcid" class="sr-only">id</label>'+
		'    <input type="text" id="inputcid" class="form-control" placeholder="cid" required="" autofocus="">'+
		'    <label for="inputPassword" class="sr-only">Password</label>'+
		'    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">'+
		'    <div class="checkbox mb-3">'+
		'      <label>'+
		'        <a id="a_go_join" href="#">Go Join</a>'+
		'      </label>'+
		'    </div>'+
		'    <div id = "btn_login"></div>'+
		'    <p class="mt-5 mb-3 text-muted">© 2017-2019</p>'+
		'  </form>'+
		'</body>'
	},
	/* https://getbootstrap.com/docs/4.0/examples/offcanvas/ */
	mpg_head:x=>{
			return '<head>'+
			'    <meta charset="utf-8">'+
		    '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'+
		'    <meta name="description" content="">'+
		'    <meta name="author" content="">'+
		    '<link rel="icon" href="https://getbootstrap.com/docs/4.0/assets/img/favicons/favicon.ico">'+
		'    <title>Offcanvas template for Bootstrap</title>'+
		'    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/offcanvas/">'+
		'    <!-- Bootstrap core CSS -->'+
		    '<link href="https://getbootstrap.com/docs/4.0/dist/css/bootstrap.min.css" rel="stylesheet">'+
		'    <!-- Custom styles for this template -->'+
		'    <link href="https://getbootstrap.com/docs/4.0/examples/offcanvas/offcanvas.css" rel="stylesheet">'+
		'  </head>'
		
		},
		mpg_body: ()=>{
			return  '<body class="bg-light">'+

			'    <nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark">'+
			'      <a class="navbar-brand" href="#">Offcanvas navbar</a>'+
			'      <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">'+
			'        <span class="navbar-toggler-icon"></span>'+
			'      </button>'+

			'      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">'+
			'        <ul class="navbar-nav mr-auto">'+
			'          <li class="nav-item active">'+
			'            <a class="nav-link" href="#">Dashboard <span class="sr-only">(current)</span></a>'+
			'          </li>'+
			'          <li class="nav-item">'+
			'            <a class="nav-link" href="#">Notifications</a>'+
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
			'    </nav>'+

			'    <div class="nav-scroller bg-white box-shadow">'+
			'      <nav class="nav nav-underline">'+
			'        <a class="nav-link active" href="#">Dashboard</a>'+
			'        <a class="nav-link" href="#">'+
			'          Friends'+
			'          <span class="badge badge-pill bg-light align-text-bottom">27</span>'+
			'        </a>'+
			'        <a class="nav-link" href="#">Explore</a>'+
			'        <a class="nav-link" href="#">Suggestions</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'        <a class="nav-link" href="#">Link</a>'+
			'      </nav>'+
			'    </div>'+

			'    <main role="main" class="container">'+
			'      <div class="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">'+
			'        <img class="mr-3" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-outline.svg" alt="" width="48" height="48">'+
			'        <div class="lh-100">'+
			'          <h6 class="mb-0 text-white lh-100">Bootstrap</h6>'+
			'          <small>Since 2011</small>'+
			'        </div>'+
			'      </div>'+

			'      <div class="my-3 p-3 bg-white rounded box-shadow">'+
			'        <h6 class="border-bottom border-gray pb-2 mb-0">Recent updates</h6>'+
			'        <div class="media text-muted pt-3">'+
			          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" style="width: 32px; height: 32px;" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb72%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb72%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">'+
			'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			'            <strong class="d-block text-gray-dark">@username</strong>'+
			'            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
			'          </p>'+
			'        </div>'+
			'        <div class="media text-muted pt-3">'+
			          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=e83e8c&amp;fg=e83e8c&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb75%20text%20%7B%20fill%3A%23e83e8c%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb75%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23e83e8c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
			'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			'            <strong class="d-block text-gray-dark">@username</strong>'+
			'            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
			'          </p>'+
			'        </div>'+
			'        <div class="media text-muted pt-3">'+
			          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=6f42c1&amp;fg=6f42c1&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb76%20text%20%7B%20fill%3A%236f42c1%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb76%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%236f42c1%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
			'          <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			'            <strong class="d-block text-gray-dark">@username</strong>'+
			'            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'+
			'          </p>'+
			'        </div>'+
			'        <small class="d-block text-right mt-3">'+
			'          <a href="#">All updates</a>'+
			'        </small>'+
			'      </div>'+

			'      <div class="my-3 p-3 bg-white rounded box-shadow">'+
			'        <h6 class="border-bottom border-gray pb-2 mb-0">Suggestions</h6>'+
			'        <div class="media text-muted pt-3">'+
			          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb78%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb78%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
			'          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			'            <div class="d-flex justify-content-between align-items-center w-100">'+
			'              <strong class="text-gray-dark">Full Name</strong>'+
			'              <a href="#">Follow</a>'+
			'            </div>'+
			'            <span class="d-block">@username</span>'+
			'          </div>'+
			'        </div>'+
			'        <div class="media text-muted pt-3">'+
			          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb79%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb79%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
			'          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			'            <div class="d-flex justify-content-between align-items-center w-100">'+
			'              <strong class="text-gray-dark">Full Name</strong>'+
			'              <a href="#">Follow</a>'+
			'            </div>'+
			'            <span class="d-block">@username</span>'+
			'          </div>'+
			'        </div>'+
			'        <div class="media text-muted pt-3">'+
			          '<img data-src="holder.js/32x32?theme=thumb&amp;bg=007bff&amp;fg=007bff&amp;size=1" alt="32x32" class="mr-2 rounded" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2032%2032%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16dfcdddb79%20text%20%7B%20fill%3A%23007bff%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A2pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16dfcdddb79%22%3E%3Crect%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22%23007bff%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2211.5390625%22%20y%3D%2216.9%22%3E32x32%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" style="width: 32px; height: 32px;">'+
			'          <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">'+
			'            <div class="d-flex justify-content-between align-items-center w-100">'+
			'              <strong class="text-gray-dark">Full Name</strong>'+
			'              <a href="#">Follow</a>'+
			'            </div>'+
			'            <span class="d-block">@username</span>'+
			'          </div>'+
			'        </div>'+
			'        <small class="d-block text-right mt-3">'+
			'          <a href="#">All suggestions</a>'+
			'        </small>'+
			'      </div>'+
			'    </main>'+

			'    <!-- Bootstrap core JavaScript'+
			'    ================================================== -->'+
			'    <!-- Placed at the end of the document so the pages load faster -->'+
			'    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>'+
			'    <script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/popper.min.js"></script>'+
			'    <script src="https://getbootstrap.com/docs/4.0/dist/js/bootstrap.min.js"></script>'+
			'    <script src="https://getbootstrap.com/docs/4.0/assets/js/vendor/holder.min.js"></script>'+
			'    <script src="https://getbootstrap.com/docs/4.0/examples/offcanvas/offcanvas.js"></script>'+

			'+<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" preserveAspectRatio="none" style="display: none; visibility: hidden; position: absolute; top: -100%; left: -100%;"><defs><style type="text/css"></style></defs><text x="0" y="2" style="font-weight:bold;font-size:2pt;font-family:Arial, Helvetica, Open Sans, sans-serif">32x32</text></svg></body>'

		}
	
};

