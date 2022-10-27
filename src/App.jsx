import { NavLink, Outlet  } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <div>
        <nav>
          <NavLink to="">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
