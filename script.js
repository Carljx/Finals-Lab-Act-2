function checkScore(score) {
  if (score >= 90 && score <= 100) return "Excellent";
  if (score >= 75 && score <= 89) return "Passed";
  if (score > 0 && score < 75) return "Failed";
  return "Invalid score";
}

function start() {
  // 1. Welcome alert
  alert("Welcome to the Score Evaluator!");

  // 2. Ask for name
  var name = prompt("Enter your name:");
  if (!name || name.trim() === "") {
    document.getElementById("result").innerHTML =
      "<div><span class='invalid'>Invalid input: </span> <span class='inv-remark'>  Name is empty.</span></div>";
    return;
  }

  // 3. Ask for score
  var scoreInput = prompt("Enter your score (1-100):");
  // Validation logic
  if (scoreInput === null || scoreInput.trim() === "") {
    document.getElementById("result").innerHTML =
      "<div><span class='invalid'>Invalid input: </span> <span class='inv-remark'>  Score is empty.</span></div>";
    return;
  }

  // 4. Confirm to continue
  var proceed = confirm("Do you want to continue?");
  if (!proceed) {
    document.getElementById("result").innerHTML =
      "<div><span class='inv-remark'>  You chose not to continue.</span></div>";
    return;
  }

  var score = Number(scoreInput);

  if (isNaN(score)) {
    document.getElementById("result").innerHTML =
      "<div><span class='invalid'>Invalid input: </span> <span class='inv-remark'> Score is not a number.</span></div>";
    return;
  }
  if (score === 0) {
    document.getElementById("result").innerHTML =
      "<div><span class='invalid'>Invalid input: </span> <span class='inv-remark'> Score cannot be zero.</span></div>";

    return;
  }
  if (score < 0) {
    document.getElementById("result").innerHTML =
      "<div><span class='invalid'>Invalid input: </span> <span class='inv-remark'> Score cannot be negative.</span></div>";
    return;
  }
  if (score > 100) {
    document.getElementById("result").innerHTML =
      "<div><span class='invalid'>Invalid input: </span> <span class='inv-remark'> Score cannot be more than 100.</span></div>";
    return;
  }

  // 5. Evaluate and display output
  var remark = checkScore(score);
  document.getElementById("result").innerHTML =
    "<div><span class='label'>Name:</span> <span class='value'>" +
    name.trim() +
    "</span></div>" +
    "<div><span class='label'>Score:</span> <span class='value'>" +
    score +
    "</span></div>" +
    "<div><span class='label'>Remark:</span> <span class='badge'>" +
    remark +
    "</span></div>";
}
