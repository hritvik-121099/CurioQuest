const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const twilio = require('twilio');
const sgMail = require('@sendgrid/mail');

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.SENDGRID_API_KEY) sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const TWILIO_SID = process.env.TWILIO_SID;
const TWILIO_TOKEN = process.env.TWILIO_TOKEN;
const TWILIO_FROM = process.env.TWILIO_FROM;

const twilioClient = (TWILIO_SID && TWILIO_TOKEN) ? twilio(TWILIO_SID, TWILIO_TOKEN) : null;

app.get('/', (req, res) => res.send('CurioQuest OTP server running'));

app.post('/send-otp', async (req, res) => {
  const { email, mobile, otp } = req.body;
  if (!otp) return res.status(400).json({ success: false, error: 'otp_missing' });

  try {
    if (mobile && twilioClient && TWILIO_FROM) {
      await twilioClient.messages.create({ body: `Your CurioQuest OTP: ${otp}`, from: TWILIO_FROM, to: mobile });
      return res.json({ success: true, provider: 'twilio' });
    }

    if (email && process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM) {
      await sgMail.send({
        to: email,
        from: process.env.SENDGRID_FROM,
        subject: 'Your CurioQuest OTP',
        text: `Your CurioQuest OTP: ${otp}`
      });
      return res.json({ success: true, provider: 'sendgrid' });
    }

    return res.status(400).json({ success: false, error: 'no_provider_configured' });
  } catch (err) {
    console.error('send-otp error', err);
    return res.status(500).json({ success: false, error: err.message });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`CurioQuest OTP server listening on ${port}`));
