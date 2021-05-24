// 5. A function that returns the sum of the first N positive natural numbers.

// Function that takes 1 paramiters (values)
function positiveNumber(number) {
	// Creating a sum value and set the value to 0
	let sum = 0;
  
	for (let i = 1; i <= number; i++) {
	  // Loop and adding each number and save in sum
	  sum += i;
	}
	// Returns the sum after all the numbers are added
	return sum
  }



