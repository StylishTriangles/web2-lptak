function hello() {
    let x = "doggo";
    console.log("Hello "+x+"!");
}

let imageX = 400;
let imageY = 400;
let mouseX = 0;
let mouseY = 0;

function logdiv(message) {
    let div = document.getElementById("log");
    div.innerHTML = message;
}
function move_image() {
    img = document.getElementById("ksp");
    // imageX = Math.random()*400;
    // imageY = Math.random()*400;
    let newStyle = "left: " + imageX + "px; top: " + imageY + "px;";
    // img.style = newStyle;
    img.style.left = imageX + "px";
    img.style.top = imageY + "px";
    logdiv("👉\t" + newStyle);
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

function clone_image(node, posX, posY) {
    let clone = node.cloneNode();
    clone.id = "";
    clone.style.position = "absolute";
    let junk = document.getElementById("junk");
    junk.appendChild(clone);
}

function create_image_events() {
    ksp = document.getElementById("ksp");
    ksp.onmousedown = function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;

        function onMouseMove(event) {
            let dX = event.pageX - mouseX;
            let dY = event.pageY - mouseY;
            // if (dX > 20 || dY > 20) {
            //     clone_image(ksp, imageX, imageY)
            // }
            imageX += dX;
            imageY += dY;

            mouseX = event.pageX;
            mouseY = event.pageY;

            
            move_image();
        }

        // Add event listener
        document.addEventListener('mousemove', onMouseMove);

        // Drop the image
        ksp.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            ksp.onmouseup = null;
        };
    };
    ksp.ondragstart = function() {return false;}


}