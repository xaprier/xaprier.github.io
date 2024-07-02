export interface SanitizedGithub {
  username: string;
}

export interface SanitizedProfile {
  name: string;
  about?: string;
  avatar?: string;
  nickname?: string;
  location?: string;
  company?: string;
}

export interface SanitizedSEO {
  title?: string;
  description?: string;
  imageURL?: string;
}

export interface SanitizedSocial {
  linkedin?: string;
  github?: string;
  twitter?: string;
  mastodon?: string;
  researchGate?: string;
  facebook?: string;
  instagram?: string;
  reddit?: string;
  threads?: string;
  youtube?: string;
  udemy?: string;
  dribbble?: string;
  behance?: string;
  medium?: string;
  dev?: string;
  stackoverflow?: string;
  website?: string;
  portfolio?: string;
  skype?: string;
  telegram?: string;
  phone?: string;
  email?: string;
}

export interface SanitizedCustomTheme {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  'base-100': string;
  '--rounded-box': string;
  '--rounded-btn': string;
}

export interface SanitizedThemeConfig {
  defaultTheme: string;
  disableSwitch: boolean;
  respectPrefersColorScheme: boolean;
  displayAvatarRing: boolean;
  themes: Array<string>;
  customTheme: SanitizedCustomTheme;
}

export interface SanitizedConfig {
  profile: SanitizedProfile;
  themeConfig: SanitizedThemeConfig;
  seo: SanitizedSEO;
  social: SanitizedSocial;
  footer?: string;
  enablePWA: boolean;
}
