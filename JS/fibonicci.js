// simple fibonicci series like [0,1,1,2,......n]

function fibonicci(n){
    var output=[];
    if(n === 1){output=[0]}
    else if(n === 2){ output=[0,1]}
    else{
        output=[0,1];
        for(var i=2; i< n;i++){
            output.push(output[output.length - 2]+output[output.length - 1])
        }
    }
    return output
}

console.log(fibonicci(8))