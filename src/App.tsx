
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ArticleList } from './component/ArticleList'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ArticleList/>}/>
      </Routes>
    </>
  )
}

export default App
