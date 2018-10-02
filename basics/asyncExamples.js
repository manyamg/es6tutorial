const addOnTo = function(number){
    let result = number + 1;
    return new Promise(function(resolve, reject){
        resolve(result);
    });
}
async function main(){
    let res1 = await addOnTo(5);
    let res2 = await addOnTo(res1);
    let res3 = await addOnTo(res2);
    let res4 = await addOnTo(res3);
    let res5 = await addOnTo(res4);
    console.log(res5);
}
main();