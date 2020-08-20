function getData() {
    let name = document.querySelector('#name2').value;
    let lastname = document.querySelector('#lastname2').value;

    return { name, lastname }
}

function addButtonActions() {
    let button = document.querySelector('#button');

    button.addEventListener('click', () => {
        fetch('/users', {
            method: 'POST',
            body: JSON.stringify(getData()),
            headers: { 'Content-Type': 'application/json' }
        })
    });
}

window.addEventListener('load', () => addButtonActions());
