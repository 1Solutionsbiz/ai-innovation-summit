import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleLogin = async () => {
    try {
      const resp = await axios.post('https://darkorange-flamingo-563587.hostingersite.com/api/login', {
        email,
        password,
      });
      const { token } = resp.data;
      localStorage.setItem('token', token);
      navigate('/dashboard', { replace: true });
    } catch {
      setError('Invalid credentials, please try again.');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div 
      className="flex items-center justify-center h-screen bg-gray-900"
      onKeyDown={handleKeyDown}   
    >
      <div className="w-96 p-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-neon-purple font-orbitron">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white"
        />

        {error && (
          <p className="text-red-500 text-center mb-4">{error}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full p-2 mb-4 btn-gradient text-white rounded hover:scale-105"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
