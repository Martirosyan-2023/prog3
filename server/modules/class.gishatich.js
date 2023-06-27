let random = require("./random");
const LivingCreature = require("./class.main");

module.exports = class Gishatich extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 9;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
        return super.chooseCell(character)
    }
    mult(mult) {
        var emptyy = random(this.chooseCell(0))
        if (emptyy && this.energy > mult) {
            var newX = emptyy[0]
            var newY = emptyy[1]
            matrix[newY][newX] = 3
            var gsh = new Gishatich(newX, newY, 3)
            GishatichArr.push(gsh)
            this.energy = 9
        }
    }
    move() {
        var empp = random(this.chooseCell(0))
        if (empp) {
            matrix[this.y][this.x] = 0
            var newX = empp[0]
            var newY = empp[1]
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
        }
        this.energy--
    }
    eat() {
        var food = random(this.chooseCell(2))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                    grassEaterArr.splice(i, 1)
                }
            }
            this.energy += 3
        }
    }
    milkdrink() {
        var milk = random(this.chooseCell(7))
        if (milk) {
            matrix[this.y][this.x] = 0
            var newX = milk[0]
            var newY = milk[1]
            matrix[newY][newX] = 3
            this.x = newX
            this.y = newY
            for (var i in MilkArr) {
                if (MilkArr[i].x == newX && MilkArr[i].y == newY) {
                    MilkArr.splice(i, 1)
                }
            }
            this.energy == 9
        }
    }
    die() {
        if (this.energy <= 0) {
            for (var i in GishatichArr) {
                if (this.x == GishatichArr[i].x && this.y == GishatichArr[i].y) {
                    GishatichArr.splice(i, 1);
                    matrix[this.y][this.x] = 0
                    break;
                }
            }

        }
    }


}
