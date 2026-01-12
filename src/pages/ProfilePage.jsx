import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const ProfilePage = () => {
  const { currentUser, logout, updateUserProfile } = useUser();
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // Reference to the hidden input

  // Route protection
  useEffect(() => {
    if (!currentUser) navigate('/login');
  }, [currentUser, navigate]);

  if (!currentUser) return null;

  // --- FEATURE 1: Handle Photo Upload ---
  const handleImageClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Convert Image to Base64 String (to save in fake DB)
      const reader = new FileReader();
      reader.onloadend = () => {
        updateUserProfile({ avatar: reader.result }); // Save to Context
      };
      reader.readAsDataURL(file);
    }
  };

  // Default avatar if none is uploaded
  const defaultAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser.fullName}`;

  return (
    <div className="min-h-screen bg-[#F7F7F7] font-sans">
        
        {/* Navbar / Header */}
        <div className="bg-white p-4 shadow-sm mb-6 flex justify-between items-center">
             <h1 className="text-lg font-semibold text-pop-text">Account Settings</h1>
             
             {/* --- FEATURE 2: Logout Icon --- */}
             <button 
                onClick={() => { logout(); navigate('/'); }} 
                className="text-pop-text hover:text-pop-primary transition-colors"
                title="Logout"
             >
                {/* SVG Logout Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
             </button>
        </div>

        <div className="p-4 flex gap-4 items-start border-b border-dashed border-gray-300 pb-8">
             {/* Avatar Section */}
             <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                    <img 
                        src={currentUser.avatar || defaultAvatar} 
                        alt="Avatar" 
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {/* Camera Button */}
                <button 
                    onClick={handleImageClick}
                    className="absolute bottom-0 right-0 bg-pop-primary p-1.5 rounded-full border-2 border-white cursor-pointer hover:bg-opacity-90 transition-all shadow-md"
                >
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 0011.586 3H8.414a1 1 0 00-.707.293L6.293 4.707A1 1 0 015.586 5H4z"/></svg>
                </button>
                
                {/* Hidden Input for File Upload */}
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    accept="image/*"
                    className="hidden" 
                />
             </div>

             <div className="flex-1 pt-2">
                 <h2 className="text-md font-bold text-pop-text">{currentUser.fullName}</h2>
                 <p className="text-sm text-pop-text">{currentUser.email}</p>
             </div>
        </div>
        
        <div className="px-4 pt-6">
             <p className="text-sm text-pop-subtext leading-relaxed">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
             </p>
        </div>
    </div>
  );
};

export default ProfilePage;