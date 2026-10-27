// UI skins. Each ready skin has its own home and work routes; the blog stays shared
// and only takes on the skin's colours and fonts.

export interface Skin {
  id: string;
  name: string;
  hint: string;
  ready: boolean;
  home: string;
  work: string;
  // Skins with a fixed light or dark look hide the theme toggle
  forceTheme?: 'light' | 'dark';
}

export const skins: Skin[] = [
  { id: 'bento', name: 'Bento', hint: 'Tiles and serif type', ready: true, home: '/', work: '/portfolio' },
  { id: 'terminal', name: 'Terminal', hint: 'Type commands, hacker style', ready: true, home: '/terminal/', work: '/terminal/#work', forceTheme: 'dark' },
  { id: 'genz', name: 'Gen Z', hint: 'Loud, bold, no cap', ready: true, home: '/genz/', work: '/genz/#work' },
  { id: 'anime', name: 'Anime', hint: 'Visual-novel vibes', ready: true, home: '/anime/', work: '/anime/#work' },
];

export const defaultSkin = 'bento';

// Bento pages that each skin replaces, used by the redirect in BaseLayout
export const skinRoutes = Object.fromEntries(
  skins.filter((s) => s.ready && s.id !== defaultSkin).map((s) => [s.id, { '/': s.home, '/portfolio': s.work }])
);

export const skinThemes = Object.fromEntries(skins.filter((s) => s.forceTheme).map((s) => [s.id, s.forceTheme]));
