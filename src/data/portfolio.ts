// Authentic portfolio data for Subas Nepali - BICTE Student & Aspiring Web Developer

export interface ProjectConcept {
  id: string;
  title: string;
  tagline: string;
  category: "Frontend" | "Full-Stack" | "Academic";
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  keyFeatures: string[];
  conceptExplored: string;
}

export interface SkillCategory {
  group: string;
  statusBadge: string;
  description: string;
  items: { name: string; stage: "Practicing Daily" | "Core Foundation" | "Coursework" }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  learnings: string[];
  toolsUsed: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  coursework: string[];
  description: string;
}

export const profile = {
  name: "Subas Nepali",
  role: "BICTE Student & Aspiring Web Developer",
  status: "Cybersecurity Intern · 5th Semester BICTE",
  tagline:
    "5th-semester BICTE student at Tribhuvan University & Cybersecurity Intern. Building modern web applications with Next.js, React, and TypeScript.",
  location: "Damauli, Tanahun, Nepal",
  email: "nepalisubas18@gmail.com",
  github: "https://github.com/nepalisubasworks",
  linkedin: "https://www.linkedin.com/in/subas-nepali-494577321/",

  bio: [
    "I am an undergraduate student in my 5th semester pursuing a Bachelor of Information and Communication Technology in Education (BICTE) at Aadikavi Bhanubhakta Campus, affiliated with Tribhuvan University.",
    "During my 3-month cybersecurity internship at Inpro Academy, my supervisor noticed my keen interest in how web applications are built and encouraged me to direct my energy toward software and web development.",
    "I am committed to mastering modern web development from the ground up — building clean user interfaces, structuring maintainable code in Next.js, and developing a solid foundation in backend databases."
  ],

  journeySteps: [
    {
      title: "1. Academic Foundations",
      subtitle: "Tribhuvan University (5th Sem)",
      description: "Studying core CS subjects including DBMS, Data Structures, Computer Networks, and Software Engineering."
    },
    {
      title: "2. Cybersecurity Internship",
      subtitle: "Inpro Academy (3 Months)",
      description: "Hands-on experience with Linux environments, network fundamentals, and application security principles."
    },
    {
      title: "3. Supervisor's Guidance",
      subtitle: "Direction toward Development",
      description: "Encouraged by my supervisor to explore full-stack development and build tangible software solutions."
    },
    {
      title: "4. Web Development with Next.js",
      subtitle: "Hands-on Practice & Projects",
      description: "Creating responsive web apps with Next.js, React, Tailwind CSS, and relational databases."
    }
  ],

  quickFacts: [
    { label: "University", value: "Tribhuvan University" },
    { label: "Current Semester", value: "5th Semester BICTE" },
    { label: "Internship", value: "Cybersecurity Intern" },
    { label: "Tech Focus", value: "Next.js & React" }
  ]
};

export const skills: SkillCategory[] = [
  {
    group: "Frontend Development",
    statusBadge: "Active Daily Practice",
    description: "Building responsive, modern, and accessible user interfaces",
    items: [
      { name: "Next.js (App Router)", stage: "Practicing Daily" },
      { name: "React.js (Components & Hooks)", stage: "Practicing Daily" },
      { name: "TypeScript Basics", stage: "Practicing Daily" },
      { name: "JavaScript (ES6+)", stage: "Practicing Daily" },
      { name: "Tailwind CSS", stage: "Practicing Daily" },
      { name: "HTML5 & Semantic Markup", stage: "Core Foundation" }
    ]
  },
  {
    group: "Backend & Databases",
    statusBadge: "Learning & Academic",
    description: "Database design, schema modeling, and API integration",
    items: [
      { name: "SQL & Relational Databases", stage: "Core Foundation" },
      { name: "MySQL Basics", stage: "Coursework" },
      { name: "Prisma ORM", stage: "Practicing Daily" },
      { name: "RESTful API Integration", stage: "Practicing Daily" },
      { name: "PHP & Web Form Handling", stage: "Coursework" },
      { name: "SQLite", stage: "Core Foundation" }
    ]
  },
  {
    group: "Systems & Security",
    statusBadge: "Internship Training",
    description: "Practical operating system and security foundations",
    items: [
      { name: "Linux Terminal & Shell", stage: "Core Foundation" },
      { name: "Kali Linux Navigation", stage: "Core Foundation" },
      { name: "Virtual Machines (VMware)", stage: "Core Foundation" },
      { name: "Basic Networking (IP, Ports, DNS)", stage: "Coursework" },
      { name: "Web Security Fundamentals", stage: "Core Foundation" }
    ]
  },
  {
    group: "Developer Tools",
    statusBadge: "Daily Workflow",
    description: "Tools and version control used in daily programming",
    items: [
      { name: "Git & GitHub", stage: "Practicing Daily" },
      { name: "VS Code Editor", stage: "Practicing Daily" },
      { name: "Vercel Deployment", stage: "Practicing Daily" },
      { name: "Browser DevTools", stage: "Practicing Daily" },
      { name: "Postman / API Testing", stage: "Core Foundation" }
    ]
  }
];

