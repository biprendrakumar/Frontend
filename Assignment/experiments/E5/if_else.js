

let age = prompt("Enter your age:");

if (age >= 18 && age <= 60) {
  alert("You are eligible to vote!");
  document.write("<p>You are eligible to vote!</p>");
} else if (age > 60) {
  alert("You are a senior citizen voter.");
  document.write("<p>You are a senior citizen voter.</p>");
} else {
  alert("You are not eligible yet.");
  document.write("<p>You are not eligible yet. Come back when you are 18!</p>");
}

{/* <script>
// Task 2: Eligibility Checker (ternary)
let age2 = prompt("Enter your age:");

// Nested ternary
let msg = (age2 > 60)
  ? "You are a senior citizen voter."
  : (age2 >= 18)
      ? "You are eligible to vote!"
      : "You are not eligible yet.";

alert(msg);
document.write("<p>" + msg + "</p>");
</script> */}
