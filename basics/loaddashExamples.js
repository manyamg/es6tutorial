const _ = require('lodash')

_.compact([0, 1, false, 2, '', 3])
 // => [1, 2, 3]

 _.add(6, 4)
  // => 10

  const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
  _.at(object, ['a[0].b.c', 'a[1]'])
 // => [3, 4]  Creates an array of values corresponding to `paths` of `object`.

 _.camelCase('Foo Bar')
  // => 'fooBar'  //removes white space and camelcased
 
 camelCase('--foo-bar--') // => 'fooBar' //removes -- and camelcased
 
  _.camelCase('__FOO_BAR__') // => 'fooBar' //removes __ and camelcased

  _.capitalize('FRED') // => 'Fred'

  //*************Cast array **************/
 
  _.castArray(1)// => [1]
  _.castArray({ 'a': 1 })// => [{ 'a': 1 }]
  _.castArray('abc')// => ['abc']
  _.castArray(null)// => [null]
  _.castArray(undefined)// => [undefined]
  _.castArray() // => []


_.ceil(4.006)// => 5
_.ceil(6.004, 2)// => 6.01
_.ceil(6040, -2)// => 6100


_.chunk(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]
_.chunk(['a', 'b', 'c', 'd'], 3) // => [['a', 'b', 'c'], ['d']]

const objects = [{ 'a': 1 }, { 'b': 2 }]
const shallow = _.clone(objects)
 console.log(shallow[0] === objects[0])// => true


 const objects = [{ 'a': 1 }, { 'b': 2 }]
const deep = _.cloneDeep(objects)
 console.log(deep[0] === objects[0]) // => false

//*****conforms */
 const objects = [
   { 'a': 2, 'b': 1 },
      { 'a': 1, 'b': 2 }
    ]
     _.filter(objects, _.conforms({ 'b': function(n) { return n > 1 } })) // => [{ 'a': 1, 'b': 2 }]

const object = { 'a': 1, 'b': 2 }
_.conformsTo(object, { 'b': function(n) { return n > 1 } })// => true
_.conformsTo(object, { 'b': function(n) { return n > 2 } })// => false     

const users = [
   { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
  ]
  _.countBy(users, 'active');// => { 'true': 2, 'false': 1 }
  

_.defaultTo(1, 10) // => 1  The `defaultValue` is returned if `value` is `NaN`, `null`, or `undefined`.
 _.defaultTo(undefined, 10)// => 10

_.defaultToAny(1, 10, 20) // => 1  This method is like `defaultTo` except that it accepts multiple default values and returns the first one that is not `NaN`, `null`, or `undefined`.
_.defaultToAny(undefined, 10, 20)// => 10
_.defaultToAny(undefined, null, 20)// => 20
_.defaultToAny(undefined, null, NaN)// => NaN

//delay(func, wait, ...args)
_.delay(text => console.log(text), 1000, 'later') // => Logs 'later' after one second.

_.divide(6, 4) // => 1.5

// params array, n=1
_.drop([1, 2, 3]) // => [2, 3]
_.drop([1, 2, 3], 2) // => [3]
_.drop([1, 2, 3], 5) // => []
_.drop([1, 2, 3], 0)// => [1, 2, 3]


_.dropRight([1, 2, 3]) // => [1, 2]
_.dropRight([1, 2, 3], 2) // => [1]
_.dropRight([1, 2, 3], 5) // => []
_.dropRight([1, 2, 3], 0)// => [1, 2, 3]

_.endsWith('abc', 'c')// => true Checks if `string` ends with the given target string.
_.endsWith('abc', 'b') // => false
_.endsWith('abc', 'b', 2) // => true

const object = { 'a': 1 }
const other = { 'a': 1 }
_.eq(object, object) // => true
_.eq(object, other) // => false 
_.eq('a', 'a')// => true

_.isEqual(object, other) // => true deep equal

_.every([true, 1, null, 'yes'], Boolean) // false


const users = {
 'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
   'pebbles': { 'age': 1,  'active': true }
 }
 //object, predicate - params
_findKey(users, ({ age }) => age < 40) // => 'barney' (iteration order is not guaranteed)
_.findLastKey(users, ({ age }) => age < 40) // => returns 'pebbles' assuming `findKey` returns 'barney'

_.findLast([1, 2, 3, 4], n => n % 2 == 1) // => 3

const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': false },
      { 'user': 'pebbles', 'active': false }
 ]
 _.findLastIndex(users, ({ user }) => user == 'pebbles') // => 2


function duplicate(n) { return [n, n] }
_.flatMap([1, 2], duplicate) // => [1, 1, 2, 2]