export const projects: ProjectConcept[] = [
  {
    id: "khalti-clone",
    title: "Khalti Digital Wallet UI",
    tagline: "A responsive recreation of Nepal's leading fintech digital wallet interface",
    category: "Frontend",
    description:
      "A frontend practice project recreating the interface of Khalti, Nepal's prominent fintech app. Focused on mastering complex Tailwind CSS layouts, interactive wallet state toggles, and mobile-first responsiveness.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    liveUrl: "https://my-nextjs-khalti.vercel.app/",
    githubUrl: "https://github.com/nepalisubasworks",
    conceptExplored:
      "Designing responsive fintech layouts, structured component breakdown, and quick UI state interactions.",
    keyFeatures: [
      "Modular and reusable React component architecture",
      "Mobile-first responsive design adapted for desktop and mobile",
      "Interactive balance and service toggle state",
      "Deployed and hosted live on Vercel"
    ]
  },
  {
    id: "secure-asset-tracker",
    title: "IT Asset Management Prototype",
    tagline: "A practice full-stack prototype for tracking organizational devices and equipment",
    category: "Full-Stack",
    description:
      "A prototype built to explore how a full-stack web application operates end-to-end: structuring database schemas, managing device inventory, and handling role-based views.",
    tech: ["Next.js", "React", "Prisma ORM", "SQLite", "Tailwind CSS"],
    githubUrl: "https://github.com/nepalisubasworks/secure-asset-tracker",
    liveUrl: "https://github.com/nepalisubasworks/secure-asset-tracker",
    conceptExplored:
      "Connecting frontend input forms to backend database tables with Prisma ORM, understanding relational models and CRUD operations.",
    keyFeatures: [
      "Complete CRUD (Create, Read, Update, Delete) data flow",
      "Structured Prisma schema models and migrations",
      "Role-aware UI views for hardware inventory",
      "Clean server-side handling and API route structuring"
    ]
  },
  {
    id: "student-registration-system",
    title: "Student Record Management",
    tagline: "Academic coursework project practicing relational database design and forms",
    category: "Academic",
    description:
      "An academic project developed as part of university coursework to understand relational database fundamentals, connecting forms to a MySQL database with structured SQL queries.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/nepalisubasworks",
    conceptExplored:
      "Relational database design, table relationships (students, courses, semesters), foreign keys, and SQL queries.",
    keyFeatures: [
      "Multi-table relational schema with primary and foreign keys",
      "SQL operations including SELECT, INSERT, UPDATE, and JOINs",
      "Form validation and dynamic table rendering",
      "Local server deployment with Apache and MySQL"
    ]
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Cybersecurity Intern",
    company: "Inpro Academy",
    location: "Damauli, Tanahun, Nepal",
    period: "Aug 2026 – Present (3 Months)",
    type: "Internship",
    description:
      "A 3-month foundational internship covering practical computer systems, Linux environments, network fundamentals, and application security.",
    learnings: [
      "Operating comfortably in Linux terminal environments and managing command-line tasks",
      "Configuring virtual machine labs with VMware and Kali Linux",
      "Studying web authentication mechanisms and common security vulnerabilities",
      "Received mentorship from supervisor encouraging transition toward full-stack web engineering"
    ],
    toolsUsed: ["Linux Terminal", "Kali Linux", "VMware", "Networking Fundamentals", "Security Practices"]
  }
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Information & Communication Technology in Education (BICTE)",
    institution: "Aadikavi Bhanubhakta Campus, Tribhuvan University",
    location: "Damauli, Tanahun, Nepal",
    period: "2023 – Present (Expected 2027)",
    status: "Enrolled in 5th Semester",
    coursework: [
      "Database Management Systems (DBMS)",
      "Data Structures & Algorithms Basics",
      "Web Technologies (HTML, CSS, JS, PHP)",
      "Object-Oriented Programming (Java / C++)",
      "Computer Networks",
      "Software Engineering Fundamentals"
    ],
    description:
      "Four-year undergraduate degree combining fundamental computer science coursework with practical software engineering applications."
  }
];
