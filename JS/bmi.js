function BMI(weight,height){
    var cal=weight/Math.pow(height,2);
    return Math.round(cal);
}
console.log(BMI(65,1.8));