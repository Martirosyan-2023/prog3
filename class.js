class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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
    mul() {
        this.multiply += 2;
        var newCell = random(this.chooseCell(0));
        if (newCell && this.multiply >= 8) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
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



    mult() {
        var empty = random(this.chooseCell(0))
        if (empty && this.energy > 13) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new GrassEater(newX, newY, 2)
            grassEaterArr.push(xt)
            this.energy = 8
        }
    }

    move() {
        var emp = random(this.chooseCell(0))
        if (emp) {
            matrix[this.y][this.x] = 0
            var newX = emp[0]
            var newY = emp[1]
            matrix[newY][newX] = 2
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
            matrix[newY][newX] = 2
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
    die() {
        if (this.energy == 0) {
            for (var i in grassEaterArr) {
                if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    matrix[this.y][this.x] = 0
                    break;
                }
            }

        }
    }
}



class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 9;
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
    mult() {
        var emptyy = random(this.chooseCell(0))
        if (emptyy && this.energy > 14) {
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

class Hresh {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 9;
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
    chooseCell(char1, char2, char3) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == char1 || matrix[y][x] == char2 || matrix[y][x] == char3) {
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