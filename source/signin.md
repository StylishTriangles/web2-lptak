---
layout: page
title: Sign in 
permalink: /signin/
---

<div class="card bg-light">
<article class="card-body mx-auto" style="max-width: 400px;">
	<h2 class="card-title mt-3 text-center">Sign in</h2>
	<p class="text-center">Sign in with your existing account</p>
	<form>
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="email" class="form-control" placeholder="Email address" type="email">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input name="password" class="form-control" placeholder="Password" type="password">
    </div> <!-- form-group// -->                                      
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
    </div> <!-- form-group// -->      
    <p class="text-center">Forgot your password? <a href="{{ "/signin/" | relative_url }}">Recover it</a> </p>                                                                 
</form>
</article>
</div> <!-- card.// -->