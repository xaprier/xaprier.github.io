interface Profile {
  name: string;
  about?: string;
  avatar?: string;
  nickname?: string;
  location?: string;
  company?: string;
}

interface SEO {
  /**
   * Meta title
   */
  title?: string;

  /**
   * Meta description
   */
  description?: string;

  /**
   * Meta image
   */
  imageURL?: string;
}

interface Social {
  /**
   * GitHub
   */
  github?: string;
  
  /**
   * LinkedIn
   */
  linkedin?: string;

  /**
   * Twitter
   */
  twitter?: string;

  /**
   * Mastodon
   */
  mastodon?: string;

  /**
   * ResearchGate username
   */
  researchGate?: string;

  /**
   * Facebook
   */
  facebook?: string;

  /**
   * Instagram
   */
  instagram?: string;

  /**
   * Reddit
   */
  reddit?: string;

  /**
   * Threads
   */
  threads?: string;

  /**
   * YouTube
   */
  youtube?: string;

  /**
   * Udemy
   */
  udemy?: string;

  /**
   * Dribbble
   */
  dribbble?: string;

  /**
   * Behance
   */
  behance?: string;

  /**
   * Medium
   */
  medium?: string;

  /**
   * dev
   */
  dev?: string;

  /**
   * Stack Overflow
   */
  stackoverflow?: string;

  /**
   * Website
   */
  website?: string;

  /**
   * Portfolio
   */
  portfolio?: string;

  /**
   * Skype username
   */
  skype?: string;

  /**
   * Telegram username
   */
  telegram?: string;

  /**
   * Phone
   */
  phone?: string;

  /**
   * Email
   */
  email?: string;
}

interface CustomTheme {
  /**
   * Primary color
   */
  primary?: string;

  /**
   * Secondary color
   */
  secondary?: string;

  /**
   * Accent color
   */
  accent?: string;

  /**
   * Neutral color
   */
  neutral?: string;

  /**
   * Base color of page
   */
  'base-100'?: string;

  /**
   * Border radius of rounded-box
   */
  '--rounded-box'?: string;

  /**
   * Border radius of rounded-btn
   */
  '--rounded-btn'?: string;
}

interface ThemeConfig {
  /**
   * Default theme
   */
  defaultTheme?: string;

  /**
   * Hides the switch in the navbar
   */
  disableSwitch?: boolean;

  /**
   * Should use the prefers-color-scheme media-query
   */
  respectPrefersColorScheme?: boolean;

  /**
   * Hide the ring in Profile picture
   */
  displayAvatarRing?: boolean;

  /**
   * Available themes
   */
  themes?: Array<string>;

  /**
   * Custom theme
   */
  customTheme?: CustomTheme;
}

interface Config {
  /**
   * Vite's base url
   */
  base?: string;

  profile: Profile;

  /**
   * another avatar image url
   */
  avatar?: string;

  /**
   * SEO config
   */
  seo?: SEO;

  /**
   * Social links
   */
  social?: Social;

  /**
   * Custom footer
   */
  footer?: string;

  /**
   * Theme config
   */
  themeConfig?: ThemeConfig;

  /**
   * Enable PWA
   */
  enablePWA?: boolean;
}

declare const CONFIG: Config;
