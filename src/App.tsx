
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ArticleList } from './component/ArticleList'
import ArticleDetail from './component/ArticleDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ArticleList/>}/>
        <Route path="/article/:id" element={<ArticleDetail/>}/>

      </Routes>
    </>
  )
}

export default App
