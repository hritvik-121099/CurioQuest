# 🧪 CurioQuest - Testing Guide

## Quick Test Checklist

### Authentication Testing

#### Sign Up
- [ ] Navigate to app
- [ ] Click "Sign Up" tab
- [ ] Enter Name: "John Doe"
- [ ] Enter DOB: "1995-05-15"
- [ ] Enter Mobile: "+91 9876543210"
- [ ] Enter Email: "john@example.com"
- [ ] Click "Create Account"
- [ ] See success message
- [ ] Switch to Login tab

#### Login & OTP
- [ ] Enter email: "john@example.com"
- [ ] Click "Send OTP"
- [ ] See OTP message: "123456"
- [ ] Enter OTP digits: 1, 2, 3, 4, 5, 6
- [ ] Click "Verify OTP"
- [ ] Redirected to Main Menu

### Theme Toggle Testing

- [ ] Click moon icon (🌙) in top-left
- [ ] Background changes to dark theme
- [ ] All text remains readable
- [ ] All buttons adjust to dark mode
- [ ] Click sun icon (☀️)
- [ ] Background returns to light theme
- [ ] Check persistence: Refresh page - theme is saved

### Main Menu Testing

- [ ] See 6 section cards (History, Geography, Science, Technology, Sports, Business)
- [ ] See "Trivia of the Day" card
- [ ] See stats bar with "Today's Plays: 0/18"
- [ ] See "Instructions" button (ℹ️)
- [ ] See "Analytics" button (📊)
- [ ] See "Profile" button (👤)

### Quiz Testing

#### Beginner Mode
- [ ] Click History card
- [ ] Click green badge (Beginner 🟢)
- [ ] Quiz page loads
- [ ] Timer shows "00:30"
- [ ] Question displays
- [ ] 4 options appear
- [ ] Can select one option
- [ ] Submit button enables after selection
- [ ] Timer counts down
- [ ] After answer: See trivia with image
- [ ] If correct: Confetti animation plays for 5 seconds
- [ ] If correct: See quirky pun
- [ ] Return to Main Menu after 5 seconds

#### Pro Mode
- [ ] Click same section's yellow badge (Pro 🟡)
- [ ] Timer shows "00:20"
- [ ] Everything else same as Beginner
- [ ] Plays successfully

#### Expert Mode
- [ ] Click same section's red badge (Expert 🔴)
- [ ] Timer shows "00:10"
- [ ] Everything else same as Beginner
- [ ] Plays successfully

#### Mode Locking
- [ ] After playing all 3 modes in one section
- [ ] Try clicking same mode again
- [ ] Alert: "You can only play this mode once per day!"
- [ ] Badge shows as completed (struck through)

### Timer Testing

#### Countdown Functionality
- [ ] Timer decrements every second
- [ ] Minutes and seconds display correctly
- [ ] At 10 seconds: Timer turns yellow (⚠️)
- [ ] At 5 seconds: Timer turns red and pulses
- [ ] At 0 seconds: Auto-submits answer

#### Time Limits
- [ ] Beginner: 30 seconds
- [ ] Pro: 20 seconds
- [ ] Expert: 10 seconds

### Trivia of the Day Testing

- [ ] Loads on Main Menu
- [ ] Shows interesting fact
- [ ] Shows related image
- [ ] Different from previous trivia if reloaded (unless same day)
- [ ] Click "Share on WhatsApp 💬"
- [ ] Opens WhatsApp web with pre-filled message
- [ ] Message includes trivia text

### Analytics Testing

- [ ] Click Analytics button (📊)
- [ ] See "Overall Performance" card with:
  - [ ] Total Attempts (should be 3)
  - [ ] Correct Answers
  - [ ] Success Rate (%)
  - [ ] Achievements count
- [ ] See "Performance by Section"
  - [ ] 6 section cards showing success percentage
  - [ ] Shows correct/total for each section
- [ ] See "Achievements" section
  - [ ] Shows all 11 milestone badges (10, 50, 100, 200, 500, 1K, 2K, 5K, 10K, 20K, 50K)
  - [ ] Unlocked achievements show 🏆
  - [ ] Locked achievements show 🔒
- [ ] Click "Share on WhatsApp 💬"
- [ ] Opens WhatsApp with analytics message

### Instructions Testing

- [ ] Click Instructions button (ℹ️)
- [ ] Modal opens with game rules
- [ ] Sections show:
  - [ ] Game Rules
  - [ ] Trivia of the Day
  - [ ] Achievements
  - [ ] Tips
- [ ] Close button (✕) works
- [ ] Can click outside modal to close

### Profile Testing

