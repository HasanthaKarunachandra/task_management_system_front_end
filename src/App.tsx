import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
import './App.css'
import Employee from "./component/Employee.tsx";
import Project from "./component/Project.tsx";
import Task from "./component/Task.tsx";

function App() {
  return(
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Employee</Link>
              </li>
              <li>
                <Link to='/project'>Project</Link>
              </li>
              <li>
                <Link to='/task'>Task</Link>
              </li>
            </ul>
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
