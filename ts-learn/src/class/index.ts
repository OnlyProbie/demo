
// 类

export class UserInfos {
  // 类中关于属性
  // 使用属性列表来描述
  readonly id: number
  gender: 'male' | 'female' = 'male'
  pid?: string

  private publishNumber = 3
  private curNumber = 0
  // 构造函数
  constructor (private name: string, private _age: number) { // 如果某个属性，通过构造函数的参数传递，并且不做任何处理的赋值给该属性，可以简写
    this.id = Math.random()
  }

  set age (value: number) {
    this._age = value
  }

  get age () {
    return this._age
  }

  publish (title: string) {
    if(this.curNumber <= this.publishNumber) {
      console.log('发表了文章 -- ' + title)
      this.curNumber++
    }
  }
}


