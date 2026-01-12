import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import CustomInput from '../components/CustomInput';
import { useUser } from '../context/UserContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginUser } = useUser(); // Access the login function from context
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Engineering Check: Is the form valid?
  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Call the context function
    const result = loginUser(email, password);

    if (result.success) {
      navigate('/profile'); // Redirect on success
    } else {
      setError(result.message); // Show error message
    }
  };

  return (
    <Layout title="Signin to your PopX account">
      <p className="text-pop-subtext text-base mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      {/* Show error if login fails */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <CustomInput 
          label="Email Address" 
          name="email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <CustomInput 
          label="Password" 
          name="password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        {/* The Button - Changes color based on validity */}
        <button 
          type="submit" 
          disabled={!isFormValid}
          className={`w-full py-3 rounded-lg font-medium mt-4 transition-all duration-300
            ${isFormValid 
              ? 'bg-pop-primary text-white hover:bg-opacity-90' // Active State
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'   // Disabled State (Grey)
            }`}
        >
          Login
        </button>
      </form>
    </Layout>
  );
};

export default LoginPage;