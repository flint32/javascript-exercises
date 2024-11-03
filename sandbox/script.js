let ul = document.querySelector('ul');
let input = document.querySelector('input');
let button = document.querySelector('button');

button.addEventListener('click', () => {
    let inputValue = input.value;

    input.value = '';

    let listItem = document.createElement('li');
    let spanItem = document.createElement('span');
    let deleteItemButton = document.createElement('button');

    spanItem.textContent = inputValue;
    deleteItemButton.textContent = "Delete";

    listItem.append(spanItem, deleteItemButton);

    deleteItemButton.addEventListener('click', (e) => {
        e.currentTarget.parentElement.remove();
    })

    ul.appendChild(listItem);

    input.focus();
})
