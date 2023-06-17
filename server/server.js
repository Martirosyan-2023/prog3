let random = require("./modules/random");

var express = require("express");
var fs = require("fs");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static("../client"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});

server.listen(3000, function () {
    console.log("App is running on port 3000");
});

//import functions and class, create objects,
grassArr = [];
grassEaterArr = []
GishatichArr = []
GyuxaciArr = []
HreshArr = []

Grass = require("./modules/class.grass")
GrassEater = require("./modules/class.grasseater")
Gishatich = require("./modules/class.gishatich")
Gyuxaci = require("./modules/class.gyuxaci")
Hresh = require("./modules/class.hresh")


var flag = false
io.on("connection", function (socket) {
    if (flag) {
        setInterval(drawForBackend, 5000);
        flag = true
    }
});

matrix = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 4, 4, 3, 1,],
    [1, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 4, 0, 1,],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 1, 1, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 3, 0, 1,],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1,],
    [1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 2, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 1,],
    [1, 0, 0, 2, 0, 0, 3, 1, 0, 0, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 1, 0, 0, 3, 1, 0, 1, 2, 1, 3, 3, 2, 1, 1, 3, 1, 4, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 2, 3, 3, 2, 1, 5, 5, 2, 1, 0, 0, 3, 0, 0, 0, 0, 0, 3, 1,],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 2, 3, 1, 1, 2, 1, 1, 0, 3, 2, 0, 0, 0, 2, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 2, 2, 2, 2, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1,],
    [1, 2, 0, 1, 0, 1, 0, 0, 1, 0, 2, 0, 3, 0, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 2, 2, 1,],
    [1, 3, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1,],
    [1, 0, 4, 4, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 4, 4, 0, 1,],
    [1, 0, 4, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
];

for (var y = 0; y < matrix.length; ++y) {
    for (var x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var gre = new GrassEater(x, y, 2)
            grassEaterArr.push(gre)
        }
        else if (matrix[y][x] == 3) {
            var gsh = new Gishatich(x, y, 3)
            GishatichArr.push(gsh)
        }
        else if (matrix[y][x] == 4) {
            var ggh = new Gyuxaci(x, y, 4)
            GyuxaciArr.push(ggh)
        }
        else if (matrix[y][x] == 5) {
            var hr = new Hresh(x, y, 5)
            HreshArr.push(hr)
        }
    }
}

function drawForBackend() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
        grassEaterArr[i].move()
        grassEaterArr[i].mult()
        grassEaterArr[i].die()
    }
    for (var i in GishatichArr) {
        GishatichArr[i].eat()
        GishatichArr[i].move()
        GishatichArr[i].mult()
        GishatichArr[i].die()
    }

    for (var i in GyuxaciArr) {
        GyuxaciArr[i].eat()
        GyuxaciArr[i].move()
    }
    for (var i in HreshArr) {
        HreshArr[i].eat()
        HreshArr[i].move()
    }

    // if (grassArr.length == 0) {
    //     for (var i = 0; i < 20; i++) {
    //         var x = floor(random(matrix[0].length - 1))
    //         var y = floor(random(matrix.length - 1))
    //         matrix[y][x] = 1
    //         var gr = new Grass(x, y, 1)
    //         grassArr.push(gr)
    //     }
    // }
    // if (grassEaterArr.length == 0) {
    //     for (var i = 0; i < 10; i++) {
    //         var x = floor(random(matrix[0].length - 1))
    //         var y = floor(random(matrix.length - 1))
    //         matrix[y][x] = 2
    //         var gre = new GrassEater(x, y, 2)
    //         grassEaterArr.push(gre)
    //     }
    // }
    // if (GishatichArr.length == 0) {
    //     for (var i = 0; i < 10; i++) {
    //         var x = floor(random(matrix[0].length - 1))
    //         var y = floor(random(matrix.length - 1))
    //         matrix[y][x] = 3
    //         var gsh = new Gishatich(x, y, 3)
    //         GishatichArr.push(gsh)
    //     }
    // }

    let sendData = {
        matrix: matrix
    }
    statistics = {
        grasses: grassArr.length,
        grassEaters: grassEaterArr.length,
        gishatichs: GishatichArr.length,
        gyuxacis: GyuxaciArr.length,
        hreshs: HreshArr.length
    }

    fs.writeFileSync('statistics.json', JSON.stringify(statistics, undefined, 2))
    mystatistics = fs.readFileSync('statistics.json').toString()
    io.sockets.emit("sendStatistics", JSON.parse(mystatistics))
    io.sockets.emit("matrix", sendData)
}
setInterval(drawForBackend, 500)