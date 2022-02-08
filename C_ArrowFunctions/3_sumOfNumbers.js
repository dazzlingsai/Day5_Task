// Arrow Function to Sum all numbers in an array :

let sumOfNumbers = (apple) => {
    let b=0;
    apple.map((a)=>{
        b+=a;
    });
    console.log(b);            //output--->  15
}
sumOfNumbers([1,2,3,4,5]);