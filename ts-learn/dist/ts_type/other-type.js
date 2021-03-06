"use strict";
let other_name = 'undefined';
if (typeof other_name === 'string') {
    other_name.toLocaleLowerCase();
}
function printMenu() {
    console.log('1.登录');
    console.log('2.注册');
}
function throwError(msg) {
    throw new Error(msg);
}
let type_a;
let gender;
let arr;
let user;
let tu;
let data = 'asdf';
let type_num = data;
