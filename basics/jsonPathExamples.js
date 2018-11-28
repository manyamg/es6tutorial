const jsonpath = require('JSONPath');

const json = {"store": {
    "book": [
        {
            "category": "reference",
            "author": "Nigel Rees",
            "application/vnd.wordperfect": "sotc.wpd",
            "title": "Sayings of the Century",
            "price": 8.95
        },
        {
            "category": "fiction",
            "author": "Evelyn Waugh",
            "title": "Sword of Honour",
            "price": 12.99
        },
        {
            "category": "fiction",
            "author": "Herman Melville",
            "title": "Moby Dick",
            "isbn": "0-553-21311-3",
            "price": 8.99
        },
        {
            "category": "fiction",
            "author": "J. R. R. Tolkien",
            "title": "The Lord of the Rings",
            "isbn": "0-395-19395-8",
            "price": 22.99
        }
    ],
    "bicycle": {
        "color": "red",
        "price": 19.95
    }
}};

const result = jsonpath({json, path: '$.store.book[*].author'}); //result =  [books[0].author, books[1].author, books[2].author, books[3].author];
const result2 = jsonpath({json, path: "$['store']['book'][*]['author']"}); //[books[0].author, books[1].author, books[2].author, books[3].author];
const result3 = jsonpath({json, path: "$[store][book][*][author]"}); //[books[0].author, books[1].author, books[2].author, books[3].author];

const result4 = jsonpath.toPathString(['$', 'store', 'bicycle', 'color']); //"$['store']['bicycle']['color']";
const result5 = jsonpath({json, path: '$.store.book[*].author'}); //[books[0].author, books[1].author, books[2].author, books[3].author];
const result6 = jsonpath({json, path: '$..author'}); // [books[0].author, books[1].author, books[2].author, books[3].author];
const result7 = jsonpath({json, path: '$.store.*'}); //[json.store.book, json.store.bicycle]; //a;;sub propties of store
const result8 = jsonpath({json, path: '$.store..price'}); //[books[0].price, books[1].price, books[2].price, books[3].price, json.store.bicycle.price];
const result9 = jsonpath({json, path: '$..book[2]'}); //const expected = [books[2]];
const result10 = jsonpath({json, path: '$..book[-1:]'}); //[json.store.book[3]] 
const result11 = jsonpath({json, path: '$..book[0,1]'}); //[books[0], books[1]];
const result12 = jsonpath({json, path: '$..book[0][category,author]'}); //['reference', 'Nigel Rees'];
const result13 = jsonpath({json, path: '$..book[?(@.isbn)]'}); //[books[2], books[3]];
const result14 = jsonpath({json, path: '$..book[?(@.price<10)]'}); //[books[0], books[2]];
const result15 = jsonpath({json, path: '$', wrap: false}); //json // root value


const json = {
    "store": {
        "book": {
            "category": "reference",
            "author": "Nigel Rees",
            "title": "Sayings of the Century",
            "price": [8.95, 8.94, 8.93]
        },
        "books": [{
            "category": "reference",
            "author": "Nigel Rees",
            "title": "Sayings of the Century",
            "price": [8.95, 8.94, 8.93]
        }]
    }
};

const result = jsonpath({json, path: 'store.book', flatten: true, wrap: false}); //json.store.book;
const result = jsonpath({json, path: 'store.books', flatten: true, wrap: false}); //json.store.books;