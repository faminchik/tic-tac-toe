class TicTacToe {
    constructor() {
        this.matrix = [[], [], []];
    }

    getCurrentPlayerSymbol() {
        if (this.getCount() % 2 === 0) {
            return 'x';
        } else {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === undefined) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        }
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw()
    }

    getWinner() {
        let N = 3, first = true, second = true, third = true, fourth = true;
        for (let i=0; i < N; i++) {
            first = true;
            let rowEl = this.matrix[i][0];
            if (rowEl !== undefined) {
                for (let k = 1; k < N; k++) {
                    if (first) {
                        if (rowEl !== this.matrix[i][k]) {
                            first = false;
                            break;
                        }
                    }
                }
            } else
                first = false;
            if (first) {
                return rowEl;
            }
            second = true;
            let colEl = this.matrix[0][i];
            if (colEl !== undefined) {
                for (let k = 1; k < N; k++) {
                    if (second) {
                        if (colEl !== this.matrix[k][i]) {
                            second = false;
                            break;
                        }
                    }
                }
            } else {
                second = false;
            }
            if (second) {
                return colEl;
            }
        }
        for (let i=0; i < N - 1; i++) {
            if (third) {
                if (this.matrix[i][i] !== this.matrix[i + 1][i + 1]) {
                    third = false;
                }
            }
            if (fourth) {
                if (this.matrix[i][N - 1 - i] !== this.matrix [i + 1][N - 2 - i]) {
                    fourth = false;
                }
            }
            if (!third && !fourth) {
                break;
            }
        }
        if (third) {
            if (this.matrix [0][0] !== undefined) {
                return this.matrix [0][0];
            }
        }
        if (fourth) {
            if (this.matrix [0][N - 1] !== undefined) {
                return this.matrix [0][N - 1];
            }
        }
        return null;
    }

    noMoreTurns() {
        return this.getCount() === 9;
    }

    isDraw() {
        return this.noMoreTurns() &&  this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex] !== undefined) {
            return this.matrix[rowIndex][colIndex];
        } else {
            return null;
        }
    }

    getCount () {
        let count = 0;
        this.matrix.forEach(function (subArray) {
            subArray.forEach(function (element) {
               if (element !== undefined){
                   count++;
               }
            });
        });
        return count;
    }
}

module.exports = TicTacToe;

