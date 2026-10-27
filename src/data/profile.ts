// Site content in one place, so the pages only handle layout.

export const profile = {
  name: 'Yasin Hassim',
  fullName: 'Muhammad Yasin Abdul Hassim',
  // Main title first; the others show where there is room for all three
  roles: ['Software Developer', 'IT Technician', 'System Analyst'],
  employer: 'Datakraf Solution Sdn Bhd',
  location: 'Kota Kinabalu, Sabah',
  tagline: 'I build stuff. Welcome to my personal corner of the internet.',
  summary:
    'Software developer at Datakraf in Kota Kinabalu, Sabah. I build production systems for government and agricultural-estate clients with Laravel, Nuxt and React, and I still know my way around the hardware and networks behind them.',
  status: 'Open to opportunities',
  email: 'yasinhassim43@gmail.com',
  github: 'https://github.com/YsinHsim',
  whatsapp: 'https://wa.me/+60128507469',
  resume: '/resume.pdf',
  resumeName: 'Muhammad Yasin bin Abdul Hassim Oct 2026.pdf',
  photo: '/profile.jpg',
};

export const stats = [
  { value: '2+', label: 'Years as a developer' },
  { value: '8+', label: 'Projects shipped' },
  { value: '17', label: 'Estates supported' },
];

export interface Project {
  name: string;
  kind: string;
  description: string;
  tech: string[];
  href: string;
  linkLabel: string;
  featured?: boolean;
  note?: string;
  video?: { id: string; youtubeId: string; label: string; title: string };
}

export const projects: Project[] = [
  {
    name: 'Kuiz Interaktif',
    kind: 'Multiplayer quiz game',
    description:
      "Kahoot-style quiz game with no backend. The host's browser tab is the game server, and players' phones connect to it directly over WebRTC by scanning a QR code.",
    tech: ['Vue', 'Vite', 'PeerJS', 'WebRTC'],
    href: 'https://kuiz-interaktif.vercel.app/',
    linkLabel: 'Live demo',
    note: 'Host on a laptop, join from your phone',
    featured: true,
  },
  {
    name: 'Rental Management System',
    kind: 'Property management SaaS',
    description:
      'Full rental management system for multi-property landlords: flexible leasing, itemized billing, Stripe payments, maintenance tracking and a self-service tenant portal.',
    tech: ['Laravel', 'Vue', 'PostgreSQL', 'Stripe'],
    href: 'https://rental-management-t65r.onrender.com',
    linkLabel: 'Live demo',
    featured: true,
    video: {
      id: 'rental-walkthrough',
      youtubeId: 'qxDsRdBmf40',
      label: 'Watch walkthrough (1:45)',
      title: 'Rental Management System: full workflow walkthrough',
    },
  },
  {
    name: 'eNORES',
    kind: 'Government web system',
    description:
      'A government system built with Laravel and Nuxt (Vue) for efficient resource management and digital services.',
    tech: ['Laravel', 'Nuxt', 'Vue', 'MySQL'],
    href: 'https://enores.jtksabah.gov.my/',
    linkLabel: 'Visit site',
  },
  {
    name: 'Startpage',
    kind: 'New tab page',
    description:
      'Account-synced new tab page with link groups, a wallpaper gallery and a floating music player.',
    tech: ['Next.js', 'NextAuth', 'Prisma'],
    href: 'https://startpage-app.vercel.app/',
    linkLabel: 'Live demo',
  },
  {
    name: 'Hardware Tracking',
    kind: 'Asset management',
    description: 'Track and manage hardware assets with this open-source solution.',
    tech: ['Laravel', 'MySQL'],
    href: 'https://github.com/YsinHsim/hardware-tracking',
    linkLabel: 'Source',
  },
  {
    name: 'Estate Utility',
    kind: 'Management tool',
    description: 'Utility management system for estate operations.',
    tech: ['Laravel', 'React'],
    href: 'https://estate-utility.vercel.app/',
    linkLabel: 'Live demo',
  },
  {
    name: 'Anjung Sepi',
    kind: 'Personal project',
    description: 'A personal web application built with modern static site generation.',
    tech: ['Astro', 'Tailwind'],
    href: 'https://anjung-sepi.vercel.app/',
    linkLabel: 'Visit site',
  },
];

export const responsibilities = [
  { title: 'Backend APIs', detail: 'Laravel, MySQL' },
  { title: 'Responsive frontends', detail: 'Nuxt, Tailwind, Naive UI' },
  { title: 'Email and PDF generation', detail: 'Server-side templates' },
  { title: 'Features and fixes', detail: 'Staging and production' },
  { title: 'Version control and QA', detail: 'GitHub, GitLab, staging server' },
  { title: 'Client liaison', detail: 'Technical detail to business needs' },
];

