// let buttons = document.querySelectorAll(".btn");
// let display = document.querySelector(".display");

// for (let i = 0; i <= buttons.length - 1; i++) {
//   let button = buttons[i];
//   button.addEventListener("click", () => {
//     if (button.textContent === "=") {
//       display.textContent = eval(display.textContent);
//     } else if (button.textContent === "C") {
//       display.textContent = "";
//     } else {
//       display.textContent += button.textContent;
//     }
//   });
// }

let buttons = document.querySelectorAll(".btn");
let display = document.querySelector(".display");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      display.textContent = eval(display.textContent);
    } else if (button.textContent === "C") {
      display.textContent = "";
    } else {
      display.textContent += button.textContent;
    }
  });
});
