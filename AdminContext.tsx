
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem('pashut_admin_session');
    if (session === 'active') setIsAdmin(true);
  }, []);

  const login = (password: string) => {
    // סיסמת ברירת מחדל פשוטה לצורך ההדגמה - ניתן לשנות כאן
    if (password === 'pashut2024') {
      setIsAdmin(true);
      sessionStorage.setItem('pashut_admin_session', 'active');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    sessionStorage.removeItem('pashut_admin_session');
  };

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within AdminProvider');
  return context;
};
