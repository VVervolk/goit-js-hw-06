const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  if (
    input.value.length < Number(input.dataset.length) &&
    input.value.length > 0
  ) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else if (input.value.length >= Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else if (!input.value) {
    input.removeAttribute("class");
  }
});
