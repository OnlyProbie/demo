


let obj = {
    toString() {
      console.log('toString called')
      return 'world'
    }
  }

  let foo = {}

  foo[obj] = 'world'

  console.log(foo[obj])