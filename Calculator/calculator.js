document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    num1 = Number(num1);
    num2 = Number(num2);

    let answer;

    if (button.id == "add") {
      answer = num1 + num2;
    } else if (button.id == "min") {
      answer = num1 - num2;
    } else if (button.id == "multi") {
      answer = num1 * num2;
    } else if (button.id == "div") {
      num2 === 0 ? (answer = "can't devide by 0") : (answer = num1 / num2);

    }
    document.getElementById("answer").innerHTML = `Answer : ${answer}`;
  });
});
