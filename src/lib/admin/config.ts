const config = {
  env: {
    resendToken: process.env.NEXT_PUBLIC_RESEND_API_KEY!,
    emailFrom: process.env.NEXT_PUBLIC_EMAIL_FROM!,
    emailAdmin: process.env.NEXT_PUBLIC_EMAIL_ADMIN!,

    //metadata
    app: {
      url: process.env.NEXT_PUBLIC_APP_URL! || 'http://localhost:3000',
      name: process.env.NEXT_PUBLIC_APP_NAME! || 'SCN_PROFILE'
    }
  }
};

export default config;
