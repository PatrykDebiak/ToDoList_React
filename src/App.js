import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";
import Banner from "./components/Banner";
import Welcome from "./components/Welcome";

function App(){
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

 /**
  * funckja useEffect()
  * 
  * A hook that is called after every render. It is used to fetch data from the server. 
  * Wywoływany jest hook setTasks po każdym renderowaniu,
  * używany jest do pobierania danych z serwera.
  * 
  * Autor: Patryk Dębiak
  *  */ 
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  /**
   * funkcja fetchTasks()
   * 
   * It fetches the tasks from the server and returns them as a JSON object
   * Pobiera dane z serwera i zwraca je jako obiekt JSON
   * 
   * Zwraca tablice obiektów
   * 
   * Autor: Patryk Dębiak
   */
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  /**
   * funkcja fetchTask()
   * 
   * Przyjmuje parametr id-id pozycji obiektu który chcemy pobrać
   * 
   * Pobiera pojedyncza pozycje z obiektu i zwraca w obiekcie data
   *
   *Zwraca obeikt data
   *
   * Autor: Patryk Dębiak
   */
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }


/**
 * funkcja addTask()
 * 
 * Przyjmuje obiekt task i wysyła go na serwer gdzie jest 
 * dopisywany do obiektu na serwerze.
 * 
 * Autor: Patryk Dębiak
 */
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])
  }

  
  /**
   * funkcja deleteTask()
   * 
   * Przyjmuje id - id task'a do usunięcia
   * 
   * Wysyłamy polecenie 'DELETE' na serwer jeśli odpowiedź serwera jest równa 200,
   * filtrujemy tablice tasks i przypisujemy nowy state.
   * 
   * Autor: Patryk Dębiak
   */
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Problem z usunięciem tej pozycji')
  }

  /**
   * funkcja toggleReminder()
   * 
   * Przyjmuje id - id task'a do zaktualizowania
   * 
   * Pobiera pojedynczy task z bazy danych, zmienia wartość reminder i wtedy zmienia wartosc 
   * poejdyńczego task'a w bazie danych.
   * 
   * Autor: Patryk Dębiak
   */
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }
  return (
    /**
     * Komponenty Router, Routes, Route
     * 
     * Komponenty służa do tworzenia nowych ścieżek na serwerze
     * i przypisawaniu im dane elementy.
     * 
     * pozwala to na przełączanie się na podstrony
     * bez przeładowywania strony.
     * 
     * Autor: Patryk Dębiak
     */
    <Router>
      <div className='container'>
        <Banner />
        <div className="content">
        
        <Routes>
          <Route 
            path='/'
            element={<Welcome/>}
          />
          <Route
            path='/todolist'
            element={
              <>
              <Header
                  onAdd={() => setShowAddTask(!showAddTask)}
                  showAdd={showAddTask}
                  />
                  
                {showAddTask && <AddTask onAdd={addTask} /> }
                {tasks.length > 0 ? (
                  
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'Brak zadań do wykonania'
                )}
              </>
            }
          />
          <Route 
            path='/about' 
            element={<About />} 
          />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;