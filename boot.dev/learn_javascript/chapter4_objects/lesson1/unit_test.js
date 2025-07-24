// unit_test.js

export function describe(name, fn) {
  global.describe(name, fn);
}

export function it(name, fn) {
  global.test(name, fn);
}

export function assert(condition, message = "Assertion failed") {
  if (!condition) {
    throw new Error(message);
  }
}

// Optional strictEqual helper if needed (Jest uses toBe for strict equality)
assert.strictEqual = function (actual, expected, message = "Values are not equal") {
  if (actual !== expected) {
    throw new Error(message);
  }
};

// Optional toggle—can control test case execution from main test file
export const withSubmit = false;
