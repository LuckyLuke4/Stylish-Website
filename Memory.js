function memoryStart() {

}

function memoryClick(elmnt) {
    var id = elmnt.id;

    document.getElementById("p0").innerHTML = "[][][]";

    if (counter >= 2) {
        for (var i = 0; i < squares.length; i++) {
            document.getElementById(squares[i]).style.backgroundColor = "darkviolet";
            active[i] = false;
        }
        counter = 0;
        return;
    }

    switch(id) {
        case "square1":
            elmnt.style.backgroundColor = color1;
            active[0] = true;
            break;
        case "square2":
            elmnt.style.backgroundColor = color2;
            active[1] = true;
            break;
        case "square3":
            elmnt.style.backgroundColor = color3;
            active[2] = true;
            break;
        case "square4":
            elmnt.style.backgroundColor = color1;
            active[3] = true;
            break;
        case "square5":
            elmnt.style.backgroundColor = color2;
            active[4] = true;
            break;
        case "square6":
            elmnt.style.backgroundColor = color3;
            active[5] = true;
            break;
        default:
            break;
    }
    counter++;
    document.getElementById("p2").innerHTML = counter;

    if (active[0] && active[3] || active[1] && active[4] || active[2] && active[5]) {

        document.getElementById("p0").innerHTML = "Du vinner!";
    }
}

var color1 = "orange";
var color2 = "yellow";
var color3 = "coral";

var counter = 0;

var squares = ["square1", "square2", "square3", "square4", "square5", "square6"];

var active = [false, false, false, false, false, false];