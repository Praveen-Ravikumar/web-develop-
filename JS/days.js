// 32850 days, 4680 weeks,1080 months in 90 years
function lifeinweeks(age){
    var age=90-age;
    var person_days=age*365;
    var person_weeks=age*52;
    var person_months=age*12;

    console.log("you have "+person_days+ " days, "+person_weeks+" weeks, "+person_months+" months left");
}


lifeinweeks(56);