# 🚀 Quick Start Guide - CurioQuest

## 📁 Project Files

Your project now contains:

```
Testing Games/
├── index.html          # Main HTML file
├── styles.css          # All styling and themes
├── script.js           # Complete app logic
├── README.md           # Project documentation
├── DEPLOYMENT.md       # How to deploy to GitHub Pages
├── TESTING.md          # Testing checklist
└── .gitignore          # Git ignore file
```

## 🎮 How to Use Locally

### Option 1: Open in Browser Directly
1. Navigate to `C:\Users\pc\OneDrive\Desktop\Testing Games\`
2. Right-click on `index.html`
3. Select "Open with" → Your preferred browser
4. App opens and works perfectly!

### Option 2: Use a Local Server (Recommended)
If you have Python installed:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open: `http://localhost:8000`

If you have Node.js:
```bash
npm install -g http-server
http-server
```

## 📝 Test Account (Pre-loaded for Testing)

Sign up with any details to create an account, or use for testing:

**For Demo/Testing:**
- Name: John Doe
- Email: john@example.com
- Mobile: +91 9876543210
- DOB: 1995-05-15
- **OTP**: 123456 (always this for demo)

## 🎯 First Time Using the App

1. **Open the HTML file** in your browser
2. **Click "Create Account"**
3. **Fill in all fields:**
   - Full Name
   - Date of Birth
   - Mobile Number
   - Email ID
4. **Click "Create Account"**
5. **Switch to Login tab**
6. **Enter email or mobile**
7. **Click "Send OTP"**
8. **Enter OTP: 123456**
9. **Click "Verify OTP"**
10. **Welcome to Main Menu!** 🎉

## 🎮 Playing Your First Quiz

1. **From Main Menu**, click any section (e.g., History)
2. **Select difficulty:**
   - 🟢 Beginner (30 seconds)
   - 🟡 Pro (20 seconds)
   - 🔴 Expert (10 seconds)
3. **Read the question**
4. **Select one answer option**
5. **Click "Submit Answer"**
6. **See the trivia and result!**
7. **Confetti animation** plays for correct answers (5 seconds)
8. **Auto-return** to menu

## 📊 View Your Progress

1. Click **📊 Analytics** button in top-right
2. See:
   - Overall success rate
   - Section-wise performance
   - Achievement progress
3. Click **Share on WhatsApp 💬** to share stats

## 🌙 Toggle Dark/Light Mode

- Click **🌙 or ☀️** button in top-left corner
- Theme instantly changes
- Setting is automatically saved
- Persists across sessions

## ❓ Need Help?

Click **ℹ️ Instructions** button to see:
- Game rules
- How to earn achievements
- Tips and tricks

## 👤 My Profile

Click **👤 Profile** button to see:
- Your name
- Email address
- Mobile number
- Account creation date
- **Logout button**

## 🌟 Features Quick Reference

| Feature | Where | What |
|---------|-------|------|
| Quiz | Main Menu - Sections | Answer MCQs |
| Trivia | Main Menu - Top | Daily fun fact |
| Analytics | Top Right 📊 | Your stats |
| Instructions | Top Right ℹ️ | How to play |
| Profile | Top Right 👤 | Account info |
| Theme | Top Left 🌙 | Dark/Light mode |

## 💾 How Data is Stored

- **LocalStorage**: All data saved in browser
- **Persistent**: Data remains until you logout
- **Private**: Only visible to you
- **Automatic**: No manual save needed

## ⏰ Daily Reset

- All quiz modes reset at **12:00 AM (Midnight)**
- Trivia of the Day resets
- You can play all 18 quizzes again next day
- Timer shows countdown to reset

## 🏆 Achievements

Unlock badges at curiosity milestones:
- 🏆 10 points
- 🏆 50 points
- 🏆 100 points
- 🏆 200 points
- 🏆 500 points
- 🏆 1,000 points
- 🏆 2,000 points
- 🏆 5,000 points
- 🏆 10,000 points
- 🏆 20,000 points
- 🏆 50,000 points

## 📱 Responsive Design

Works perfectly on:
- ✅ Phones (480px and above)
- ✅ Tablets (768px and above)
- ✅ Laptops (1920px+)
- ✅ All browsers

## 🌐 Deploy to Internet (GitHub Pages)

When ready to share with everyone:

1. **Create GitHub Account** at https://github.com
2. **Create New Repository** named `curioquest`
3. **Push your code** to GitHub
4. **Enable GitHub Pages** in Settings
5. **Share the link!** `https://username.github.io/curioquest/`

📖 See `DEPLOYMENT.md` for detailed instructions

## 🐛 Troubleshooting

| Problem | Fix |
|---------|-----|
| Data disappeared | Check if localStorage enabled in browser |
| Dark mode not saving | Clear cookies, try again |
| OTP not working | Use exactly: 123456 |
| App won't load | Try different browser |
| Buttons unresponsive | Refresh page (Ctrl+R) |
| Timer broken | Close and reopen app |

## ⚙️ Browser Requirements

- Modern browser with:
  - ✅ JavaScript enabled
  - ✅ LocalStorage support
  - ✅ CSS3 support
  - ✅ Canvas support (for confetti)

**Recommended:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔐 Security Notes

- App uses browser's **LocalStorage** (client-side)
- No server required
- No data sent to internet (until you use WhatsApp share)
- Your data stays on your device
- For production: Consider backend auth

## 📊 Quiz Statistics

- **6 Sections**: History, Geography, Science, Technology, Sports, Business
- **18 Questions**: 3 per section (Beginner, Pro, Expert)
- **Time Limits**: 30s, 20s, 10s respectively
- **Daily Plays**: 18 maximum per day
- **Success Tracking**: Percentage calculated automatically

## 🎨 Customization

To customize the app:

1. **Change Colors**: Edit `styles.css` (top CSS variables)
2. **Add Questions**: Edit `script.js` (quizData object)
3. **Change Logo**: Replace emoji in HTML
4. **Add More Trivia**: Update `triviaDatabase` in script.js
5. **New Puns**: Edit `puns` object in script.js

## 📞 Support

For issues or questions:
1. Check `TESTING.md` for test scenarios
2. Check browser console (F12 > Console)
3. Try different browser
4. Clear cache and reload

## 🎉 You're All Set!

Everything is ready to use! Start playing and enjoying learning with CurioQuest.

**Remember: Where Curiosity Never Dies!** 🧠

---

Need to deploy? → Read `DEPLOYMENT.md`
Want to test? → Check `TESTING.md`
Need help? → See `README.md`
