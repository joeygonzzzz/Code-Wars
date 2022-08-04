// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Ex. filterArray([1, 2, "a", "b"]) would be [1,2]

function filterArray(arr) {
    return arr.filter((element) => typeof element !=="string");
}