const orders = [{
        desc: "pencils",
        price: 1.5,
        quantity: 2
    },
    {
        desc: "notepads",
        price: 1.5,
        quantity: 2
    },
    {
        desc: "paperclips",
        price: 1.5
    }
];
sum = 0
for (const order of orders) {
    const quantity = order.quantity || 1;
    sum += order.price * quantity
}


function PersonQuery() {
    const wes = {
        first: "Wes",
        last: "Higbee"
    };
    const pax = {
        first: "Pac",
        last: "Higbee"
    };
    const jonathan = {
        first: "Jonathan",
        last: "Higbee"
    };

    //  let theNextRecord = wes;
    //   this.nextRecord = function() {
    //       switch(theNextRecord) {
    //           case wes:
    //           theNextRecord = pax;
    //           return wes;
    //           case pax:
    //           theNextRecord = jonathan;
    //           return pax;
    //           case jonathan:
    //           theNextRecord = wes;
    //           return jonathan;
    //       }
    //    return theNextRecord;
    //   }
    createIterator = function () {
        let theNextRecord = wes;

        function next() {
            switch (theNextRecord) {
                case wes:
                    theNextRecord = pax;
                    return {
                        value: wes,
                        done: false
                    };
                case pax:
                    theNextRecord = jonathan;
                    return {
                        value: pax,
                        done: false
                    };
                case jonathan:
                    theNextRecord = undefined;
                    return {
                        value: jonathan,
                        done: false
                    };
            }
            return {
                done: true
            };
        }

        return {
            next: next
        }
    }

    this[Symbol.iterator] = createIterator;

}

//   const query = new PersonQuery(); //query is iterable , thenextRecord is iterator which keeps of record
//   console.log(query.nextRecord());
//   console.log(query.nextRecord());
//   console.log(query.nextRecord());


const query = (new PersonQuery())[Symbol.iterator]();
console.log(query.next());
console.log(query.next());
console.log(query.next());
console.log(query.next());

//using for of
for (const record of new PersonQuery()) {
    console.log(record);
}

//retrieve using spread operatpr destructing 
const [firstRecord, ...rest] = new PersonQuery();
console.log(firstRecord);
console.log(rest);

const number1 = [1,2,3];
const number2 =[4,5,6,7]
const combined =[...number1, ...number2, ...new PersonQuery()]
console.log(combined);


var nums = {
    a: 10,
    b: 20,
    c: "string",
    d: 12
}

function sumObjectValues(object){
    var total = 0;
    for (const key in object) {
        if (typeof object[k] === "number") {
             total += object[key];       
        }
    }

}