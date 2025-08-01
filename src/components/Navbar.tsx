import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Crown, BarChart3, LogOut, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentUser: any;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser, onLogout }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50 animate-slide-in-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg animate-bounce-gentle">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SHE CAN
              </h1>
              <p className="text-xs text-gray-500">Foundation</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link
              to="/dashboard"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/dashboard')
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              } transform hover:scale-105 transition-all duration-300`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="font-medium">Dashboard</span>
            </Link>
            
            <Link
              to="/leaderboard"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                isActive('/leaderboard')
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              } transform hover:scale-105 transition-all duration-300`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">Leaderboard</span>
            </Link>

            {/* User Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center animate-pulse-slow">
                  <span className="text-white font-bold text-sm">
                    {currentUser?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <span className="text-gray-700 font-medium hidden sm:block">
                  {currentUser?.name || 'User'}
                </span>
              </div>

              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <LogOut className="w-4 h-4" />
                <span className="font-medium hidden sm:block">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;