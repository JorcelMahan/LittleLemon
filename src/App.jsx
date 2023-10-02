import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
