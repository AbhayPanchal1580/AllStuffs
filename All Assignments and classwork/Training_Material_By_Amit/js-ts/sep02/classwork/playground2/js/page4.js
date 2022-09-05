"use strict";
// rest parameters
function add4() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, params_1 = params; _a < params_1.length; _a++) {
        var value = params_1[_a];
        sum += value;
    }
    console.log("sum = ".concat(sum));
}
add4(10, 20);
add4(10, 20, 30);
add4(10, 20, 30, 40);
add4(10, 20, 30, 40, 50);
add4(10, 20, 30, 40, 50, 60);
add4(10, 20, 30, 40, 50, 60, 70);
