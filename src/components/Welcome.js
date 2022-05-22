import React from 'react'
import { Link } from 'react-router-dom';
const Welcome = () => {
  return (
      <>
    <div id='welcome'>
        <center>
        <p id='p1'>Aplikacja służy do tworzenia listy obowiazków, rzeczy do zrobienia, 
            czy też zadań z ustalonym terminem. Pozwól sobie na składowanie tych rzeczy 
            w jednym miejscu, nie ryzykując, że zapomnisz jednej z tych rzeczy.
            <br/><br/>
            Korzystając z aplikacji masz możliwość dodawania rzeczy do listy,
            usuwania i wyróżniania danych pozycji przez wybranie odpowiedniej opcji
            podczas dodawania do listy lub poprzez dwukrotne klikniecie 
            w istniejacą już pozycje. Dane automatycznie są zapisywane na serwerze, 
            nie musisz się bać, że po wyłączeniu aplikacji zapisane pozycje znikną.
        </p>
        <Link id='begin' className='link btn' to='/todolist'>Rozpocznij</Link></center>
    </div>
    </>
  )
}

export default Welcome