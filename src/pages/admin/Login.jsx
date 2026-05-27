import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import '@/styles/components/Admin.scss'

const ADMIN_PASSWORD = 'umidjon0528'

const Login = () => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  // Protektsiyadagi - agar avvaldan tizimga kirgansa, dashboard ga yubor
  useEffect(() => {
    if (localStorage.getItem('adminAuth') === 'true') {
      navigate('/admin/dashboard', { replace: true })
    }
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate small delay for UX
    await new Promise((r) => setTimeout(r, 600))

    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('adminAuth', 'true')
      toast.success('Muvaffaqiyatli kirdingiz!')
      navigate('/admin/dashboard', { replace: true })
    } else {
      toast.error("Parol noto'g'ri!")
    }
    setIsLoading(false)
  }

  return (
    <div className="admin-login">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          className="login-icon"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <FaLock />
        </motion.div>

        <h1>Admin Panel</h1>
        <p className="login-subtitle">🔐 Portfolio boshqaruv paneli</p>

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
              <motion.button
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
                  fontSize: '18px',
                }}
                whileHover={{ color: 'rgba(59, 130, 246, 0.8)' }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </motion.button>
            </div>
          </div>

          <motion.button
            type="submit"
            className="btn btn--primary"
            disabled={isLoading}
            whileHover={!isLoading ? { scale: 1.05 } : {}}
            whileTap={!isLoading ? { scale: 0.95 } : {}}
            style={{ width: '100%', marginTop: '8px' }}
          >
            {isLoading ? '⏳ Kirish...' : '✓ Kirish'}
          </motion.button>
        </form>

        <p
          style={{
            fontSize: '12px',
            color: 'rgba(255,255,255,0.4)',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          Faqat admin uchun
        </p>
      </motion.div>
    </div>
  )
}

export default Login
