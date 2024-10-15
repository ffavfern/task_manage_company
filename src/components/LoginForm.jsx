import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // ข้อมูลล็อกอินที่กำหนดไว้ล่วงหน้า
    const validUsername = 'admin';
    const validPassword = '123';

    if (username === validUsername && password === validPassword) {
      onLogin();
      setError('');
    } else {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 ">
        
      <div className="w-80 p-10 bg-white rounded-lg shadow-md ">
      <h1 className='text-4xl text-dark font-bold mb-10'>169 House System</h1>
        <h2 className="text-2xl font-bold mb-4 text-dark">เข้าสู่ระบบ</h2>
        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded text-dark"
        />
        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 p-2 border border-gray-300 rounded text-dark"
        />
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <button
          onClick={handleLogin}
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-800 transition"
        >
          เข้าสู่ระบบ
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
