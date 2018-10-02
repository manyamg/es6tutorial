const addOneTo = function(number, callback){
    let result = number + 1;
    if(callback)
        callback(result);
}
// 5 + 1 = 6
addOneTo(5, function(res){
    console.log(res);
})


addOneTo(5, function(res1){
    addOneTo(res1, function(res2){
        addOneTo(res2, function(res3){
            addOneTo(res3, function(res4){
                addOneTo(res4, function(res5){
                    console.log(res5);
                });
            });
        });
    });
});


//with promises
const addOneTo = function(number){
    let result = number + 1;
    return new Promise(function(resolve, reject){
        resolve(result);
    });
}
// 5 + 1 = 6
addOneTo(5)
    .then(function(res){
        console.log(res);
    });


3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
// 5 + 1 + 1 + 1 + 1 + 1 = 10
addOneTo(5)
    .then(function(res1){
        return addOneTo(res1);
    })
    .then(function(res2){
        return addOneTo(res2);
    })
    .then(function(res3){
        return addOneTo(res3);
    })
    .then(function(res4){
        return addOneTo(res4);
    })
    .then(function(res5){
        console.log(res5);
    }) // 10 

// one more example.

first(2, function(firstResult, err){
    if(!err){
    second(firstResult, function(secoundResult, err){
      if(!err){
          third(secoundResult, function(thirdResult, err){
              if(!err){
                  console.log(thirdResult);
              }
          })
      }
    });
}
});



function first(value, callback) {
    callback(value+2, false);
}
function second(value, callback) {
    callback(value+2, false);
}
function third(value, callback) {
    callback(value+2, false);
}

