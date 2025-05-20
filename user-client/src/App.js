import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import RegisterPage from './pages/Register/RegisterPage';
import LoginPage from './pages/Login/LoginPage';
import ProfilePage from './pages/Profile/ProfilePage';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;