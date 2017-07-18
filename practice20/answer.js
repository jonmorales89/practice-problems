answer.js

var myArray = [5,3,7,8,2,4,1,2];

function randomize(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        var ind = Math.floor((Math.random()*arr.length-1)+1);
        newArr.push(arr[ind]);
    }
    return newArr;
}

console.log(randomize(myArray));