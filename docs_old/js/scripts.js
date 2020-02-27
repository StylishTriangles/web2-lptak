// ids which will be hidden/shown when pressing buttons
let hide_ids = ["Kerbin", "Klara", "greeting", "hide_btn", "log"];

function hide_elem(id) {
    elem = document.getElementById(id);
    if (elem)
        elem.setAttribute("hidden", null);
}
function show_elem(id) {
    elem = document.getElementById(id);
    if (elem)
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

