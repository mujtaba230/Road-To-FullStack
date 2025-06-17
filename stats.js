// stats.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function mean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function variance(arr) {
  const avg = mean(arr);
  return arr.reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / arr.length;
}

function covariance(x, y) {
  const meanX = mean(x);
  const meanY = mean(y);
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += (x[i] - meanX) * (y[i] - meanY);
  }
  return sum / x.length;
}

function pearsonR(x, y) {
  const cov = covariance(x, y);
  const stdDevX = Math.sqrt(variance(x));
  const stdDevY = Math.sqrt(variance(y));
  return cov / (stdDevX * stdDevY);
}

function parseInput(input) {
  return input.split(',').map(Number);
}

// USER INPUT
rl.question("Enter values for X (comma separated): ", (xInput) => {
  rl.question("Enter values for Y (comma separated): ", (yInput) => {
    const x = parseInput(xInput);
    const y = parseInput(yInput);

    if (x.length !== y.length || x.length === 0) {
      console.log("Error: Arrays must be of equal non-zero length.");
      rl.close();
      return;
    }

    const varX = variance(x);
    const varY = variance(y);
    const covXY = covariance(x, y);
    const r = pearsonR(x, y);
    const rSquared = r * r;

    console.log("\n--- Statistics ---");
    console.log("Variance of X:", varX.toFixed(4));
    console.log("Variance of Y:", varY.toFixed(4));
    console.log("Covariance(X, Y):", covXY.toFixed(4));
    console.log("Pearson correlation coefficient (r):", r.toFixed(4));
    console.log("R² (r squared):", rSquared.toFixed(4));

    rl.close();
  });
});
