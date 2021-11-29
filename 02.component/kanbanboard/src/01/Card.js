import React from "react";
import TaskList from "./TaskList";


export default function({title,description,tasks}){

    return (
        <div className='Card'>
                <div class='Card__Title'>{title}</div>
                <div class='Card__Details'>
                    {description}
                </div>

                <TaskList tasks={tasks}/>

        </div>
    )
}
