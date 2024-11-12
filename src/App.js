import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';  // Corrected import for Home
import Login from './component/Login/Login';  // Corrected import for Login
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

function App() {
  return (
    <Router> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
