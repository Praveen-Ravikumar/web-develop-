//method 1 only using if else statment
// function arrays(){
//     arr=[]
// for(var i=1;i<=100;i++){
    
//     a=i
//     if(i%3 === 0){
//         var a="Fizz"
//         if(i%5 === 0){
//             a="FizzBuzz"
//         }
//     }
//     else if(i%5 === 0){
//         a="Buzz"
//         if(i%3 === 0){
//             a="FizzBuzz"
//         }
//     }
//     arr.push(a)
    
// }
// console.log(arr)
// }


// method 2 using if else and comparision operators
function arrays(){
    arr=[]
    for(var i=1;i<=100;i++){
        a=i
        if(i%3 === 0 && i%5 === 0){
            a="FizzBuzz"
        }
        else if(i%3 === 0){
            a="Fizz"
        }
        else if(i%5 === 0){
            a="Buzz"
        }
        arr.push(a)
    }
    console.log(arr)
}

arrays();   

