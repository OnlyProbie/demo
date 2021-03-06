class MyObject {
  constructor () {
    console.log('myobject constructor')
  }
  static foo () {
    console.log('myobject')
  }
}


class MyObjectEx extends MyObject {
  constructor () {
    super()
    super.toString()
  }

  foo () {
    super.foo()
  }

  static print () {
    this.foo()
    super.toString()
  }
}

var a = new MyObjectEx()
console.log(123, a)
