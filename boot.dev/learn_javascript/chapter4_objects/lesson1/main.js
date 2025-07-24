/*
Objects
JavaScript objects are an almost weirdly versatile collection type. Object literals (POJOs, or "plain old JavaScript objects") are often used to store data in key-value pairs.

const apple = {
  name: "Apple",
  radius: 2,
  color: "red",
};

You can access properties stored on an object using the . operator:

console.log(apple.name); // prints "Apple"
console.log(apple.radius); // prints "2"
console.log(apple.color); // prints "red"

JavaScript objects are interesting because you'll use them the way you'd probably use a map or a dictionary in other languages (simple key-value pairs), but they can also be used for more complex things like classes and prototypes... which we'll get into later.

Assignment
Complete the createMessage function. It should return a new object with properties:

phoneNumber: The given phoneNumber parameter
message: The given message parameter
messageLength: The length of the message parameter
 */
function createMessage(phoneNumber, message) {
  // ?

  let ret = {
    phoneNumber,
    message,
    messageLength:message.length
  };
  console.log(`Input: ${message, phoneNumber}, Output:`, ret);

  return  ret;
}

export { createMessage };
