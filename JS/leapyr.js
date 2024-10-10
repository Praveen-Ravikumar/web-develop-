function leapyear(yr){
    var leap=true
    if(yr%4 === 0){
        if(yr%100 === 0){
            if(yr%400 === 0){
                leap=true;
            }
            else{
                leap=false;
            }
        }
        else{
            leap=true;
        }
    }
    else{
        leap=false;
    }
    return leap;
}

var bool=leapyear(1989)
if(bool === true){console.log("it is leap year")}
else{console.log("it is not a leap year")}