let element = document.getElementById('element');
let right = document.getElementById('right');

function Add() {
    let task = document.createElement('div');
    task.style.backgroundColor = 'gray'
    task.style.width = '355px'
    task.style.height = '45px'
    task.style.marginLeft = '10px'
    task.style.fontSize = '15px'
    task.style.display = 'flex'
    task.style.alignItems = 'center'
    task.style.paddingLeft = '10px'
    task.style.fontFamily = 'Poppins'
    task.style.borderRadius = '7px'
    task.style.marginTop = '10px'
    task.style.color = 'white'
    task.draggable = true;



    let input = document.getElementById('input').value;
    task.textContent = input;
    element.appendChild(task);

    task.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', task.textContent);
        event.target.style.opacity = '0.4';
    });

    task.addEventListener('dragend', function(event) {
        event.target.style.opacity = '1';
    });
}
function allowDrop(event) {
    event.preventDefault();
}
function dragEnter(event) {
    event.target.style.border = '2px dashed black';
}
function dragLeave(event) {
    event.target.style.border = 'none';
}
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('text/plain');
    let task = document.createElement('div');
    task.textContent = data;
    task.style.backgroundColor = 'gray'
    task.style.width = '355px'
    task.style.height = '45px'
    task.style.marginLeft = '10px'
    task.style.fontSize = '15px'
    task.style.display = 'flex'
    task.style.alignItems = 'center'
    task.style.paddingLeft = '10px'
    task.style.fontFamily = 'Poppins'
    task.style.borderRadius = '7px'
    task.style.marginTop = '10px'
    task.style.color = 'white'
    right.appendChild(task);
    event.target.style.border = 'none';
    let elementContainer = document.getElementById('element');
    let elementToRemove = elementContainer.querySelector(':scope > div');
    if (elementToRemove) {
        elementContainer.removeChild(elementToRemove);
    }
}

