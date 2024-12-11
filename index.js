//1 

// function fizzBuzz (a){
//     if(a%5 == 0 && a%3 ==0) {
//         return "FizzBuzz"
//     } else if(a%3 == 0) {
//         return "Fizz"
//     }else if(a%5==0){
//         return "Buzz"
//     }
//     else{ 
//         return a
//     }
// }
// console.log(fizzBuzz(11))

//2

// function factorial(a) {
//     if (a === 0 || a === 1) return 1;
// return a * factorial(a - 1);
// }
// console.log(factorial(6))

//3
// function oddEven(n){
//     if(n%2==0) return "Even"
//     return "Odd"
// }
// console.log(oddEven(1))

//4
// function addUp(n) {
//     if (n === 0 || n === 1) return 1;
//     return n + addUp(n-1)
// }
// console.log(addUp(7))

//5
// function isEmpty(a){
//     if(a==="") return true
//     return false
// }

// console.log(isEmpty(""))

//6
// function isEqual(a, b){
//     if(a.length == b.length) return true
//     return false
// }
// console.log(isEqual("asd", "qe"))

//7
// function divideBy(n, m) {
//     if(n%m==0) return true
//     return false
// }
// console.log(divideBy(10,6))

//8
// function moodToday(mood = "neuter"){
//     return `Today, i am feeling ${mood}`
// }
// console.log(moodToday("Sad"));

//9
// function match(a,b){
//     if(a.toUpperCase()===b.toUpperCase()) return true
//     return false
// }
// console.log(match("bSd", "ASD"))

//10
// function getCase(a){
//     if(a===a.toUpperCase()) return "upper"
//     return "lower"
// }
// console.log(getCase("ASD"))

//11
// function swapName(a,b) {
//     return `${b} ${a}`
// }
// console.log(swapName("G", "B"))

//12
// function Alphabet (str) {
//     return str.split('').sort().join('')
// }
// console.log(Alphabet('java'))

//13
// function inc(n){
//     if(n%2==0) return n+1
//     return n-1
// }
// console.log(inc(5))

//////////////////////////////////////////////////////////////////////

//1
// function tip (n, service){
//     if(service=="good") return n*0.2
//     else if(service=="fair") return n*0.15
//     return n*0.1
// }

// console.log(tip(100,"poor"))

//2
// function totalAmount(n, service ){
//     if(service=="good") return n*0.2+n
//     else if(service=="fair") return n*0.15+n
//     return n*0.1+n
// }
// console.log(totalAmount(100,"good"))

//3
// function splitAmount(a, service, n ){
//     if(service=="good") return a*1.2/n
//     else if(service=="fair") return a*1.15/n
//     return a*1.1/n
// }
// console.log(splitAmount(100,"good", 5))

//4
// function isVowel(char){
//     const vowels = 'aeiouAEIOU'
//     return vowels.includes(char);
// }
// console.log(isVowel("a"));

//5
// function rockPaperScissors (a,b){
//     const rule = {
//         rock: 'scissors',
//         paper: 'rock',
//         scissors: 'paper'
//     }
//     if(a==b) return 'draw'
//     else if (rule[a]==b) return 'player 1 win'
//     return 'player 2 win'
// }
// console.log(rockPaperScissors('rock', 'paper'))

//6
// function numberWhile(a, b) {
//     let c = ""
//     let i = a
//     while (i <= b) {
//         if(i==b) c += i
//         else c += i + "_"
//         i++;
//     }
//     return c
// }
// console.log(numberWhile(1, 5))

// 7
// function reverseWord (str){
//     return str.split('').reverse().join('')
// }
// console.log(reverseWord("das"))

//7.2

function findLongest(str) {
    const words = str.split(' ')
    let longest = '';
    
    for(let i = 0; i<words.length; i++){
        if(words[i].length>=longest.length){
            longest = words[i]
        }
    }
    return longest
}
console.log(findLongest("a books of full dog"))