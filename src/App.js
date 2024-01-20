import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Main from './ui/main';
import LoginScreen from './ui/login';
import AdminDashboard from './ui/admin';
import Applicants from './ui/applicants';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/applicants" element={<Applicants />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;