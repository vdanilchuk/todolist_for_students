import React from "react";
import "./App.css";
import {TaskType, ToDoList} from "./ToDoList";

const task1: TaskType[] = [
    {id: 1, name: "CSS", isDone: false},
    {id: 2, name: "HTML", isDone: true},
    {id: 3, name: "JS", isDone: false}]
const task2: TaskType[] = [
    {id: 1, name: "SUM41", isDone: true,},
    {id: 2, name: "Rammstein", isDone: false},
    {id: 3, name: "Skillet", isDone: true}]
const task3: TaskType[] = [
    {id: 1, name: "Cartoons", isDone: true},
    {id: 2, name: "Show", isDone: false},
    {id: 3, name: "Anime", isDone: true}]


function App() {
    return (
        <div className="App">
            <ToDoList title={"What To Learn"} tasks={task1}/>
            <ToDoList title={"Music"} tasks={task2}/>
            <ToDoList title={"Movies"} tasks={task3}/>
        </div>
    );
}

export default App;
