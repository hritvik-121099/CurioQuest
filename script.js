// ============ Global State ============

let currentUser = null;
let currentSection = null;
let currentDifficulty = null;
let quizTimer = null;
let timeRemaining = 0;
let selectedOption = null;
let generatedOTP = null;

// Quiz data structure
const quizData = {
    History: {
        Beginner: {
            question: "In which year did Christopher Columbus reach the Americas?",
            options: ["1492", "1498", "1504", "1511"],
            correct: 0,
            trivia: "Columbus's voyage was funded by the Spanish monarchy and involved three ships: the Niña, Pinta, and Santa María. However, Columbus was not the first European to reach the Americas!",
            image: "https://images.unsplash.com/photo-1526925712582-8c79ea1fbd6d?w=400&h=300&fit=crop"
        },
        Pro: {
            question: "Which empire built Machu Picchu?",
            options: ["Aztec", "Inca", "Maya", "Olmec"],
            correct: 1,
            trivia: "Machu Picchu was built around 1450 during the reign of Inca Pachacuti and is one of the most intact pre-Columbian ruins.",
            image: "https://images.unsplash.com/photo-1587595431973-160aec97e35f?w=400&h=300&fit=crop"
        },
        Expert: {
            question: "What was the primary cause of the Fall of the Roman Empire?",
            options: ["Plague", "Barbarian invasions", "Economic collapse", "All of the above"],
            correct: 3,
            trivia: "The fall of Rome was caused by a combination of factors including military pressure from Germanic tribes, economic troubles, political instability, and disease.",
            image: "https://images.unsplash.com/photo-1579749800236-a51c2e266a70?w=400&h=300&fit=crop"
        }
    },
    Geography: {
        Beginner: {
            question: "What is the capital of France?",
            options: ["Lyon", "Paris", "Marseille", "Nice"],
            correct: 1,
            trivia: "Paris, known as the 'City of Light', has been a major center of art, culture, and fashion for centuries.",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop"
        },
        Pro: {
            question: "Which country has the most islands?",
            options: ["Indonesia", "Sweden", "Finland", "Norway"],
            correct: 0,
            trivia: "Indonesia has over 17,000 islands, making it the country with the most islands in the world.",
            image: "https://images.unsplash.com/photo-1537225228614-b19960eeb8d2?w=400&h=300&fit=crop"
        },
        Expert: {
            question: "What is the highest mountain peak in Africa?",
            options: ["K2", "Mount Kilimanjaro", "Mount Kenya", "Mount Stanley"],
            correct: 1,
            trivia: "Mount Kilimanjaro stands at 5,895 meters (19,341 feet) and is a dormant volcano in Tanzania.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
        }
    },
    Science: {
        Beginner: {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correct: 2,
            trivia: "Gold comes from the Latin word 'aurum'. It's a highly valuable precious metal used in jewelry and electronics.",
            image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop"
        },
        Pro: {
            question: "How many bones are in an adult human body?",
            options: ["186", "206", "226", "246"],
            correct: 1,
            trivia: "Babies are born with about 270 bones, but as they grow, some of these bones fuse together, resulting in 206 bones in adults.",
            image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=400&h=300&fit=crop"
        },
        Expert: {
            question: "What is the speed of light in vacuum?",
            options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
            correct: 0,
            trivia: "The speed of light is approximately 299,792,458 meters per second, often rounded to 300,000 km/s. This is a fundamental constant in physics.",
            image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=300&fit=crop"
        }
    },
    Technology: {
        Beginner: {
            question: "Who is credited with inventing the World Wide Web?",
            options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Alan Turing"],
            correct: 2,
            trivia: "Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN, a physics research organization in Switzerland.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
        },
        Pro: {
            question: "What does HTTP stand for?",
            options: ["High Transfer Text Protocol", "HyperText Transfer Protocol", "Home Terminal Transfer Protocol", "Hyperlink Text Transfer Process"],
            correct: 1,
            trivia: "HTTP is the protocol used to transfer data across the internet, forming the foundation of data communication for the World Wide Web.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
        },
        Expert: {
            question: "What does GPU stand for?",
            options: ["General Processing Unit", "Graphics Processing Unit", "Global Processor Utility", "General Purpose Uplink"],
            correct: 1,
            trivia: "A GPU is specialized hardware designed for rapid mathematical calculations, crucial for graphics rendering and modern AI applications.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
        }
    },
    Sports: {
        Beginner: {
            question: "How many players are on a basketball team on the court?",
            options: ["4", "5", "6", "7"],
            correct: 1,
            trivia: "Basketball teams have 5 players on the court at a time. The game was invented in 1891 by James Naismith.",
            image: "https://images.unsplash.com/photo-1546519638-68711109d298?w=400&h=300&fit=crop"
        },
        Pro: {
            question: "Which country has won the most FIFA World Cups?",
            options: ["Germany", "Brazil", "France", "Italy"],
            correct: 1,
            trivia: "Brazil has won 5 FIFA World Cup titles, more than any other nation, in 1958, 1962, 1970, 1994, and 2002.",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop"
        },
        Expert: {
            question: "What is the maximum break in snooker?",
            options: ["147", "180", "200", "225"],
            correct: 0,
            trivia: "A maximum break of 147 in snooker is achieved by potting all 15 red balls followed by the black ball, and then potting all colored balls in sequence.",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23006400' width='200' height='200'/%3E%3Crect x='30' y='40' width='140' height='120' fill='%23228B22' stroke='%23FFF' stroke-width='2'/%3E%3Ccircle cx='100' cy='100' r='8' fill='%23FFF'/%3E%3C/svg%3E"
        }
    },
    Business: {
        Beginner: {
            question: "Which company is known for the phrase 'Think Different'?",
            options: ["Microsoft", "Apple", "Google", "Amazon"],
            correct: 1,
            trivia: "'Think Different' was Apple's famous advertising slogan used from 1997 to 2002, celebrating innovative individuals.",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23555555' width='200' height='200'/%3E%3Ccircle cx='100' cy='100' r='50' fill='%23000'/%3E%3Ccircle cx='100' cy='100' r='40' fill='%23555555'/%3E%3Cpath d='M 95 80 Q 100 75 105 80 L 105 120 Q 100 125 95 120 Z' fill='%23000'/%3E%3C/svg%3E"
        },
        Pro: {
            question: "What does IPO stand for?",
            options: ["Initial Product Offer", "Initial Public Offering", "Integrated Product Operation", "International Purchase Order"],
            correct: 1,
            trivia: "An IPO is when a private company first offers its shares to the public on a stock exchange.",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%234A90E2' width='200' height='200'/%3E%3Ctext x='40' y='130' font-size='60' fill='%23FFF' font-weight='bold'%3EIPO%3C/text%3E%3C/svg%3E"
        },
        Expert: {
            question: "Which economist is famous for the theory of 'invisible hand'?",
            options: ["John Maynard Keynes", "Adam Smith", "Milton Friedman", "Thomas Piketty"],
            correct: 1,
            trivia: "Adam Smith introduced the concept of the 'invisible hand' in 1776, suggesting that individuals pursuing self-interest inadvertently benefit society.",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23DAA520' width='200' height='200'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%23F5DEB3'/%3E%3Cpath d='M 70 110 L 90 160 M 130 110 L 110 160 M 80 130 L 120 130' stroke='%23333' stroke-width='3' fill='none'/%3E%3C/svg%3E"
        }
    }
};

