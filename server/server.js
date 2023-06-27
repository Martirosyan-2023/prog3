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

server.listen(8800, function () {
    console.log("App is running on port 3000");
});

//import functions and class, create objects,

grassArr = [];
grassEaterArr = []
GishatichArr = []
GyuxaciArr = []
HreshArr = []
CowArr = []
MilkArr = []

Grass = require("./modules/class.grass")
GrassEater = require("./modules/class.grasseater")
Gishatich = require("./modules/class.gishatich")
Gyuxaci = require("./modules/class.gyuxaci")
Hresh = require("./modules/class.hresh")
Cow = require("./modules/class.cow")
Milk = require("./modules/class.milk")

var mult = 8

io.on("connection", function (socket) {
    socket.on("multclick", function (data) {
        mult = data.mult
    });
    setInterval(drawForBackend, 5000);
});

matrix = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 4, 4, 3, 1,],
    [1, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 4, 0, 1,],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 1, 1, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 3, 0, 1,],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 1, 1, 0, 0, 0, 0, 1,],
    [1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 2, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1, 0, 0, 0, 0, 2, 0, 6, 0, 2, 0, 0, 1,],
    [1, 0, 0, 2, 0, 0, 3, 1, 0, 0, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 1, 0, 0, 3, 1, 0, 1, 2, 1, 3, 3, 2, 1, 1, 3, 1, 4, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 6, 2, 3, 3, 2, 1, 5, 5, 2, 1, 0, 0, 3, 0, 0, 0, 0, 0, 3, 1,],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 2, 3, 1, 1, 2, 1, 1, 0, 3, 2, 0, 0, 0, 2, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 2, 2, 2, 2, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 2, 0, 6, 0, 0, 0, 0, 0, 1, 1, 1, 3, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1,],
    [1, 2, 0, 1, 0, 1, 0, 0, 1, 0, 2, 0, 3, 0, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 2, 2, 1,],
    [1, 3, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1,],
    [1, 0, 4, 4, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 4, 4, 0, 1,],
    [1, 0, 4, 4, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 4, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
];
var isFemale = true
function Createobjects() {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                isFemale = !isFemale
                var gre = new GrassEater(x, y, 2, isFemale)
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
            else if (matrix[y][x] == 6) {
                var cw = new Cow(x, y, 6)
                CowArr.push(cw)
            }
            else if (matrix[y][x] == 7) {
                var mlk = new Milk(x, y, 7)
                MilkArr.push(mlk)
            }
        }
    }
}

Createobjects()
function drawForBackend() {
    for (var i in grassArr) {
        grassArr[i].mul(mult);
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
        grassEaterArr[i].move()
        grassEaterArr[i].milkdrink()
        grassEaterArr[i].mult(mult)
        grassEaterArr[i].die()

    }
    for (var i in GishatichArr) {
        GishatichArr[i].eat()
        GishatichArr[i].move()
        GishatichArr[i].mult(mult)
        GishatichArr[i].milkdrink()
        GishatichArr[i].die()

    }

    for (var i in GyuxaciArr) {
        GyuxaciArr[i].eat()
        GyuxaciArr[i].milkdrink()
        GyuxaciArr[i].move()
    }
    for (var i in HreshArr) {
        HreshArr[i].eat()
        HreshArr[i].milkdrink()
        HreshArr[i].move()

    }
    for (var i in CowArr) {
        CowArr[i].eat()
        CowArr[i].move()
        CowArr[i].milkadd()
    }
    for (var i in MilkArr) {
        MilkArr[i].termm()
        MilkArr[i].die()
    }

    let sendData = {
        matrix: matrix
    }
    statistics = {
        grasses: grassArr.length,
        grassEaters: grassEaterArr.length,
        gishatichs: GishatichArr.length,
        gyuxacis: GyuxaciArr.length,
        hreshs: HreshArr.length,
        cows: CowArr.length,
        milks: MilkArr.length,
    }

    fs.writeFileSync('statistics.json', JSON.stringify(statistics, undefined, 2))
    mystatistics = fs.readFileSync('statistics.json').toString()
    io.sockets.emit("sendStatistics", JSON.parse(mystatistics))
    io.sockets.emit("matrix", sendData)

}
setInterval(drawForBackend, 1000)