// src/data/techIcons.js
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiVite, SiWebpack, SiJavascript, SiTypescript } from 'react-icons/si';

export const techIcons = [
  { name: 'React', component: <FaReact size={28} color="#61DAFB" /> },
  { name: 'Vite', component: <SiVite size={28} color="#646CFF" /> },
  { name: 'SCSS', component: <FaCss3Alt size={28} color="#1572B6" /> },
  { name: 'HTML5', component: <FaHtml5 size={28} color="#E34F26" /> },
  { name: 'JavaScript', component: <SiJavascript size={28} color="#F7DF1E" /> },
  { name: 'TypeScript', component: <SiTypescript size={28} color="#3178C6" /> },
  { name: 'Git', component: <FaGitAlt size={28} color="#F05032" /> },
  { name: 'Figma', component: <FaFigma size={28} color="#F24E1E" /> },
  { name: 'Node.js', component: <FaNodeJs size={28} color="#339933" /> }
];
