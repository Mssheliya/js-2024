let arr = ["mustfa", "ahmed", "sheliya", "Mohammed", 25];
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])

}

//? reverse the array without using .reverse() method
let newarr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    newarr.push(arr[i]);
}
// console.log(newarr);

//? reverse the String without using .reverse() method and without changing word index;
let str = "my name Mustafa";
let strtoArr = str.split(" ");
let finalRes = [];
for (let i = 0; i < strtoArr.length; i++) {
    const element = strtoArr[i].split("");
    let firstRes = "";
    for (let j = element.length - 1; j >= 0; j--) {
        firstRes += element[j];
    }
    finalRes.push(firstRes);
}
// console.log(finalRes.join().replaceAll(",", " "));

//? reverse the String without using .reverse() & .split() method and without changing word index;
let myStr = "my name is mustafa";
let padStr = myStr.padEnd(myStr.length + 1, " ");
let finalResult = [];
let storeStr = "";
for (let i = 0; i < padStr.length; i++) {
    if (padStr[i] !== " ") {
        storeStr += padStr[i];
    }
    else {
        let tempStoreStr = "";
        for (let j = storeStr.length - 1; j >= 0; j--) {
            tempStoreStr += storeStr[j];
        }
        finalResult.push(tempStoreStr);
        storeStr = "";
    }
};
// console.log(finalResult.join().replaceAll(",", " "));
