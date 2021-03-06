
// TS中统一使用ES6模块化的导入导出

// 在TS中使用commonjs模块化
/**
 * 导出： export = {}
 * 导入： import xxx from 'xxx'
 */
// import * as practice from "./practice/practice"

// const result = practice.CreateDeck()
// practice.PrintDeck(result)

// import initDeck from "./practice/class/index"

// initDeck()

// // class

// import { UserInfos } from "./class/index"

// const uf = new UserInfos('aa', 22)

// uf.age = 18
// console.log(uf.age)

// import fs from "fs"

// fs.readFileSync('/app.ts')


// TS中，模块解析策略有两种
// classic: 经典
// node: node解析策略（唯一的变化，是将js替换为ts）

// import fooc = require('fooc')

// const mySeho: string = '12312312'
// function func ( name: string ): string {
//   return name
// }

// func('prince')

// console.log(bbBb)



// export interface IFireShow {
//   singleFire: () => void
// }

// export interface DoubleShow {
//   doubleFire: () => void
// }

// export class Animal {

// }

// export class Dog extends Animal implements IFireShow {
//   singleFire: () => void;
// }

// export class Monkey extends Animal implements IFireShow {
//   singleFire: () => void;
// }

// export class Cat extends Animal implements DoubleShow {
//   doubleFire: () => void;
// }

// const animals = [new Dog(), new Monkey(), new Cat()]

// animals.forEach(a => {
//   if (typeProtected<IFireShow>(a, 'singleFire')) {
//     a.singleFire()
//   }
// })

// typeProtected<Animal>(a, 'singleFire')

// function typeProtected<T> (obj: any, props: string): obj is T {
// 	if((obj as unknown as T)[props]) return true
// 	return false
// }


// type simpleActions = {
//   actionOne(payload: number): Promise<number>
//   actionTwo(payload: string): Promise<boolean>
// }

// declare function dispatch<K extends keyof simpleActions>(type: K): ReturnType<simpleActions[K]>

// declare function getValueByPath<T extends Record<any, any>, K extends keyof ChainKeys<T>>(object: T, prop: K): ChainKeys<T>[K]

// getValueByPath({a: 1, b: 2}, 'a')

// type StringKeyof<T> = Exclude<keyof T, symbol>

// type CombineStringKey<H extends string | number, L extends string | number> = H extends '' ? `${L}` : `${H}.${L}`


// type deepObj = {
//   a: number;
//   b: {
//     c: string;
//     d: number;
//     e: {
//       f: number;
//       g: boolean;
//     };
//   };
// }

// type UnionToInterserction<U> = (U extends any ? (k: U) => void: never) extends ((k: infer I) => void) ? I : never;

// type ChainKeys<T, P extends string | number = ''> = UnionToInterserction<{
//   [K in StringKeyof<T>]:  Record<CombineStringKey<P, K>, T[K]> & (T[K] extends Record<any, any> ?  ChainKeys<T[K], CombineStringKey<P, K>> : {})
// }[StringKeyof<T>]>

// type a = ChainKeys<deepObj>

// type k = keyof a

// js中this指向几种情况
// 大部分的时候，this的指向取决于函数的调用方式

// 如果直接调用函数（全局调用），this指向全局对象（window,global）或者undefined（启用严格模式）
// 如果使用 对象.方法 的调用方式，this指向对象本身
// 如果是dom事件的处理函数，this指向事件处理对象

// 特殊情况
// 箭头函数，this在函数声明时确定，指向函数所在位置的this
// 使用bind、apply、call手动绑定this对象

// ts中的this

interface IUser {
  name: string,
  age: number,
  sayHello(this: IUser): void
}

const us: IUser = {
  name: 'ssf',
  age: 22,
  sayHello () {
    console.log(this, this.name, this.age)
  }
}

const say = us.sayHello



