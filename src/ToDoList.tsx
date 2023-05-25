import React from "react";
import {FilterValue} from "./App";

export type TaskType = {
    id: number
    name: string
    isDone: boolean
}

export type ToDoListType = {
    title: string
    tasks: TaskType[]
    removeTask: (id: number) => void
    changeFilter: (buttonName: FilterValue) => void
}

export const ToDoList = (props: ToDoListType) => {
    return (<div>
        <h3>{props.title}</h3>
        <div>
            <input type="text"/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((t) => {
                return (
                    <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/><span>{t.name}</span>
                        <button onClick={() => props.removeTask(t.id)}>X
                        </button>
                    </li>

                )

            })}
        </ul>
        <div>
            <button onClick={() => props.changeFilter("All")}>All</button>
            <button onClick={() => props.changeFilter("Active")}>Active</button>
            <button onClick={() => props.changeFilter("Completed")}>Completed</button>
        </div>
    </div>)
}
