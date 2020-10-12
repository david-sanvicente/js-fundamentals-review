/* eslint-disable no-unused-vars */
function createCalculator(){
    //
    let calc = {};

    calc.total = 0;
    calc.value = () => {return calc.total};
    calc.add = (num) => {calc.total += num};
    calc.subtract = (num) => {calc.total -= num};
    calc.clear = () => {calc.total = 0};

    return calc;
}

 function addSquareMethod(array){
     //
     return array.map(calc => {
         calc.square = function () {return this.total *= this.total};
         return calc;
     });
 }

 function createHumanCalculator(){
    //
    let calc = Object.create({
        value() {return this.total},
        add(num){this.total += num},
        subtract(num){this.total -= num},
        clear(){this.total = -10}
    });
    calc.total = -10;
    console.log(calc);
    return calc;
 }