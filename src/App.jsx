import './index.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Error from './pages/Error'

function App() {

  return (
    <div className="page__control">
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  )
}

export default App
