"use strict";
function combine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('a 和 b 是错误类型');
}
combine(2, 2);
combine('2', '3');
function sum(a, b, c) {
    if (c) {
        return a + b + c;
    }
    return a + b;
}
