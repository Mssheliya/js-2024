// what is map ? The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
//* set key values pair using mkap object

const mymap = new Map();
mymap.set("myname","mustfa")
mymap.set("myage",25)
mymap.set("mynumber","9967485698")

// console.log(mymap);
mymap.forEach((key,index)=> {
    // console.log(key,index);
})

for (const [key,values] of mymap) {
    // console.log(`${key}:- ${values}`);
}

//* +10 in all number which is given in array
let arrnum = [12,25,42,32,78,45]
let plusNum = arrnum.map((num)=> num+10);
// console.log(plusNum);
// arrnum.reverse()
// console.log(arrnum);

//* reverse given bellow strings words alphabate without changing words indexing
const str = "my name is Mustafa";
const newstr = str.split(" ").map((word)=> word.split("").reverse().join().replaceAll(",","")).join().replaceAll(","," ");
// console.log(newstr);

//* give five percent discount to all amount and sum of all amount
let cart = [100,200,400,800]
let sumOfCart = cart.map((price)=> price/1.05).reduce((acc,crrprice)=> acc+crrprice,0);
// console.log(sumOfCart);

//* Extract price from given array of an object and give 8 percent discount to all amount and sum of all amount 
let obj = [
    {
        itemName: "brush",
        price: 120,
        discount: 5,
    },
    {
        itemName: "chocolate",
        price: 60,
        discount: 8,
    },
    {
        itemName: "milk",
        price: 200,
        discount: 10,
    },
]
let priceSum = obj.map( (item)=> {
    let discountPrice = item.price*item.discount/100;
    return item.price-discountPrice;
} ).reduce( (acc,price)=> {
    return acc+price
},0 );
// console.log(Math.round(priceSum));