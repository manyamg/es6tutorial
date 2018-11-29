import {chai} from 'chai'
const assert = chai.assert;

var foo = 'bar';
assert(foo == 'bar', "expected foo to equal `bar`");

assert.fail(0, 1, 'this has failed'); //fail

assert.isTrue(false, 'blah'); // true

assert.isNotTrue(false);

assert.isNotTrue(true, 'blah'); //"blah: expected true to not equal true");

var foo;
    assert.equal(foo, undefined);

//typeof
assert.typeOf('test', 'string');
assert.typeOf(true, 'boolean');
assert.typeOf(5, 'number');
assert.notTypeOf('test', 'number');

//instance
function Foo(){}
    assert.instanceOf(new Foo(), Foo);

//isObject
assert.isObject({});
assert.isObject(new Foo());


//deepEqual
assert.deepEqual({tea: 'chai'}, {tea: 'chai'});
assert.deepStrictEqual({tea: 'chai'}, {tea: 'chai'});  // Alias of deepEqual


var obja = Object.create({ tea: 'chai' })
      , objb = Object.create({ tea: 'chai' });

    assert.deepEqual(obja, objb);

//not null
assert.isNotNull(undefined);

//exists
var meeber = 'awesome';
var iDoNotExist;

assert.exists(meeber);
assert.exists(0);
assert.exists(false);
assert.exists('');
assert.notExists(iDoNotExist);

//isFunction
var func = function() {};
assert.isFunction(func);
assert.isNotFunction(5);

//isArray
assert.isArray([]);
assert.isArray(new Array);

assert.isNumber('1', 'blah');


//include
assert.include('foobar', 'bar');
assert.include('', '');
assert.include([ 1, 2, 3], 3);

//hasKeys
assert.hasAllKeys({ foo: 1 }, [ 'foo' ]);
assert.hasAllKeys({ foo: 1, bar: 2 }, [ 'foo', 'bar' ]);
assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, [ 'foo', 'bar' ]);
assert.containsAllKeys({ foo: 1, bar: 2, baz: 3 }, [ 'bar', 'foo' ]);
assert.doesNotHaveAllKeys({ foo: 1, bar: 2 }, [ 'baz' ]);
assert.doesNotHaveAllKeys({ foo: 1, bar: 2 }, [ 'foo' ]);
assert.hasAnyKeys({ foo: 1, bar: 2 }, [ 'foo', 'baz' ]);
assert.hasAnyKeys({ foo: 1, bar: 2 }, [ 'foo' ]);