let element = document.getElementById('element');

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

    let input = document.getElementById('input').value;
    task.textContent = input;
    element.appendChild(task);

}
