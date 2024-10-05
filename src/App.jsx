
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Episodios from './components/Episodios'
import { useFetch } from './hooks/useFetch'
import Detail from './components/Detail'

function App() {

  const { characters, setCharacters } = useFetch("https://rickandmortyapi.com/api/character")

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home characters={characters} />} />
          <Route path='/episodes/:id' element={<Episodios characters={characters} />} />
          <Route path='/detail/:id' element={<Detail characters={characters} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
