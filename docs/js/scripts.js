function hello() {
    let x = "doggo";
    console.log("Hello "+x+"!");
}

function see_image() {
    img = document.getElementById("ksp");
    img.removeAttribute("hidden")
    greeting = document.getElementById("greeting");
    greeting.removeAttribute("hidden")
    hide = document.getElementById("hide_btn");
    hide.removeAttribute("hidden")
}

function hide_image() {
    img = document.getElementById("ksp");
    img.setAttribute("hidden", null)
    greeting = document.getElementById("greeting");
    greeting.setAttribute("hidden", null)
    hide = document.getElementById("hide_btn");
    hide.setAttribute("hidden", null)
}