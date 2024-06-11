import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom'
import HomePage from './HomePage';
import SavedQuotes from './SavedQuotes';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={HomePage}></Route>
          <Route path='/savedQuotes' Component={SavedQuotes}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
