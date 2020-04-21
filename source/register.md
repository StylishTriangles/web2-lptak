---
layout: page
title: Register
permalink: /register/
---

<div class="card bg-light">
<article class="card-body mx-auto" style="max-width: 400px;">
	<h2 class="card-title mt-3 text-center">Create Account</h2>
	<p class="text-center">Get started with your free account</p>
	<form class="needs-validation" novalidate>
	<div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="first_name" class="form-control" placeholder="First name" type="text">
        <input name="last_name" class="form-control" placeholder="Last name" type="text">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="email" class="form-control" placeholder="Email address" type="email">
        <div class="invalid-feedback">
          Please provide a valid email address.
        </div>
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
		</div>
    	<input name="phone" class="form-control" placeholder="Phone number" type="text">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input name="password" class="form-control" placeholder="Create password" type="password">
        <div class="invalid-feedback">Please fill out this field.</div>
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input name="password_repeat" class="form-control" placeholder="Repeat password" type="password">
        <div class="invalid-feedback">Please fill out this field.</div>
    </div> <!-- form-group// -->                                      
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
    </div> <!-- form-group// -->      
    <p class="text-center">Have an account? <a href="{{ "/signin/" | relative_url }}">Log In</a> </p>                                                                 
</form>
</article>
</div> <!-- card.// -->

<script src="{{ "/assets/js/form_validator.js" | relative_url}}"> </script>