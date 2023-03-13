const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = form;

  if (!email.value || !password.value) {
    alert("Please fill in all the fields!");
    return;
  }
  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
});
