const inputForName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputForName.addEventListener("input", (event) => {
  outputName.textContent = event.currentTarget.value
    ? event.currentTarget.value
    : "Anonymous";
});

//   if (!event.currentTarget.value) {
//     outputName.textContent = "Anonymous";
//   } else {
//     outputName.textContent = event.currentTarget.value;
//   }
