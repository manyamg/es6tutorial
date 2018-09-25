var books = [
    {
        title: "Showings",
        author: "Julian of Norwich",
        checkouts: 45
    },
    {
        title: "The Triads",
        author: "Gregory Palamas",
        checkouts: 32
    },
    {
        title: "The Praktikos",
        author: "Evagrius Ponticus",
        checkouts: 29
    }
];

// Get an array of checkout values only
var bookCheckouts = books.map(function(item) {
    return item.checkouts;
});

// Sum the array's values from left to right
var total = bookCheckouts.reduce(function(prev, curr) {
    return prev + curr;
});

//OR

// Get total of book checkouts
var total = books
            .map(function(b) { return b.checkouts; })
            .reduce(function(p, c) { return p + c; });

            