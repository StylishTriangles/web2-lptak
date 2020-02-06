let mouseX = 0;
let mouseY = 0;

class KSP {
    constructor(id,imageX, imageY) {
        this.id = id;
        this.imageX = imageX;
        this.imageY = imageY;
        this.distance = 0;
        this.create_image_events();
    }

    create_image_events() {
        let ksp = document.getElementById(this.id);
        // make sure the image is positioned correctly
        this.move(true);
        let img_instance = this;
        // create an event which will manage the img's position when dragged
        ksp.onmousedown = function (event) {
            mouseX = event.pageX;
            mouseY = event.pageY;
    
            function onMouseMove(event) {
                let dX = event.pageX - mouseX;
                let dY = event.pageY - mouseY;
                // if (dX > 20 || dY > 20) {
                //     clone_image(ksp, imageX, imageY)
                // }
                img_instance.imageX += dX;
                img_instance.imageY += dY;
    
                mouseX = event.pageX;
                mouseY = event.pageY;
    
                img_instance.update_distance(dX, dY);
                img_instance.move();
            }
    
            // Add event listener
            document.addEventListener('mousemove', onMouseMove);
    
            // Drop the image
            ksp.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                ksp.onmouseup = null;
            };
        };
        // remove the default for dragging
        ksp.ondragstart = function() {return false;}
    }

    move(quiet = false) {
        let img = document.getElementById(this.id);
        // imageX = Math.random()*400;
        // imageY = Math.random()*400;
        let newStyle = "left: " + this.imageX + "px; top: " + this.imageY + "px;";
        // img.style = newStyle;
        img.style.left = this.imageX + "px";
        img.style.top = this.imageY + "px";
        if (!quiet) {
            this.logdiv("👉\t" + newStyle);
        }
    }

    logdiv(message) {
        let div = document.getElementById("log");
        div.innerHTML = message;
    }

    update_distance(dX, dY) {
        // Using Pythagorean equation update the distance moved
        this.distance += Math.floor(Math.sqrt(dX*dX + dY*dY));
        let distance_span = document.getElementById(this.id+"-distance");
        distance_span.innerHTML = this.distance;
    }
}

let art_collection = [];

function register_kerbal(id, imageX, imageY) {
    art_collection.push(new KSP(id, imageX, imageY));
}