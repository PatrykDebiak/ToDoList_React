import React from "react";
import Task from "./Task";

/**
 * Przyjmuje tablice tasks i funkcje onDelete i onToggle które przesyła 
 * dalej do innego komponentui przesyła poszeczególne dane do komponentu
 * Task który z kolei wyświetla je.
 * 
 * Funkcja zwraca tablice zawierajacą całą liste rzeczy do zrobienia
 * 
 * Autor: Patryk Dębiak
 */
const Tasks= ({tasks, onDelete, onToggle}) =>{
    
    return(
        <>
            {tasks.map((task) =>(
                <Task 
                key={task.id} 
                task={task} 
                onToggle={onToggle} 
                onDelete={onDelete}/>
            ))}  
        </>
    )
   
}

export default Tasks;