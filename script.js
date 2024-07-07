const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const shoppingList = document.getElementById('shopping-list');
const markPurchasedBtn = document.getElementById('mark-purchased-btn');
const clearListBtn = document.getElementById('clear-list-btn');

let shoppingItems = [];

function addItem() {
  const itemText = itemInput.value.trim();
  if (itemText) {
    const newItem = document.createElement('li');
    newItem.textContent = itemText;
    newItem.addEventListener('click', markPurchased);
    shoppingList.appendChild(newItem);
    shoppingItems.push(itemText);
    itemInput.value = '';
  }
}

function markPurchased(event) {
  const item = event.target;
  item.classList.toggle('purchased');
}

function clearList() {
  shoppingList.innerHTML = '';
  shoppingItems = [];
}

addBtn.addEventListener('click', addItem);
markPurchasedBtn.addEventListener('click', () => {
  const purchasedItems = shoppingList.querySelectorAll('.purchased');
  purchasedItems.forEach(item => item.remove());
  shoppingItems = shoppingItems.filter(item => !purchasedItems.includes(item));
});
clearListBtn.addEventListener('click', clearList);