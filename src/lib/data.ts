// ============================================================
// Portfolio Data - All constants and data for the portfolio
// ============================================================

// ------ Types ------

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: ProjectCategory;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export type ProjectCategory = "Web Dev" | "UI/UX" | "Research" | "Business";

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack: string[];
  link?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string; // lucide icon name or custom
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

// ------ Personal Info ------

export const personalInfo = {
  name: "Winanda Hartadi",
  greeting: "Hi! I'm Winanda Hartadi",
  tagline: "Software Engineer | Fullstack Developer",
  bio: "Passionate about creating innovative, user-friendly applications that bridge the gap between technology and everyday life.",
  email: "winandahartadi23@gmail.com",
  phone: "+6287775519268",
  cvUrl: "/cv/winanda-hartadi-cv.pdf",
};

// ------ Skills (for marquee) ------

export const skills: Skill[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Vue.js", icon: "vuejs" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Go", icon: "go" },
  { name: "Laravel", icon: "laravel" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MinIO", icon: "minio" },
  { name: "HTML/CSS", icon: "html" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "C++", icon: "cpp" },
  { name: "Java", icon: "java" },
  { name: "Figma", icon: "figma" },
];

// ------ Education ------

export const education: Education[] = [
  {
    id: "binus",
    degree: "Bachelor of Computer Science",
    institution: "BINUS University",
    period: "2022 - Present",
    description:
      "Currently in my last semester pursuing a Bachelor's degree in Computer Science. Coursework focused on software development, Mobile/Web Programming, and Machine Learning. Also developing a keen interest in web3 and blockchain technology.",
  },
  {
    id: "sma-atisa",
    degree: "Science Major (IPA)",
    institution: "SMA Atisa Dipamkara",
    period: "2019 - 2022",
    description:
      "Completed high school with a focus on natural sciences, building a strong analytical and logical foundation for computer science.",
  },
  {
    id: "smp-bodhisatta",
    degree: "Junior High School",
    institution: "SMP Bodhisatta",
    period: "2016 - 2019",
    description:
      "Graduated with the highest score in the National Test. Actively involved in student organization, serving as the Vice Leader of OSIS (Student Council).",
  },
];

// ------ Experience ------

export const experiences: Experience[] = [
  {
    id: "temas",
    role: "Full Stack Software Developer Intern",
    company: "PT Temas Tbk",
    location: "Jakarta, Indonesia",
    period: "Feb 2025 - Feb 2026",
    description: [
      "Worked in a dynamic Agile environment within the Digital Innovation and Transformation division, participating in sprint planning, daily standups, and retrospectives.",
      "Built and architected the Warehouse Management System (WMS) for streamlined inventory tracking and warehouse operations.",
      "Developed an Internal Ticketing System for issue tracking and task management across departments.",
      "Contributed to Temas Training Hub (TTHub), a customer-facing and centralized platform for team collaboration and resource management.",
      "Designed and implemented RESTful APIs using Go (Fiber) for high-performance backend systems.",
      "Built interactive, responsive front-end interfaces using Vue.js (Quasar) and component-based architecture.",
      "Managed and optimized PostgreSQL databases, translating complex business requirements into robust solutions.",
    ],
    techStack: [
      "Go (Fiber)",
      "Vue.js (Quasar)",
      "PostgreSQL",
      "Agile/Scrum",
      "REST APIs",
      "Git",
    ],
  },
  {
    id: "vihara-dhamma-ratna",
    role: "Public Relations & Event Organizer",
    company: "Nobel Vihara Dhamma Ratna (VDR Youth)",
    location: "Tangerang, Indonesia",
    period: "Present",
    description: [
      "Manage public relations and communication strategies for the organization.",
      "Spearhead event organizing and material preparation, including acting as the head of the committee for the VDR Youth 11th-anniversary talkshow, 'i11UMINATE'.",
    ],
    techStack: [
      "Public Relations",
      "Event Management",
      "Team Leadership",
      "Communication",
    ],
  },
  {
    id: "teach-for-indonesia",
    role: "Volunteer - Save The Ocean",
    company: "Teach For Indonesia, BINUS University",
    location: "Indonesia",
    period: "2024",
    description: [
      "Participated in the 'Save The Ocean' coastal cleanup initiative focused on creating a positive social and environmental impact.",
      "Collaborated with a team to successfully accumulate and properly dispose of over 150+ kilograms of garbage from Indonesian coasts.",
    ],
    techStack: [
      "Community Service",
      "Teamwork",
      "Environmental Sustainability",
    ],
  },
  {
    id: "himti-binus",
    role: "Active Member",
    company: "HIMTI BINUS University",
    location: "Jakarta, Indonesia",
    period: "Nov 2022 - Jan 2024",
    description: [
      "Actively participated in the Computer Science Student Association (HIMTI) programs and initiatives.",
      "Collaborated with peers to support technology-focused events and community building within the university.",
    ],
    techStack: ["Organization", "Collaboration", "Networking"],
  },
  {
    id: "jagad-jaya",
    role: "Sales Promotion (PRJ Event)",
    company: "PT. Jagad Jaya Luggassindo",
    location: "Jakarta, Indonesia",
    period: "Jun 2022 - Jul 2022",
    description: [
      "Represented the company during the fast-paced Jakarta Fair (PRJ) sales event.",
      "Achieved the highest selling record in the Home and Appliances Category through effective product promotion and customer engagement.",
    ],
    techStack: ["Direct Sales", "Customer Communication", "Marketing"],
  },
  {
    id: "akukatsoe",
    role: "Co-Founder",
    company: "AkuKatsoe",
    location: "Tangerang, Indonesia",
    period: "2021 - Present",
    description: [
      "Co-founded and managed a fast-growing Japanese food (Katsu) culinary business.",
      "Successfully served around 600 Katsu Boxes, with 70% of orders catering to large parties and events.",
      "Handled product development, marketing (IG: @akukatsoe), and daily business operations.",
    ],
    techStack: [
      "Entrepreneurship",
      "Business Management",
      "Marketing",
      "F&B Operations",
    ],
  },
];

