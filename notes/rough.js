// const val = Promise.resolve(5)


// val.then((value)=>{
//     console.log(value)
// })



function mypromise() {
    const order = true;
    return new Promise((res, rej) => {
        if (order) {
            res("Order received")
        }
        else {
            rej(`Order con't be place`)
        }
    })
}


mypromise().then(val_Oder => {
    console.log(val_Oder)
    val_Oder += " Person name Hema "
    return val_Oder
}).then((val_Oder) => {
    console.log(val_Oder)
    val_Oder += " Hema order id #33"
    return val_Oder
}).then((val_Oder)=>{
    console.log(val_Oder)
})



const stuff = ['rice', 'veg', 'salt']

const promise = new Promise((resolve, reject) => {
    if (stuff.includes('rice') && stuff.includes('veg') && stuff.includes('salt')) {
        resolve("Lunch ready")
    }
    else {
        reject("can't make food")
    }
})

// consume
promise.then((result) => {
    return result
}).then((error) => {
    console.log(error)
})

promise.then(result => console.log("I make" , result))
.catch(error => {console.log(error)})