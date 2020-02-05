function hello() {
    let x = "doggo";
    console.log("Hello "+x+"!");
}

let imageX = 200;
let imageY = 200;
let imageScore = 0;

function logdiv(message) {
    let div = document.getElementById("log");
    div.innerHTML += message + "<br/>";
}

function update_score() {
    let score = document.getElementById("score");
    score.innerHTML=imageScore;
}

function move_image() {
    img = document.getElementById("ksp");
    // imageX = Math.random()*400;
    // imageY = Math.random()*400;
    let newStyle = "left: " + (imageX+imageScore) + "px; top: " + imageY + "px;";
    img.style = newStyle;
    logdiv("👉\t" + newStyle);
    imageScore -= 1;
    update_score();
}

function enable_movement() {
    setInterval(move_image, 1000);
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

function click_image() {
    imageScore += 1;
    update_score();
}