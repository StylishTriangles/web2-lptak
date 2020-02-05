function hello() {
    let x = "doggo";
    console.log("Hello "+x+"!");
}

let imageX = 100;
let imageY = 300;
let mouseX = 0;
let mouseY = 0;

function logdiv(message) {
    let div = document.getElementById("log");
    div.innerHTML = message;
}
function move_image(quiet = false) {
    img = document.getElementById("ksp");
    // imageX = Math.random()*400;
    // imageY = Math.random()*400;
    let newStyle = "left: " + imageX + "px; top: " + imageY + "px;";
    // img.style = newStyle;
    img.style.left = imageX + "px";
    img.style.top = imageY + "px";
    if (!quiet) {
        logdiv("👉\t" + newStyle);
    }
}

function enable_movement() {
    setInterval(move_image, 1000);
}

// ids which will be hidden/shown when pressing buttons
let hide_ids = ["ksp", "greeting", "hide_btn", "log"];

function hide_elem(id) {
    elem = document.getElementById(id);
    elem.setAttribute("hidden", null);
}
function show_elem(id) {
    elem = document.getElementById(id);
    elem.removeAttribute("hidden");
}

function see_image() {
    for (let id of hide_ids) {
        show_elem(id);
    }
}

function hide_image() {
    for (let id of hide_ids) {
        hide_elem(id);
    }
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
    // make sure the image is positioned as defined in this file
    move_image(true);
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