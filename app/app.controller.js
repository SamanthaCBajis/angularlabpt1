"use strict";
function TodoController(){      // creating the function of TodoController and giving it a const called vm which equals this or the object
    const vm = this;

    vm.tasks = [                                    // listing of all the todos that are either completed (true) or not completed (false)
        {task: "Walk Taki", completed: true},       // false will show complete button
        {task: "Tricks & Treats with Taki", completed: false},
        {task: "Feed Taki", completed: true},
        {task: "Cuddle time with Taki!😘", completed: false},

    ];

    vm.add = function(newTodo){                 // function to add another todo to the array by pushing a copy (or template) of a newTodo to the list
        vm.tasks.push(angular.copy(newTodo));  
        vm.newTodo = {};                        // where the new task is fully created and added back into array                                   
    };

    vm.delete = function(index){                // function to delete the index of any of the tasks (todos) in the array, must be done be referencing the index and the array itself called tasks
        vm.tasks.splice(index, 1);
};

    vm.completedTasks = function(index){        // function where the todo will be switched to completed if true. The function targets the index of each todo and as each todo of the tasks array [i] has their completed button pressed the index will become true
        let i = index;
        vm.tasks[i].completed = true;
    };
}

angular                                             // reference to angular, module, and controller with its name and reference to be used in other scripts
.module("todoApp")
.controller("TodoController", TodoController);

