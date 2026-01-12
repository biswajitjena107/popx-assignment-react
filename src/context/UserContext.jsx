import { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('popx_users');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    // Keep user logged in even after refresh
    const savedUser = localStorage.getItem('popx_current_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem('popx_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    // Sync current user to local storage too
    if (currentUser) {
        localStorage.setItem('popx_current_user', JSON.stringify(currentUser));
    } else {
        localStorage.removeItem('popx_current_user');
    }
  }, [currentUser]);

  const registerUser = (userData) => {
    if (users.find(u => u.email === userData.email)) {
      return { success: false, message: "User already exists!" };
    }
    const newUser = { ...userData, avatar: null }; // Initialize with no avatar
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    return { success: true };
  };

  const loginUser = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setCurrentUser(user);
      return { success: true };
    }
    return { success: false, message: "Invalid credentials" };
  };

  // NEW FEATURE: Update User Info (Photo)
  const updateUserProfile = (updatedData) => {
    // 1. Update the current session
    const updatedUser = { ...currentUser, ...updatedData };
    setCurrentUser(updatedUser);

    // 2. Update the "Database" (users array)
    const updatedUsers = users.map(u => 
        u.email === currentUser.email ? updatedUser : u
    );
    setUsers(updatedUsers);
  };

  const logout = () => setCurrentUser(null);

  return (
    <UserContext.Provider value={{ users, currentUser, registerUser, loginUser, logout, updateUserProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);