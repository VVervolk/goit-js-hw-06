const item = document.querySelectorAll(".item");

function onCategoriesQuantity(array) {
  console.log(`Number of categories: ${array.length}`),
    array.forEach(function (category) {
      console.log(`Category: ${category.firstElementChild.textContent} `);
      console.log(`Elements: ${category.lastElementChild.children.length}`);
    });
  return;
}

onCategoriesQuantity(item);
