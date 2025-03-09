import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import ButtonComponent from './components/ButtonComponent'
import Login from './components/Login'
import ConditionButtonComponent from './components/ConditionButtonComponent'
import MovieList from './components/MovieList'
import AnimalList from './components/AnimalList'
import MemeList from './components/MemeList'

function App() {




  //let number = 0
  let myPlaceholder = 'Escribe algo'

  const [number, setNumber] = useState(0)
  const [myValue, setMyValue] = useState('')

  const [greetings, setGreetings] = useState('¡Hola a todos!')

  const links = {
    home: "Home",
    about: "About",
    contact: "Contact"
  }

  const [condition, setCondition] = useState(false)

  const [user, setUser] = useState({

  })

  useEffect(() => {
    console.log('Ejecución con cada cambio de la varuable reactiva user')
  }, [user])

  const login = (userInfo) => {
    console.log(userInfo)
    setUser(userInfo)
  }

  const addOne = () => {
    //number++

    setNumber(number + 1)
    console.log(number)
  }


  const sayHello = () => {
    console.log('Hola a todos!')
  }

  const handleChange = (e) => {
    console.log(e.target.value)
  }

  const [showMovies, setShowMovies] = useState(true)

  return (
    <>
      <HeaderComponent greetings={greetings} links={links}></HeaderComponent>
      <main className='main-content'>
        {user.username && <h2>Hola, {user.username}</h2>}

        <Login handleLogin={login}></Login>


        <ConditionButtonComponent condition={condition} setCondition={setCondition}></ConditionButtonComponent>
        {/* {condition && <h2>La condición se cumple</h2>}
      {!condition && <h2>La condición no se cumple</h2>} */}

        {condition ? <h2>La condición se cumple</h2> : <h2>La condición no se cumple</h2>}

        <button onClick={() => setShowMovies(!showMovies)}>Toggle Movies</button>

        {showMovies && <MovieList></MovieList>}

        <AnimalList></AnimalList>


        <br />
        <br />
        <br />
        <br />
        <br />

        <MemeList></MemeList>
      </main>
    </>
  )
}

export default App
