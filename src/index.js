class SmartCalculator {
    constructor(initialValue) {
        this.array = [initialValue];
    }

    toString (){
        for (var i = 0; i < this.array.length; i++) {
            if (this.array[i] === "^") {
                var k = 2, j = i+2, helpStr = [];
                helpStr.push(this.array[i-1], this.array[i+1]);
                while (this.array[j] === "^" ) {
                    helpStr.push(this.array[j+1]);
                    j+=2;
                    k=k+2;
                }
                this.array.splice(i,k);
                for (var p = helpStr.length-1; p > 0; p--) {
                    helpStr[p-1] = Math.pow(helpStr[p-1], helpStr[p]);
                    helpStr.pop();
                }
                this.array[i-1] = helpStr[0];
                i--;
            }
        }
        var x = this.array.join("");
        return eval(x);
    }
    add(number) {
        this.array.push('+', number);
        return this;
    }

    subtract(number) {
        this.array.push('-', number);
        return this;
    }

    multiply(number) {
        this.array.push('*', number);
        return this;

    }

    devide(number) {
        this.array.push('/', number);
        return this;

    }

    pow(number) {
        this.array.push('^', number);
        return this;
    }
}

module.exports = SmartCalculator;
