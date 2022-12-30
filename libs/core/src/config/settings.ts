export const settings = {
  url: '',
  api: {
    baseUrl: 'https://dev.street-vendor.shop',
    testUrl: '',
  },
  social: {
    google: {
      client: '',
      secret: '',
      redirect: '',
    },
  },
} as const;

export const GOOGLE_AUTH_URL =
  'https://accounts.google.com/o/oauth2/auth?' +
  `client_id=${settings.social.google.client}&` +
  `redirect_uri=${settings.social.google.redirect}&` +
  'response_type=token&' +
  'scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';
