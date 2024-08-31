// // src/app/api/auth/google/route.ts
import { google } from 'googleapis';
import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID || '',
  process.env.GOOGLE_CLIENT_SECRET || '',
  process.env.GOOGLE_REDIRECT_URL || ''
);


const scopes = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
];

export async function GET(req: NextRequest) {

  const state = crypto.randomBytes(32).toString('hex');

  // Create a response to set the cookie
  const response = NextResponse.redirect(oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
    include_granted_scopes: true,
    state: state,
    redirect_uri : process.env.GOOGLE_REDIRECT_URL
  }));

  // Set the state in a cookie
  response.cookies.set('auth_state', state, { path: '/' });

  return response;
}


































// import { google } from 'googleapis';
// import crypto from 'crypto';
// import { NextRequest, NextResponse } from 'next/server';

// const oauth2Client = new google.auth.OAuth2(
//   process.env.GOOGLE_CLIENT_ID || '',
//   process.env.GOOGLE_CLIENT_SECRET || '',
//   process.env.GOOGLE_REDIRECT_URL || ''
// );

// const scopes = [
//   'https://www.googleapis.com/auth/youtube.channel-memberships.creator',
//   'https://www.googleapis.com/auth/youtube.readonly',
//   'https://www.googleapis.com/auth/userinfo.profile',
//   'https://www.googleapis.com/auth/userinfo.email',
// ];

// export async function GET(req: NextRequest) {
//   const state = crypto.randomBytes(32).toString('hex');

//   // Create a response to set the cookie
//   const response = NextResponse.redirect(oauth2Client.generateAuthUrl({
//     access_type: 'offline',
//     scope: scopes,
//     include_granted_scopes: true,
//     state: state,
//     redirect_uri : "https://signforsteve.com/api/callback"
//   }));

//   // Set the state in a cookie
//   response.cookies.set('auth_state', state, { path: '/' });

//   return response;
// }