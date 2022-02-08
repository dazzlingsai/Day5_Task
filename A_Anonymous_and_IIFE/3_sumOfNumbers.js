 //  ANONYMOUS FUNCTION :
 let sumOfNumbers = function(a) {
    let z=0;
    a.map((x)=>{
        z+=x;
    });
    console.log(z);            //output--->  15
}
sumOfNumbers([1,2,3,4,5]);

// IIFE :
(function(a) {
    let z=0;
    a.map((x)=>{
        z+=x;
    });
    console.log(z);            //output--->  15
})([1,2,3,4,5]);