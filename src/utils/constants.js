
export const USER_AVATAR = 'https://avatars.githubusercontent.com/u/181729549?v=4';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`
  }
};

export { default as LOGO } from "../assets/logo.png"

export const IMG_CDN = 'https://image.tmdb.org/t/p/w200/';

export const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export const BG_IMG = 'https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg';