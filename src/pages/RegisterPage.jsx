import { useState, useEffect } from 'react'; // Import useEffect
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti'; // <-- 1. Import Confetti
import Layout from '../components/Layout';
import CustomInput from '../components/CustomInput';
import { useUser } from '../context/UserContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { registerUser } = useUser();
  
  // <-- 2. New state for confetti animation
  const [showConfetti, setShowConfetti] = useState(false);
  // State to track window size for confetti boundary
  const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Helper to handle window resize for confetti
  const detectSize = () => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
      window.addEventListener('resize', detectSize);
      return () => { window.removeEventListener('resize', detectSize); }
  }, [windowDimension]);


  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = registerUser(formData);
    
    if (result.success) {
      // <-- 3. The Party Logic
      setShowConfetti(true); // Start animation
      
      // Wait 3 seconds, then redirect
      setTimeout(() => {
          navigate('/profile'); 
      }, 3500);
      
    } else {
      alert(result.message);
    }
  };

  return (
    <Layout title="Create your PopX account">
      {/* <-- 4. The Confetti Component (Overlay) */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none">
            <Confetti 
                width={windowDimension.width} 
                height={windowDimension.height} 
                recycle={false} // Runs once then stops
                numberOfPieces={800}
                gravity={0.2}
            />
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 relative z-10">
        <CustomInput label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} required />
        <CustomInput label="Phone number" name="phone" value={formData.phone} onChange={handleChange} required />
        <CustomInput label="Email address" name="email" type="email" value={formData.email} onChange={handleChange} required />
        <CustomInput label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required />
        <CustomInput label="Company name" name="company" value={formData.company} onChange={handleChange} />

        <div className="mb-6">
            <p className="text-sm font-semibold text-pop-text mb-2">Are you an Agency?<span className="text-pop-error">*</span></p>
            <div className="flex gap-4">
                <label className="flex items-center gap-2">
                    <input type="radio" name="isAgency" value="yes" checked={formData.isAgency === 'yes'} onChange={handleChange} className="accent-pop-primary w-4 h-4" />
                    <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" name="isAgency" value="no" checked={formData.isAgency === 'no'} onChange={handleChange} className="accent-pop-primary w-4 h-4" />
                    <span>No</span>
                </label>
            </div>
        </div>

        {/* Hide button during animation so they don't double click */}
        {!showConfetti && (
            <button type="submit" className="w-full bg-pop-primary text-white py-3 rounded-lg font-medium mt-auto hover:bg-opacity-90 transition-all">
                Create Account
            </button>
        )}
         {showConfetti && (
            <button disabled className="w-full bg-green-500 text-white py-3 rounded-lg font-medium mt-auto flex justify-center items-center gap-2 animate-pulse">
                🎉 Account Created! 🎉
            </button>
        )}
      </form>
    </Layout>
  );
};

export default RegisterPage;