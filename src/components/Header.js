import React from "react";
import Button from "./Button";
import { useLocation } from "react-router-dom";
/**
 * It's a functional component that returns a header with a label and a button. 
 * To jest funkcjonalny komponent który zwraca znacznik header, w którym
 * znajduję się znacznik <h1> i przycisk odpowiedzialny za wyświetlenie formularza.
 * 
 * Przycisk jest renderowany tylko wtedy gdy aktualna scieżka strony to 'todolist'.
 * 
 * The button's color and text are determined by the showAdd prop. 
 * Kolor przycisku i napis w nim jest zależny od przekazanej funkcji showAdd
 * The button's onClick prop is determined by the onAdd prop.
 * 
 * Autor: Patryk Dębiak
 */
const Header= (props) =>{
    const location = useLocation()
    return (
        <header className="header">
            <label id='headerp1'>Zadania <p id='headerp2'>(kliknij dwukrotnie w pozycje którą chcesz wyróżnić)</p></label>
          
            {location.pathname === '/todolist' && (<Button 
                color={props.showAdd ? 'red' : "green"} 
                onClick={props.onAdd} text={props.showAdd ? 'Zamknij' : 'Dodaj'} />
            )}  
        </header>
    )
}


export default Header;