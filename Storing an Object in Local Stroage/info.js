// Storing an object
const user = { name: 'Bob', email: 'bob@example.com' };
localStorage.setItem('userData', JSON.stringify(user));

// Retrieving an object
const storedUserData = localStorage.getItem('userData');
const userObject = JSON.parse(storedUserData);
console.log(userObject.name); // Output: Bob