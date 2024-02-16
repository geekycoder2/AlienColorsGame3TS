"use strict";
// Q.26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// // • Write one version of this program that runs the if block and another that runs the else block.
// Declare a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
const alien_color1 = 'green';
// Write an if-else chain to check the color of the alien.
if (alien_color1 === 'green') {
    // If the alien's color is green, print a statement that the player just earned 5 points.
    console.log('Player just earned 5 points for shooting the green alien!');
}
else if (alien_color1 === 'yellow' || alien_color1 === 'red') {
    // If the alien's color is yellow or red, print a statement that the player just earned 10 points.
    console.log('Player just earned 10 points for shooting the non-green alien!');
}
else {
    // This block handles any other cases (optional).
    console.log('Invalid alien color.');
}
// Declare a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
const alien_color = 'red';
// Write an if-else chain to check the color of the alien.
if (alien_color === 'green') {
    // If the alien's color is green, print a statement that the player just earned 5 points.
    console.log('Player just earned 5 points for shooting the green alien!');
}
else if (alien_color === 'yellow' || alien_color === 'red') {
    // If the alien's color is yellow or red, print a statement that the player just earned 10 points.
    console.log('Player just earned 10 points for shooting the non-green alien!');
}
else {
    // This block handles any other cases (optional).
    console.log('Invalid alien color.');
}
