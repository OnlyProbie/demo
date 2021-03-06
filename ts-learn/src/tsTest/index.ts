interface AAA {
  x: number
  y: number
}

interface BBB {
  x: number
  y: number
  z: number
}

const aaAa:AAA = {x: 10, y: 20}

const bbBb:BBB = {x: 10, y: 20, z: 30}

function ipiontAB (point: AAA) {

}

ipiontAB(aaAa)
ipiontAB(bbBb)

// ipiontAB({x: 1})  // error: Property 'y' is missing
