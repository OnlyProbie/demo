// TS中统一使用ES6模块化的导入导出
var us = {
    name: 'ssf',
    age: 22,
    sayHello: function () {
        console.log(this, this.name, this.age);
    }
};
var say = us.sayHello;
