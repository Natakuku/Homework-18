'use strict';

function pow(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * pow(base, exponent - 1);
}
let result = pow(2, 3);
console.log(result);