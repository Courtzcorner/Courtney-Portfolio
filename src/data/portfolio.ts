// ============================================================
// PORTFOLIO DATA FILE
// Edit this file to update all content across the portfolio.
// ============================================================

export const resumeHref = '/assets/resume/Courtney-Stokes-Resume.pdf'

export const personal = {
  name: 'Courtney Stokes',
  headline: 'Information Technology student at Florida State University',
  subheadline:
    'Aspiring Technical Product Manager focused on fintech, data products, AI-enabled tools, and student-centered technology.',
  intro:
    'I am a first year junior at Florida State University studying Information Technology. I am interested in technical product management because I enjoy connecting user needs, business goals, data, and engineering decisions.',
  introBullets: [
    "I'm an Information Technology major at FSU 🏫",
    'Data Analyst Intern 📊',
    'Content Creator 🎬',
    'Aspiring Product Manager 💻',
  ],
  badges: [
    'Product Management',
    'Web Design',
    'Data Dashboards',
    'Fintech',
    'AI Tools',
    'Student Leadership',
  ],
  email: 'courtneystokesj@gmail.com',
  linkedin: 'https://www.linkedin.com/in/courtneyjstokes/',
  github: 'https://github.com/Courtzcorner',
  youtube: 'https://www.youtube.com/@courtzcorner',
}

// ── Recent Posts ──────────────────────────────────────────
export const youtubeChannelUrl = 'https://www.youtube.com/@courtzcorner'

export interface RecentPost {
  title: string
  date: string
  href: string
}

export const recentPosts: RecentPost[] = [
  {
    title: 'Is Software Engineering Still Worth It?',
    date: 'Jun 14, 2026',
    href: 'https://www.youtube.com/watch?v=aMBEGLtKXE0',
  },
  {
    title: 'Claude 101 In 16 Minutes',
    date: 'Jun 7, 2026',
    href: 'https://www.youtube.com/watch?v=qL5gPtxj330&t',
  },
  {
    title: 'Tech Portfolio Tips That Will Get You Hired',
    date: 'May 31, 2026',
    href: 'https://www.youtube.com/watch?v=tzDOF7P_VCk',
  },
  {
    title: 'How To Get Hired In Tech With No Experience',
    date: 'May 24, 2026',
    href: 'https://www.youtube.com/watch?v=cxuF0X034wc',
  },
  {
    title: 'My Blueprint For Getting Hired In Tech',
    date: 'May 17, 2026',
    href: 'https://www.youtube.com/watch?v=UV3fkfbQJas',
  },
]

// ── Campus Involvement ───────────────────────────────────
export interface Involvement {
  org: string
  role: string
  description: string
  icon: string
}

export const involvements: Involvement[] = [
  {
    org: 'Women in IT/ICT Sharing Experiences (WISE)',
    role: 'Incoming President',
    description:
      'Leading initiatives that support women and underrepresented students in technology through professional development, community building, and technical learning opportunities.',
    icon: 'Users',
  },
  {
    org: 'STARS Computing Corps',
    role: 'Summer Intern',
    description:
      'Supporting national K–12 computing outreach and contributing to alumni data projects that improve visibility into career paths and regional impact.',
    icon: 'Star',
  },
  {
    org: 'Association of IT Professionals',
    role: 'Member',
    description:
      'Engaging with peers and industry-focused programming to strengthen my understanding of information technology careers, networking, and professional skills.',
    icon: 'Briefcase',
  },
  {
    org: 'Women in Computer Science',
    role: 'Member',
    description:
      'Participating in a community focused on mentorship, technical growth, and representation in computing.',
    icon: 'Code2',
  },
  {
    org: 'National Society of Black Engineers',
    role: 'Member',
    description:
      'Engaging with a national organization dedicated to the academic and professional success of Black engineers and technologists through community, resources, and professional development.',
    icon: 'Users',
  },
  {
    org: 'ColorStack',
    role: 'Member',
    description:
      'Part of a community focused on increasing the number of Black and Latinx students who start and succeed in computing careers through peer support, resources, and industry connections.',
    icon: 'Star',
  },
]

