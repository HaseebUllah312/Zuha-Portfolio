export interface ProjectStats {
  [key: string]: string | number
}

export interface Project {
  title: string
  description: string
  image: string
  longDescription: string
  tags: string[]
  github?: string
  huggingface?: string
  liveDemo?: string
  isPrivate?: boolean
  stats: ProjectStats
}

export const projects: Project[] = [
  {
    title: "Studio3D",
    description: "Interactive 3D configuration and customization platform built with React Three Fiber.",
    image: "/projects/studio3d.png",
    longDescription: "Studio3D is a cutting-edge 3D configuration platform that allows users to interact with and customize 3D models in real-time. Built using React Three Fiber and Three.js, it provides a seamless and immersive experience for high-fidelity 3D rendering in the browser. The platform includes a complex order negotiation system and an admin dashboard for inventory management.",
    tags: ["React Three Fiber", "Three.js", "3D Web", "React", "Node.js"],
    github: "https://github.com/zuha-riaz/studio3d",
    stats: {
      rendering: "Real-time",
      interaction: "360°",
      tech: "R3F"
    }
  },
  {
    title: "Student Study Hub",
    description: "The ultimate academic hub for students, featuring AI-powered study tools, past papers, and professional LMS handling.",
    image: "/projects/Academic Hub.png",
    longDescription: "Student Study Hub is a professional academic platform specifically designed for Virtual University (VU) students. It centralizes essential academic resources including 370+ subjects past papers, short notes, and AI-driven tools like the MCQ Practice engine and Semester Planner. With a 24/7 AI Mentor and professional LMS handling services, it provides a seamless learning experience for modern students.",
    tags: ["Next.js", "AI Integration", "Academic Tools", "PWA", "VU Students"],
    github: "https://github.com/zuha-riaz/student-study-hub",
    stats: {
      subjects: "370+",
      users: "Active",
      support: "24/7"
    }
  },
  {
    title: "WhatsApp Media Assistant",
    description: "Personal media command center to download files, convert stickers, and save social media content instantly.",
    image: "/projects/WhatsApp Bot.png",
    longDescription: "Built with Node.js and the WhatsApp API, this bot serves as an automated digital assistant for students. It acts as a personal media command center enabling users to request academic materials, check semester status, download and convert files and stickers, and receive important updates directly on their mobile devices. The bot is designed for high reliability, instant response times, and seamless resource delivery.",
    tags: ["Node.js", "WhatsApp API", "Automation", "Bot Development", "Server-Side"],
    github: "https://github.com/zuha-riaz/whatsapp-media-assistant",
    stats: {
      platform: "WhatsApp",
      responses: "Instant",
      uptime: "99.9%"
    }
  },
  {
    title: "LMS Pro Dashboard",
    description: "A premium mission control dashboard for managing students, teams, and academic revenue with real-time sync.",
    image: "/projects/LMS Pro Dashboard.png",
    longDescription: "The Elite Edition of LMS Pro is a comprehensive owner dashboard providing a global radar over an academic institution. It features a Client Manager, Grade Predictor, Bulk Tracker, Daily Agenda, and real-time activity performance syncing. Built for scalability and high-level mission control of educational metrics and revenue.",
    tags: ["LMS", "React", "Dashboard", "Real-time Sync", "Management"],
    github: "https://github.com/zuha-riaz/lms-pro-dashboard",
    stats: {
      sync: "Real-time",
      ux: "Premium",
      status: "Active"
    }
  },
  {
    title: "Student Management System",
    description: "A comprehensive student management system for educational institutions to manage student data, courses, and academic records.",
    image: "/projects/Student management system.png",
    longDescription: "A full-stack student management system that allows institutions to efficiently manage student records, course enrollment, grades, and attendance. Built with modern web technologies for scalability and user-friendly interface.",
    tags: ["Student Management", "Full-Stack", "Database", "Admin Panel"],
    github: "https://github.com/zuha-riaz/Student-management-system",
    stats: {
      users: "100+",
      institutions: "5+",
      status: "Active"
    }
  },
  {
    title: "Secure Expense Tracker",
    description: "A secure and encrypted expense tracking application for personal financial management.",
    image: "/projects/Secure Expense Tracker.png",
    longDescription: "A full-featured expense tracker application with security at its core. Users can securely log, categorize, and analyze their expenses. Features include encryption, data backup, detailed reports, and budget tracking with an intuitive dashboard.",
    tags: ["Expense Tracking", "Security", "Encryption", "Financial App"],
    github: "https://github.com/zuha-riaz/secure_expense_tracker",
    stats: {
      security: "Bank-grade",
      transactions: "Unlimited",
      reports: "Advanced"
    }
  },
  {
    title: "Professional Portfolio",
    description: "A professional personal portfolio showcasing Software Engineering, Cyber Security, and CCTV Specialist expertise.",
    image: "/projects/Zuha Portfolio.png",
    longDescription: "A modern, high-end portfolio portfolio website built with Next.js and Tailwind CSS. It highlights a unique blend of Software Engineering, advanced Networking, and professional CCTV installation services, all while maintaining a strong focus on Cyber Security principles.",
    tags: ["Next.js", "Cyber Security", "CCTV Specialist", "Professional Networking"],
    github: "https://github.com/zuha-riaz/personal-portfolio",
    stats: {
      projects: "10+",
      security: "Hardened",
      status: "Live"
    }
  }
]