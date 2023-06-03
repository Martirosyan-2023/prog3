class Gyuxaci {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.index = index;
        this.directions = [];
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
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var empp = random(this.chooseCell(0))
        if (empp) {
            matrix[this.y][this.x] = 0
            var newX = empp[0]
            var newY = empp[1]
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }
        this.energy--
    }
    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            matrix[this.y][this.x] = 0
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }
            this.energy++
        }
    }
    die() {
        if (grassArr.length == 0) {
            for (var i in GyuxaciArr) {
                if (this.x == GyuxaciArr[i].x && this.y == GyuxaciArr[i].y) {
                    GyuxaciArr.splice(i, 1);
                    matrix[this.y][this.x] = 0
                    break;
                }
            }

        }
    }

}
