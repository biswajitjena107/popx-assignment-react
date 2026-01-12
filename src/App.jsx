import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext'; 
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    // 1. Wrap the app in the Context Provider
    <UserProvider>
      {/* 2. Define the Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;