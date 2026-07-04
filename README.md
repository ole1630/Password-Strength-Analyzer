# 🔐 Password Strength Analyzer

A modern, interactive web application for analyzing password strength and generating secure passwords. Built with a sleek dark theme and gradient UI for an exceptional user experience.

![Password Strength Analyzer](https://img.shields.io/badge/Version-1.0.0-blueviolet?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Languages](https://img.shields.io/badge/HTML-CSS-JavaScript-blue?style=flat-square)

## ✨ Features

### Password Analysis
- **Real-time Strength Assessment** - Instant feedback as you type
- **Strength Scoring** - Rates passwords from Weak to Very Strong
- **Visual Strength Indicator** - Color-coded bar showing password strength
- **Requirements Checklist** - Track which criteria your password meets:
  - Minimum 8 characters
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special characters (!@#$%^&*)

### Detailed Analytics
- **Character Count** - Shows total password length
- **Entropy Calculation** - Measures password complexity in bits
- **Crack Time Estimation** - Estimates time to brute force the password
- **Character Detection** - Identifies consecutive and sequential patterns

### Password Generator
- **Custom Length** - Generate passwords from 8 to 32 characters
- **Character Type Options** - Choose which character sets to include
- **One-Click Generation** - Create strong passwords instantly
- **Copy to Clipboard** - Easy password copying with visual feedback

### Modern UI/UX
- **Dark Theme** - Easy on the eyes with beautiful gradient backgrounds
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Elegant transitions and interactive elements
- **Accessibility** - Keyboard friendly and semantic HTML

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation required!

### Usage

1. **Open the Application**
   - Simply open `index.html` in your web browser
   - Or visit the live demo if hosted online

2. **Analyze a Password**
   - Type or paste a password in the input field
   - Watch the real-time analysis update instantly
   - Check the requirements and detailed analytics

3. **Generate a Strong Password**
   - Adjust the length slider (8-32 characters)
   - Select desired character types
   - Click "Generate Password"
   - Copy the password to clipboard

4. **Toggle Password Visibility**
   - Click the eye icon (👁️) to show/hide your password

## 📊 How It Works

### Strength Calculation
The strength score is based on multiple factors:
- Password length (up to 30 points)
- Character variety - uppercase, lowercase, numbers, special chars (60 points)
- Penalties for consecutive characters and sequential patterns

**Score Ranges:**
- 0-39: Weak ⚠️
- 40-59: Fair 🟡
- 60-79: Good 🟢
- 80-100: Very Strong 💪

### Entropy Calculation
Entropy measures password complexity using the formula:
```
Entropy = log₂(character_space^password_length)
```

This determines the number of bits of security your password provides.

### Crack Time Estimation
Assumes 1 billion guesses per second (modern GPU cracking speed):
```
Time = (2^entropy) / 1,000,000,000
```

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple to Pink (#667eea → #f093fb)
- **Success Gradient**: Teal to Green (#11998e → #38ef7d)
- **Warning Gradient**: Pink to Yellow (#fa709a → #fee140)
- **Danger Gradient**: Red (#eb3349 → #f45c43)

### Animations
- Smooth fade-in and slide animations on page load
- Hover effects on interactive elements
- Gradient transitions on buttons
- Toast notifications for user feedback

## 📁 Project Structure

```
Password-Strength-Analyzer/
├── index.html          # Main HTML structure
├── styles.css          # Modern dark theme styling
├── script.js           # Password analysis and generation logic
└── README.md           # This file
```

## 💻 Technical Details

### HTML
- Semantic HTML5 structure
- Accessible form elements
- Responsive meta viewport
- Organized sections for clarity

### CSS
- CSS Grid and Flexbox layouts
- CSS variables for theming
- Gradient backgrounds and borders
- Keyframe animations
- Media queries for responsiveness
- Smooth transitions and transforms

### JavaScript
- Object-oriented programming (PasswordAnalyzer class)
- Real-time event listeners
- Regex pattern matching for password criteria
- Entropy and crack time calculations
- Clipboard API integration
- Dynamic notification system

## 🔒 Security Notes

⚠️ **Important**: This tool is for educational and personal use only.

- All analysis happens **locally in your browser**
- No passwords are sent to any server
- No data is stored or logged
- Open source code you can inspect
- Safe to use with any password

**Best Practices:**
- Always use unique passwords for important accounts
- Never reuse passwords across multiple services
- Use a password manager for secure storage
- Enable two-factor authentication when available
- Avoid sharing your passwords with anyone

## 🌐 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| Opera   | ✅ Full |
| IE 11   | ❌ Not Supported |

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

## 🎯 Features Breakdown

### Input Section
- Password input field with toggle visibility
- Real-time strength analysis
- Visual strength bar with color coding
- Requirements checklist
- Detailed analysis metrics

### Generator Section
- Length slider (8-32 characters)
- Character type checkboxes
- Generate button with gradient hover effect
- Generated password display
- One-click copy button

### Tips Section
- Security best practices
- Password recommendations
- General security advice

## 🚀 Future Enhancements

Potential features for future versions:
- [ ] Password history tracking
- [ ] Common password detection
- [ ] Dark/Light theme toggle
- [ ] Keyboard shortcuts
- [ ] Export password analysis report
- [ ] Language internationalization
- [ ] Custom character set options
- [ ] Password strength database comparison

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Support

For issues, questions, or suggestions, please:
- Open an issue on GitHub
- Check existing documentation
- Review the code comments

## 🙏 Acknowledgments

- Inspired by modern web design trends
- Built with accessibility in mind
- Password strength methodology based on industry standards

---

**Made with ❤️ by Ole1630**

### Quick Links
- 🔗 [GitHub Repository](https://github.com/ole1630/Password-Strength-Analyzer)
- 📖 [Security Tips](https://www.cisa.gov/tips)
- 🛡️ [Password Manager Recommendations](https://www.eff.org/deeplinks/2020/07/how-help-your-loved-ones-install-and-use-password-manager)

---

*Last Updated: July 2026*
