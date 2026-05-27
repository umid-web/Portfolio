import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectContext } from '@/context/ProjectContext'
import { ThemeContext } from '@/context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaTimes,
  FaSignOutAlt,
  FaSun,
  FaMoon,
} from 'react-icons/fa'
import '@/styles/components/Admin.scss'

/* ─── Modal ───────────────────────────── */
const Modal = ({ children, onClose }) => (
  <AnimatePresence>
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  </AnimatePresence>
)

/* ─── Form ───────────────────────────── */
const ProjectForm = ({ initialData = {}, onSubmit, onCancel, isEdit }) => {
  const [title, setTitle] = useState(initialData.title || '')
  const [description, setDescription] = useState(initialData.description || '')
  const [image, setImage] = useState(initialData.image || '')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title.trim()) return toast.error('Sarlavha kerak!')
    if (!description.trim()) return toast.error('Tavsif kerak!')

    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 300))

    onSubmit({ title, description, image })
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <div className="modal-header">
        <h2>{isEdit ? '✏️ Tahrirlash' : '➕ Yangi loyiha'}</h2>
        <motion.button
          type="button"
          onClick={onCancel}
          whileHover={{ rotate: 90 }}
        >
          <FaTimes />
        </motion.button>
      </div>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Loyiha sarlavhasi"
        maxLength={100}
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Loyiha tavsifi..."
        maxLength={500}
        required
      />

      <label style={{ display: 'block', marginBottom: '8px' }}>
        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
          Rasm (ixtiyoriy)
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0]
            if (file) {
              if (file.size > 5 * 1024 * 1024) {
                toast.error('Rasm 5MB dan kichik bo\'lishi kerak')
                return
              }
              const reader = new FileReader()
              reader.onload = () => setImage(reader.result)
              reader.readAsDataURL(file)
            }
          }}
          style={{ marginTop: '8px' }}
        />
      </label>

      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            width: '100%',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '12px',
            border: '1px solid rgba(59, 130, 246, 0.3)',
          }}
        >
          <img
            src={image}
            alt="preview"
            style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          />
        </motion.div>
      )}

      <div className="form-actions">
        <motion.button
          type="submit"
          className="btn btn--primary"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          whileTap={!isSubmitting ? { scale: 0.95 } : {}}
        >
          {isSubmitting ? 'Saqlanmoqda...' : isEdit ? 'Saqlash' : 'Qo\'shish'}
        </motion.button>
        <motion.button
          type="button"
          className="btn btn--ghost"
          onClick={onCancel}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Bekor qilish
        </motion.button>
      </div>
    </form>
  )
}

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <div className="modal-header">
        <h2>{isEdit ? 'Tahrirlash' : 'Yangi loyiha'}</h2>
        <button type="button" onClick={onCancel}>
          <FaTimes />
        </button>
      </div>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Sarlavha"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Tavsif"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0]
          if (file) {
            const reader = new FileReader()
            reader.onload = () => setImage(reader.result)
            reader.readAsDataURL(file)
          }
        }}
      />

      {image && (
        <img
          src={image}
          alt="preview"
          style={{ width: '100%', borderRadius: '10px', marginTop: 10 }}
        />
      )}

      <div className="form-actions">
        <button type="submit" className="btn btn--primary">
          {isEdit ? 'Saqlash' : 'Qo‘shish'}
        </button>
        <button type="button" className="btn btn--ghost" onClick={onCancel}>
          Bekor qilish
        </button>
      </div>
    </form>
  )
}

/* ─── Dashboard ───────────────────────────── */
const Dashboard = () => {
  const { projects, addProject, editProject, deleteProject } =
    useContext(ProjectContext)

  const { theme, toggleTheme } = useContext(ThemeContext)
  const navigate = useNavigate()

  const [isModalOpen, setModalOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [currentProject, setCurrentProject] = useState(null)

  // Protektsiyadagi - agar login bo'lmagan bo'lsa login page ga yubor
  useEffect(() => {
    if (localStorage.getItem('adminAuth') !== 'true') {
      navigate('/admin/login', { replace: true })
    }
  }, [navigate])

  const openAdd = () => {
    setEditMode(false)
    setCurrentProject(null)
    setModalOpen(true)
  }

  const openEdit = (p) => {
    setEditMode(true)
    setCurrentProject(p)
    setModalOpen(true)
  }

  const handleSubmit = (data) => {
    if (editMode) {
      editProject(currentProject.id, data)
      toast.success('Yangilandi')
    } else {
      addProject(data)
      toast.success('Qo‘shildi')
    }
    setModalOpen(false)
  }

  const handleDelete = (id, title) => {
    if (window.confirm(`"${title}" o‘chirishni xohlaysizmi?`)) {
      deleteProject(id)
      toast.success('O‘chirildi')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    navigate('/admin/login')
  }

  return (
    <div className="admin-page">
      {/* HEADER */}
      <header className="admin-header">
        <div>
          <h2>Admin Panel</h2>
        </div>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>
            {projects.length} loyiha
          </span>
          <button onClick={handleLogout}>
            <FaSignOutAlt /> Chiqish
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <div className="admin-content">
        <motion.button
          className="btn btn--primary"
          onClick={openAdd}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPlus /> Yangi loyiha qo'shish
        </motion.button>

        <h3>📋 Loyihalar ro'yxati</h3>

        {projects.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            <p style={{ fontSize: '18px', marginBottom: '16px' }}>
              Hali loyiha yo'q
            </p>
            <p style={{ fontSize: '14px' }}>
              Yangi loyiha qo'shish uchun yuqoridagi tugmani bosing
            </p>
          </div>
        ) : (
          <div className="project-grid">
            {projects.map((p) => (
              <motion.div
                key={p.id}
                className="project-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
              >
                <h4>{p.title}</h4>
                <p>{p.description}</p>

                <div className="project-actions">
                  <motion.button
                    onClick={() => openEdit(p)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="Tahrirlash"
                  >
                    <FaEdit />
                  </motion.button>

                  <motion.button
                    onClick={() => handleDelete(p.id, p.title)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title="O'chirish"
                  >
                    <FaTrash />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <ProjectForm
            initialData={currentProject || {}}
            onSubmit={handleSubmit}
            onCancel={() => setModalOpen(false)}
            isEdit={editMode}
          />
        </Modal>
      )}
    </div>
  )
}

export default Dashboard
