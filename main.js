```javascript
// ==========================================
// STRING MANIPULATION FUNCTIONS
// ==========================================

// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log("1. Reverse:", reverseString("Hello"));


// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

console.log("2. Characters:", countCharacters("Hello"));


// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(
    "3. Capitalize:",
    capitalizeWords("hello world javascript")
);


// ==========================================
// ARRAY FUNCTIONS
// ==========================================

// 4. Find Maximum
function findMaximum(numbers) {
    return Math.max(...numbers);
}

console.log(
    "4. Maximum:",
    findMaximum([10, 5, 25, 8, 15])
);


// 5. Find Minimum
function findMinimum(numbers) {
    return Math.min(...numbers);
}

console.log(
    "5. Minimum:",
    findMinimum([10, 5, 25, 8, 15])
);


// 6. Sum of Array
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(
    "6. Sum:",
    sumArray([10, 5, 25, 8, 15])
);


// 7. Filter Array
function filterArray(numbers, condition) {
    return numbers.filter(condition);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = filterArray(
    numbers,
    number => number % 2 === 0
);

console.log("7. Filter:", evenNumbers);


// ==========================================
// MATHEMATICAL FUNCTIONS
// ==========================================

// 8. Factorial
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log("8. Factorial:", factorial(5));


// 9. Prime Number Check
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("9. Is Prime (7):", isPrime(7));
console.log("9. Is Prime (10):", isPrime(10));


// 10. Fibonacci Sequence
function fibonacci(terms) {
    const sequence = [];

    let a = 0;
    let b = 1;

    for (let i = 0; i < terms; i++) {
        sequence.push(a);

        let next = a + b;
        a = b;
        b = next;
    }

    return sequence;
}

console.log("10. Fibonacci:", fibonacci(10));
```

