const inputForName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputForName.addEventListener("input", (event) => {
  const name = event.currentTarget.value.trim();

  outputName.textContent = name ? event.currentTarget.value : "Anonymous";
});
