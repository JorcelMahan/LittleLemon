import HomePage from './Pages/HomePage';
import BookingPage from './Pages/BookingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reservations' element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
