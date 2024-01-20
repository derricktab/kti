import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Main from './ui/main';
import LoginScreen from './ui/login';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginScreen />} />
        {/* <Route path="/admin" element={<Adm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;