// Day-based and section-based puns
const puns = {
    Monday: {
        History: "You're making history! 📚",
        Geography: "You've mapped your way to victory! 🗺️",
        Science: "Your brain chemistry just got better! ⚗️",
        Technology: "You're coding success! 💻",
        Sports: "You scored with that one! ⚽",
        Business: "That's a profitable decision! 💰"
    },
    Tuesday: {
        History: "You're crushing history! 🏛️",
        Geography: "That's a geo-riffic answer! 🌎",
        Science: "Science never sleeps, and neither do you! 🔬",
        Technology: "You're basically a tech wizard now! 🧙",
        Sports: "You're on fire! 🔥",
        Business: "Your portfolio just got better! 📈"
    },
    Wednesday: {
        History: "History is yours! 👑",
        Geography: "Going global, one question at a time! 🌍",
        Science: "Newton would be proud! 🍎",
        Technology: "Your algorithm is superior! 🤖",
        Sports: "That's a championship answer! 🏆",
        Business: "Market domination incoming! 💎"
    },
    Thursday: {
        History: "Thursday history is the best history! 📜",
        Geography: "Almost Friday, already winning! 🌟",
        Science: "Thursday science hits different! 🧪",
        Technology: "Tech Thursday and you're nailing it! 💡",
        Sports: "Thursday athleticism unlocked! 💪",
        Business: "Business Thursday for the win! 🎯"
    },
    Friday: {
        History: "Friday history lessons with flair! 🌈",
        Geography: "It's Friday and you're geographically superior! 🎉",
        Science: "Science Friday never stops! 🚀",
        Technology: "Tech Friday feels good! ✨",
        Sports: "Friday feels like a winning streak! 🥇",
        Business: "Business is looking up for the weekend! 🍾"
    },
    Saturday: {
        History: "Saturday trivia historian! 🎪",
        Geography: "Saturday explorer extraordinaire! 🏕️",
        Science: "Weekend science warrior! ⚡",
        Technology: "Saturday tech vibes! 🌙",
        Sports: "Game day genius! 🎮",
        Business: "Weekend entrepreneur energy! 🚀"
    },
    Sunday: {
        History: "Sunday wisdom in action! 🧘",
        Geography: "Sunday world wanderer! 🛫",
        Science: "Relaxing Sunday science! 🌺",
        Technology: "Tech rest day well spent! 🎧",
        Sports: "Sunday league champion vibes! 🥇",
        Business: "Business plans for the week ahead! 📋"
    }
};

