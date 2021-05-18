function convertFahrToCelsius (fahrenheit) {
    var fahrType = typeof fahrenheit;
    if (fahrType === "string" || fahrType === "number") {
        var celsius
        if (fahrType === "string") {
            celsius = Number(fahrenheit) - 32 * 5/9
            return celsius;
         
        }
        celsius = fahrenheit - 32 * 5/9;
        
        return celsius.toFixed(4);
    } else {
        return `${fahrenheit} is not a valid number but a/an ${fahrType}.`;
    } 
}
console.log(convertFahrToCelsius(0));

console.log(convertFahrToCelsius({temp: 0})); 
console.log( convertFahrToCelsius([1,2,3]));

function checkYuGiOh (number) {
const numArray= [];
for(var i= 1; i <= number; i++) {
if (i % 2 ===0 ){
    numArray.push("yu")
} else if (i %3 === 0) {
    numArray.push("gi");
} else if (i %5 === 0){
    numArray.push("oh");
} else{
    numArray.push(i);    
}
} 
console.log(numArray) 
}
checkYuGiOh(10)
checkYuGiOh("5") 
checkYuGiOh(3) 