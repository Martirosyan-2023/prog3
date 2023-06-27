// var matrix = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
//     [1, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 4, 4, 3, 1,],
//     [1, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 4, 0, 1,],
//     [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1,],
//     [1, 0, 1, 1, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 3, 0, 1,],
//     [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1,],
//     [1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
//     [1, 0, 0, 2, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1,],
//     [1, 0, 0, 2, 0, 0, 3, 1, 0, 0, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
//     [1, 0, 0, 1, 0, 0, 3, 1, 0, 1, 2, 1, 3, 3, 2, 1, 1, 3, 1, 4, 0, 0, 0, 0, 0, 1,],
//     [1, 0, 0, 0, 0, 0, 0, 2, 3, 3, 2, 1, 5, 5, 2, 1, 0, 0, 3, 0, 0, 0, 0, 0, 3, 1,],
//     [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 2, 3, 1, 1, 2, 1, 1, 0, 3, 2, 0, 0, 0, 2, 0, 1,],
//     [1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 2, 2, 2, 2, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 1,],
//     [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1,],
//     [1, 2, 0, 1, 0, 1, 0, 0, 1, 0, 2, 0, 3, 0, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
//     [1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 2, 2, 1,],
//     [1, 3, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1,],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1,],
//     [1, 0, 4, 4, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 4, 4, 0, 1,],
//     [1, 0, 4, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 0, 1,],
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1,],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
// ];

// var side = 20;
// var grassArr = [];
// var grassEaterArr = []
// var GishatichArr = []
// var GyuxaciArr = []
// var HreshArr = []

// function setup() {
//     frameRate(5);
//     createCanvas(matrix[0].length * side, matrix.length * side);
//     background('#acacac');
//     for (var y = 0; y < matrix.length; ++y) {
//         for (var x = 0; x < matrix[y].length; ++x) {
//             if (matrix[y][x] == 1) {
//                 var gr = new Grass(x, y, 1);
//                 grassArr.push(gr);
//             }
//             else if (matrix[y][x] == 2) {
//                 var gre = new GrassEater(x, y, 2)
//                 grassEaterArr.push(gre)
//             }
//             else if (matrix[y][x] == 3) {
//                 var gsh = new Gishatich(x, y, 3)
//                 GishatichArr.push(gsh)
//             }
//             else if (matrix[y][x] == 4) {
//                 var ggh = new Gyuxaci(x, y, 4)
//                 GyuxaciArr.push(ggh)
//             }
//             else if (matrix[y][x] == 5) {
//                 var hr = new Hresh(x, y, 5)
//                 HreshArr.push(hr)
//             }
//         }
//     }


// }



// function draw() {
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 fill("green");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 2) {
//                 fill("yellow")
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 3) {
//                 fill("red")
//                 rect(x * side, y * side, side, side);
//             }

//             else if (matrix[y][x] == 4) {
//                 fill("#FF9933")
//                 rect(x * side, y * side, side, side);
//             }
//             else if (matrix[y][x] == 5) {
//                 fill("Black")
//                 rect(x * side, y * side, side, side);
//             }
//         }
//     }



//     for (var i in grassArr) {
//         grassArr[i].mul();
//     }
//     for (var i in grassEaterArr) {
//         grassEaterArr[i].eat()
//         grassEaterArr[i].move()
//         grassEaterArr[i].mult()
//         grassEaterArr[i].die()
//     }
//     for (var i in GishatichArr) {
//         GishatichArr[i].eat()
//         GishatichArr[i].move()
//         GishatichArr[i].mult()
//         GishatichArr[i].die()
//     }

//     for (var i in GyuxaciArr) {
//         GyuxaciArr[i].eat()
//         GyuxaciArr[i].move()
//     }
//     for (var i in HreshArr) {
//         HreshArr[i].eat()
//         HreshArr[i].move()
//     }

//     if (grassArr.length == 0) {
//         for (var i = 0; i < 20; i++) {
//             var x = floor(random(matrix[0].length - 1))
//             var y = floor(random(matrix.length - 1))
//             matrix[y][x] = 1
//             var gr = new Grass(x, y, 1)
//             grassArr.push(gr)
//         }
//     }
//     if (grassEaterArr.length == 0) {
//         for (var i = 0; i < 10; i++) {
//             var x = floor(random(matrix[0].length - 1))
//             var y = floor(random(matrix.length - 1))
//             matrix[y][x] = 2
//             var gre = new GrassEater(x, y, 2)
//             grassEaterArr.push(gre)
//         }
//     }
//     if (GishatichArr.length == 0) {
//         for (var i = 0; i < 10; i++) {
//             var x = floor(random(matrix[0].length - 1))
//             var y = floor(random(matrix.length - 1))
//             matrix[y][x] = 3
//             var gsh = new Gishatich(x, y, 3)
//             GishatichArr.push(gsh)
//         }
//     }

// }

socket = io();
var side = 20;
var m = 23;
var n = 23;
mult = 8
var grasscolor = "green"
var grassEatercolor = "yellow"
var gishatichcolor = "red"
var gyuxacicolor = "#FF9933"
var hreshcolor = "black"
var cowcolor = "#3D2B1F"
var milkcolor = "white"
function setup() {
    frameRate(40);
    createCanvas(n * side, m * side);
    background('#e8e8e8');
    button1 = document.getElementById("Summer")
    button2 = document.getElementById("Spring")
    button3 = document.getElementById("Autumn")
    button4 = document.getElementById("Winter")
    button5 = document.getElementById("themeButton")
    button6 = document.getElementById("themeButton1")
    button1.addEventListener("click", oncolorchange)
    button2.addEventListener("click", oncolorchange)
    button3.addEventListener("click", oncolorchange)
    button4.addEventListener("click", oncolorchange)
    button5.addEventListener("click", darkmode)
    button6.addEventListener("click", lightmode)
}
function lightmode() {
    if(event.target.id == "themeButton1"){
        var body = document.body
        body.style.backgroundColor = "#ffffff"
        mult = 8
    }
}
function darkmode() {
   if(event.target.id == "themeButton") {
    var body = document.body
    body.style.backgroundColor = "#373737"
    mult = 4
   }
    
}
function oncolorchange() {
    if (event.target.id == "Summer") {
        grasscolor = "#ccff00"
        grassEatercolor = "#ffe921"
        gishatichcolor = "#a21817"
        mult = 5
    }
    else if (event.target.id == "Spring") {
        grasscolor = "#99c460"
        grassEatercolor = "#e3d651"
        gishtichcolor = "#ff0000"
        mult = 4
    }
    else if (event.target.id == "Autumn") {
        grasscolor = "#98964D"
        grasseatercolor = "D69C12"
        gishatichcolor = "#94252E"
        mult = 5
    }
    else if (event.target.id == "Winter") {
        grasscolor = "#6c6639"
        grassEatercolor = "#E7C87B"
        gishatichcolor = "#A21C19"
        mult = 9
    };
    let data = {
        mult:mult
    }
    socket.on("matrix", drawMatrix);
    socket.emit("multclick", mult)
}

function drawMatrix(data) {
    matrix = data.matrix;
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(grasscolor);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill(grassEatercolor)
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill(gishatichcolor)
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#FF9933")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("Black")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("#3D2B1F")
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 7) {
                fill("white")
                rect(x * side, y * side, side, side);
            }
        }
    }

}

socket.on("matrix", drawMatrix);