//1
// let arr = [1, 2, 3, 4]

// for(let i =0; i<arr.length; i++){
//     arr[i]= arr[i]*2
// }
// console.log(arr)

//2
// let arr = [1,2,3]
// for(let i = 0; i<arr.length; i++){
//     arr[i]= arr[i].toString()
// }
// console.log(arr)

//3
// let arr = ["john", 'jacob', 'qwerYy']
// let name = []
// for(let i=0; i<arr.length; i++) {
//     arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
// }
// console.log(arr)

//4
// let obj =
//     [{
//         name: "Angelina Jolie",
//         age: 80,
//     },
//     {
//         name: "Eric Jones",
//         age: 2,
//     },
//     {
//         name: "Paris Hilton",
//         age: 5,
//     }]
// let name = []
// for(let i =0; i<obj.length; i++){
//     name.push(obj[i].name)
//     // obj[i].name.push
// }
// console.log(name)

//5
// let obj = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
// ]
// let arr = []
// for(let i =0; i<obj.length; i++){
//     if(obj[i].age>21){
//         arr.push(obj[i].name + ' can go to matrix')
//     } else {
//         arr.push(obj[i].name + ' cant go to matrix')
//     }

// }
// console.log(arr)

//6
// let dblvalue = []
// function doubleValue(arr) {
//     for(let i =0; i<arr.length; i++){
//         dblvalue.push(arr[i]*2)
//     }
//     return dblvalue
// }
// console.log(doubleValue([1,2,3,4]))

//7
// let evennumber = []
// function evenValue(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%2==0){
//             evennumber.push(arr[i])
//         }
//     }
//     return evennumber
// }
// console.log(evenValue([1,2,3,4,5,6,87,65,54]))

//8
const originalFlavors = [
    "Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond",
];

// function is31flavor(originalFlavors){
//     if(originalFlavors.length == 31) return true
//     return false
// }
// console.log(is31flavor(originalFlavors))

//task 2 

// function addFlavor(flavor) {
//     originalFlavors.unshift(flavor)
// }
// addFlavor('Rainbow sherbert')
// console.log(originalFlavors)

//task 5
// function removeFlavorName(str){
//     let result = str.filter(word => !word.includes("Vanilla"));
//     return result
// }
// console.log(removeFlavorName(originalFlavors))

//6
// let newArr = []
// function copyArr(newArr, originalFlavors) {
//     originalFlavors.map((value)=> {
//         newArr.push(value)
//     })
//     return newArr
// }
// copyArr(newArr, originalFlavors)
// console.log(newArr)
// console.log(originalFlavors)

//7
// function chocoFlavor(str){
//     let result = str.filter(word => word.includes("Chocolate") || word.includes("Vanilla"))
//     return result
// }
// console.log(chocoFlavor(originalFlavors))

// stre 1 
// let count = 0
// console.log(originalFlavors)
// function averageWord(originalFlavors) {
//     let ave;
//     for (let i = 0; i < originalFlavors.length; i++) {
//         for (let j = 0; j < originalFlavors[i].length; j++) {
//             if (originalFlavors[i][j] == " ") {
//                 count++;
//                 // console.log(count)
//             }
//         }
//         count++;
//     }
//     ave = Math.floor((count + originalFlavors.length) / originalFlavors.length)
//     return ave
// }
// console.log(averageWord(originalFlavors))

