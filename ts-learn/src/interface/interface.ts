
// 接口
interface Users {
  name: string
  age: number
  sayHello: () => void
}

let fuser:Users = {
  name: 'sfs',
  age: 12,
  sayHello: () => {
    console.log('hello')
  }
}

// 约束函数

// 类型别名 约束函数
// type Condition = (n:number) => boolean

// 接口 约束函数
// interface Condition {
//   (n: number): boolean
// }

// function mySum (numbers: number[], callBack: Condition) {
//   let s = 0
//   numbers.forEach( n => {
//     if (callBack(n)) {
//       s += n
//     }
//   })
//   return s
// }

// const sumResult = mySum([2,3,4,5,6], n => n % 2 !== 0)
// console.log(sumResult)


// 接口继承
// 可以通过接口之间的继承实现多种接口的继承

interface A{
  T1:string
}

interface B {
  T2:number
}

interface C extends A, B {
  T1: string
  T3: boolean
}

// 子接口不能覆盖父接口的成员

// 类型别名可以实现类似的效果
// type A = {
//   T1:string
// }

// type B = {
//   T2:number
// }

// 此处的 & 表示交叉类型
// type C = {
//   // T1: number
//   T3: boolean
// } & A & B

// 使用交叉类型会把相同成员的类型进行交叉


let ab: C = {
  T2: 23,
  T3: true,
  T1: 'age'
}

// 类型兼容性
// 鸭子辨型法（子结构辨型法）

// 基本类型：完全匹配
// 对象类型：鸭子辨型法
// 类型断言 as

interface Duck {
  sound: 'gagaga'
  swin(): void
}

let person = {
  name: '伪装成鸭子的人',
  age: 11,
  sound: 'gagaga' as 'gagaga',
  swin() {
    console.log(this.name+'正在游泳 ', this.sound)
  }
}

let duck:Duck = person

interface ResponseUser {
  loginId: string
  nickName: string
  gender: 'male' | 'female'
}


interface Condition {
  (n: number, i:number): boolean
}

function mySum (numbers: number[], callBack: Condition) {
  let s = 0
  numbers.forEach((n, i) => {
    if (callBack(n,i)) {
      s += n
    }
  })
  return s
}

const sumResult = mySum([2,3,4,5,6], n => n % 2 !== 0)
console.log(sumResult)


export {

}