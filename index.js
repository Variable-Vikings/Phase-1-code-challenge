//Challenge 1
//calculate grade
function calculateGrade(mark) {
    if (mark >= 80) {
        return "A";
    } else if (mark >= 60 && mark < 80) {
        return "B";
    } else if (mark >= 50 && mark < 60) {
        return "C";
    } else if (mark >= 40 && mark < 50) {
        return "D";
    } else {
        return "E";
    }
}
//prompt entry of marks
function main() {
    let mark = parseFloat(prompt("Enter student's mark (0-100):"));
    if (!isNaN(mark) & mark >= 0 & mark <= 100) {
        let grade = calculateGrade(mark);
        console.log("The student's grade is: "+ grade);
    } else {
        console.log("Invalid input. Mark must be between 0 and 100.");
    }
}


//Challenge 2
//const  speed limit = 70
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmAboveLimit = 1;
    //check speed limit

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (points > 12) {
            console.log("License suspended.");
        } else {
            console.log("Points: " + points);
        }
    }
}
//Challenge 3
// const benefits = 1000;
const benefits = parseFloat(prompt("Enter Benefits:"));
// const basicSalary = 10000;
const basicSalary = parseFloat(prompt("Enter Basic Salary:"));
const TAX_RATES = [
  { limit: 24000, rate: 10 },
  { limit: 32333, rate: 25 },
  { limit: 500000, rate: 30 },
  { limit: 800000, rate: 32.5 },
  { limit: Infinity, rate: 35 },
];

const NHIF_RATES = [
  { limit: 5999, deduction: 150 },
  { limit: 7999, deduction: 300 },
  { limit: 11999, deduction: 400 },
  { limit: 14999, deduction: 500 },
  { limit: 19999, deduction: 600 },
  { limit: 24999, deduction: 750 },
  { limit: 29999, deduction: 850 },
  { limit: 34999, deduction: 900 },
  { limit: 11999, deduction: 1000 },
  { limit: 11999, deduction: 1100 },
  { limit: 11999, deduction: 1200 },
  { limit: 11999, deduction: 1300 },
  { limit: 11999, deduction: 1400 },
  { limit: 11999, deduction: 1500 },
  { limit: 11999, deduction: 1600 },
  { limit: Infinity, deduction: 1700 },
];

const NSSF_RATE = 6;
// Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate PAYE (Tax)
let taxableIncome = grossSalary - 24000; // Initial tax relief
let tax = 0;
TAX_RATES.forEach(({ limit, rate }) => {
  if (taxableIncome <= 0) return;
  const taxableAmount = Math.min(taxableIncome, limit);
  tax += taxableAmount * (rate / 100);
  taxableIncome -= taxableAmount;
});

// Calculate NHIF deductions
let nhifDeductions = 0;
NHIF_RATES.some(({ limit, deduction }) => {
  if (grossSalary <= limit) {
    nhifDeductions = deduction;
    return true;
  }
  return false;
});

// Calculate NSSF deductions
const nssfDeductions = Math.min(basicSalary * (NSSF_RATE / 100), 200);

// Calculate net salary
const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;
// Give output
console.log("Net Salary: " + netSalary);
