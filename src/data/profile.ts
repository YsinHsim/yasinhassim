// Site content in one place, so the pages only handle layout.

export const profile = {
  name: 'Yasin Hassim',
  fullName: 'Muhammad Yasin Abdul Hassim',
  role: 'IT Technician',
  roleAlt: 'Software Developer',
  location: 'Sabah, Malaysia',
  tagline: 'I build stuff. Welcome to my personal corner of the internet.',
  summary:
    'IT Technician and Software Developer based in Sabah, Malaysia. I build full-stack apps with Laravel, Vue and React, and keep the hardware and networks behind them running.',
  status: 'Open to opportunities',
  email: 'yasinhassim43@gmail.com',
  github: 'https://github.com/YsinHsim',
  whatsapp: 'https://wa.me/+60128507469',
  resume: '/resume.pdf',
  resumeName: 'Muhammad Yasin bin Abdul Hassim Oct 2026.pdf',
  photo: '/profile.jpg',
};

export const stats = [
  { value: '3+', label: 'Years in IT' },
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
  { title: 'IT infrastructure', detail: '17 estates supported' },
  { title: 'Full-stack development', detail: 'Laravel, React, Vue' },
  { title: 'Network setup', detail: 'Starlink installation' },
  { title: 'Technical support', detail: 'Hardware and software' },
  { title: 'Client collaboration', detail: 'Requirements gathering' },
  { title: 'System development', detail: 'Government solutions' },
];

export const skillGroups = [
  { name: 'Languages', items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'C++', 'Java'] },
  { name: 'Frontend', items: ['React', 'Vue', 'Nuxt', 'Tailwind CSS', 'Material UI', 'shadcn/ui', 'Bootstrap'] },
  { name: 'Backend', items: ['Laravel', 'Node.js', 'Express', 'Inertia.js'] },
  { name: 'Data', items: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB'] },
  { name: 'Tools', items: ['Git', 'GitHub', 'GitLab', 'Docker', 'Vercel'] },
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
      'My journey took me from working in fisheries to butchering meat, from lifting goods to supervising teams. I kept learning and mastering a wide range of skills. After three years of persistence, I finally landed my first IT job.',
    ],
  },
  {
    title: 'Experience and challenges',
    meta: 'First IT job · Continuous learning',
    image: '/about-me/transmitter.jpeg',
    body: [
      "My first job as an IT technician introduced me to the real world of technology. This included troubleshooting hardware and software issues. However, it wasn't until I took on additional projects that I learned to truly apply my skills.",
      'To this day, I continue learning and expanding my knowledge in various areas of tech to keep growing and improving.',
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
