---
layout: page
title: Register
permalink: /register/
---

<div class="card bg-light">
<article class="card-body mx-auto" style="width: 60%;">
	<h2 class="card-title mt-3 text-center">Create Account</h2>
	<p class="text-center">Get started with your free account</p>
	<form class="needs-validation" data-toggle="validator" novalidate>
	<div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="full_name" class="form-control" placeholder="Full name" type="text" required>
        <div class="invalid-feedback">Please fill out your full name.</div>
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="email" class="form-control" placeholder="Email address" type="email" required>
        <div class="invalid-feedback">
          Please provide a valid email address.
        </div>
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
		</div>
    	<input name="phone" class="form-control" placeholder="Phone number (optional)" type="text">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input id="password" name="password" class="form-control" placeholder="Create password" type="password" required>
        <div class="invalid-feedback">Password must have at least 8 characters.</div>
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input name="password_repeat" class="form-control" placeholder="Repeat password" type="password" required>
        <div class="invalid-feedback">Please fill out this field.</div>
    </div> <!-- form-group// -->                                      
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
    </div> <!-- form-group// -->      
    <p class="text-center">Have an account? <a href="{{ "/signin/" | relative_url }}">Log In</a> </p>                                                                 
</form>
</article>
</div> <!-- card.// -->

<script src="{{ "/assets/js/registration_validator.js" | relative_url}}"> </script>