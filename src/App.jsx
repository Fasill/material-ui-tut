
// import './App.css'
import { useState } from 'react'
import Notes from './pages/Notes.jsx'
import Create from './pages/Create.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <Routes>
    
      <Route path="/" element={<Notes/>} />
      <Route path="/create" element={<Create/>} />

    </Routes>
    </Router>
  )
}

export default App
