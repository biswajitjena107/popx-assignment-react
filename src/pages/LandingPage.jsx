import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  // REPLACE THIS VALUE with the exact name of your file in the 'public' folder
  const logoImageName = 'popx-logo.png'; 

  return (
    <div className="min-h-screen bg-[#F7F7F7] relative flex flex-col justify-end p-6 pb-10 overflow-hidden">

      {/* --- NEW CENTERED IMAGE ICON --- */}
      {/* Kept the same positioning wrapper, removed the SVG, added the <img> tag.
         Adjust 'w-64 h-64' if you want it bigger or smaller.
         Adjust 'opacity-30' to change transparency.
      */}
      <div className="absolute inset-0 flex justify-center items-center opacity-30 pointer-events-none pb-40">
          <img 
            src={'./pop.jpeg'} // Points to public folder
            alt="PopX Logo Background" 
            className="w-64 h-64 object-contain" 
          />
      </div>
      {/* ------------------------------------ */}


      <div className="w-full max-w-md mx-auto relative z-10">
        
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