import React, {useState} from "react";
import "./App.css";
import {TaskType, ToDoList} from "./ToDoList";

// const task2: TaskType[] = [
//     {id: 1, name: "SUM41", isDone: true,},
//     {id: 2, name: "Rammstein", isDone: false},
//     {id: 3, name: "Skillet", isDone: true}]
// const task3: TaskType[] = [
//     {id: 1, name: "Cartoons", isDone: true},
//     {id: 2, name: "Show", isDone: false},
//     {id: 3, name: "Anime", isDone: true}]

export type FilterValue = "All" | "Completed" | "Active"

function App() {
    let [task1, setTasks] = useState<TaskType[]>([
        {id: 1, name: "CSS", isDone: false},
        {id: 2, name: "HTML", isDone: true},
        {id: 3, name: "JS", isDone: false}])
    let [filter, setFilter] = useState<FilterValue>("All")

    const removeTask = (id: number) => {
        let task1AftRem = task1.filter((t) => t.id !== id)
        setTasks(task1AftRem)
    }

    const changeFilter = (buttonName: FilterValue) => {
        setFilter(buttonName)
    }

    let taskForToDoList = task1
    if (filter === "Completed") {
        taskForToDoList = task1.filter(t => t.isDone)
    }
    if (filter === "Active") {
        taskForToDoList = task1.filter(t => !t.isDone)
    }

    return (
        <div className="App">
            <ToDoList title={"What To Learn"}
                      tasks={taskForToDoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