// Trivia of the Day database
const triviaDatabase = [
    {
        text: "Did you know? Honey never spoils! Archaeologists have found 3,000-year-old honey in Egyptian tombs that was still edible.",
        image: "https://images.unsplash.com/photo-1587049394993-d0c1f1f3199f?w=400&h=300&fit=crop"
    },
    {
        text: "Did you know? Octopuses have three hearts! Two pump blood to the gills, and one pumps it to the rest of the body.",
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&h=300&fit=crop"
    },
    {
        text: "Did you know? The Great Wall of China is not visible from space with the naked eye, contrary to popular belief!",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop"
    },
    {
        text: "Did you know? Bananas are berries, but strawberries are not! Scientifically speaking, berries are defined differently than we think.",
        image: "https://images.unsplash.com/photo-1528527471175-dbf1edbf9b5e?w=400&h=300&fit=crop"
    },
    {
        text: "Did you know? Dolphins have names for each other! They use unique whistles to identify and call their friends.",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    }
];

// Curiosity Milestones for achievements
const curiosityMilestones = [10, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000];

// ============ OTP Management Functions ============

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendOTP(email, mobile) {
    // Use existing generatedOTP if present (handleLogin already creates one), otherwise create
    if (!generatedOTP) generatedOTP = generateOTP();
    // persist to localStorage so verification can read it
    localStorage.setItem('curioOTP', generatedOTP);

    console.log(`OTP for ${email || mobile}: ${generatedOTP}`);

    // Try to send via backend OTP server. If not available, fall back to demo alert.
    const payload = { email, mobile, otp: generatedOTP };
    // Default local server; replace with your deployed server URL when available
    const serverUrl = window.CURIO_OTP_SERVER_URL || 'http://localhost:3000/send-otp';

    fetch(serverUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).then(res => res.json()).then(data => {
        if (data && data.success) {
            alert(`OTP sent via ${data.provider || 'server'}. Check your ${email ? 'email' : 'phone'}.`);
        } else {
            // server didn't send; fallback
            showDemoOTP(generatedOTP, 'Server did not send — showing demo OTP');
            console.warn('OTP server response:', data);
        }
    }).catch(err => {
        // network or CORS issues; fallback to demo alert
        console.error('OTP server error', err);
        showDemoOTP(generatedOTP, `Server error: ${err.message}`);
    });

    return generatedOTP;
}

// Show demo OTP inside the page and enable autofill button
function showDemoOTP(otp, note) {
    try {
        const display = document.getElementById('demoOtpDisplay');
        const valueEl = document.getElementById('demoOtpValue');
        const autoBtn = document.getElementById('autofillOtpBtn');
        if (display && valueEl) {
            valueEl.textContent = otp;
            display.classList.remove('hidden');
            if (note) display.title = note;
        }

        if (autoBtn) {
            autoBtn.onclick = () => {
                const digits = otp.split('');
                const inputs = document.querySelectorAll('.otp-input');
                inputs.forEach((input, i) => { input.value = digits[i] || ''; });
                // focus verify button
                const verifyBtn = document.querySelector('#otpFormEl button[type="submit"]');
                if (verifyBtn) verifyBtn.focus();
            };
        }
    } catch (e) {
        console.warn('showDemoOTP error', e);
        alert(`Demo OTP: ${otp}`);
    }
}

// ============ Initialize App ============

function initApp() {
    const savedUser = localStorage.getItem('curioUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showLoadingScreen();
        setTimeout(() => {
            hideLoadingScreen();
            showMainMenu();
            updateMainMenuStats();
        }, 500);
    } else {
        showAuthPage();
    }

    setupEventListeners();
}

