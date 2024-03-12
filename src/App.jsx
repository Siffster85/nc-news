//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import ArticleList from './Components/ArticleList'
import ArticleCard from './Components/ArticleCard'
import CommentsList from './Components/CommentsList'

function App() {
 //activeuser context will sit here when it's needed

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticleList />} />
      <Route path="/articles/:article_id" element={<><ArticleCard/><CommentsList/></>} />
     
    </Routes>
  )
}

export default App
