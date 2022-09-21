// Write a template string according to the following example:

// Example
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."


function format(a, b, c) {
        const template = `Their names were: ${a}, ${b} and ${c}.`
        return template
    }