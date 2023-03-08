const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

function onCreateIngredient(array) {
  const arrayOfItems = [];
  array.forEach((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    item.classList.add("item");
    arrayOfItems.push(item);
  });
  ingredientsList.append(...arrayOfItems);
}
onCreateIngredient(ingredients);
