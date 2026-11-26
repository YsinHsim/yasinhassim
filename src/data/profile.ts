// Site content in one place, so the pages only handle layout.

export const profile = {
  name: 'Yasin Hassim',
  fullName: 'Muhammad Yasin Abdul Hassim',
  // Main title first; the others show where there is room for all three
  roles: ['Software Developer', 'IT Technician', 'System Analyst'],
  employer: 'Datakraf Solution Sdn Bhd',
  location: 'Kota Kinabalu, Sabah',
  tagline: 'Full-stack developer building production web systems.',
  summary:
    'Software developer at Datakraf in Kota Kinabalu, Sabah. I build production systems for government and agricultural-estate clients with Laravel, Nuxt and React, and I still know my way around the hardware and networks behind them.',
  status: 'Open to opportunities',
  email: 'yasinhassim43@gmail.com',
  github: 'https://github.com/YsinHsim',
  resume: '/resume.pdf',
  resumeName: 'Muhammad Yasin bin Abdul Hassim Oct 2026.pdf',
  // Drop a portrait in /public (e.g. '/portrait.jpg') and set its path here
  photo: '',
};

export const stats = [
  { value: '2+', label: 'Years as a developer' },
  { value: '8+', label: 'Projects shipped' },
  { value: '17', label: 'Estates supported' },
];

export interface Project {
  name: string;
  slug: string;
  cover?: string;
  highlights?: string[];
  flow?: { title: string; detail: string }[];
  role?: string;
  kind: string;
  description: string;
  tech: string[];
  href: string;
  linkLabel: string;
  featured?: boolean;
  archived?: boolean;
  note?: string;
  video?: { id: string; youtubeId: string; label: string; title: string };
}

