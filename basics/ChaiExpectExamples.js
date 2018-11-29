import {chai} from 'chai'
const expect = chai.expect;

expect.fail('this has failed'); // fail error message

//true 
expect(true).to.be.true;
expect(false).to.not.be.true;

//with ok
expect(true).to.be.ok;
expect(false).to.not.be.ok;

// false 
expect(false).to.be.false;
expect(true).to.not.be.false;
expect(0).to.not.be.false;

// null 
expect(null).to.be.null;
expect(false).to.not.be.null;

//undefined
expect(undefined).to.be.undefined;
expect(null).to.not.be.undefined;

//exist
var foo = 'bar'
expect(foo).to.exist;
expect(bar).to.not.exist;

//datatypes
expect('test').to.not.be.a('string');
expect(5).to.be.a('number');
expect(new Number(1)).to.be.a('number');
expect(Number(1)).to.be.a('number');
expect(true).to.be.a('boolean');
expect(new Array()).to.be.a('array');
expect(new Object()).to.be.a('object');
expect({}).to.be.a('object');
expect([]).to.be.a('array');
expect(function() {}).to.be.a('function');


//within
expect(5).to.be.within(5, 10);
expect(5).to.be.within(3, 6);
expect(5).to.be.within(3, 5);
expect(5).to.not.be.within(1, 3);
expect('foo').to.have.length.within(2, 4);
expect('foo').to.have.lengthOf.within(2, 4);
expect([ 1, 2, 3 ]).to.have.length.within(2, 4);
expect([ 1, 2, 3 ]).to.have.lengthOf.within(2, 4);


//above
expect(5).to.be.above(2);
expect(5).to.be.greaterThan(2);
expect(5).to.not.be.above(5);
expect(5).to.not.be.above(6);
expect('foo').to.have.length.above(2);
expect('foo').to.have.lengthOf.above(2);
expect([ 1, 2, 3 ]).to.have.length.above(2);
expect([ 1, 2, 3 ]).to.have.lengthOf.above(2);

//below
expect(2).to.be.below(5);
expect(2).to.be.lessThan(5);
expect(2).to.not.be.below(2);
expect(2).to.not.be.below(1);
expect('foo').to.have.length.below(4);
expect('foo').to.have.lengthOf.below(4);
expect([ 1, 2, 3 ]).to.have.length.below(4);
expect([ 1, 2, 3 ]).to.have.lengthOf.below(4);


//lengthof
expect('test').to.have.length(4);
expect('test').to.have.lengthOf(4);
expect('test').to.not.have.length(3);
expect('test').to.not.have.lengthOf(3);
expect([1,2,3]).to.have.length(3);
expect([1,2,3]).to.have.lengthOf(3);


//eql
expect('test').to.eql('test');
expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
expect(1).to.eql(1);
expect('4').to.not.eql(4);


//empty
expect('').to.be.empty;
expect('foo').not.to.be.empty;
expect([]).to.be.empty;
expect(['foo']).not.to.be.empty;
expect(new FakeArgs).to.be.empty;
expect({arguments: 0}).not.to.be.empty;
expect({}).to.be.empty;
expect({foo: 'bar'}).not.to.be.empty;


//NAN
expect(NaN).to.be.NaN;
expect(undefined).not.to.be.NaN;
expect(Infinity).not.to.be.NaN;
expect('foo').not.to.be.NaN;
expect({}).not.to.be.NaN;
expect(4).not.to.be.NaN;
expect([]).not.to.be.NaN;


//property
expect('test').to.have.property('length');
expect({a: 1}).to.have.property('toString');
expect(4).to.not.have.property('length');
expect({ 'foo.bar': 'baz' }).to.have.property('foo.bar');
expect({ foo: { bar: 'baz' } }).to.not.have.property('foo.bar');


//nested property
var deepObj = {
    green: { tea: 'matcha' }
  , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
};
expect(deepObj).to.have.nested.property('green.tea', 'matcha');
expect(deepObj).to.have.nested.property('teas[1]', 'matcha');
expect(deepObj).to.have.nested.property('teas[2].tea', 'konacha');


//deep property deep.property(name, val)
var obj = {a: {b: 1}};
expect(obj).to.have.deep.property('a', {b: 1});
expect(obj).to.not.have.deep.property('a', {b: 7});
expect(obj).to.not.have.deep.property('a', {z: 1});
expect(obj).to.not.have.deep.property('z', {b: 1});

//chaining property name and value
// Chaining property's value
expect('test').to.have.own.property('length').that.is.a('number');

//own.property(name, value)', function(){
expect('test').to.have.own.property('length', 4);
expect('test').to.not.have.own.property('length', 1337);
expect({a: 1}).to.not.have.own.property('toString', Object.prototype.toString);
expect({a: {b: 1}}).to.not.have.own.property('a', {b: 1});


//string
expect('foobar').to.have.string('bar');
expect('foobar').to.have.string('foo');
expect('foobar').to.not.have.string('baz');


//include
expect(['foo', 'bar']).to.include('foo');
expect(['foo', 'bar']).to.include('foo');
expect(['foo', 'bar']).to.include('bar');
expect([1,2]).to.include(1);
expect(['foo', 'bar']).to.not.include('baz');
expect(['foo', 'bar']).to.not.include(1);

//keys
expect({ foo: 1, bar: 2 }).to.have.keys(['foo', 'bar']);
expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('bar', 'foo');
expect({ foo: 1, bar: 2 }).to.contain.keys('foo');
expect({ foo: 1, bar: 2 }).to.not.have.keys('foo', 'baz');
expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);
expect({ foo: 1, bar: 2 }).to.not.have.any.keys('baz', 'abc', 'def');   


//chaining
var tea = { name: 'chai', extras: ['milk', 'sugar', 'smile'] };
expect(tea).to.have.property('extras').with.lengthOf(3);
expect(tea).to.have.property('extras').which.contains('smile');
expect(tea).to.be.a('object').and.have.property('name', 'chai');


    //error
var goodFn = function () { 1==1; }
  , badFn = function () { throw new Error('testing'); }

expect(goodFn).to.not.throw();
expect(goodFn).to.not.throw(Error);
expect(badFn).to.throw();
expect(badFn).to.throw(Error)

//ordered numbers
expect([1, 2, 3]).ordered.members([1, 2, 3]);
expect([1, 2, 2]).ordered.members([1, 2, 2]);
expect([1, 2, 3]).not.ordered.members([2, 1, 3]);