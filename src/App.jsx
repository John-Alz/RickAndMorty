
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Episodios from './components/Episodios'
import { useFetch } from './hooks/useFetch'
import Detail from './components/Detail'
import { useState } from 'react'

function App() {

  const [page, setPage] = useState(1)
  let [searchChar, setSearchChar] = useState('');
  console.log(searchChar);


  const { characters, setCharacters } = useFetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchChar}`, page, searchChar)




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home characters={characters} setSearchChar={setSearchChar} numberPage={page} setNumberPage={setPage} />} />
          <Route path='/episodes/:id' element={<Episodios characters={characters} setCharacters={setCharacters} />} />
          <Route path='/detail/:id' element={<Detail characters={characters} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
