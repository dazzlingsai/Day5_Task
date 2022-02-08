let oddNumbers = (apple) => {
    let b=[];
    apple.map((a)=>{
        if(a%2==1){
            orrange.push(a);
        };
    });
    console.log(orrange);       // output--->  [ 1, 3, 5, 7, 9 ]
}
oddNumbers([1,2,3,4,5,6,7,8,9,10]);