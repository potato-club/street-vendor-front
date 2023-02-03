import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <Link
        href={`https://accounts.google.com/o/oauth2/auth?client_id=${
          process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
        }&redirect_uri=${'http://localhost:4000/callback/google'}&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`}
      >
        Login
      </Link>
    </div>
  );
};

export default LoginPage;