// ── Projects ─────────────────────────────────────────────
export interface Project {
  name: string
  status: string
  productAngle: string
  description: string
  details?: string
  tags: string[]
  buttonText?: string
  buttonHref?: string
  download?: boolean
  isClassified?: boolean
  classifiedNote?: string
}

export const projects: Project[] = [
  {
    name: 'AI Alumni CRM and Analytics Dashboard',
    status: 'Internship Project',
    productAngle: 'Data Analytics · AI Automation · CRM · Dashboard',
    description:
      'Built an AI-powered web scraping and enrichment agent that transformed alumni records into a searchable CRM and dashboard for analyzing career outcomes, locations, industries, and company trends.',
    tags: [
      'AI Automation', 'Web Scraping', 'Python', 'Data Enrichment', 'CRM',
      'Dashboard Design', 'Power BI', 'Data Visualization', 'Workflow Automation',
    ],
    isClassified: true,
    classifiedNote: 'Details limited due to internal data and privacy considerations.',
  },
  {
    name: 'FSU ITS 3D Printing Request Site',
    status: 'Internship Project',
    productAngle: 'Improving how faculty and staff submit 3D printing requests',
    description:
      'Designed and supported a web experience for FSU ITS faculty and staff to request 3D printing services, access resources, and understand available printing options. The project involved stakeholder needs, Drupal content updates, accessibility considerations, and planning for request intake through Smartsheet.',
    tags: ['Drupal', 'HTML', 'CSS', 'JavaScript', 'Accessibility', 'Stakeholder Needs'],
    buttonText: 'View Site Wireframe',
    buttonHref: '/assets/projects/fsu-3d-printing.png',
    download: true,
  },
  {
    name: 'Hottake',
    status: 'Full Stack Mobile App',
    productAngle: 'Building social features through a mobile-first experience',
    description:
      'Contributed as a part-time front end developer on Hottake, a React Native social app. Worked on implementing and improving UI features, debugging across iOS, and collaborating with a team through Git and GitHub. The project gave me hands-on experience with real product workflows, iterative development, and building user-facing features in a live codebase with active users.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'GitHub', 'Mobile Product', 'UI Development', 'Team Collaboration'],
    buttonText: 'View on GitHub',
    buttonHref: 'https://github.com/samirkanbar/hottake-frontend',
  },
  {
    name: 'Thrive',
    status: 'MVP In Progress',
    productAngle: 'Duolingo-style financial literacy for students and early career adults',
    description:
      'Designing and building a gamified financial literacy app inspired by Duolingo. Thrive teaches investing, credit, budgeting, compound interest, and real money decisions through bite-sized daily lessons, simulated practice, and streak-based progress. The goal is to turn financial knowledge into action for students and early career adults who have never had a structured way to learn money skills.',
    tags: ['React Native', 'Firebase', 'Product Strategy', 'Fintech', 'Learning Design', 'Gamification', 'UX Design'],
    buttonText: 'Download PRD',
    buttonHref: '/assets/prds/Thrive_Financial_Literacy_App_PRD.pdf',
    download: true,
  },
  {
    name: 'SprintLink',
    status: 'MVP In Progress',
    productAngle: 'Connecting college students with businesses for micro-internships',
    description:
      'Founded and developed SprintLink, building responsive web and mobile solutions while managing the product lifecycle from concept to deployment. Focused on clean UI design, accessibility, performance, and student-centered workflows.',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Product Strategy', 'UI Design'],
    buttonText: 'Download PRD',
    buttonHref: '/assets/prds/SprintLink_Micro_Internship_Marketplace_PRD.pdf',
    download: true,
  },
]

// ── Experience Timeline ───────────────────────────────────
export interface TimelineItem {
  year: string
  role: string
  organization: string
  type: string
  description: string
  skills: string[]
  color: string
  textColor: string
}

