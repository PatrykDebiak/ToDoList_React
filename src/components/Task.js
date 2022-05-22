import React from 'react'
import { FaTimes } from 'react-icons/fa';
/**
 * Zwraca div'a z nazwą className 'task' i 'reminder' w zależności czy wartość spełnia warunek. 
 * 
 * Posiada równiesz zdarzenie onDoubleClick, które wywołuje funkcje onToggle i przesyła jej id
 * 
 * W środku div'a jest znaczik <h3> z wartością task.text i ikone po której kliknięciu
 * wywoływana jest funkcja onDelete której przesyłana jest zmienna id
 * 
 * Znajduje też sie znacznik <p> w którym jest wpisana wartość task.day
 * Funkcja zwraca komponent ktora wyswietla pojedynczy element z listy
 * 
 * Autor: Patryk Dębiak
 */
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div 
        className={`task ${task.reminder?'reminder':''}`}
        onDoubleClick={() => onToggle(task.id)}
    >
        <h3 >
            {task.text} 
            <FaTimes  
            onClick={() => onDelete(task.id)} 
            style={{color:'red', cursor:'pointer'}}/>
        </h3>
        <p>{task.day}</p>

    </div>
  )
}


export default Task;