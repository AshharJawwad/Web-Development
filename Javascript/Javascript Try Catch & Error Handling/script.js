let a = prompt("Enter First Number");

let b = prompt("Enter Second Number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("This is not allowed");
}

let sum = parseInt(a) + parseInt(b);

function main() {
  let x = 5;
  try {
    console.log("The sum is ", sum * x);
    return true
  } catch (error) {
    console.log("Error detected");
    return false
  } finally {
    console.log("Files are being closed and db connection is being closed");
  }
}

let c = main()