//var
//let
//const



function basicHello() {
    //function delclartion 
    console.log("Hello2");
};

// const basicHello2 = function() {
//     //function express
//     console.log("Hello3");
// };

const basicMath = function(num1, num2) {
    console.log(Math.min(num1,num2))
};

const basicMultiplication = function(a, b, c) {
    console.log(Math.floor(a + b + c));
    //here is the symbol for multiplication *
}

const multiplyFour = function(a, b, c, d) {
    //binding a function to multiply four paramaters
    console.log(Math.floor(a * b * c * d));
    //using mathFloor function to execute command 
}; 

basicHello();
// basicHello2();

console.log('Remaining code');

basicMath(45, 1000);
basicMultiplication(5,2,8);
multiplyFour(45,1,1,1);    


