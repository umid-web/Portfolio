import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import '@/styles/components/Admin.scss';

const ADMIN_PASSWORD = 'admin123';

const Login = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate small delay for UX
    await new Promise((r) => setTimeout(r, 600));

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('adminAuth', 'true');
      toast.success('Muvaffaqiyatli kirdingiz!');
      navigate('/admin/dashboard');
    } else {
      toast.error('Parol noto\'g\'ri!');
    }
    setIsLoading(false);
  };

  return (
    <div className="admin-login">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="login-icon">
          <FaLock />
        </div>
        <h1>Admin Panel</h1>
        <p className="login-subtitle">Portfolio boshqaruv paneli</p>

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-group">
            <label htmlFor="admin-password">Parol</label>
            <div style={{ position: 'relative' }}>
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Parolni kiriting..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.4)',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <motion.button
            type="submit"
            className="btn btn--primary"
            disabled={isLoading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? 'Kirish...' : 'Kirish'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
