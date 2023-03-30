"use strict";

let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let list = document.getElementById('list');
let todo = [];


function add() {


    if (inp.value == '') {
        alert('')
    }
    else {
        todo.push(inp.value);
        inp.value = '';
        let data = ''
        for (let item of todo) {
            data += `<li class="list-group-item">${item}</li>`
        }

        list.innerHTML = data;
        console.log(todo);
    }

}

btn.addEventListener('click', add)

