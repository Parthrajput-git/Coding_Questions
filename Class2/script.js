//There are all coding questons:

// 1. Second Largest Number

function secondLargest() {
    let arr = [1, 2, 3, 4, 25, 16];

    let largest = arr[0];
    let secondlargest = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > largest) {
            secondlargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondlargest && arr[i] !== largest) {
            secondlargest = arr[i];

        }

    }
    console.log("SecondLargest number is  :", secondlargest);
};
secondLargest();

// 2. Fibonacci Series 

function fibonacci(n) {
    let x = 0, y = 1;
    console.log(x);
    console.log(y);
    for (let i = 2; i <= n; i++) {
        let z = x + y;
        console.log(z);
        
        x = y;
        y = z;
    }
}
fibonacci(10);

// 3. Even & Odd 

function number(n) {
    if (n % 2 == 0) {
        console.log("even number");
    }
    else {
        console.log("odd number");
    }
}
number(3);

//4. Find the Maximum and Minimum Elements in an Array.

function find() {
    let arr = [2, 3, 4, 5, 6, 7, 0];
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("This is Minimum :", min);
    console.log("This is Maximum :", max);

}
// find();

//5. Reverse an Array
function reversedArr() {
    let arr = [10, 20, 30, 40, 50];
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed[reversed.length] = arr[i];
    }
    console.log("Arr is reversed", reversed);

}
reversedArr();

//6. Tables.
function table(n) {
    let sum;
    for (let i = 0; i <= n; i++) {
        sum = i + i;
        console.log("Tables",sum);
        
    }
}
table(10);

//7. Square all n numbers.

function square(n){
    let squ;
    for(let i=0;i<=n;i++){
        squ=i*i;
         console.log(i,"*",i,"=",squ);
    }
   
    
}
square(10);

//8. Check if Array is Sorted;
function sorted() {
    let arr = [10, 20, 30, 140, 50, 60];
    let isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            isSorted = false;
        }

    }
    console.log(isSorted);

}
sorted();

//9. Find the Duplicate Elements in an Array
function dublicate() {
    let arr = [10, 20, 30, 40, 50, 60, 20, 10, 30];
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] === arr[j]) {
                console.log("Dublicate", arr[i]);

            }
        }
    }
}
dublicate();
//10. Find the Missing Number in an Array.
function missing(){
    let arr=[2,3,4,5,6];
    let n=5;
    for(let i=0;i<=n.length;i++){
        let found=false;
        for(let j=0;j<n.langth;j++){
            if(arr[j]===i){
                found=true;
            }
        }
        if(found===false){
            console.log("Missing",i);
            
        }
    }

}

// Swape numbers
function swipe(){
   let a=101;
    let b=51;
    let temp=a;// temp means a tempary number a store a value
     a=b;
    b=temp;
console.log("First swap number  :",a);
console.log("Second swap number  :",b);
}

swipe();
//
function age(n){
if(){
console.log("Available is voting :",n);
}
    else{
        console.log();
}



















