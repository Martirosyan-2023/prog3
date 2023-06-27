let random = require("./random");
const LivingCreature = require("./class.main");

module.exports = class Cow extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 8;
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
        this.getNewCoordinates();
        return super.chooseCell(character);
    }


    move() {
        var emp = random(this.chooseCell(0))
        if (emp) {
            matrix[this.y][this.x] = 0
            var newX = emp[0]
            var newY = emp[1]
            matrix[newY][newX] = 6
            this.x = newX
            this.y = newY
        }
        this.energy -= 2
    }

    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 6
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }
            this.energy += 4
        }
    }
    milkadd() {
        if (this.energy >= 13){
            var empty = random(this.chooseCell(0))
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 7
            var mlk = new Milk(newX, newY, 7)
            MilkArr.push(mlk)
            this.energy = 8
        }

    }
}


