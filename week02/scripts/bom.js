const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const chapter = input.value.trim();

    if (chapter !== '') {
        
        const listItem = document.createElement('li');
        listItem.textContent = chapter;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a book and chapter!');
    }
})