//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import ArticleList from './Components/ArticleList'

function App() {
 //activeuser context will sit here when it's needed

  return (
    <Routes>
      <Route path="/" element={<ArticleList />} />
      <Route path ="/articles" element ={<ArticleList />} />
     
    </Routes>
  )
}

export default App
