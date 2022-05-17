/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

Write a function called highestProfit that calculates the highest profit 
you can make in the given day by buying and selling a single Apple stock. 
This is comprised of one buy and one sell. Keep your worst case 
time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

const highestProfit = apple_stock => {
  // input: array of numbers
  // output: number
  // goal: in index order, buy at cheapest and sell at highest

  // O(n^2) approach

  // edge: if input is not array of numbers, return 0
  if (!Array.isArray(apple_stock) || !apple_stock.every(element => typeof element === 'number')) return 0;

  // create variable to store current profit
  let profit = -Infinity;

  // iterate through the array to identify the purchase price
  for (let i = 0; i < apple_stock.length; i++) {
    // iterate through the array to identify the sell price
    for (let j = i+1; j < apple_stock.length; j++) {
      // if difference is greater than current profit, replace current profit
      if (apple_stock[j] - apple_stock[i] > profit) profit = apple_stock[j] - apple_stock[i];
    }
  }

  // if profit < 0, return 0. else return profit.
  if (profit < 0) return 0;
  return profit;
}

let array = [1000, 500, 1500, 2000, 0];
console.log(highestProfit(array));

array = ["hello", 0, 2];
console.log(highestProfit(array));

array = [2000, 1000, 500];
console.log(highestProfit(array));


module.exports = {highestProfit}