import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  plan: 'free' | 'standard' | 'premium' | 'professional';
  balance: number;
  subscriptionQuota: number;
  usedQuota: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  updateBalance: (amount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demonstration
const mockUser: User = {
  id: '1',
  email: 'liu64013@gmail.com',
  name: 'Developer',
  plan: 'premium',
  balance: 150.00,
  subscriptionQuota: 260,
  usedQuota: 45.5,
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check localStorage for existing session
    const storedUser = localStorage.getItem('openaine_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate login - in production, this would be an API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes, accept any login
    const loggedInUser = { ...mockUser, email };
    setUser(loggedInUser);
    setIsAuthenticated(true);
    localStorage.setItem('openaine_user', JSON.stringify(loggedInUser));
  };

  const register = async (email: string, password: string, name: string) => {
    // Simulate registration
    await new Promise(resolve => setTimeout(resolve, 1000));

    const newUser: User = {
      ...mockUser,
      id: Date.now().toString(),
      email,
      name,
      plan: 'free',
      balance: 0,
      subscriptionQuota: 0,
      usedQuota: 0,
    };

    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('openaine_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('openaine_user');
  };

  const updateBalance = (amount: number) => {
    if (user) {
      const updatedUser = { ...user, balance: user.balance + amount };
      setUser(updatedUser);
      localStorage.setItem('openaine_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout, updateBalance }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
