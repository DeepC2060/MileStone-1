// pre-existing array of list items
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

const ol = document.getElementById('list');
const btn = document.getElementById('add-btn');
let index = 0;

btn.addEventListener('click', function() {
  if (index < items.length) {
    const li = document.createElement('li');
    li.textContent = items[index++];
    ol.appendChild(li);
  } else {
    alert('All items have been added!');
  }
});
