import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import './App.css'
import Employee from "./component/Employee.tsx";
import Project from "./component/Project.tsx";
import Task from "./component/Task.tsx";

function App() {
  return(
      <Router>
        <div>


          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <div className="navbar-brand">
                <img style={{maxHeight: "60px"}} src="https://static.thenounproject.com/png/3627272-200.png"
                     alt="Logo" className="logo"/>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to='/'>Employee</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/project'>Project</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/task'>Task</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>




          <hr/>

          <Routes>
            <Route path='/' element={<Employee/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/task' element={<Task/>}/>

          </Routes>


        </div>
      </Router>
  )
}

export default App
