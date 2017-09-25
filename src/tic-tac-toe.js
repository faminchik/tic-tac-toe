class TicTacToe {
    constructor() {
        this.matrix = [[], [], []];
    }

    getCurrentPlayerSymbol() {
        if (this.getCount() % 2 === 0)
            return 'x';
        else
            return 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === undefined)
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
    }

    isFinished() {
        return this.getWinner() !== null || this.isDraw()
    }

    getWinner() {
        var N = 3, first = true, second = true, third = true, fourth = true;
        for (var i=0; i < N; i++) {
            first = true;
            var rowEl = this.matrix[i][0];
            if (rowEl !== undefined) {
                for (var k = 1; k < N; k++)
                    if (first)
                        if (rowEl !== this.matrix[i][k]) {
                            first = false;
                            break;
                        }
            }
            else
                first = false;
            if (first)
                    return rowEl;
            second = true;
            var colEl = this.matrix[0][i];
            if (colEl !== undefined) {
                for (k = 1; k < N; k++)
                    if (second)
                        if (colEl !== this.matrix[k][i]) {
                            second = false;
                            break;
                        }
            }
            else
                second = false;
            if (second)
                    return colEl;
        }
        for (i=0; i < N - 1; i++) {
            if (third)
                if (this.matrix[i][i] !== this.matrix[i+1][i+1])
                    third = false;
            if (fourth)
                if (this.matrix[i][N-1-i] !== this.matrix [i+1][N-2-i])
                    fourth = false;
            if (!third && !fourth)
                break;
        }
        if (third)
            if (this.matrix [0][0] !== undefined)
                return this.matrix [0][0];
        if (fourth)
            if (this.matrix [0][N-1] !== undefined)
                return this.matrix [0][N-1];
        return null;
    }

    noMoreTurns() {
        return this.getCount() === 9;
    }

    isDraw() {
        return this.noMoreTurns() &&  this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex] !== undefined)
            return this.matrix[rowIndex][colIndex];
        else
            return null;
    }

    getCount () {
        var count = 0, N = 3;
        for (var i=0; i < N; i++)
            for (var j=0; j < N; j++)
                if (this.matrix[i][j] !== undefined)
                    count++;
        return count;
    }
}

module.exports = TicTacToe;
