// Callbacks
// A callback is a function passed as an argument to another function.

// function sum(a, b){
//     console.log(a + b)
// };

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// };

// // calculator(1, 2, sum);
// calculator(1, 2, (a, b) => {
//     console.log(a + b);
// }); // we can also use this way


// Callback Hell
/* Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.
(Pyramid of Doom)

This style of programming becomes difficult to understand & manage.
that way callback hall is a problem in JS that way we use promises in JS
*/

function getData(dataId, getNextData){
    // 2s
    setTimeout(()=> {
        console.log("data",dataId)
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

// this is callback hall 
getData(1, () => {
    console.log("getting data2 ....");
    getData(2, ()=>{
        console.log("getting data3 ....");
        getData(3, ()=> {
            console.log("getting data4 ....");
            getData(4);
        });
    });
});