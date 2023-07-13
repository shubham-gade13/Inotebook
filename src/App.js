
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
<div className='app'>
<NoteState>

     <Router>
      <Navbar/>
    { /* <Alert message="this is amazing react course"/>*/}

      <div className='container my-10'>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div>
    </Router>
         <div>
          
         </div>
</NoteState>
</div>

  );
}

export default App;