// ------ Projects ------

export const projects: Project[] = [
  {
    id: "temas-training-hub",
    title: "Temas Training Hub (TTHub)",
    shortDescription:
      "A centralized training platform for maritime logistics personnel featuring complex schedule management.",
    longDescription:
      "Temas Training Hub is a web-based platform designed to digitalize and streamline the training registration process for maritime logistics partners. The system includes a comprehensive Admin Group Registration module and an automated notification system for tracking pending payments. Key technical implementations include a prerequisite document upload system with persistent state filtering and high-fidelity schedule visualization through interactive monthly calendars and card-format layouts.",
    category: "Web Dev",
    techStack: [
      "Go (Fiber)",
      "Vue.js (Quasar)",
      "PostgreSQL",
      "REST API",
      "State Management",
    ],
    image: "/images/tthub.png",
  },
  {
    id: "times-service-desk",
    title: "TIMES Service Desk",
    shortDescription:
      "An enterprise-grade internal ticketing system for standardized issue tracking and workflow management.",
    longDescription:
      "TIMES Service Desk is a digital platform built to standardize and automate reporting and problem-handling workflows across multiple divisions. The system features a dynamic workflow engine that manages ticket statuses such as take, postpone, and re-open. It includes a detailed History Activity module for audit trails, a 'My Request' self-service portal for staff, and company-specific category filtering to ensure accurate data routing.",
    category: "Web Dev",
    techStack: [
      "Go (Fiber)",
      "Vue.js (Quasar)",
      "PostgreSQL",
      "Workflow Engine",
      "Audit Trail",
    ],
    image: "/images/times-service-desk.png",
  },
  {
    id: "temas-wms",
    title: "Warehouse Management System (WMS)",
    shortDescription:
      "A robust logistics management platform focused on high-integrity inventory tracking and product rules.",
    longDescription:
      "Developed to enhance operational efficiency in warehouse management, this system focuses on streamlining inventory tracking and enforcing business rules. Technical contributions included implementing complex data validation for product rules, managing brand and commodity tagging systems, and optimizing search and filter functionalities across various warehouse modules. The project emphasized database integrity and referential data consistency.",
    category: "Web Dev",
    techStack: [
      "Go (Fiber)",
      "Vue.js (Quasar)",
      "PostgreSQL",
      "SQL Optimization",
      "Data Validation",
    ],
    image: "/images/temas-wms.png",
  },
  {
    id: "pt-winnings",
    title: "PT Winnings Harta Di Nusantara",
    shortDescription:
      "A comprehensive corporate web platform built with Laravel for enterprise resource management.",
    longDescription:
      "PT Winnings Harta Di Nusantara is a full-featured corporate website developed using the Laravel framework. The platform provides enterprise-level resource management, enabling streamlined business operations, client management, and internal workflows. Built with a focus on scalability, security, and clean UX design principles.",
    category: "Web Dev",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
    image: "/images/pt-winnings.png",
  },
  {
    id: "audio-video-recording",
    title: "Audio & Video Recording System",
    shortDescription:
      "A web-based recording system leveraging Laravel and FFMPEG for media capture and processing.",
    longDescription:
      "An advanced Audio & Video Recording System built with Laravel and integrated with FFMPEG for server-side media processing. The platform allows users to record, upload, and manage audio/video content directly from the browser. Features include real-time recording, format conversion, media compression, and a clean dashboard for managing all recorded media files.",
    category: "Web Dev",
    techStack: ["Laravel", "PHP", "FFMPEG", "JavaScript", "MySQL"],
    image: "/images/audio-video-recording.png",
  },
  {
    id: "kopi-lima",
    title: "Kopi Lima",
    shortDescription:
      "A modern coffee shop web application with online ordering capabilities built with Laravel.",
    longDescription:
      "Kopi Lima is a beautifully designed coffee shop web application built with Laravel. The platform features a modern UI for browsing the coffee menu, placing orders online, and managing the shop's inventory. The system includes an admin dashboard for order management, product catalog CRUD operations, and user authentication with role-based access control.",
    category: "Web Dev",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "Alpine.js"],
    image: "/images/kopi-lima.png",
  },
  {
    id: "the-bootjack",
    title: "The BootJack",
    shortDescription:
      "A responsive web project showcasing Bootstrap and vanilla JavaScript expertise.",
    longDescription:
      "The BootJack is a responsive, visually appealing web project that demonstrates proficiency in Bootstrap framework and vanilla JavaScript. The project features responsive grid layouts, interactive UI components, smooth animations, and modern design patterns — all achieved without heavy frameworks, focusing on performance and accessibility.",
    category: "Web Dev",
    techStack: ["Bootstrap", "JavaScript", "HTML5", "CSS3"],
    image: "/images/the-bootjack.png",
  },
  {
    id: "the-fonbuk",
    title: "The Fonbuk",
    shortDescription:
      "A clean, responsive web application built with vanilla HTML/CSS and Bootstrap components.",
    longDescription:
      "The Fonbuk is a web application built using vanilla HTML, CSS, and Bootstrap. It showcases a clean and functional phone directory application with search, filter, and CRUD functionalities. The project emphasizes responsive design principles and clean code architecture using only fundamental web technologies.",
    category: "Web Dev",
    techStack: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    image: "/images/the-fonbuk.png",
  },
  {
    id: "f1-fan-app",
    title: "F1 Fan App",
    shortDescription:
      "A UI/UX case study for an iOS mobile app designed for Formula 1 enthusiasts.",
    longDescription:
      "The F1 Fan App is a comprehensive UI/UX design case study for an iOS mobile application tailored for Formula 1 fans. The project includes user research, persona creation, wireframing, prototyping, and high-fidelity mockups designed in Figma. Key features include live race tracking, driver statistics, circuit information, and community features — all designed with Apple's Human Interface Guidelines in mind.",
    category: "UI/UX",
    techStack: ["Figma", "UI/UX Design", "iOS Design", "Prototyping"],
    image: "/images/f1-fan-app.png",
  },
  {
    id: "traffic-control-ai",
    title: "Traffic Control using AI",
    shortDescription:
      "A research project exploring AI-driven traffic management with Fuzzy Logic and EfficientNetB7.",
    longDescription:
      "An academic research project focused on intelligent traffic control using artificial intelligence. The system employs Fuzzy Logic for adaptive signal timing and EfficientNetB7 for real-time vehicle detection and classification. The research demonstrates significant improvements in traffic flow optimization, reducing congestion and wait times through AI-driven decision making at intersections.",
    category: "Research",
    techStack: [
      "Python",
      "TensorFlow",
      "Fuzzy Logic",
      "EfficientNetB7",
      "OpenCV",
    ],
    image: "/images/traffic-control-ai.png",
  },
  {
    id: "akukatsoe",
    title: "AkuKatsoe",
    shortDescription:
      "An F&B entrepreneurship venture blending business strategy with digital marketing.",
    longDescription:
      "AkuKatsoe is an entrepreneurial venture in the Food & Beverage industry. The project involved full business development from concept ideation, market research, branding, and digital marketing strategy to operational execution. The experience provided hands-on knowledge in business planning, supply chain management, customer acquisition, social media marketing, and financial management in a real-world business context.",
    category: "Business",
    techStack: [
      "Business Planning",
      "Digital Marketing",
      "Branding",
      "F&B Operations",
    ],
    image: "/images/akukatsoe.png",
  },
];

// ------ Social Links ------

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    url: "mailto:winandahartadi23@gmail.com",
    icon: "Mail",
    label: "winandahartadi23@gmail.com",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/6287775519268",
    icon: "MessageCircle",
    label: "+6287775519268",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/winandahartadi",
    icon: "Linkedin",
    label: "linkedin.com/in/winandahartadi",
  },
  {
    name: "GitHub",
    url: "https://github.com/fallenguava",
    icon: "Github",
    label: "github.com/fallenguava",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/im.nndhrtd_",
    icon: "Instagram",
    label: "@im.nndhrtd_",
  },
];

// ------ Navigation ------

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// ------ Project Categories for Filter ------

export const projectCategories = [
  "All",
  "Web Dev",
  "UI/UX",
  "Research",
  "Business",
] as const;

export type ProjectFilterCategory = (typeof projectCategories)[number];