_.flatten([1, [2, [3, [4]], 5]])
_.flattenDeep([1, [2, [3, [4]], 5]]) // => [1, 2, 3, 4, 5]

_.flipped('a', 'b', 'c', 'd') // => ['d', 'c', 'b', 'a']
 _.floor(4.006) // => 4
_.floor(0.046, 2) // => 0.04

_.forEach([1, 2], value => console.log(value)) // => Logs `1` then `2`.
_.forEach({ 'a': 1, 'b': 2 }, (value, key) => console.log(key)) // => Logs 'a' then 'b' (iteration order is not guaranteed).

_.forEachRight([1, 2], value => console.log(value))// => Logs `2` then `1`.

const object = { 'a': [{ 'b': { 'c': 3 } }] }
_.get(object, 'a[0].b.c') // => 3
_.get(object, ['a', '0', 'b', 'c']) // => 3
_. get(object, 'a.b.c', 'default') // => 'default'

_.groupBy([6.1, 4.2, 6.3], Math.floor) // => { '4': [4.2], '6': [6.1, 6.3] }

_.gt(3, 1) // => true
_.gt(3, 3)// => false
_.gt(1, 3) // => false

_.gte(3, 1) // => true
_.gte(3, 3) // => true
_.gte(1, 3)// => false Checks if `value` is greater than or equal to `other`.

const object = { 'a': { 'b': 2 } }
_.has(object, 'a')// => true
_.hasPath(object, 'a.b')

_.head([1, 2, 3])// => 1
_.head([]) // => undefined

//number, start, end  // start = 0 if start and end are same
_.inRange(3, 2, 4) // => true
_.inRange(4, 8) // => true
_.inRange(4, 2) // => false inRange(2, 2)// => false
_.inRange(1.2, 2)// => true

_.indexOf([1, 2, 1, 2], 2) // => 1

const object = { 'a': 1, 'b': 2, 'c': 1 }
_.invert(object)  // => { '1': 'c', '2': 'b' }

_.isArrayLike([1, 2, 3])
_isBoolean(false) // true
_.isBoolean(null) //false

_.isDate(new Date) //true

_.isEmpty([1, 2, 3]) //false

_.isEmpty(null) // => true

_.isError(new Error) // => true Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`, `SyntaxError`, `TypeError`, or `URIError` object.
_.isError(Error) // => false

_.isFunction(_) //true
_.isFunction(/abc/) //=> abc

._isMap(new Map)// true
._isMap(new WeakMap) // false

const object = { 'a': 1, 'b': 2 }
_.isMatch(object, { 'b': 2 })// true

_.isMatch(object, { 'b': 1 }) // false
_.isNull(null) // true
_.isNull(void 0) //false
_.isNumber(3) // true
_.isNumber('3') // false



_.isObject({}) // true
_.isObject([1, 2, 3]) // true 
_.isObject(Function) // true 
_.isObject(null) //false

_.isPlainObject({ 'x': 0, 'y': 0 }) //true

function Foo() {
      this.a = 1
    }
    _.isPlainObject(new Foo) // false
    _.isPlainObject([1, 2, 3]) //false

_.isSet(new Set) // true
_.isSet(new WeakSet) //false

_.isString('abc') // true
_.isString(1) //false

_.isSymbol(Symbol.iterator) //true
_.isSymbol('abc') // false

_.last([1, 2, 3]) //3

_.lowerCase('--Foo-Bar--') // 'foo bar' //`string`, as space separated words, to lower case.

_.lowerFirst('Fred') //fred
_.lowerFirst('FRED') //fRED

_.it(1,3) //true less than
_.lte(1, 3) // less than and equal to 

