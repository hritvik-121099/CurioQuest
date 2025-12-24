# GitHub Deployment Guide

## Prerequisites
- Git installed on your computer ([Download Git](https://git-scm.com/download/win))
- GitHub account with your "CurioQuest" repository created

## Steps to Deploy

### 1. Initialize Git Repository (First Time Only)
```bash
cd "path/to/CurioQuest"
git init
git config user.email "your-email@example.com"
git config user.name "Your Name"
```

### 2. Add Remote Repository
```bash
git remote add origin https://github.com/yourusername/CurioQuest.git
```

### 3. Add All Files
```bash
git add .
```

### 4. Create Initial Commit
```bash
git commit -m "Initial commit: CurioQuest web app with all features"
```

### 5. Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## Enable GitHub Pages

1. Go to your GitHub repository: https://github.com/yourusername/CurioQuest
2. Click on **Settings** (top right)
3. Scroll to **Pages** section in the left sidebar
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be available at: https://yourusername.github.io/CurioQuest

## What's Included

✅ **Core Features:**
- 6 Quiz Sections (History, Geography, Science, Technology, Sports, Business)
- 3 Difficulty Levels (Beginner, Pro, Expert)
- Authentication with Email/Mobile OTP
- Real OTP generation (6-digit codes)
- Back button on result screens

✅ **Enhanced Features:**
- Section completion overlays with countdown timers
- Real images from Unsplash
- Dark/Light theme toggle
- Analytics dashboard
- Achievement system
- Confetti animations
- WhatsApp sharing
- Responsive design (mobile, tablet, desktop)

## Features Updated in This Version

### 1. Real OTP System
- Generates 6-digit random codes
- Simulates SMS/Email sending (shows alert with OTP for demo)
- Can be integrated with real SMS/Email services

### 2. Section Completion Overlays
- Shows when all 3 difficulty modes are completed
- Displays countdown timer until 12 AM reset
- Automatically removes when daily reset occurs

### 3. Back Button on Results
- Users can go back to main menu without auto-redirect
- Auto-redirect still available (5s for correct, 3s for wrong)
- Buttons: "Back to Main Menu" and "Next Quiz"

### 4. Real Images
- All quiz questions use high-quality Unsplash images
- All trivia cards use relevant images
- Images load from trusted CDN

### 5. Mobile Responsive
- Works perfectly on phones (320px+)
- Tablet optimized (768px+)
- Desktop view (1920px+)
- Touch-friendly interface

## Testing the App Locally

Before pushing to GitHub, test locally:

1. **Using Python:**
```bash
cd path/to/CurioQuest
python -m http.server 8000
```
Then visit: http://localhost:8000

2. **Using Node.js (with http-server):**
```bash
npm install -g http-server
http-server
```

## Troubleshooting

### Images Not Loading
- Check internet connection (images from Unsplash need online access)
- Try clearing browser cache

### OTP Not Working
- Check browser console for errors
- Ensure JavaScript is enabled
- Try refreshing the page

### Dark Mode Not Working
- Clear localStorage: `localStorage.clear()` in console
- Refresh the page

## Support

For issues or feature requests, open an issue on your GitHub repository.

## License

This project is open source and available under the MIT License.
