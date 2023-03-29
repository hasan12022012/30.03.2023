"use strict";

let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let list = document.getElementById('list');
let todo = [];


function add() {
    todo.push(inp.value);
    inp.value = '';
    let data = ''
    for (let item of todo) {
        data += `<li class="list-group-item">${item}</li>`

        if(!todo.includes(inp.value)){
            todo.pop();
        }
        if((inp.value !='')){
            todo.pop();
        }
    }
    
    list.innerHTML = data;
    console.log(todo);
}

btn.addEventListener('click', add)

