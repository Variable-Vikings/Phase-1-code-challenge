# Phase-1-code-challenge
# Student Grade Calculator

This program prompts the user to input a student's mark and outputs the corresponding grade based on the provided ranges.

## Usage

1. Clone  the repository to your local machine from github.

2. Open the `index.html` file in a web browser or run the JavaScript code in any JavaScript environment, such as a web browser console or a Node.js environment.

3. Follow the prompts to input the student's mark.

4. The program will output the student's grade based on the following criteria:
   - A: Greater than or equal to 80
   - B: Between 60 and 79
   - C: Between 50 and 59
   - D: Between 40 and 49
   - E: Less than 40

## Program Files

- `grade_calculator.js`: Contains the JavaScript code for the program.
- `index.html`: HTML file for running the JavaScript code in a web browser.
- `README.md`: This file providing information about the program.

## How to Run

- If using `index.html`: Open the file in a web browser, and follow the prompts in the browser's console.
- If running the JavaScript code directly: Run the `grade_calculator.js` file in a JavaScript environment and follow the prompts.

## Example

```
Enter student's mark (0-100): 75
The student's grade is: B
```
# Speed Checker Programs

This repository contains two JavaScript programs for checking the speed of a car and determining demerit points for speeding violations.

## Program 1: Speed Checker

### Description
This program takes the speed of a car as input and determines if it's within the speed limit. If the speed is less than or equal to 70 km/h, it prints "Ok". Otherwise, it calculates demerit points based on the speed exceeding the limit and prints the total number of demerit points.

### Usage
```javascript
checkSpeed(80); // Output: Points: 2
checkSpeed(65); // Output: Ok
checkSpeed(100); // Output: License suspended.
```

## Program 2: Speed Checker Function

### Description
This program defines a function `checkSpeed` that performs similar functionality to Program 1. It takes the speed as input and checks whether the driver should receive demerit points based on predefined rules. It prints either  "Ok" if the speed is within the limit or the total number of demerit points.

### Usage
```javascript
function checkSpeed(speed) {
    // Function implementation
}

checkSpeed(80); // Output: Points: 2
checkSpeed(65); // Output: Ok
checkSpeed(100); // Output: License suspended.
```