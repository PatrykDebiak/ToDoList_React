import React from 'react'
import { useState } from 'react';

/**
 * 
 * Funkcja AddTask przyjmuje wartość nazwaną onAdd jako argument i zwraca formularz z trzema inputam'i
 * i przyciskiem 'submit' odsyłający formularz.
 * 
 * Formularz posiada delegata onSubmit odpowiedzialnego za obsługe zdarzeń i który wywołuje funkcje onAdd.
 * 
 * Funkcji onAdd przekazywany jest obiekt skladajacy sie z trzech wartości: text ,day ,reminder.
 * Wartości tych funkcji są kolejno równę odpowiednim polom formularza.
 * 
 * Delegat onSubmit również resetuje wartości text, day, reminder w znaczkikach input
 * i również definiuje wartości domyślne formularza, wyświetla także alert jeśli 
 * wartość pierwszego input'a  nie została uzupełniona.
 * 
 *Autor: Patryk Dębiak
 */
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault();

        if(!text){
            alert("Uzupełnij odpowiednie pole")
            return
        }
        onAdd({ text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
      
        <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
            <label>Nazwa*</label>
            <input
              type='text'
              placeholder='Dodaj nazwę'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Termin</label>
            <input
              type='text'
              placeholder='Dodaj termin'
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <div className='form-control form-control-check'>
            <label>Wyróżnić?</label>
            <input
              type='checkbox'
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
            />
          </div>
    
          <input type='submit' id='submit' value='Dodaj' className='btn btn-block' />
          <p>* - wymagane</p>
        </form>
      )
}

export default AddTask;