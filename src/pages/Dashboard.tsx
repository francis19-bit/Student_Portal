import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Award, 
  Bell, 
  Link, 
  User, 
  LogOut,
  Menu
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleSignOut = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { to: '/courses', icon: BookOpen, label: 'Courses' },
    { to: '/results', icon: Award, label: 'Results' },
    { to: '/notifications', icon: Bell, label: 'Notifications' },
    { to: '/quicklinks', icon: Link, label: 'Quick Links' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-primary text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex items-center justify-between">
          <h1 className={`font-bold text-xl ${!isSidebarOpen && 'hidden'}`}>Student Portal</h1>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="p-2 hover:bg-primary/80 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
        
        <nav className="mt-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 transition-colors ${
                  isActive 
                    ? 'bg-secondary text-primary font-bold' 
                    : 'hover:bg-primary/80'
                }`
              }
            >
              <item.icon size={20} />
              {isSidebarOpen && <span className="ml-4">{item.label}</span>}
            </NavLink>
          ))}
          
          <button
            onClick={handleSignOut}
            className="flex items-center px-4 py-3 w-full hover:bg-primary/80 transition-colors"
          >
            <LogOut size={20} />
            {isSidebarOpen && <span className="ml-4">Sign Out</span>}
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main 
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        } bg-gray-50 min-h-screen`}
      >
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}