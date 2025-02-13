import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Create } from './pages/create';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
              <Route 
              path="/create" 
              element={<Create/>}
            />
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

