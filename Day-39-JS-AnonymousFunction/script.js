///Named functions with No input, No Return
console.log("Anonymous functions with no input and no return");
//1.Print 1-10
let printnum=function(){
    for(i=1;i<=10;i++){
        process.stdout.write(i+" ")
    }
}
printnum()
console.log();
console.log();

//2.Print even numbers
let even=function(){
    for(i=1;i<=20;i++){
        if(i%2==0){
            process.stdout.write(i+" ")
        }
    }
}
even()
console.log();
console.log();


//3.Print odd numbers
let odd=function(){
    for(i=1;i<=20;i++){
        if(i%2!=0){
            process.stdout.write(i+" ")
        }
    }
}
odd()
console.log();
console.log();


//4.Sum of 1-10
let sum1=function(){
    let a=0
    for(let i=1;i<=10;i++){
        a+=i
    }
    console.log("The sum of 1-N numbers is "+a)…