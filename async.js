// //Promise
// let promise1 = new Promise(function(resolve,reject){
//     //resolve - успех
//     //reject - неуспех
//     let n = Math.random()
//     if( n >0.5){
//         resolve('Хлеб был куплен')
//     }
//     else{
//         reject('Хлеб на ужин не будет')
//     }
// })

// let promise2 = new Promise(function(resolve,reject){
//     let n = Math.random()
//     if(n>0.3){
//         resolve("Хлеб нарезан")
//     }
//     else{
//         reject("Что-то пошло не так")
//     }
// })

// // console.log(promise)
// promise1
//     .then(bread => {
//         console.log(bread)
//         return promise2
//     })
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })

