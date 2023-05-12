import React from "react";

export type TaskType = {
    id: number
    name: string
    isDone: boolean
}

type ToDoListType = {
    title: string
    tasks: TaskType[]
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
                    </li>)
            })}
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>)
}
