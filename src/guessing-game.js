class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
    }

    guess() {
        this.middle = Math.round((this.min + this.max) / 2);
        return this.middle;
    }

    lower() {
        this.max = this.middle;
    }

    greater() {
        this.min = this.middle;
    }
}

module.exports = GuessingGame;