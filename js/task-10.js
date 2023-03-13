function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector("#boxes");
const quantity = document.querySelector("input[type = 'number']");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");

function createBoxes(amount) {
  const elements = [];
  let widthForLoop = 30;
  let heightForLoop = 30;

  for (
    let index = 1;
    index <= amount;
    index += 1, widthForLoop += 10, heightForLoop += 10
  ) {
    const div = document.createElement("div");
    div.style.width = `${widthForLoop}px`;
    div.style.height = `${heightForLoop}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
  }

  boxes.append(...elements);
}

buttonCreate.addEventListener("click", () => createBoxes(quantity.value));

function destroyBoxes() {
  boxes.replaceChildren();
}

buttonDestroy.addEventListener("click", () => destroyBoxes());