export const projects: Project[] = [
  {
    name: 'eNORES',
    slug: 'enores',
    cover: '/work/enores.webp',
    kind: 'Government web system',
    description:
      'Production government labour platform for Jabatan Tenaga Kerja Sabah, managing non-resident worker employment licensing and digital workflows.',
    role: 'Software Developer at Datakraf Solution — backend APIs, Nuxt frontend, PDF/email generation, staging & QA',
    highlights: [
      'End-to-end Laravel REST APIs backed by MySQL',
      'Responsive Nuxt, Tailwind CSS and Naive UI interfaces',
      'Automated server-side PDF and email generation',
      'Dedicated staging server management for QA and hands-on client training',
      'Translating regulatory workflows into maintainable application features',
    ],
    flow: [
      { title: 'Application intake', detail: 'Applicants register and submit their details through the Nuxt portal.' },
      { title: 'Processing', detail: 'Laravel APIs validate submissions and apply the business rules behind the licensing workflow.' },
      { title: 'Document generation', detail: 'The server generates PDF documents and sends email notifications automatically.' },
      { title: 'QA and release', detail: 'Changes are verified on a dedicated staging environment before rolling out to production.' },
    ],
    tech: ['Laravel', 'Nuxt', 'Vue', 'MySQL'],
    href: 'https://enores.jtksabah.gov.my/',
    linkLabel: 'Visit site',
    featured: true,
  },
  {
    name: 'Rental Management System',
    slug: 'rental-management',
    cover: '/work/rental-management.webp',
    highlights: [
      'Flexible leasing',
      'Itemized billing',
      'Stripe payments',
      'Maintenance tracking',
      'Self-service tenant portal',
      'Multi-property landlords',
    ],
    flow: [
      { title: 'Set up properties', detail: 'Landlord sets up properties and units.' },
      { title: 'Sign the lease', detail: 'Tenants sign a lease and get portal access.' },
      { title: 'Bill and pay', detail: 'Bills are itemized and paid through Stripe.' },
      { title: 'Track maintenance', detail: 'Tenants raise maintenance requests and track them to resolution.' },
    ],
    role: 'Solo: full-stack (Laravel, Vue, PostgreSQL), deployed on Render',
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
    name: 'Kuiz Interaktif',
    slug: 'kuiz-interaktif',
    cover: '/work/kuiz-interaktif.webp',
    highlights: [
      'Kahoot-style multiplayer quiz',
      'No backend: the host tab is the game server',
      'QR-code join from players’ phones',
      'Direct WebRTC connections with PeerJS',
      'Live answers, scoring and leaderboard',
    ],
    flow: [
      { title: 'Open the host', detail: 'Host opens the app on a laptop or projector; the host’s browser tab becomes the game server.' },
      { title: 'Players join', detail: 'Players scan a QR code and join from their phones.' },
      { title: 'Connect directly', detail: 'Phones connect to the host directly over WebRTC (PeerJS); there is no backend.' },
      { title: 'Score the round', detail: 'Answers stream to the host, which scores the round and shows the leaderboard.' },
    ],
    role: 'Solo: design, build and deploy (Vercel)',
    kind: 'Multiplayer quiz game',
    description:
      "Kahoot-style quiz game with no backend. The host's browser tab is the game server, and players' phones connect to it directly over WebRTC by scanning a QR code.",
    tech: ['Vue', 'Vite', 'PeerJS', 'WebRTC'],
    href: 'https://kuiz-interaktif.vercel.app/',
    linkLabel: 'Live demo',
    note: 'Host on a laptop, join from your phone',
  },
  {
    name: 'Startpage',
    slug: 'startpage',
    cover: '/work/startpage.webp',
    kind: 'New tab page',
    description:
      'Account-synced new tab page with link groups, a wallpaper gallery and a floating music player.',
    tech: ['Next.js', 'NextAuth', 'Prisma'],
    href: 'https://startpage-app.vercel.app/',
    linkLabel: 'Live demo',
  },
  {
    name: 'Hardware Tracking',
    slug: 'hardware-tracking',
    kind: 'Asset management',
    description: 'Track and manage hardware assets with this open-source solution.',
    tech: ['Laravel', 'MySQL'],
    href: 'https://github.com/YsinHsim/hardware-tracking',
    linkLabel: 'Source',
  },
  {
    name: 'Estate Utility',
    slug: 'estate-utility',
    cover: '/work/estate-utility.webp',
    kind: 'Management tool',
    description: 'Utility management system for estate operations.',
    tech: ['Laravel', 'React'],
    href: 'https://estate-utility.vercel.app/',
    linkLabel: 'Live demo',
    archived: true,
  },
  {
    name: 'Anjung Sepi',
    slug: 'anjung-sepi',
    cover: '/work/anjung-sepi.webp',
    kind: 'Personal project',
    description: 'A personal web application built with modern static site generation.',
    tech: ['Astro', 'Tailwind'],
    href: 'https://anjung-sepi.vercel.app/',
    linkLabel: 'Visit site',
    archived: true,
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

// Freelance work alongside the main job, shown under the responsibilities grid
export const sideGig = {
  title: 'Training support',
  kind: 'Freelance',
  body: 'A training provider hires me as the technical crew for hands-on software training. I maintain the staging server and make sure every participant can log in and finish each practice exercise, so the trainer can focus on teaching.',
  photos: [
    { src: '/work/training-01.jpg', alt: 'Participants holding their certificates at the end of a training session' },
    { src: '/work/training-02.jpg', alt: 'A hands-on training session seen from the support desk, with the staging terminal open on a laptop' },
  ],
};

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
    title: 'Computer science foundations',
    meta: 'Diploma in Computer Science · UiTM',
    body: [
      'Growing up in a military family meant relocating often and adapting quickly, which instilled discipline and teamwork early on. Outside school, curiosity about how operating systems, networks, and Windows/Linux internals actually work turned into a lasting interest in software and security.',
      'That focus led me to pursue a Diploma in Computer Science at MARA University of Technology (UiTM), where I built a foundation in programming and scripting.',
    ],
  },
  {
    title: 'Operations and team leadership',
    meta: 'Econsave Cash & Carry · Nov 2022 to Sep 2023',
    body: [
      'While applying for entry-level tech roles after graduation, I built operational resilience in retail and worked my way up to supervisor at Econsave Cash & Carry.',
      'I managed daily floor operations, staff scheduling, and inventory, and served as the on-site point of contact for point-of-sale systems, local IT issues, and customer escalations before transitioning into full-time IT.',
    ],
  },
  {
    title: 'IT infrastructure and first production apps',
    meta: 'Teck Guan Plantation · Jan 2024 to Mar 2025',
    image: '/about-me/transmitter.jpeg',
    body: [
      'My first IT role was as an IT technician and web developer at Teck Guan Plantation, supporting the IT infrastructure and connectivity of 17 agricultural estates. I resolved hardware and network issues, deployed Starlink for estate offices and field operations, and handled remote support, billing and hardware procurement for estate clerks.',
      'It was also where I started building real systems: a hardware asset-tracking system, a purchase-tracking application, and frontend work on a budget management application.',
    ],
  },
  {
    title: 'Full-stack software developer',
    meta: 'Datakraf Solution · Mar 2025 to now',
    image: '/about-me/software-developer.jpg',
    body: [
      'Today I am a software developer at Datakraf Solution in Kota Kinabalu, working on eNORES, a government labour platform. I build backend APIs with Laravel and MySQL and responsive frontends with Nuxt, Tailwind CSS and Naive UI, and I own features from the database to the screen.',
      'I also handle server-side work such as automated email and PDF generation, keep the staging server ready for QA, and translate between technical detail and what the client needs — supported by structured AI-assisted engineering workflows.',
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
