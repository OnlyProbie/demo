
// 联合类型: 将多种类型任选其一
let other_name:string | undefined = 'undefined'

if ( typeof other_name === 'string' ) {
  // 类型保护：当对某个变量进行类型判断之后，在判断的语句块中便可以确定他的确切类型，typeof 可以触发类型保护
  other_name.toLocaleLowerCase()
}

// void类型： 通常用于约束函数的返回值，表示函数没有任何返回值
function printMenu (): void {
  console.log('1.登录')
  console.log('2.注册')
}

// naver类型： 通常用于约束函数的返回值，表示该函数永远不可能结束
function throwError (msg:string):never {
  throw new Error(msg)
}

// 字面量类型： 使用一个值进行约束
let type_a:"A"

let gender: 'male' | 'female'

let arr:[] // arr永远只能取值为一个空数组

let user: {
  name: string
  age: number
}

// 元祖类型：一个固定长度的数组，并且数组中的每一项的类型确定
let tu: [string, number] // 数组tu 必须有两项，且第一项是string，第二项是number

// any类型：any类型可以绕过类型检查
let data:any = 'asdf'

let type_num:number = data

