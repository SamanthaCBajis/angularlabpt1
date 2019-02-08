"use strict";
function TodoController(){
    const vm = this;

    vm.tasks = [
        {task: "Walk Taki", completed: true},
        {task: "Tricks & Treats with Taki", completed: true},
        {task: "Feed Taki", completed: true},
        {task: "Cuddle time with Taki!😘", completed: false},

    ];
}
angular
.module("todoApp")
.controller("TodoController", TodoController);