export const timeline: TimelineItem[] = [
  {
    year: '2026 – Present',
    role: 'Data Analyst Intern',
    organization: 'STARS Computing Core',
    type: 'Data Analytics',
    description:
      'Managed data analytics work using Power BI to visualize workforce trends and alumni outcomes. Built an AI-powered alumni data enrichment workflow using LLMs and Python automation to speed up research across a large alumni dataset.',
    skills: ['Power BI', 'Python', 'LLMs', 'Data Enrichment', 'Data Visualization', 'Alumni Analytics'],
    color: '#FDFFB6',
    textColor: '#7A6F00',
  },
  {
    year: '2026 – Present',
    role: 'Ophthalmic Technician',
    organization: 'Clinical Experience',
    type: 'Healthcare & Patient Support',
    description:
      'Perform OCT and visual field scans in a clinical environment while developing precision, communication, attention to detail, and patient-centered problem solving skills.',
    skills: ['Patient Communication', 'Clinical Workflows', 'OCT Scans', 'Visual Field Testing', 'Detail Orientation'],
    color: '#FFC8DD',
    textColor: '#A0436A',
  },
  {
    year: '2026',
    role: 'Emerging Technology Web Design Intern',
    organization: 'Florida State University IT Services',
    type: 'Web Design & Emerging Technology',
    description:
      'Collaborated with IT and university stakeholders to evaluate new technologies and translate institutional needs into digital solutions. Managed website content through front-end development and supported a faculty request portal with interactive 3D model visualization for 3D printing services.',
    skills: ['Drupal', 'HTML', 'CSS', 'JavaScript', 'Accessibility', 'SiteImprove', '3D Printing Workflows'],
    color: '#FFD6A5',
    textColor: '#9A5C1A',
  },
  {
    year: '2025 – Present',
    role: 'Lead Developer',
    organization: 'SprintLink',
    type: 'Product & Software Development',
    description:
      'Founded and developed SprintLink, building responsive web and mobile solutions while managing the product lifecycle from concept to deployment. Focused on clean UI design, accessibility, performance, and student-centered workflows.',
    skills: ['React Native', 'TypeScript', 'Firebase', 'Product Strategy', 'UI Design', 'Accessibility'],
    color: '#A2D2FF',
    textColor: '#1D5F96',
  },
  {
    year: '2025 – Present',
    role: 'Front End Developer',
    organization: 'Hottake',
    type: 'Mobile Development',
    description:
      'Collaborated with a team of developers to implement and improve front-end features using React Native and Expo. Assisted with debugging, UI testing, and iterative design improvements to improve performance and usability.',
    skills: ['React Native', 'Expo', 'TypeScript', 'UI Testing', 'GitHub', 'Mobile Development'],
    color: '#FFD6A5',
    textColor: '#9A5C1A',
  },
  {
    year: '2024 – 2025',
    role: 'Project Manager Intern',
    organization: 'Florida State University IT Services',
    type: 'Project Management',
    description:
      'Worked on a team managing projects across FSU Information Technology Services. Specialized in Smartsheet for project management, report forms, and project timeline dashboards while coordinating with technical and non-technical stakeholders.',
    skills: ['Project Management', 'Smartsheet', 'Stakeholder Communication', 'Dashboards', 'Documentation'],
    color: '#FFC8DD',
    textColor: '#A0436A',
  },
  {
    year: '2023',
    role: 'Web Development Intern',
    organization: 'Leon County Management Information Systems',
    type: 'Web Development',
    description:
      'Worked on the MIS team using DNN and SiteImprove to update the Leon County website. Focused on content management, HTML, CSS, accessibility checks, and removing dead links from webpages.',
    skills: ['HTML', 'CSS', 'DNN', 'SiteImprove', 'Content Management', 'Web Accessibility'],
    color: '#FDFFB6',
    textColor: '#7A6F00',
  },
]