function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Auth forms
    document.getElementById('signupFormEl').addEventListener('submit', handleSignup);
    document.getElementById('loginFormEl').addEventListener('submit', handleLogin);
    document.getElementById('otpFormEl').addEventListener('submit', handleOTPVerification);

    // OTP input auto-focus
    document.querySelectorAll('.otp-input').forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length > 1) {
                e.target.value = e.target.value[0];
            }
            if (e.target.value.length === 1 && index < 5) {
                document.querySelectorAll('.otp-input')[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && index > 0 && !e.target.value) {
                document.querySelectorAll('.otp-input')[index - 1].focus();
            }
        });
    });

    // Main menu
    document.querySelectorAll('.section-card').forEach(card => {
        card.addEventListener('click', () => selectSection(card.dataset.section));
    });

    document.getElementById('instructionsBtn').addEventListener('click', showInstructions);
    document.getElementById('analyticsBtn').addEventListener('click', showAnalytics);
    document.getElementById('profileBtn').addEventListener('click', showProfile);

    // Back buttons
    document.getElementById('backBtn').addEventListener('click', goBackToMainMenu);
    document.getElementById('backFromAnalyticsBtn').addEventListener('click', goBackToMainMenu);

    // Result popup buttons
    const nextQuizBtn = document.getElementById('nextQuizBtn');
    const backToMainBtn = document.getElementById('backToMainBtn');
    
    if (nextQuizBtn) {
        nextQuizBtn.addEventListener('click', () => {
            clearTimeout(window.resultTimeout);
            closeResultAndGoToMenu();
        });
    }
    
    if (backToMainBtn) {
        backToMainBtn.addEventListener('click', () => {
            clearTimeout(window.resultTimeout);
            closeResultAndGoToMenu();
        });
    }

    // Quiz
    document.querySelectorAll('.option-input').forEach(input => {
        input.addEventListener('change', handleOptionSelect);
    });

    document.getElementById('submitBtn').addEventListener('click', submitAnswer);

    // Buttons
    document.getElementById('shareTriviaBtn').addEventListener('click', shareTrivia);
    document.getElementById('shareAnalyticsBtn').addEventListener('click', shareAnalytics);
    document.getElementById('logoutBtn').addEventListener('click', logout);
}

// ============ Theme Management ============

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('curioTheme', isDarkMode ? 'dark' : 'light');

    const themeToggle = document.getElementById('themeToggle');
    themeToggle.querySelector('.theme-icon').textContent = isDarkMode ? '☀️' : '🌙';
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('curioTheme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').querySelector('.theme-icon').textContent = '☀️';
    }
}

// ============ Authentication ============

function handleSignup(e) {
    e.preventDefault();

    const name = document.getElementById('signupName').value;
    const dob = document.getElementById('signupDob').value;
    const mobile = document.getElementById('signupMobile').value;
    const email = document.getElementById('signupEmail').value;

    if (!name || !dob || !mobile || !email) {
        alert('Please fill in all fields!');
        return;
    }

    // Check if user already exists
    const existingUser = JSON.parse(localStorage.getItem('curioUsers') || '[]').find(u => u.email === email || u.mobile === mobile);
    if (existingUser) {
        alert('User with this email or mobile already exists!');
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        dob,
        mobile,
        email,
        createdAt: new Date().toISOString(),
        stats: {
            totalAttempts: 0,
            totalCorrect: 0,
            sectionStats: {},
            achievements: [],
            curiosityScore: 0
        }
    };

    // Initialize section stats
    ['History', 'Geography', 'Science', 'Technology', 'Sports', 'Business'].forEach(section => {
        newUser.stats.sectionStats[section] = { Beginner: null, Pro: null, Expert: null };
    });

    // Save to users list
    const users = JSON.parse(localStorage.getItem('curioUsers') || '[]');
    users.push(newUser);
    localStorage.setItem('curioUsers', JSON.stringify(users));

    alert('Account created successfully! Please login now.');
    switchAuthForm();
    document.getElementById('signupFormEl').reset();
}

function handleLogin(e) {
    e.preventDefault();

    const identifier = document.getElementById('loginIdentifier').value;
    const users = JSON.parse(localStorage.getItem('curioUsers') || '[]');
    const user = users.find(u => u.email === identifier || u.mobile === identifier);

    if (!user) {
        alert('User not found! Please sign up first.');
        return;
    }

    // Generate real OTP
    const otp = generateOTP();
    generatedOTP = otp;
    localStorage.setItem('curioOTP', otp);
    localStorage.setItem('curioLoginUser', JSON.stringify(user));

    // Send OTP via email or mobile
    if (user.email) {
        sendOTP(user.email, null);
    } else if (user.mobile) {
        sendOTP(null, user.mobile);
    }

    // Show OTP section, hide login button
    document.getElementById('loginFormEl').style.opacity = '0.5';
    document.getElementById('loginFormEl').style.pointerEvents = 'none';
    document.getElementById('otpSection').classList.remove('hidden');
}

