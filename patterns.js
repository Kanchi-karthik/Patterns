function showPattern() {
  const pattern = document.getElementById("patternSelect").value;
  let n = parseInt(prompt("Enter how many terms you want (e.g., 10):"));

  if (isNaN(n) || n <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  let result = [];

  switch (pattern) {
    case "arithmetic":
      result = arithmetic(n);
      break;
    case "geometric":
      result = geometric(n);
      break;
    case "fibonacci":
      result = fibonacci(n);
      break;
    case "square":
      result = squares(n);
      break;
    case "cube":
      result = cubes(n);
      break;
    case "triangular":
      result = triangular(n);
      break;
    case "factorial":
      result = factorials(n);
      break;
    default:
      alert("Unknown pattern selected.");
      return;
  }

  alert(pattern.charAt(0).toUpperCase() + pattern.slice(1) + ":\n" + result.join(", "));
}

// --- Easy helper functions ---
function arithmetic(n) {
  let start = parseFloat(prompt("Enter the starting number (e.g., 2):"));
  let diff = parseFloat(prompt("Enter the difference (e.g., 3):"));
  if (isNaN(start) || isNaN(diff)) return ["Invalid input"];
  return Array.from({ length: n }, (_, i) => start + i * diff);
}

function geometric(n) {
  let start = parseFloat(prompt("Enter the starting number (e.g., 3):"));
  let ratio = parseFloat(prompt("Enter the ratio (e.g., 2):"));
  if (isNaN(start) || isNaN(ratio)) return ["Invalid input"];
  return Array.from({ length: n }, (_, i) => start * Math.pow(ratio, i));
}

function fibonacci(n) {
  let a = 0, b = 1, seq = [];
  for (let i = 0; i < n; i++) {
    seq.push(a);
    [a, b] = [b, a + b];
  }
  return seq;
}

function squares(n) {
  return Array.from({ length: n }, (_, i) => (i + 1) ** 2);
}

function cubes(n) {
  return Array.from({ length: n }, (_, i) => (i + 1) ** 3);
}

function triangular(n) {
  return Array.from({ length: n }, (_, i) => ((i + 1) * (i + 2)) / 2);
}

function factorials(n) {
  let fact = 1, seq = [];
  for (let i = 1; i <= n; i++) {
    fact *= i;
    seq.push(fact);
  }
  return seq;
}
