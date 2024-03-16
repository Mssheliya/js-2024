let arr = ["mustfa","ahmed","sheliya","Mohammed",25];
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    
}

// reverse the array without using .reverse() method
let newarr = [];
for (let i = arr.length-1; i >= 0; i--) {
    newarr.push(arr[i]);
}
// console.log(newarr);