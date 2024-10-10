//swapping two numbers without any third variable
function swap(){
    var a=9;
    var b=10;

    a=a+b;
    b=a-b;
    a=a-b;

    console.log("the after swapping A :" + a);
    console.log("the after swapping B:" + b);
}

swap();

//leetcode problem counter problem 
var expect = function(val) {
    function toBe(val2) {
        if (val === val2) {
            return true
        } else {
            throw new Error('Not Equal')
        }
     }
 
     function notToBe(val2){
         if (val !== val2) {
             return true
         } else {
             throw new Error('Equal')
         }
     }
} 
expect(5).tobe(5); 


