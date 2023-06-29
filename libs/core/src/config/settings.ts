export const settings = {
  url: '',
  api: {
    baseUrl: 'https://dev.street-food.shop',
    testUrl: '',
  },
  social: {
    google: {
      client: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      secret: '',
      devRedirect: 'http://localhost:4000/callback/google',
      devRedirectBoss: 'http://localhost:3000/callback/google',
      redirect:
        'https://street-vendor-front-customer.vercel.app/callback/google',
      redirectBoss:
        'https://street-vendor-front-boss.vercel.app/callback/google',
    },
  },
} as const;

export const GOOGLE_AUTH_URL =
  'https://accounts.google.com/o/oauth2/auth' +
  `?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}` +
  `&redirect_uri=${settings.social.google.redirect}` +
  '&response_type=token' +
  '&scope=https://www.googleapis.com/auth/userinfo.email';

export const DEV_GOOGLE_AUTH_URL =
  'https://accounts.google.com/o/oauth2/auth' +
  `?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}` +
  `&redirect_uri=${settings.social.google.devRedirect}` +
  '&response_type=token' +
  '&scope=https://www.googleapis.com/auth/userinfo.email';

export const GOOGLE_AUTH_URL_BOSS =
  'https://accounts.google.com/o/oauth2/auth' +
  `?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}` +
  `&redirect_uri=${settings.social.google.redirectBoss}` +
  '&response_type=token' +
  '&scope=https://www.googleapis.com/auth/userinfo.email';

export const DEV_GOOGLE_AUTH_URL_BOSS =
  'https://accounts.google.com/o/oauth2/auth' +
  `?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}` +
  `&redirect_uri=${settings.social.google.devRedirectBoss}` +
  '&response_type=token' +
  '&scope=https://www.googleapis.com/auth/userinfo.email';
