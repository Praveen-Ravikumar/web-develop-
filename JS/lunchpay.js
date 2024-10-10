// random person from the array to pay the lunch bills 
function person(name){
    var people=name.length;
    var random = Math.floor(Math.random()*people)
    console.log(name[random] +" should pay lunch bills ")
}

names=["angular","react","fizz","buzz","asking"]
person(names)