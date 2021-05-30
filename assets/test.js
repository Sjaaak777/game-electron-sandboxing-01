// Test class and js file to check different module exports
class Pulk {
  constructor() {
    ;(this.name = 'pulkName'), (this.age = 55)
  }

  snoep = () => {
    console.log('snoep')
  }
}

add = (a, b) => {
  return a + b
}

substractor = (a, b) => {
  return a - b
}
deNaam = 'een naam'

pong = {
  een: 1,
  twee: 2,
  drie: 'drie',
}

pong.een = 4

console.log('from test')

module.exports = {
  Pulk,
  add,
  substractor,
  deNaam,
  pong,
}

// const tst = require('./assets/test')

// plk = new tst.Pulk()
// console.log(plk)
// console.log(plk.snoep())
// console.log(tst.add(4, 5))
// console.log(tst.pong)
