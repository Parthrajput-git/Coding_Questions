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
// secondLargest();

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
// fibonacci(10);

// 3. Even & Odd 



