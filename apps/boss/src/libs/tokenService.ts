const key = {
  idToken: 'ID_TOKEN',
  refreshToken: 'REFRESH_TOKEN',
};

export const tokenService = {
  /** ID TOKEN */
  getIdToken: () => localStorage.getItem(key.idToken) ?? '',
  setIdToken: (token: string) =>
    localStorage.setItem(key.idToken, `Bearer ${token}`),
  resetIdToken: () => localStorage.setItem(key.idToken, ''),

  /** Refresh TOKEN */
  getRefreshToken: () => localStorage.getItem(key.refreshToken) ?? '',
  setRefreshToken: (token: string) =>
    localStorage.setItem(key.refreshToken, token),
  resetRefreshToken: () => localStorage.setItem(key.refreshToken, ''),
};
