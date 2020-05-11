---
layout: page
title: Sign in 
permalink: /signin/
---

<div class="card bg-light">
<article class="card-body mx-auto" style="width: 60%;">
	<h2 class="card-title mt-3 text-center">Sign in</h2>
	<p class="text-center">Sign in with your existing account</p>
	<form id="signin">
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input id="email" name="email" class="form-control" placeholder="Email address" type="email">
    </div> <!-- form-group// -->
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input id="password" name="password" class="form-control" placeholder="Password" type="password">
    </div> <!-- form-group// -->                                      
    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Sign in </button>
    </div> <!-- form-group// -->      
    <p class="text-center">Forgot your password? <a href="{{ "/signin/" | relative_url }}">Recover it</a> </p>                                                                 
</form>
</article>
</div> <!-- card.// -->

<script>
$("#signin").submit(function(event){
    event.preventDefault();
    let usr = JSON.parse(Cookies.get("user"));
    if (usr === undefined) {
        alert("User does not exist!");
    } else if (usr.email != $("input#email").val()) {
        alert("User not found in database!");
    } else if(usr.password != $("input#password").val()) {
        alert("Invalid password!");
    } else {
        Cookies.set("auth", "1");
        alert("You are now logged in!\n");
        document.location.href = "{{ "/reservations/" | relative_url }}";
    }
});
</script>