function handleOTPVerification(e) {
    e.preventDefault();

    const otpInputs = document.querySelectorAll('.otp-input');
    const enteredOTP = Array.from(otpInputs).map(input => input.value).join('');
    const savedOTP = localStorage.getItem('curioOTP');

    if (enteredOTP === savedOTP) {
        const user = JSON.parse(localStorage.getItem('curioLoginUser'));
        localStorage.setItem('curioUser', JSON.stringify(user));
        currentUser = user;

        localStorage.removeItem('curioOTP');
        localStorage.removeItem('curioLoginUser');

        showLoadingScreen();
        setTimeout(() => {
            hideLoadingScreen();
            document.getElementById('authPage').classList.add('hidden');
            showMainMenu();
            updateMainMenuStats();
            resetAuthForms();
        }, 500);
    } else {
        alert('Incorrect OTP! Please try again.');
    }
}

function switchAuthForm() {
    document.getElementById('signupForm').classList.toggle('active');
    document.getElementById('loginForm').classList.toggle('active');
}

function resetLogin() {
    document.getElementById('loginFormEl').style.opacity = '1';
    document.getElementById('loginFormEl').style.pointerEvents = 'auto';
    document.getElementById('otpSection').classList.add('hidden');
    document.querySelectorAll('.otp-input').forEach(input => input.value = '');
    const display = document.getElementById('demoOtpDisplay');
    if (display) display.classList.add('hidden');
}