export const skillGroups = [
  { name: 'Languages', items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'C++', 'Java'] },
  { name: 'Frontend', items: ['React', 'Vue', 'Nuxt', 'Next.js', 'Astro', 'Tailwind CSS', 'Naive UI', 'Material UI', 'shadcn/ui', 'Bootstrap'] },
  { name: 'Backend', items: ['Laravel', 'Inertia.js', 'Node.js', 'Express'] },
  { name: 'Data', items: ['MySQL', 'MariaDB', 'PostgreSQL (Neon)', 'MongoDB', 'DBeaver'] },
  { name: 'Tools', items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Vercel', 'Render'] },
  { name: 'AI-assisted dev', items: ['Claude Code', 'Gemini CLI', 'Qwen Code'] },
];

// Short list for the home page marquee
export const coreStack = ['Laravel', 'PHP', 'Vue', 'Nuxt', 'React', 'Next.js', 'Astro', 'Tailwind', 'MySQL', 'PostgreSQL', 'Docker', 'Git'];

export const story = [
  {
    title: 'Before the tech',
    meta: 'Military upbringing · Discipline and teamwork',
    image: '/about-me/military.jpeg',
    body: [
      'Growing up in a military environment, my family and I frequently relocated, adapting to new places and cultures. I spent much of my time with friends who shared similar experiences, and it was here that I first learned the values of teamwork and discipline.',
      'Our days were filled with military-style activities such as marching, handling firearms, and more, especially during my time at a military camp near Sungai Petani, Kedah. These formative experiences helped shape my character and work ethic.',
    ],
  },
  {
    title: 'Process Suspender',
    meta: 'Cyber cafés · First hacking experience',
    image: '/about-me/cyber-cafe.png',
    body: [
      'After that, I transitioned to living among civilians and experienced life as any typical child. It was during this time that I began to skip school and spend countless hours at cyber cafés, which were booming businesses at the time.',
      'However, the issue was that I needed money to keep returning to the cyber café. This led me to discover a tool called Process Suspender, which allowed me to stop selected background processes. In my case, I used it for hacking purposes.',
    ],
  },
  {
    title: 'Linux and scripting',
    meta: 'University · Deep dive into technology',
    image: '/about-me/radare2.jpeg',
    body: [
      'Fascinated by my earlier discoveries, I began to dive deeper into technology, exploring Windows batch files and the Linux operating system. My growing passion for tech led me to pursue a Diploma in Computer Science at MARA University of Technology (UiTM).',
      "During my learning journey, I became intrigued by how keyloggers and Nmap work, which eventually led me to discover C++ and Tor Browser. This marked the beginning of an exciting chapter in my tech exploration. I quickly realized that hacking isn't just about sitting behind a screen; it's about truly understanding how technology functions.",
    ],
  },
  {
    title: 'Life skills and career',
    meta: 'Retail · Management · Persistence',
    image: '/about-me/butcher.jpeg',
    body: [
      'After graduation, I began applying for tech jobs that aligned with my skill set. However, I struggled to secure my desired role due to my qualifications. As a result, I focused on honing skills relevant to my work, including inventory management and entry-level management skills in the retail industry.',
      'My journey took me from working in fisheries to butchering meat, from lifting goods to supervising teams. At Econsave Cash & Carry I became a supervisor (November 2022 to September 2023), running daily operations, staff schedules and inventory, and acting as the on-site contact for POS, IT and customer problems. After three years of persistence, I finally landed my first IT job.',
    ],
  },
  {
    title: 'First IT job',
    meta: 'Teck Guan Plantation · Jan 2024 to Mar 2025',
    image: '/about-me/transmitter.jpeg',
    body: [
      'My first IT role was as an IT technician and web developer at Teck Guan Plantation, supporting the IT infrastructure and connectivity of 17 agricultural estates. I resolved hardware and network issues, deployed Starlink for estate offices and field operations, and handled remote support, billing and hardware procurement for estate clerks.',
      'It was also where I started building real systems: a hardware asset-tracking system, a purchase-tracking application, and frontend work on a budget management application.',
    ],
  },
  {
    title: 'Software developer',
    meta: 'Datakraf Solution · Mar 2025 to now',
    body: [
      'Today I am a software developer at Datakraf Solution in Kota Kinabalu, working on eNORES, a government labour platform. I build backend APIs with Laravel and MySQL and responsive frontends with Nuxt, Tailwind CSS and Naive UI, and I own features from the database to the screen.',
      'I also handle server-side work such as automated email and PDF generation, keep the staging server ready for QA, and translate between technical detail and what the client needs. I keep learning, now with AI tools like Claude Code as part of the workflow.',
    ],
  },
];

// Reading time from the raw Markdown body, at about 220 words a minute
export function readingTime(body: string): string {
  const words = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

export function formatDate(date: Date, month: 'short' | 'long' = 'short'): string {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month, year: 'numeric' });
}
