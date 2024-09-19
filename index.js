// 1) Calculate difference
function calculateDifference(num1, num2) {
    let difference = num1 - num2;
    document.write("Difference: " + difference + "<br>");
    console.log("Difference:", difference);
}

calculateDifference(10, 5);


// 2) Check if a number is odd
function isOdd(num) {
    let result = num % 2 !== 0;
    document.write("Is " + num + " odd? " + result + "<br>");
    console.log("Is " + num + " odd?", result);
}

isOdd(7);


// 3) Find the smallest number in an array
function findMin(arr) {
    let min = Math.min(...arr);
    document.write("Smallest number: " + min + "<br>");
    console.log("Smallest number:", min);
}

findMin([3, 1, 4, 1, 5, 9]);


// 4) Filter even numbers from an array
function filterEvenNumbers(arr) {
    let evens = arr.filter(num => num % 2 === 0);
    document.write("Even numbers: " + evens.join(", ") + "<br>");
    console.log("Even numbers:", evens);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);


// 5) Sort array in descending order
function sortArrayDescending(arr) {
    let sorted = arr.slice().sort((a, b) => b - a);
    document.write("Sorted array (descending): " + sorted.join(", ") + "<br>");
    console.log("Sorted array (descending):", sorted);
}

sortArrayDescending([3, 1, 4, 1, 5, 9]);


// 6) Lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    let lowercased = str.charAt(0).toLowerCase() + str.slice(1);
    document.write("Lowercased first letter: " + lowercased + "<br>");
    console.log("Lowercased first letter:", lowercased);
}

lowercaseFirstLetter("Hello World");


// 7) Count the number of vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = [...str].filter(char => vowels.includes(char)).length;
    document.write("Number of vowels: " + count + "<br>");
    console.log("Number of vowels:", count);
}

countVowels("Hello World");


// 8) Find the average of numbers in an array
function findAverage(arr) {
    let average = arr.reduce((acc, num) => acc + num, 0) / arr.length;
    document.write("Average: " + average + "<br>");
    console.log("Average:", average);
}

findAverage([1, 2, 3, 4, 5]);
