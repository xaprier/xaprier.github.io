// gitprofile.config.ts

const CONFIG = {
  profile: {
    name: 'Seymen Kalkan',
    about: 'I\'m an experienced software developer with a strong background in C++, Linux and it\'s distributed operating systems. I specialize in Qt Core/GUI/Concurrent and am passionate about creating user-friendly interfaces. Additionally, I excel in developing optimized, high-performance applications.',
    avatar: 'https://github.com/xaprier/portfolio/blob/build/avatar.jpeg?raw=true', // use another avatar image instead of github avatar
    nickname: 'xaprier',
    company: '',
    location: 'Ankara, Turkey',
  },
  base: '/',
  seo: {
    title: 'Seymen Kalkan',
    description: 'This is the Seymen Kalkan\'s information webpage. You can refer to portfolio page and more.',
    imageURL: 'https://avatars.githubusercontent.com/u/69122856?v=4',
  },
  social: {
    github: 'xaprier',
    linkedin: 'xaprier',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'xaprier.dev',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://xaprier.dev',
    portfolio: 'https://xaprier.dev/portfolio',
    phone: '',
    email: 'seymenkalkan@gmail.com',
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
