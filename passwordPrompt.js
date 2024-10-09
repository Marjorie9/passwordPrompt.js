// Hardcoded correct password
const correctPassword = "Deguzman17";
let enteredPassword;

do {
  // Prompt the user to enter a password
  enteredPassword = prompt("Enter the password:");
  
  // Check if the entered password matches the correct password
  if (enteredPassword !== correctPassword) {
    console.log("Incorrect password. Please try again.");
  }
  
} while (enteredPassword !== correctPassword);

console.log("Password is correct. Success!");
