// 函数的相关约束

// 函数重载：在函数实现之前，对函数调用的多种情况进行声明
//约束函数只有两种情况
function combine (a:number, b:number):number
function combine (a:string, b:string):string

function combine (a: number|string, b: number|string): number|string {
  if ( typeof a === 'number' && typeof b === 'number' ) {
    return a * b
  } else if ( typeof a === 'string' && typeof b === 'string') {
    return a + b
  }
  throw new Error('a 和 b 是错误类型')
}

combine(2, 2)
combine('2', '3')

// const result = combine()

// 可选参数：可以在某些参数名后加上问好，表示该参数可以不用传递，可选参数必须在参数列表最后
function sum (a:number, b:number, c?:number) : number {
  if (c) {
    return a + b + c
  }
  return a + b
}



