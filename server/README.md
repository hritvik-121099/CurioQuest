CurioQuest OTP Server

This is a minimal Node/Express server that sends OTPs via Twilio (SMS) or SendGrid (email).

Setup
1. Copy `.env.example` to `.env` and populate the provider credentials you plan to use.

2. Install dependencies:

```bash
cd server
npm install
```

3. Run locally:

```bash
# on Windows PowerShell
$env:PORT = 3000; node index.js
# or
node index.js
```

API
- POST /send-otp
  - JSON body: { "email": "...", "mobile": "...", "otp": "123456" }
  - Returns: { success: true, provider: 'twilio' } or { success: true, provider: 'sendgrid' }

Notes
- If both Twilio and SendGrid credentials are provided, mobile sends SMS via Twilio and email via SendGrid.
- Deploy to Heroku/Render/Vercel for a public endpoint and update your front-end `script.js` to point to the deployed URL.