- [ ] Click Profile button (👤)
- [ ] See modal with profile info:
  - [ ] Name: (should be correct)
  - [ ] Email: (should be correct)
  - [ ] Mobile: (should be correct)
  - [ ] Account Created: (date shown)
- [ ] See Logout button
- [ ] Click Logout
- [ ] Confirm logout
- [ ] Redirected to Login page
- [ ] User data cleared from session

### Responsive Design Testing

#### Mobile (480px)
- [ ] Open on mobile phone or use DevTools
- [ ] All elements stack vertically
- [ ] Buttons remain clickable
- [ ] Text is readable
- [ ] Images scale properly
- [ ] No horizontal overflow

#### Tablet (768px)
- [ ] Open on tablet or use DevTools
- [ ] 2-column grid for sections
- [ ] Stats bar shows 1 column
- [ ] Everything responsive
- [ ] Touch gestures work

#### Desktop (1920px)
- [ ] Open on full desktop
- [ ] 3-column grid for sections
- [ ] Multiple columns for stats
- [ ] Full layout utilized
- [ ] Hover effects work

### Data Persistence Testing

#### LocalStorage
- [ ] Play a quiz
- [ ] Refresh page
- [ ] User still logged in
- [ ] Stats preserved
- [ ] Played modes marked as completed

#### Daily Reset
- [ ] Play all 18 quizzes
- [ ] Check "Today's Plays: 18/18"
- [ ] Open browser console (F12)
- [ ] Manually set system date to next day:
  ```javascript
  localStorage.setItem('testDate', new Date().toDateString())
  ```
- [ ] Reload page
- [ ] All modes should be playable again

### Edge Cases Testing

#### Empty Input
- [ ] Try signing up without name
- [ ] Shows validation error
- [ ] Try submitting without option selected
- [ ] Submit button disabled

#### Invalid OTP
- [ ] Enter wrong OTP digits
- [ ] Click Verify
- [ ] Shows error message

#### Same Email/Mobile
- [ ] Try creating account with same email
- [ ] Shows "User already exists"

#### Session Timeout
- [ ] Clear localStorage
- [ ] Reload page
- [ ] Back at login/signup

### Performance Testing

#### Load Time
- [ ] First load: Should be quick (< 2 seconds)
- [ ] Quiz load: Instant
- [ ] Analytics load: Instant

#### File Sizes
- [ ] HTML: ~25 KB
- [ ] CSS: ~30 KB
- [ ] JS: ~45 KB
- [ ] Total: ~100 KB (excellent!)

#### Memory Usage
- [ ] Open DevTools > Performance
- [ ] App should use minimal memory
- [ ] No memory leaks on navigation

### Browser Compatibility Testing

Test on:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility Testing

- [ ] Tab navigation works
- [ ] Keyboard shortcuts work (Tab, Enter)
- [ ] High contrast readable
- [ ] Font sizes reasonable
- [ ] Click targets > 48x48px on mobile
- [ ] Screen reader friendly labels

## Test Scenarios

### Scenario 1: Complete Beginner Quiz
1. Sign up with new account
2. Play Beginner in History
3. Answer question (any option)
4. See trivia and result
5. Check analytics

### Scenario 2: Daily Limits
1. Play all 3 modes in History
2. Try playing History Beginner again
3. Verify blocked message

### Scenario 3: Full Day Play
1. Play all 18 quizzes (3 × 6 sections)
2. Check "Today's Plays: 18/18"
3. Verify all achievements

### Scenario 4: Theme Switching
1. Start with light theme
2. Play a quiz
3. Toggle to dark theme
4. Continue playing
5. Verify theme applies to all pages

### Scenario 5: Confetti Celebration
1. Answer correctly
2. Verify 5-second confetti animation
3. Verify confetti clears after 5 seconds
4. Answer incorrectly
5. Verify no confetti

## Success Criteria

✅ All 6 sections accessible
✅ 3 difficulty levels per section
✅ Timer counts down correctly
✅ Daily limits enforced
✅ Themes toggle properly
✅ Confetti animates on correct answer
✅ Analytics display correctly
✅ Data persists across sessions
✅ Responsive on all devices
✅ No console errors
✅ Smooth animations
✅ WhatsApp sharing works

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Timer stops | Refresh page, check browser console |
| Data disappears | Check localStorage is enabled |
| Dark mode not saving | Clear cookies and cache |
| Confetti not showing | Check canvas support in browser |
| OTP not working | Use exact value: 123456 |
| Responsive broken | Check viewport meta tag |
| Buttons unclickable | Check z-index and overflow |

## Test Logs

**Date**: _______________
**Tester**: _______________
**Device**: _______________
**Browser**: _______________
**Result**: ☐ PASS ☐ FAIL
**Notes**: _______________

---

Happy Testing! 🧪✨