function resetAuthForms() {
    document.getElementById('signupFormEl').reset();
    document.getElementById('loginFormEl').reset();
    resetLogin();
    document.getElementById('signupForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

// ============ Page Navigation ============

function showLoadingScreen() {
    document.getElementById('loadingScreen').classList.remove('hidden');
}

function hideLoadingScreen() {
    document.getElementById('loadingScreen').classList.add('hidden');
}

function showAuthPage() {
    document.getElementById('authPage').classList.remove('hidden');
    document.querySelectorAll('.page').forEach(page => {
        if (page.id !== 'authPage') page.classList.add('hidden');
    });
}

function showMainMenu() {
    document.getElementById('mainMenu').classList.remove('hidden');
    document.querySelectorAll('.page').forEach(page => {
        if (page.id !== 'mainMenu') page.classList.add('hidden');
    });
    loadTriviaOfTheDay();
    updateDifficultyBadges();
    updateCompletedSections();
}

function updateCompletedSections() {
    // Check which sections have all 3 modes completed today
    const today = new Date();
    const todayDateString = today.toDateString();
    
    document.querySelectorAll('.section-card').forEach(card => {
        const sectionName = card.dataset.section;
        const difficulties = ['Beginner', 'Pro', 'Master'];
        let allCompleted = true;
        
        for (let difficulty of difficulties) {
            const quizKey = `${currentUser.id}_${sectionName}_${difficulty}_date`;
            const lastPlayDate = localStorage.getItem(quizKey);
            if (lastPlayDate !== todayDateString) {
                allCompleted = false;
                break;
            }
        }
        
        if (allCompleted) {
            // Section is fully completed today, show overlay with timer
            card.classList.add('section-completed');
            
            // Calculate time until midnight (12 AM)
            const now = new Date();
            const midnight = new Date();
            midnight.setDate(midnight.getDate() + 1);
            midnight.setHours(0, 0, 0, 0);
            
            const timeUntilReset = midnight - now;
            const hours = Math.floor(timeUntilReset / (1000 * 60 * 60));
            const minutes = Math.floor((timeUntilReset % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeUntilReset % (1000 * 60)) / 1000);
            
            // Show or update overlay
            let overlay = card.querySelector('.section-overlay');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.className = 'section-overlay';
                card.appendChild(overlay);
            }
            
            // Update timer
            const timerDiv = overlay.querySelector('.reset-timer') || document.createElement('div');
            if (!overlay.querySelector('.reset-timer')) {
                timerDiv.className = 'reset-timer';
                overlay.appendChild(timerDiv);
            }
            
            const timerText = `Reset in ${hours}h ${minutes}m ${seconds}s`;
            timerDiv.innerHTML = `✅ All Modes Done<br>${timerText}`;
            
            // Update timer every second
            clearInterval(card.timerInterval);
            card.timerInterval = setInterval(() => {
                const now = new Date();
                const midnight = new Date();
                midnight.setDate(midnight.getDate() + 1);
                midnight.setHours(0, 0, 0, 0);
                
                const timeUntilReset = midnight - now;
                if (timeUntilReset <= 0) {
                    card.classList.remove('section-completed');
                    if (overlay) overlay.remove();
                    clearInterval(card.timerInterval);
                } else {
                    const hours = Math.floor(timeUntilReset / (1000 * 60 * 60));
                    const minutes = Math.floor((timeUntilReset % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeUntilReset % (1000 * 60)) / 1000);
                    
                    const timerText = `Reset in ${hours}h ${minutes}m ${seconds}s`;
                    timerDiv.innerHTML = `✅ All Modes Done<br>${timerText}`;
                }
            }, 1000);
        } else {
            card.classList.remove('section-completed');
            const overlay = card.querySelector('.section-overlay');
            if (overlay) overlay.remove();
            clearInterval(card.timerInterval);
        }
    });
}

function showQuizPage(section, difficulty) {
    currentSection = section;
    currentDifficulty = difficulty;

    // Check if already played today
    const quizKey = `${currentUser.id}_${section}_${difficulty}_date`;
    const lastPlayDate = localStorage.getItem(quizKey);
    const today = new Date().toDateString();

    if (lastPlayDate === today) {
        alert('You can only play this mode once per day!');
        return;
    }

    document.getElementById('quizPage').classList.remove('hidden');
    document.querySelectorAll('.page').forEach(page => {
        if (page.id !== 'quizPage') page.classList.add('hidden');
    });

    const difficultyTime = difficulty === 'Beginner' ? 30 : difficulty === 'Pro' ? 20 : 10;
    timeRemaining = difficultyTime;

    document.getElementById('sectionTitle').textContent = `${section} - ${difficulty}`;

    const question = quizData[section][difficulty];
    document.getElementById('questionText').textContent = question.question;

    question.options.forEach((option, index) => {
        document.getElementById(`option${index}`).textContent = option;
    });

    document.getElementById('submitBtn').disabled = true;
    selectedOption = null;

    startQuizTimer(difficultyTime);
    updateProgressBar();
}

function showAnalytics() {
    document.getElementById('analyticsPage').classList.remove('hidden');
    document.querySelectorAll('.page').forEach(page => {
        if (page.id !== 'analyticsPage') page.classList.add('hidden');
    });

    updateAnalyticsDisplay();
}

function showInstructions() {
    document.getElementById('instructionsModal').classList.remove('hidden');
}

function showProfile() {
    document.getElementById('profileModal').classList.remove('hidden');
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileMobile').textContent = currentUser.mobile;
    document.getElementById('profileCreated').textContent = new Date(currentUser.createdAt).toLocaleDateString();
}

function closeInstructions() {
    document.getElementById('instructionsModal').classList.add('hidden');
}

function closeProfile() {
    document.getElementById('profileModal').classList.add('hidden');
}

function goBackToMainMenu() {
    if (quizTimer) clearInterval(quizTimer);
    document.getElementById('quizPage').classList.add('hidden');
    document.getElementById('analyticsPage').classList.add('hidden');
    showMainMenu();
}

// ============ Quiz Functionality ============

function startQuizTimer(seconds) {
    if (quizTimer) clearInterval(quizTimer);

    const timerElement = document.getElementById('timer');
    timeRemaining = seconds;

    quizTimer = setInterval(() => {
        timeRemaining--;

        const mins = Math.floor(timeRemaining / 60);
        const secs = timeRemaining % 60;
        timerElement.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (timeRemaining <= 10) {
            timerElement.classList.add('warning');
        }
        if (timeRemaining <= 5) {
            timerElement.classList.remove('warning');
            timerElement.classList.add('danger');
        }

        if (timeRemaining === 0) {
            clearInterval(quizTimer);
            submitAnswer();
        }
    }, 1000);
}

function handleOptionSelect(e) {
    document.querySelectorAll('.option-input').forEach((input, index) => {
        const label = input.parentElement;
        if (input === e.target) {
            selectedOption = index;
            label.classList.add('selected');
            document.getElementById('submitBtn').disabled = false;
        } else {
            label.classList.remove('selected');
        }
    });
}

function submitAnswer() {
    if (quizTimer) clearInterval(quizTimer);

    const question = quizData[currentSection][currentDifficulty];
    const isCorrect = selectedOption === question.correct;

    // Save quiz result
    const quizKey = `${currentUser.id}_${currentSection}_${currentDifficulty}_date`;
    const today = new Date().toDateString();
    localStorage.setItem(quizKey, today);

    // Update stats
    currentUser.stats.totalAttempts++;
    if (isCorrect) {
        currentUser.stats.totalCorrect++;
        currentUser.stats.curiosityScore++;
    }

    currentUser.stats.sectionStats[currentSection][currentDifficulty] = isCorrect ? 1 : 0;

    // Check for achievements
    checkAchievements();

    localStorage.setItem('curioUser', JSON.stringify(currentUser));

    // Show result
    showResult(isCorrect, question);
}

function showResult(isCorrect, question) {
    const resultPopup = document.getElementById('resultPopup');
    const resultTitle = document.getElementById('resultTitle');
    const resultPun = document.getElementById('resultPun');
    const triviaText = document.getElementById('triviaText2');
    const triviaImage = document.getElementById('triviaImage2');

    const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()];
    const pun = puns[dayName][currentSection] || "Great job!";

    resultTitle.textContent = isCorrect ? '✅ Correct!' : '❌ Wrong!';
    resultPun.textContent = pun;
    triviaText.textContent = question.trivia;
    triviaImage.src = question.image;

    resultPopup.classList.remove('hidden');

    // Clear any previous timeouts
    clearTimeout(window.resultTimeout);

    if (isCorrect) {
        createConfetti();
        // After 5 seconds, auto-redirect (unless user clicks back)
        window.resultTimeout = setTimeout(() => {
            if (!resultPopup.classList.contains('hidden')) {
                resultPopup.classList.add('hidden');
                closeResultAndGoToMenu();
            }
        }, 5000);
    } else {
        // After 3 seconds, auto-redirect (unless user clicks back)
        window.resultTimeout = setTimeout(() => {
            if (!resultPopup.classList.contains('hidden')) {
                resultPopup.classList.add('hidden');
                closeResultAndGoToMenu();
            }
        }, 3000);
    }
}

