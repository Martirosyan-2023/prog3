const LivingCreature = require("./class.main");

module.exports = class Milk extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.term = 10
    }

    termminus() {
        this.term--
    }

    termm() {
        setInterval(termminus, 1000);
    }
    die() {
        if (this.term <= 0) {
            for (var i in MilkArr) {
                if (this.x == MilkArr[i].x && this.y == MilkArr[i].y) {
                    MilkArr.splice(i, 1);
                    matrix[this.y][this.x] = 0
                    break;
                }
            }

        }
    }

}







