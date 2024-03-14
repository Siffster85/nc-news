import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import ArticleList from './Components/ArticleList'
import ArticleCard from './Components/ArticleCard'
import CommentsList from './Components/CommentsList'
import Header from './Components/Header'
import User from './Components/User'
import Account from './Components/Account'
import Topics from './Components/Topics'
import ActiveUserContext from './Context/ActiveUser'

function App() {
	const [activeUser, setActiveUser] = useState(
		{ username: 'jessjelly' }  
  )
  return (
    <ActiveUserContext.Provider value={{ activeUser, setActiveUser }}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/articles" element={<ArticleList />} />
      <Route path="/articles/:article_id" element={<><ArticleCard/><CommentsList/></>} />
      <Route path="/users" element={<User />} />
      <Route path="/users/:username" element={<Account />} />
     
    </Routes>
    </ActiveUserContext.Provider>
  )
}

export default App
