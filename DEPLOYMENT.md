# 🚀 CurioQuest - Deployment Guide

## Publishing to GitHub Pages

### Step 1: Create a GitHub Account (if you don't have one)
1. Go to https://github.com/signup
2. Fill in your details and create an account

### Step 2: Create a New Repository
1. Click the **+** icon in the top right corner
2. Select **New repository**
3. **Repository name**: `curioquest` (or any name you prefer)
4. **Description**: "Where Curiosity Never Dies! - General Knowledge Quiz App"
5. Select **Public** (so it's accessible to everyone)
6. Check **Add a README file** (optional)
7. Click **Create repository**

### Step 3: Initialize Git Locally

Open Command Prompt/PowerShell and navigate to your project folder:

```bash
cd "C:\Users\pc\OneDrive\Desktop\Testing Games"

# Initialize git
git init

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/curioquest.git

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: CurioQuest - General Knowledge Quiz App"

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub (https://github.com/YOUR_USERNAME/curioquest)
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Select **main** branch and **root** folder
6. Click **Save**
7. Wait 2-3 minutes for deployment
8. Your site will be live at: `https://YOUR_USERNAME.github.io/curioquest/`

### Step 5: Update Game Links (Optional)

To enable WhatsApp sharing with proper links, update the share functions in `script.js`:

Find these lines and replace `[YOUR_GAME_URL]`:
```javascript
// In shareTrivia() function - Line ~850
let shareText = `... Play CurioQuest: https://YOUR_USERNAME.github.io/curioquest/`;

// In shareAnalytics() function - Line ~900
let shareText = `... Play CurioQuest: https://YOUR_USERNAME.github.io/curioquest/`;
```

## Alternative Hosting Options

### Option 1: Netlify (Easiest)
1. Go to https://netlify.com
2. Click **Sign up**
3. Click **Deploy manually** or connect your GitHub repo
4. Drag and drop the project folder
5. Site deployed instantly!

### Option 2: Vercel
1. Go to https://vercel.com
2. Click **Sign up with GitHub**
3. Import your GitHub repository
4. Deploy with one click

### Option 3: Firebase Hosting
1. Go to https://firebase.google.com
2. Create a project
3. Install Firebase CLI
4. Run `firebase init hosting`
5. Run `firebase deploy`

### Option 4: GitLab Pages
1. Create GitLab account at https://gitlab.com
2. Create new project
3. Push code to GitLab
4. Enable Pages in project settings
5. Deployed at `https://YOUR_USERNAME.gitlab.io/curioquest/`

## Making the App Better

### Adding More Questions
Edit `script.js` and add more questions to the `quizData` object:

```javascript
Science: {
    Beginner: {
        question: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0, // Index of correct answer
        trivia: "Interesting fact here",
        image: "SVG or image URL"
    },
    // ... more modes
}
```

### Custom Branding
1. Change the logo emoji in `index.html` (search for 🧠)
2. Update colors in `styles.css` (CSS variables at top)
3. Modify puns in `script.js`
4. Add your own images for trivia

### Adding Backend (Advanced)
To store data on a server instead of localStorage:
1. Use Firebase Realtime Database
2. Use MongoDB Atlas
3. Use Supabase
4. Use AWS

## Performance Optimization

The app is already optimized:
- ✅ Single-page application (SPA)
- ✅ No external dependencies
- ✅ Minimal CSS and JS
- ✅ SVG images (lightweight)
- ✅ LocalStorage for speed

## SEO & Sharing

Add this to `index.html` head section for better SEO:

```html
<meta name="description" content="CurioQuest - Where Curiosity Never Dies! Test your knowledge with daily quizzes across 6 sections.">
<meta name="keywords" content="quiz, trivia, knowledge, general knowledge, education">
<meta name="author" content="Your Name">
<meta property="og:title" content="CurioQuest - Where Curiosity Never Dies!">
<meta property="og:description" content="Test your knowledge across History, Geography, Science, Technology, Sports & Business">
<meta property="og:image" content="https://YOUR_GAME_URL/preview.png">
```

## Troubleshooting

**Problem**: GitHub Pages not showing
- Solution: Wait 5-10 minutes, then refresh. Clear browser cache.

**Problem**: Styles not loading
- Solution: Check if file paths are correct (use relative paths)

**Problem**: Game data not persisting
- Solution: Check if localStorage is enabled in browser

**Problem**: OTP not working
- Solution: Default OTP is `123456` for demo purposes

## Security Notes

- The app uses localStorage (browser storage is public)
- For production, use proper backend authentication
- The OTP is simulated (123456) - use real OTP service in production
- Consider adding password hashing for real app

## Getting Help

1. Check browser console for errors (F12 > Console)
2. Test on different browsers
3. Clear cache and reload
4. Contact GitHub Support if Pages deployment fails

## Success! 🎉

Once deployed:
1. Share the link with friends: `https://YOUR_USERNAME.github.io/curioquest/`
2. They can sign up and start playing
3. Share daily trivia and analytics on WhatsApp
4. Compete with friends on achievements

---

**Questions?** Create an issue in your GitHub repository or check the README.md file.

*Happy Learning! 🧠*
