interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'HVOLO6ZFrAFFQsrDCyPSaZmA4bwGZXGg',
  domain: 'ds-portal.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
