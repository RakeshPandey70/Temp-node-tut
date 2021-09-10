// CommonJS, every file is module (by defualt)
// Modules
 

const names = require('./4-names')
const sayHi = require('./5-utlis')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

console.log(names)
console.log('name....')
console.log(data)
sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
