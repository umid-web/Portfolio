import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  t: {},
})

export const translations = {
  en: {

    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
      resume: 'Resume',
    },


    common: {
      role: 'Frontend Developer & UI/UX Designer',
      email: 'Email',
      location: 'Location',
      uzbekistan: 'Uzbekistan',
    },

    home: {
      seoTitle: 'Home | Umidjon Portfolio',
      seoDescription: 'Frontend Developer & UI/UX Designer',
      badge: 'Welcome to my portfolio',
      roles: ['Frontend Developer', 'React Specialist', 'Web Designer'],
      subtitle: 'Frontend Developer & UI/UX Designer',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
      codeRole: 'Frontend Dev',
    },

    about: {
      seoTitle: 'About | Umidjon',
      seoDescription: 'Learn more about me and my skills',
      title: 'About Me',
      subtitle: 'Media, skills and a short story about how I build interfaces.',
      heading: 'Frontend Developer & UI/UX Designer',
      lead: "I'm a passionate frontend developer specializing in React and modern web technologies.",
      body: 'I create beautiful, responsive, and user-friendly web applications. With expertise in React, SCSS, and modern development tools, I bring ideas to life through clean code and intuitive design.',
      download: 'Download Resume',
      skills: 'My Skills',
    },

    projects: {
      seoTitle: 'Projects | Umidjon',
      seoDescription: 'Explore my portfolio of web development projects',
      title: 'My Projects',
      subtitle: 'Media previews from selected frontend, full-stack and UI/UX concepts.',
      filters: {
        all: 'All',
        frontend: 'Frontend',
        fullstack: 'Full Stack',
        uiux: 'UI/UX',
      },
      items: [
        ['E-Commerce Platform', 'A full-featured e-commerce platform with React, Node.js, and MongoDB.'],
        ['YouTube Clone', 'An interactive web application that allows users to view and control video content.'],
        ['Task Management App', 'Productivity app for managing daily tasks, boards and project status.'],
        ['Weather Dashboard', 'Real-time weather application with data cards and responsive charts.'],
        ['Social Media Dashboard', 'Analytics dashboard concept for campaign and social media management.'],
        ['Mobile Banking App', 'Secure and user-friendly mobile banking interface concept.'],
      ],
    },


    services: {
      seoTitle: 'Services | Umidjon',
      seoDescription: 'Services offered by Umidjon',
      title: 'Services',
      subtitle: 'Design, development and integration support for modern web products.',
      focusLabel: 'Selected Focus',
      focusTitle: 'Clean interfaces with reliable frontend delivery',
      focusText: 'I combine component-based React development, responsive layouts and API integration to turn product ideas into polished web experiences.',
      items: [
        ['Web Development', 'I build fast, responsive and SEO-friendly websites with React, Vite and SCSS.'],
        ['UI/UX Design', 'I shape user flows, visual hierarchy and interactive states with care.'],
        ['Backend Integration', 'I connect frontends to APIs, forms, data flows and third-party services.'],
      ],
    },


    contact: {
      seoTitle: 'Contact | Umidjon',
      seoDescription: 'Contact me for collaborations and projects.',
      tagline: 'GET IN TOUCH',
      titleOne: "Let's build",
      titleTwo: 'something',
      titleAccent: 'epic',
      description: "Have a project or want to collaborate? Write to me through the form below. I'm always open to new ideas.",
      direct: 'DIRECT CHANNEL',
      emailMe: 'EMAIL ME AT',
      remote: 'Remote friendly',
      name: 'Your Name',
      email: 'Email Address',
      message: 'Message',
      messagePlaceholder: 'Your message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Error sending message. Please try again.',
    },

    footer: {
      navigation: 'Navigation',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
      contactTitle: 'Contact',
      backTop: 'Back to top',
    },
  },


  uz: {
    nav: {
      home: 'Bosh sahifa',
      about: 'Men haqimda',
      projects: 'Loyihalar',
      services: 'Xizmatlar',
      contact: 'Aloqa',
      resume: 'Rezyume',
    },
    common: {
      role: 'Frontend dasturchi va UI/UX dizayner',
      email: 'Email',
      location: 'Manzil',
      uzbekistan: "O'zbekiston",
    },
    home: {
      seoTitle: 'Bosh sahifa | Umidjon Portfolio',
      seoDescription: 'Frontend dasturchi va UI/UX dizayner',
      badge: 'Portfolio saytimga xush kelibsiz',
      roles: ['Frontend dasturchi', 'React mutaxassisi', 'Web dizayner'],
      subtitle: 'Frontend dasturchi va UI/UX dizayner',
      viewProjects: "Loyihalarni ko'rish",
      contactMe: "Bog'lanish",
      codeRole: 'Frontend Dev',
    },
    about: {
      seoTitle: 'Men haqimda | Umidjon',
      seoDescription: "Ko'nikmalarim va tajribam haqida",
      title: 'Men haqimda',
      subtitle: "Media, ko'nikmalar va interfeyslarni qanday yaratishim haqida qisqa hikoya.",
      heading: 'Frontend dasturchi va UI/UX dizayner',
      lead: 'Men React va zamonaviy web texnologiyalarga ixtisoslashgan frontend dasturchiman.',
      body: "Chiroyli, responsive va foydalanishga qulay web ilovalar yarataman. React, SCSS va zamonaviy development tool'lar orqali g'oyalarni toza kod va qulay dizaynga aylantiraman.",
      download: 'Rezyumeni yuklab olish',
      skills: "Ko'nikmalarim",
    },
    projects: {
      seoTitle: 'Loyihalar | Umidjon',
      seoDescription: "Web dasturlash bo'yicha portfolio loyihalarim",
      title: 'Loyihalarim',
      subtitle: "Frontend, full-stack va UI/UX konseptlaridan tanlangan media ko'rinishlar.",
      filters: {
        all: 'Barchasi',
        frontend: 'Frontend',
        fullstack: 'Full Stack',
        uiux: 'UI/UX',
      },
      items: [
        ['E-Commerce Platforma', "React, Node.js va MongoDB asosida yaratilgan to'liq e-commerce platforma."],
        ['YouTube Clone', "Video kontentni ko‘rish va boshqarish imkonini beruvchi interaktiv web ilova."],
        ['Task Management Ilova', 'Kundalik vazifalar, boardlar va loyiha holatini boshqarish ilovasi.'],
        ['Weather Dashboard', "Real vaqt ob-havo ma'lumotlari va responsive chartlarga ega dashboard."],
        ['Social Media Dashboard', 'Kampaniya va social media boshqaruvi uchun analytics dashboard konsepti.'],
        ['Mobile Banking App', 'Xavfsiz va qulay mobile banking interfeys konsepti.'],
      ],
    },
    services: {
      seoTitle: 'Xizmatlar | Umidjon',
      seoDescription: 'Umidjon taklif qiladigan xizmatlar',
      title: 'Xizmatlar',
      subtitle: "Zamonaviy web mahsulotlar uchun dizayn, dasturlash va integratsiya yordami.",
      focusLabel: "Asosiy yo'nalish",
      focusTitle: 'Toza interfeyslar va ishonchli frontend yetkazib berish',
      focusText: "React komponentlari, responsive layoutlar va API integratsiyasi orqali mahsulot g'oyalarini puxta web tajribaga aylantiraman.",
      items: [
        ['Veb Dasturlash', 'React, Vite va SCSS yordamida tez, responsive va SEO-friendly web sahifalar yarataman.'],
        ['UI/UX Dizayn', 'Foydalanuvchi oqimi, vizual ierarxiya va interaktiv holatlarni puxta ishlab chiqaman.'],
        ['Backend Integratsiya', "API, forma yuborish, ma'lumotlar oqimi va tashqi servislar bilan frontendni ulayman."],
      ],
    },
    contact: {
      seoTitle: 'Aloqa | Umidjon',
      seoDescription: "Hamkorlik va loyihalar uchun bog'laning.",
      tagline: "BOG'LANISH",
      titleOne: 'Keling, birga',
      titleTwo: 'ajoyib loyiha',
      titleAccent: 'yaratamiz',
      description: "Loyihangiz bormi yoki hamkorlik qilmoqchimisiz? Formani to'ldiring, yangi g'oyalar uchun doim ochiqman.",
      direct: "TO'G'RIDAN-TO'G'RI ALOQA",
      emailMe: 'EMAIL ORQALI',
      remote: 'Masofaviy ishlash mumkin',
      name: 'Ismingiz',
      email: 'Email manzilingiz',
      message: 'Xabar',
      messagePlaceholder: 'Xabaringiz',
      send: 'Xabar yuborish',
      sending: 'Yuborilmoqda...',
      success: 'Xabar muvaffaqiyatli yuborildi!',
      error: "Xabar yuborishda xatolik. Qayta urinib ko'ring.",
    },
    footer: {
      navigation: 'Navigatsiya',
      home: 'Bosh sahifa',
      about: 'Men haqimda',
      projects: 'Loyihalar',
      services: 'Xizmatlar',
      contact: 'Aloqa',
      contactTitle: 'Aloqa',
      backTop: 'Yuqoriga qaytish',
    },
  },
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en')

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
