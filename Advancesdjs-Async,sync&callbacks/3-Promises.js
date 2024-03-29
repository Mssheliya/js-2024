const promiseOne = new Promise((resolve, reject) => { //Creating PromiseOne
    let name = false;
    if (!name) {
        console.log("PromiseOne Resolved");
        resolve();
    } else {
        console.log("P1:- Something Went Wrong");
        reject();
    }
});
//Consuming PromissOne
promiseOne.then((res) => {
    console.log("PromiseOne Are Fulfilled");
}).catch((error) => {
    console.log("PromiseOne Are Rejected");
})

new Promise((resolve, reject) => { //Creating PromiseTwo
    let user = true;
    if (user) {
        console.log("PromiseTwo Resolved");
        resolve();
    } else {
        console.log("P2:- Something Went Wrong User not Found");
        reject();
    }
}).then((res) => { // Consuming PromisTwo;
    console.log("PromiseTwo Are Fulfilled");
}).catch((err) => {
    console.log(`PromiseTwoError:- ${err}`)
});

new Promise((resolve, reject) => { //Creating PromiseThree
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "eden", password: "1234" });
        } else {
            reject("PromiseThree is rejected");
        }
    }, 1000);
}).then((res) => { //Consuming PromiseThree
    console.log(res);
}).catch((err) => {
    console.log(`PromiseThreeError:- ${err}`)
})

new Promise((resolve, reject) => { //Creating promiseFour
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "eden", password: "1234" });
        } else {
            reject("PromiseFour is rejected");
        }
    }, 1000);
})
    .then((res) => { //Consuming PromiseFour 
        let username = res.username;
        return username;
    })
    .then((username) => {
        console.log(`PromiseFour:- ${username}`);
    })
    .catch((err) => {
        console.log(`PromiseFourError:- ${err}`)
    })

// async function getData() {
//     try {
//         const data = await fetch("https://jsonplaceholder.typicode.com/users");
//         const result = await data.json();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getData();

// fetch('https://jsonplaceholder.typicode.com/users')
fetch('./student_data.JSON')
.then((res)=> {
    return res.json()
})
.then((result)=> {
    console.log(result);
})
.catch((error)=> {
    console.log(error);
})