import React, { useState } from 'react';
import { TaskType, Todolist } from './Todolist';
import { v1 } from 'uuid';

export type todolistsType = { id: string, title: string, filter: FilterValuesType }
export type FilterValuesType = "all" | "active" | "completed";

export function AppSprint() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        { id: todolistID1, title: 'What to learn', filter: 'all' },
        { id: todolistID2, title: 'What to buy', filter: 'all' },
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false },
            { id: v1(), title: "Rest API", isDone: false },
            { id: v1(), title: "GraphQL", isDone: false },
        ],
        [todolistID2]: [
            { id: v1(), title: "HTML&CSS2", isDone: true },
            { id: v1(), title: "JS2", isDone: true },
            { id: v1(), title: "ReactJS2", isDone: false },
            { id: v1(), title: "Rest API2", isDone: false },
            { id: v1(), title: "GraphQL2", isDone: false },
        ]
    });



    function removeTask(todolistID: string, id: string) {
        setTasks({...tasks, [todolistID]:tasks[todolistID].filter(t => t.id !== id)})

        /*   let filteredTasks = tasks.filter(t => t.id != id);
          setTasks(filteredTasks); */
    }

    function addTask(todolistID: string, title: string) {
        /*   let task = {id: v1(), title: title, isDone: false};
          let newTasks = [task, ...tasks];
          setTasks(newTasks); */

        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        };
        let newTasks = {...tasks, [todolistID]: [newTask, ...tasks[todolistID]]};
        setTasks(newTasks);
    }

    function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
/*  let newTasks: Array<TaskType> = tasks.map(t => t.id === taskId ? {...t, isDone: isDone} : t)
        setTask(newTasks) */
        let newTasks = {...tasks, [todolistID]:tasks[todolistID].map(t => t.id 
            === taskId ? {...t, isDone: isDone} : t)}
        setTasks(newTasks)
    }
   /*  let tasksForTodolist = tasks; */

    function changeFilter(todolistID: string, value: FilterValuesType) {
       /*  setFilter(todolists[todolistID1].id); */
       setTodolists(todolists.map(filtered => filtered.id === todolistID ? {...filtered, filter: value} : filtered))

    }


    return (
        <div className="AppSprintTwo">
            {todolists.map((mapTodolist) => {
                let tasksForTodolist = tasks[mapTodolist.id];


                if (mapTodolist.filter === "active") {
                    tasksForTodolist = tasks[mapTodolist.id].filter(t => t.isDone === false);
                }
                if (mapTodolist.filter === "completed") {
                    tasksForTodolist = tasks[mapTodolist.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        key={mapTodolist.id}
                        todolistID={mapTodolist.id}
                        title={mapTodolist.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={mapTodolist.filter}
                    />
                )
            })}

        </div>
    );
}
