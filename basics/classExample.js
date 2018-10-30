//old way of creating function constructor or a class
function Input() {
    this.type = "text";
}

Input.prototype.setType = function(type){ // prototype are reusing the methods and this methods are not hoisted
    this.type = type;
    return this;
}

// usage:  new Input().setType("type")

// new es6 way //behind the scene class proto type inheritence under the good
//class declartions are not hoisted.
class Input {

    static from(text){ //always top of the code, nice to have 
        return   new Input(text);
      }

    constructor() {
        this.type = "text";
    }
      setType(type) {
        this.type = type
        return this;
    }

    //Input.from = text => new TextSpan(text) outside the class
}

Input.prototype.render = function() {
    return this.type
}

function Fruit(title, price) {
    this.title = title;
    this.price = price;
}

Fruit.prototype.priceInfo = function() {
    retrun `Price of the ${this.title} is \
    ${this.price}`;
}

var apple = new Fruit("Apple", 2)
console.log(apple.priceInfo());