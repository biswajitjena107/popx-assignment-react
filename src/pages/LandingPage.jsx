import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    // 1. min-h-screen: Force the div to be as tall as your screen
    // 2. flex flex-col: Stack items vertically
    // 3. justify-end: Push EVERYTHING to the bottom
    <div className="min-h-screen bg-[#F7F7F7] flex flex-col justify-end p-6 pb-10">
      
      {/* This container holds the text and buttons */}
      <div className="w-full max-w-md mx-auto"> 
        <h1 className="text-3xl font-bold text-pop-text mb-2">Welcome to PopX</h1>
        <p className="text-pop-subtext text-base mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button 
            onClick={() => navigate('/register')}
            className="w-full bg-pop-primary text-white py-3 rounded-lg font-medium mb-3 hover:bg-opacity-90 transition-all"
        >
            Create Account
        </button>
        
        <button 
            onClick={() => navigate('/login')}
            className="w-full bg-[#D8C6FF] text-pop-text py-3 rounded-lg font-medium hover:bg-opacity-80 transition-all"
        >
            Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;