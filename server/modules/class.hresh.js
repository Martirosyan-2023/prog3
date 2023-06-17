let random = require("./random");
const LivingCreature = require("./class.main");

module.exports = class Hresh extends LivingCreature {
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
    move() {
        var empp = random(this.chooseCell(0))
        if (empp) {
            matrix[this.y][this.x] = 0
            var newX = empp[0]
            var newY = empp[1]
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }
        this.energy--
    }
    eat() {
        var food = random(this.chooseCell(2, 3, 4))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            this.x = newX
            this.y = newY
            if (matrix[newY][newX] == 2) {
                for (var i in grassEaterArr) {
                    if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                        grassEaterArr.splice(i, 1)
                    }
                }
            }
            else if (matrix[newY][newX] == 3) {
                for (var i in GishatichArr) {
                    if (GishatichArr[i].x == newX && GishatichArr[i].y == newY) {
                        GishatichArr.splice(i, 1)
                    }
                }
            }
            else if (matrix[newY][newX] == 4) {
                for (var i in GyuxaciArr) {
                    if (GyuxaciArr[i].x == newX && GyuxaciArr[i].y == newY) {
                        GyuxaciArr.splice(i, 1)
                    }
                }
            }

            matrix[newY][newX] = 5
        }

    }
}