import React, { useContext, useState } from 'react'
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

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim()) return toast.error('Sarlavha kerak!')
    if (!description.trim()) return toast.error('Tavsif kerak!')

    onSubmit({ title, description, image })
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
        <h2>Admin Panel</h2>

        <div>
          <button onClick={handleLogout}>
            <FaSignOutAlt /> Chiqish
          </button>
        </div>
      </header>

      {/* CONTENT */}
      <div className="admin-content">
        <button className="btn btn--primary" onClick={openAdd}>
          <FaPlus /> Yangi loyiha
        </button>

        <h3>Loyihalar ({projects.length})</h3>

        <div className="project-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <h4>{p.title}</h4>
              <p>{p.description}</p>

              <div className="project-actions">
                <button onClick={() => openEdit(p)}>
                  <FaEdit />
                </button>

                <button onClick={() => handleDelete(p.id, p.title)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
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
