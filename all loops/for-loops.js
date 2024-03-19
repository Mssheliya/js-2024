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

// reverse the String without using .reverse() method and without changing word index;
let str = "my name Mustafa";
let strtoArr = str.split(" ");
let finalRes = [];
for (let i = 0; i < strtoArr.length; i++) {
    const element = strtoArr[i].split("");
        let firstRes = "";
        for (let j = element.length -1; j >= 0; j--) {
            firstRes += element[j];
        }
   finalRes.push(firstRes);
}
// console.log(finalRes.join().replaceAll(",", " "));