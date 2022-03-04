let arrNums = [1,2,5,19,20];

// const maxNumber = function(arr) {
//     arr.map( arr => {
//         return console.log(Math.max(arr));
//     });
//     console.log("Empty");
// };

// console.log(maxNumber(arrNums));



const maxNum = function(arr) {
    if (arr.length != 0) {
        return Math.max(...arr);
    }
    else{
        return "Empty";  
    }
}

let emptyAr = [];
console.log(maxNum(arrNums));
console.log(maxNum(emptyAr));