// ── PRDs ─────────────────────────────────────────────────
export interface PRDItem {
  title: string
  context: string
  description: string
  problem: string
  metrics: string
  downloadHref: string
}

export const prds: PRDItem[] = [
  {
    title: 'CVS Health Medication Tracker',
    context: 'Digital Pharmacy & Adherence',
    description:
      'A unified daily dose log and adherence hub concept for the CVS Health app. The PRD focuses on helping patients and caregivers track whether medications were actually taken, not just reminded.',
    problem:
      'Patients managing multiple medications need a simple way to confirm taken, skipped, or pending doses while caregivers need consent-based visibility.',
    metrics:
      'Daily dose logging rate, measured adherence lift, on-time refill rate, caregiver linkage adoption, 30-day feature retention.',
    downloadHref: '/assets/prds/CVS_Health_Medication_Tracker_PRD.pdf',
  },
  {
    title: 'Capital One Money Milestones',
    context: 'Consumer Banking & Financial Wellness',
    description:
      'A financial confidence layer for young adults ages 18 to 24. The PRD explores gamified money milestones, variable income budgeting, beginner credit guidance, and savings nudges.',
    problem:
      'Young adults entering financial independence often face irregular income, financial anxiety, and limited guidance inside traditional banking apps.',
    metrics:
      'Milestones completed, 90-day retention, AutoSave adoption, financial confidence lift, cross-product adoption.',
    downloadHref: '/assets/prds/Capital_One_Money_Milestones_PRD.pdf',
  },
  {
    title: 'Duolingo Family Learning Dashboard',
    context: 'Subscriptions & Family',
    description:
      'A shared learning dashboard concept for Duolingo Super Family plan owners. The PRD explores household learning visibility, shared goals, member activation, and privacy-respecting encouragement.',
    problem:
      'Family plan owners pay for multiple members but have limited visibility into whether the plan is being used or whether members are staying engaged.',
    metrics:
      'Member 7-day activation rate, Family plan renewal rate, weekly active members per family, shared goal adoption, dashboard open rate.',
    downloadHref: '/assets/prds/Duolingo_Family_Learning_Dashboard_PRD.pdf',
  },
  {
    title: 'Thrive Financial Literacy App',
    context: 'Zero-to-One Consumer Fintech Education',
    description:
      'A gamified financial literacy app concept inspired by Duolingo. The PRD focuses on bite-sized money lessons, streaks, rewards, and a learn-then-do action loop.',
    problem:
      'Young people want to learn money skills but often rely on unstructured, unreliable, or boring resources that do not turn knowledge into action.',
    metrics:
      'Day 7 retention, lessons completed weekly, action step completion rate, confidence lift, monthly active users.',
    downloadHref: '/assets/prds/Thrive_Financial_Literacy_App_PRD.pdf',
  },
]

// ── Certifications ────────────────────────────────────────
export interface Certification {
  name: string
  date: string
  category: string
  description: string
}

export const certifications: Certification[] = [
  {
    name: 'Anthropic AI Fluency',
    date: 'June 2026',
    category: 'AI & Productivity',
    description:
      'Earned Anthropic\'s AI Fluency certification, demonstrating proficiency in AI concepts, effective prompting, and practical application of AI tools in real workflows.',
  },
  {
    name: 'Anthropic Claude 101',
    date: 'June 2026',
    category: 'AI & Productivity',
    description:
      'Completed Claude 101 to strengthen my understanding of AI tools, prompting, and practical workflows for building, learning, and productivity.',
  },
  {
    name: 'Google AI Professional Certificate',
    date: 'March 2026',
    category: 'Artificial Intelligence',
    description:
      "Completed Google's AI Professional Certificate to build foundational knowledge in AI concepts, responsible use, and applied AI workflows.",
  },
  {
    name: 'Google Foundations of Project Management',
    date: 'January 2024',
    category: 'Project Management',
    description:
      "Completed Google's Foundations of Project Management certification, covering project planning, stakeholder communication, documentation, and execution basics.",
  },
]