function closeResultAndGoToMenu() {
    const resultPopup = document.getElementById('resultPopup');
    resultPopup.classList.add('hidden');
    showLoadingScreen();
    setTimeout(() => {
        hideLoadingScreen();
        showMainMenu();
        updateMainMenuStats();
    }, 500);
}

// ============ Confetti Animation ============

function createConfetti() {
    const canvas = document.getElementById('confetti');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    const confetti = [];

    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            opacity: Math.random() * 0.5 + 0.5,
            vx: Math.random() * 8 - 4,
            vy: Math.random() * 15 + 5,
            color: ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#0ea5e9'][Math.floor(Math.random() * 5)]
        });
    }

    let animationFrameId;
    const startTime = Date.now();

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetti.forEach((c, index) => {
            c.x += c.vx;
            c.y += c.vy;
            c.vy += 0.3; // gravity
            c.opacity -= 0.008;

            ctx.fillStyle = c.color;
            ctx.globalAlpha = c.opacity;
            ctx.fillRect(c.x, c.y, c.width, c.height);

            if (c.opacity <= 0 || c.y > canvas.height) {
                confetti.splice(index, 1);
            }
        });

        if (confetti.length > 0 && Date.now() - startTime < 5000) {
            animationFrameId = requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(animationFrameId);
        }
    }

    animate();
}

// ============ Trivia of the Day ============

function loadTriviaOfTheDay() {
    const today = new Date().toDateString();
    const savedTrivia = localStorage.getItem(`curioTriviaDate`);

    let trivia;
    if (savedTrivia === today) {
        const savedTriviaData = localStorage.getItem(`curioTrivia_${currentUser.id}`);
        trivia = JSON.parse(savedTriviaData);
    } else {
        trivia = triviaDatabase[Math.floor(Math.random() * triviaDatabase.length)];
        localStorage.setItem(`curioTriviaDate`, today);
        localStorage.setItem(`curioTrivia_${currentUser.id}`, JSON.stringify(trivia));
    }

    document.getElementById('triviaText').textContent = trivia.text;
    document.getElementById('triviaImage').src = trivia.image;
}

function shareTrivia() {
    const triviaText = document.getElementById('triviaText').textContent;
    const shareText = `🧠 CurioQuest - Trivia of the Day 🧠\n\n${triviaText}\n\nJoin me in expanding our knowledge! 🌟\n\n👉 Play CurioQuest: [YOUR_GAME_URL]`;

    const encodedText = encodeURIComponent(shareText);
    window.open(`https://api.whatsapp.com/send?text=${encodedText}`, '_blank');
}

// ============ Analytics ============

