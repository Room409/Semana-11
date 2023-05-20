function appendToInput(value) {
    document.getElementById('input').value += value;
}

function clearInput() {
    document.getElementById('input').value = '';
}

function calculateResult() {
    const input = document.getElementById('input').value;
    const result = eval(input);
    document.getElementById('input').value = result;
}

///////////////////////////////////////////////////////////////////////////////
const input = document.getElementById('inputTarea');
const formulario = document.getElementById('formularioTareas');
const list = document.getElementById('lista');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();   
    if (input.value.trim() === '') {
        return alert('Ingrese alguna tarea')
    }

    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    newItem.classList.add('list-group-item');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.classList.add('btn','btn-danger','buttons1')
    deleteButton.addEventListener('click', () => {
        list.removeChild(newItem);
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completar';
    completeButton.classList.add('btn', 'btn-success','buttons1')
    completeButton.addEventListener('click', () => {
        newItem.classList.toggle('completed');
    });

    newItem.appendChild(completeButton);
    newItem.appendChild(deleteButton);
    list.appendChild(newItem);

    input.value = '';
    input.focus();
});