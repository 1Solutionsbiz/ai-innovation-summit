import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const DashboardLayout: React.FC = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const token = localStorage.getItem('token') || '';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await axios.post(
        'https://olive-elk-842602.hostingersite.com/api/logout',
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
    },
    onSuccess: () => {
      localStorage.removeItem('token');
      queryClient.clear();
      navigate('/login', { replace: true });
    },
    onError: (err) => {
      console.error('Logout failed', err);
      localStorage.removeItem('token');
      navigate('/login', { replace: true });
    },
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-4 flex flex-col transform transition-transform duration-300 ease-in-out z-20 md:static md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:w-64`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold  font-orbitron text-neon-purple">Dashboard</h2>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1">
          <ul>
            <li>
              <Link
                to="partner-form"
                className="block py-2 px-2 hover:bg-gray-700 rounded text-gray-200 font-orbitron"
                onClick={() => setIsSidebarOpen(false)}
              >
                Partner Form
              </Link>
            </li>
            <li>
              <Link
                to="registration-form"
                className="block py-2 px-2 hover:bg-gray-700 rounded text-gray-200 font-orbitron"
                onClick={() => setIsSidebarOpen(false)}
              >
                Registration Form
              </Link>
            </li>
               <li>
              <Link
                to="bengalore-registration-form"
                className="block py-2 px-2 hover:bg-gray-700 rounded text-gray-200 font-orbitron"
                onClick={() => setIsSidebarOpen(false)}
              >
                Bengaluru Registration Form
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => logoutMutation.mutate()}
          className="mt-auto p-2 btn-gradient hover:scale-105 text-white font-orbitron"
        >
          Logout
        </button>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto bg-gray-900 text-white">
        <button
          className="md:hidden mb-4 focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;