const assert = require('assert');

// A simple function to test
function add(a, b) {
    return a + b;
}

// Test case
try {
    assert.strictEqual(add(2, 3), 5);
    console.log('Test passed: add(2, 3) === 5');
} catch (error) {
    console.error('Test failed:', error.message);
}