function updateAnalyticsDisplay() {
    const stats = currentUser.stats;

    document.getElementById('totalAttempts').textContent = stats.totalAttempts;
    document.getElementById('totalCorrect').textContent = stats.totalCorrect;

    const successRate = stats.totalAttempts > 0 ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100) : 0;
    document.getElementById('overallSuccess').textContent = successRate + '%';

    document.getElementById('totalAchievements').textContent = stats.achievements.length;

    // Section stats
    const sectionStatsContainer = document.getElementById('sectionStatsContainer');
    sectionStatsContainer.innerHTML = '';

    const sectionIcons = {
        History: '📚',
        Geography: '🌍',
        Science: '🔬',
        Technology: '💻',
        Sports: '⚽',
        Business: '💼'
    };

    Object.keys(stats.sectionStats).forEach(section => {
        const results = Object.values(stats.sectionStats[section]);
        const correct = results.filter(r => r === 1).length;
        const total = results.filter(r => r !== null).length;
        const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

        const sectionCard = document.createElement('div');
        sectionCard.className = 'section-stat-item';
        sectionCard.innerHTML = `
            <div class="section-stat-icon">${sectionIcons[section]}</div>
            <div class="section-stat-name">${section}</div>
            <div class="section-stat-success">${percentage}%</div>
            <div style="font-size: 12px; color: var(--text-secondary);">${correct}/${total}</div>
        `;
        sectionStatsContainer.appendChild(sectionCard);
    });

    // Achievements
    const achievementsContainer = document.getElementById('achievementsContainer');
    achievementsContainer.innerHTML = '';

    curiosityMilestones.forEach(milestone => {
        const isUnlocked = stats.achievements.includes(milestone);
        const badge = document.createElement('div');
        badge.className = `achievement-badge ${isUnlocked ? 'unlocked' : 'locked'}`;
        badge.innerHTML = `
            <div class="achievement-icon">${isUnlocked ? '🏆' : '🔒'}</div>
            <div class="achievement-value">${milestone}</div>
            <div class="achievement-label">${isUnlocked ? 'Unlocked' : 'Locked'}</div>
        `;
        achievementsContainer.appendChild(badge);
    });
}

function checkAchievements() {
    const stats = currentUser.stats;
    curiosityMilestones.forEach(milestone => {
        if (stats.curiosityScore >= milestone && !stats.achievements.includes(milestone)) {
            stats.achievements.push(milestone);
            alert(`🏆 Achievement Unlocked: Curiosity Milestone ${milestone}!`);
        }
    });
}

function shareAnalytics() {
    const stats = currentUser.stats;
    const successRate = stats.totalAttempts > 0 ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100) : 0;

    const shareText = `🧠 CurioQuest - My Analytics 📊\n\n✅ Success Rate: ${successRate}%\n📈 Total Attempts: ${stats.totalAttempts}\n🎯 Correct Answers: ${stats.totalCorrect}\n🏆 Achievements: ${stats.achievements.length}\n\nBeat my score! Play CurioQuest: [YOUR_GAME_URL]`;

    const encodedText = encodeURIComponent(shareText);
    window.open(`https://api.whatsapp.com/send?text=${encodedText}`, '_blank');
}

// ============ Main Menu Updates ============

function updateMainMenuStats() {
    const stats = currentUser.stats;
    let playedToday = 0;

    const today = new Date().toDateString();
    ['History', 'Geography', 'Science', 'Technology', 'Sports', 'Business'].forEach(section => {
        ['Beginner', 'Pro', 'Expert'].forEach(difficulty => {
            const quizKey = `${currentUser.id}_${section}_${difficulty}_date`;
            if (localStorage.getItem(quizKey) === today) {
                playedToday++;
            }
        });
    });

    document.getElementById('todaysPlays').textContent = `${playedToday}/18`;

    const successRate = stats.totalAttempts > 0 ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100) : 0;
    document.getElementById('todaysSuccess').textContent = successRate + '%';

    document.getElementById('curiosityScore').textContent = stats.curiosityScore;
}

function updateDifficultyBadges() {
    const today = new Date().toDateString();

    document.querySelectorAll('.section-card').forEach(card => {
        const section = card.dataset.section;
        card.querySelectorAll('.difficulty-badge').forEach(badge => {
            const difficulty = badge.dataset.difficulty;
            const quizKey = `${currentUser.id}_${section}_${difficulty}_date`;
            const playedToday = localStorage.getItem(quizKey) === today;

            if (playedToday) {
                badge.classList.add('completed');
                badge.style.pointerEvents = 'none';
            } else {
                badge.classList.remove('completed');
                badge.style.pointerEvents = 'auto';
                badge.style.cursor = 'pointer';
            }

            badge.addEventListener('click', (e) => {
                e.stopPropagation();
                if (!playedToday) {
                    showQuizPage(section, difficulty);
                }
            });
        });
    });
}

function selectSection(section) {
    currentSection = section;
    // Show difficulty selection (handled through badge clicks)
}

function updateProgressBar() {
    // Update progress based on timer
    const totalTime = currentDifficulty === 'Beginner' ? 30 : currentDifficulty === 'Pro' ? 20 : 10;
    const progress = ((totalTime - timeRemaining) / totalTime) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// ============ Logout ============

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('curioUser');
        currentUser = null;
        document.getElementById('profileModal').classList.add('hidden');
        showAuthPage();
    }
}

// ============ Utilities ============

window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Initialize app on load
document.addEventListener('DOMContentLoaded', () => {
    loadThemePreference();
    initApp();
});
