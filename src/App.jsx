import { NavLink, Outlet  } from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    <div className="App">
      <div>
        <nav className="nav">
          <NavLink to="">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/addMovie">Add a movie</NavLink>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default App
