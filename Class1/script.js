//1. Min / Max of Two 
function number() {
    let a = 10, b = 20, c = 5;
    if (a > b) {

        console.log("Max", a);
        console.log("Min", b);

    } else {
        console.log("Max", b);
        console.log("Min", a);

    }

}
// number();

// 2. Min / Max of Two / Three Numbers 
function number1() {
     let a = 10, b = 20, c = 5;
// Min;
let min=a;
if(b<min)min=b;
if(c<min)min=c;
// Max
let max=a;
if(b>max)max=b;
if(c>max)max=c;

console.log("Minimum number  :",min);
console.log("Maximum number  :",max);
}
 number1();




