import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
import Todo from './Progects/Todo/Todo.jsx'
import Login from './Progects/Login/Login.jsx';
import Mean from './Progects/Mean/Mean.jsx';
function App() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/todo' element={<Todo />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/mean' element={<Mean />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
