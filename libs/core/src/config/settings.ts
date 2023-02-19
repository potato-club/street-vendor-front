export const settings = {
  url: '',
  api: {
    baseUrl: 'https://dev.street-vendor.shop',
    testUrl: '',
  },
  social: {
    google: {
      client: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      secret: '',
      redirect: 'http://localhost:4000/callback/google',
    },
  },
} as const;

export const GOOGLE_AUTH_URL =
  'https://accounts.google.com/o/oauth2/auth' +
  `?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}` +
  `&redirect_uri=${settings.social.google.redirect}` +
  '&response_type=token' +
  '&scope=https://www.googleapis.com/auth/userinfo.email';
