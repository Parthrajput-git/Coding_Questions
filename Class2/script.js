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





