let fuser = {
    name: 'sfs',
    age: 12,
    sayHello: () => {
        console.log('hello');
    }
};
let ab = {
    T2: 23,
    T3: true,
    T1: 'age'
};
let person = {
    name: '伪装成鸭子的人',
    age: 11,
    sound: 'gagaga',
    swin() {
        console.log(this.name + '正在游泳 ', this.sound);
    }
};
let duck = person;
function mySum(numbers, callBack) {
    let s = 0;
    numbers.forEach((n, i) => {
        if (callBack(n, i)) {
            s += n;
        }
    });
    return s;
}
const sumResult = mySum([2, 3, 4, 5, 6], n => n % 2 !== 0);
console.log(sumResult);
export {};