_.mapKey({ 'a': 1, 'b': 2 }, function(value, key) {
    return key + value}) // => { 'a1': 1, 'b2': 2 }

    const object = { 'a': 1, 'b': 2 }
    _.memoize(values) //[1,2]


    const object = {'a': [{ 'b': 2 }, { 'd': 4 }]}
    const other = {'a': [{ 'c': 3 }, { 'e': 5 }]}        
   _.merge(object, other) // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }/

   const array = ['a', 'b', 'c', 'd'] 
   _.nth(array,1 ) //b
   nth(array, -2) //c
   const createApplication = () => "createApplication` is invoked once"
   const initialize = once(createApplication)
   initialize()
   initialize()
   //prints only once ""createApplication` is invoked once"


    const users = [
      { 'user': 'fred',   'age': 48 },
      { 'user': 'barney', 'age': 34 },
      { 'user': 'fred',   'age': 40 },
      { 'user': 'barney', 'age': 36 } ]

    // Sort by `user` in ascending order and by `age` in descending order.
     _.orderBy(users, ['user', 'age'], ['asc', 'desc']) // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

      _.pad('abc', 8)  // '  abc   '
      _.padEnd('abc', 6)  //'abc   '
      _.padEnd('abc', 6, '_-') // => 'abc_-_'
      _.padStart('abc', 6) // => '   abc'
      _.padStart('abc', 6, '_-') // => '_-_abc'

      _.parseInt('08') //8

      const object = { 'a': 1, 'b': '2', 'c': 3 }
      _.pick(object, ['a', 'c']) // => { 'a': 1, 'c': 3 }


      
      _.random(0, 5)// => an integer between 0 and 5
      _.random(5)// => also an integer between 0 and 5
      _.random(5, true)// => a floating-point number between 0 and 5 
      _.random(1.2, 5.2)// => a floating-point number between 1.2 and 5.2


      _.range(4) // => [0, 1, 2, 3) 
      _.range(-4) // => [0, -1, -2, -3]
      _.range(1, 5) // => [1, 2, 3, 4]
      _.range(0, 20, 5)// => [0, 5, 10, 15]

      _.reduce([1, 2], (sum, n) => sum + n, 0)// => 3

 _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
    (result[value] || (result[value] = [])).push(key)
     return result}, {})
 // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)

 const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred',   'active': false }
 ]
    _.reject(users, ({ active }) => active) // => objects for ['fred']

const array = [1, 2, 3, 4]
const evens = _.remove(array, n => n % 2 == 0)
    
console.log(array)// => [1, 3]
console.log(evens)// => [2, 4]

_.repeat('*', 3)// => '***'
_.repeat('abc', 2)// => 'abcabc'
_.repeat('abc', 0)// => ''


_.round(4.006)// => 4
_.round(4.006, 2) // => 4.01
_.round(4060, -2)// => 4100

_.sample([1, 2, 3, 4]) // => 2 Gets a random element from `array`.
_.shuffle([1, 2, 3, 4]) // => [4, 1, 3, 2]


_.size([1, 2, 3])// => 3
_.VERSIONsize({ 'a': 1, 'b': 2 })// => 2
_.size('pebbles') // => 7

var array = [1, 2, 3, 4]
//array, start, end // start is zero if start and end are same.
_.slice(array, 2) // => [3, 4]

_.snakeCase('Foo Bar')// => 'foo_bar'
_.snakeCase('fooBar') // => 'foo_bar'
_.snakeCase('--FOO-BAR--')// => 'foo_bar'
_.snakeCase('foo2bar')// => 'foo_2_bar'

_.sortedUniq([1, 1, 2]) // => [1, 2]

//array, iteratee {Function}  iteratee invoked per element.
_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)

//string, separator, limit - params
_.split('a-b-c', '-', 2) // => ['a', 'b']

_.startCase('fooBar') // => 'Foo Bar'
_.startsWith('abc', 'a') // true
_.subtract(6, 4) //2 

_.sum([4, 2, 8, 6]) //=> 20
const objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }]
_.sumBy(objects, ({ n }) => n) // => 20

_.tail([1, 2, 3])  // => [2, 3]

// slice of `array` with `n` elements taken from the beginning.
_.take([1, 2, 3])// => [1]
_.take([1, 2, 3], 2) // => [1, 2]
_.take([1, 2, 3], 5) // => [1, 2, 3]
_.take([1, 2, 3], 0) // => []

_.takeRight([1, 2, 3], 2)// => [2, 3]

_.toArray('abc') // => ['a', 'b', 'c']
_.toArray({ 'a': 1, 'b': 2 })  // => [1, 2]

_.toInteger(3.2) // => 3
_.toInteger(Number.MIN_VALUE) // => 0

_.toNumber('3.2') //3.2


_.trim('  abc  ')// => 'abc'
_.trim('-_-abc-_-', '_-')  // => 'abc'

_.trimEnd('  abc  ') // => '  abc'
_.trimStart('  abc  ') // => 'abc  '

_.uniqueId('contact_') // => 'contact_104'
_.uniqueId() // => '105'


const zipped = _.zip(['a', 'b'], [1, 2], [true, false]) // => [['a', 1, true], ['b', 2, false]]
 _.unzip(zipped)// => [['a', 'b'], [1, 2], [true, false]]
 _.zipObject(['a', 'b'], [1, 2]) // => { 'a': 1, 'b': 2 }


 _.upperCase('--foo-bar')// => 'FOO BAR'
 _.upperCase('fooBar') // => 'FOO BAR'
 _.upperCase('__foo_bar__') // => 'FOO BAR'


_.upperFirst('fred')// => 'Fred'
_.upperFirst('FRED')// => 'FRED'



    

      




















