
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Episodios from './components/Episodios'
import { useFetch } from './hooks/useFetch'
import Detail from './components/Detail'
import { useState } from 'react'

function App() {

  const [page, setPage] = useState(1)

  const { characters, setCharacters } = useFetch(`https://rickandmortyapi.com/api/character/?page=${page}`, page)

  let [searchChar, setSearchChar] = useState('');


  const handleChange = (e) => {
    setSearchChar(e.target.value);
  }


  const search = () => {
    let characterFound = characters.filter((item) => item.name.toLowerCase().includes(searchChar.toLowerCase()));
    setCharacters(characterFound)
    console.log(characterFound);
    console.log(searchChar);

  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home search={search} characters={characters} searchChar={searchChar} handleChange={handleChange} numberPage={page} setNumberPage={setPage} />} />
          <Route path='/episodes/:id' element={<Episodios characters={characters} setCharacters={setCharacters} />} />
          <Route path='/detail/:id' element={<Detail characters={characters} />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
