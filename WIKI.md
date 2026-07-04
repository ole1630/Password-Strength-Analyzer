# Password Strength Analyzer Wiki

Welcome to the **Password Strength Analyzer** wiki! This comprehensive guide will help you understand, use, and contribute to this modern password security tool.

## 📚 Table of Contents

1. [Getting Started](#getting-started)
2. [Features Overview](#features-overview)
3. [How to Use](#how-to-use)
4. [Technical Architecture](#technical-architecture)
5. [Password Strength Algorithm](#password-strength-algorithm)
6. [Security & Privacy](#security--privacy)
7. [Troubleshooting](#troubleshooting)
8. [Contributing](#contributing)
9. [FAQ](#faq)

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge, Opera)
- Internet connection (optional - application runs offline)
- No installation required!

### Quick Start
1. Download or clone the repository
2. Open `index.html` in your web browser
3. Start analyzing and generating passwords!

**That's it!** The application is fully functional and self-contained.

---

## Features Overview

### 1. **Password Analysis**
Analyze any password in real-time as you type.

**What it checks:**
- Overall strength score (0-100)
- Password length
- Character variety (uppercase, lowercase, numbers, symbols)
- Patterns (consecutive characters, sequential patterns)
- Entropy calculation
- Estimated crack time

**Visual Feedback:**
- Color-coded strength bar
- Requirements checklist
- Detailed analytics panel

### 2. **Password Generation**
Create cryptographically secure passwords with customizable options.

**Customization:**
- Length: 8-32 characters
- Include uppercase letters (A-Z)
- Include lowercase letters (a-z)
- Include numbers (0-9)
- Include special characters (!@#$%^&*)

**Features:**
- One-click generation
- Copy to clipboard with confirmation
- Instant analysis of generated passwords

### 3. **Security Metrics**
Understand your password's security level.

**Metrics Provided:**
- **Length**: Total number of characters
- **Entropy**: Bits of security provided
- **Crack Time**: Estimated time to brute force (at 1B guesses/sec)
- **Requirements Met**: Visual checklist of security criteria

### 4. **User Interface**
Beautiful, responsive dark theme with gradients and animations.

**Design Features:**
- Modern dark mode (easy on eyes)
- Gradient color scheme (purple, pink, green)
- Smooth animations and transitions
- Fully responsive (desktop, tablet, mobile)
- Accessibility-focused

---

## How to Use

### Analyzing a Password

1. **Enter Your Password**
   - Click the "Enter Password" field
   - Type or paste your password
   - Use the eye icon (👁️) to show/hide the password

2. **View Real-Time Analysis**
   - Strength bar updates instantly
   - Requirements checklist shows which criteria are met
   - Detailed metrics appear below

3. **Interpret Results**
   - **Weak** (0-39): Needs improvement
   - **Fair** (40-59): Acceptable but could be stronger
   - **Good** (60-79): Strong password
   - **Very Strong** (80-100): Excellent security

### Generating a Password

1. **Adjust Settings**
   - Use the length slider (8-32 characters)
   - Check/uncheck character type options
   - Select at least one character type

2. **Generate**
   - Click "Generate Password"
   - Password appears in the display field

3. **Copy & Use**
   - Click the clipboard icon (📋) to copy
   - Success notification confirms copy
   - Paste into your application

4. **Regenerate if Needed**
   - Click "Generate Password" again
   - Each click creates a new random password

---

## Technical Architecture

### Project Structure

```
Password-Strength-Analyzer/
├── index.html          # Main HTML file - DOM structure
├── styles.css          # CSS styling - Dark theme, gradients
├── script.js           # JavaScript - Password logic & analysis
└── README.md           # Project documentation
```

### Technology Stack

| Technology | Purpose | Usage |
|-----------|---------|-------|
| HTML5 | Structure | Semantic markup, form elements |
| CSS3 | Styling | Gradients, animations, responsive design |
| JavaScript | Logic | Password analysis, generation, UI updates |

### Key JavaScript Components

**PasswordAnalyzer Class**
- Main controller class
- Handles all password operations
- Manages event listeners

**Methods:**
- `calculateStrength()` - Compute strength score
- `generatePassword()` - Create random password
- `analyzePassword()` - Real-time analysis
- `calculateEntropy()` - Security bits calculation
- `estimateCrackTime()` - Time to crack estimation

---

## Password Strength Algorithm

### Scoring System (0-100)

#### Base Points (up to 30 points)
- 8+ characters: 10 points
- 12+ characters: 10 points
- 16+ characters: 10 points

#### Character Variety (60 points)
- Uppercase letters (A-Z): 15 points
- Lowercase letters (a-z): 15 points
- Numbers (0-9): 15 points
- Special characters: 20 points

#### Penalties (deducted)
- Consecutive characters (e.g., "aaa"): -10 points
- Sequential patterns (e.g., "abc", "123"): -10 points

### Example Scores

| Password | Score | Strength | Reasoning |
|----------|-------|----------|-----------|
| `Pass123` | 45 | Fair | Has variety but too short |
| `MyP@ssw0rd` | 75 | Good | Length + all character types |
| `X7$mK9pL#vQ2nB!r` | 95 | Very Strong | Long + diverse + no patterns |

### Entropy Calculation

```
Entropy = log₂(character_space ^ password_length)
```

**Character Space Values:**
- Lowercase: 26
- Uppercase: 26
- Digits: 10
- Symbols: 32

**Example:**
- Password: "Test1234"
- Character space: 26 + 26 + 10 = 62
- Length: 8
- Entropy: log₂(62^8) ≈ 48 bits

### Crack Time Estimation

```
Time = (2^entropy) / 1,000,000,000 guesses per second
```

**Assumptions:**
- 1 billion guesses per second (modern GPU)
- Random password (no shortcuts)
- Average case (found after 50% of attempts)

**Examples:**
- 48 bits: ~19 days
- 64 bits: ~278 years
- 128 bits: ~10 billion years

---

## Security & Privacy

### ✅ What's Secure

**Local Processing:**
- All analysis happens in your browser
- No server communication
- No data collection or logging
- Code is open source (inspect it!)

**Safe to Use With:**
- Real passwords
- Sensitive information
- Any private data

### ⚠️ Important Notes

**Not for Storage:**
- This tool analyzes passwords, doesn't store them
- Use a password manager (Bitwarden, 1Password, LastPass) for storage

**Network Security:**
- Analysis is local, but passwords in actual use need HTTPS
- Always use HTTPS when entering credentials on websites

**Best Practices:**
- Use unique passwords for each account
- Store passwords in a password manager
- Enable 2FA (two-factor authentication)
- Never share your passwords

---

## Troubleshooting

### Common Issues

**Q: The password field doesn't respond**
- Check if JavaScript is enabled in your browser
- Try refreshing the page
- Clear browser cache and try again

**Q: Password visibility toggle doesn't work**
- Ensure browser supports modern JavaScript
- Try a different browser (Chrome, Firefox, Safari)

**Q: Copy to clipboard doesn't work**
- Check browser permissions
- Some older browsers don't support Clipboard API
- Use Ctrl+C/Cmd+C to copy manually

**Q: Generated passwords look weak**
- Ensure all character types are selected
- Increase the password length slider
- Click "Generate" multiple times to get different passwords

**Q: Strength meter seems inaccurate**
- Refresh the page
- Clear the input and re-enter the password
- Check that special characters are properly recognized

### Browser Compatibility

| Browser | Status | Version |
|---------|--------|---------|
| Chrome | ✅ Fully Supported | Latest |
| Firefox | ✅ Fully Supported | Latest |
| Safari | ✅ Fully Supported | 12+ |
| Edge | ✅ Fully Supported | Latest |
| Opera | ✅ Fully Supported | Latest |
| Internet Explorer | ❌ Not Supported | N/A |

---

## Contributing

### How to Contribute

1. **Fork the Repository**
   ```bash
   Click "Fork" on GitHub
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test thoroughly

4. **Commit Your Changes**
   ```bash
   git commit -m "Add: description of changes"
   ```

5. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Submit a Pull Request**
   - Describe your changes
   - Reference any issues
   - Wait for review

### Contribution Guidelines

**Code Style:**
- Use meaningful variable names
- Add comments for complex functions
- Keep functions small and focused
- Follow existing formatting

**Testing:**
- Test on multiple browsers
- Test on mobile devices
- Test edge cases
- Verify no console errors

**Documentation:**
- Update README if needed
- Add comments to code
- Document new features

### Suggested Improvements

- [ ] Common passwords database check
- [ ] Dark/Light theme toggle
- [ ] Language internationalization
- [ ] Keyboard shortcuts
- [ ] Export analysis report
- [ ] Password history
- [ ] Custom character sets
- [ ] Strength comparison chart

---

## FAQ

### General Questions

**Q: Is this tool safe to use with my real passwords?**
A: Yes! All processing happens locally in your browser. Your passwords never leave your device. However, don't use this for storing passwords - use a password manager.

**Q: Can I use this offline?**
A: Yes! Download the files and open `index.html` locally. No internet connection required.

**Q: What do the strength levels mean?**
A: Weak (0-39) needs improvement, Fair (40-59) is okay, Good (60-79) is strong, Very Strong (80-100) is excellent.

### Technical Questions

**Q: How is entropy calculated?**
A: We use the formula: log₂(character_space^password_length). Character space depends on what character types are used.

**Q: Why does crack time vary?**
A: Crack time depends on entropy bits. Higher entropy means exponentially longer time to crack. We assume 1 billion guesses per second.

**Q: Can I modify the source code?**
A: Absolutely! The code is open source. Feel free to fork, modify, and improve it.

**Q: How do special characters affect strength?**
A: Special characters increase the character space significantly. They're worth 20 points in our scoring system.

### Password Best Practices Questions

**Q: What makes a good password?**
A: At least 12 characters, mix of uppercase, lowercase, numbers, and symbols. Avoid personal info, dictionary words, and sequential patterns.

**Q: Should I use the same password everywhere?**
A: Never! Use unique passwords for each account. If one service is compromised, others remain secure.

**Q: What's a password manager?**
A: Software that generates, stores, and autofills unique strong passwords. Examples: Bitwarden, 1Password, LastPass.

**Q: Is 8 characters enough?**
A: Technically possible but weak. Aim for 12+ characters. NIST recommends checking against common passwords rather than length alone.

### Troubleshooting Questions

**Q: Why won't my password copy to clipboard?**
A: Some browsers restrict this for security. Try using Ctrl+C/Cmd+C manually, or check browser permissions.

**Q: The page looks broken on my phone**
A: Clear your browser cache and refresh. Report the issue on GitHub if it persists.

**Q: Can I use this in production/on my website?**
A: Yes! Feel free to integrate it. The code is open source under MIT license.

---

## Resources & Links

### Security Resources
- [OWASP Password Guidelines](https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html)
- [NIST Cybersecurity Guidelines](https://pages.nist.gov/800-63-3/)
- [Have I Been Pwned](https://haveibeenpwned.com/)

### Password Managers
- [Bitwarden](https://bitwarden.com/) - Open source
- [1Password](https://1password.com/)
- [LastPass](https://www.lastpass.com/)
- [KeePass](https://keepass.info/) - Offline

### Learning Resources
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | July 2026 | Initial release |
| | | Core password analysis |
| | | Password generator |
| | | Dark theme UI |
| | | Mobile responsive |

---

## License

This project is licensed under the **MIT License**.

### Permission
- ✅ Use commercially
- ✅ Modify the code
- ✅ Distribute copies
- ✅ Use privately

### Conditions
- ℹ️ Include license notice
- ℹ️ Include copyright notice
- ℹ️ State changes made

### Limitations
- ❌ No liability
- ❌ No warranty

---

## Support & Contact

### Getting Help
- 📖 Check this wiki first
- 🐛 Report issues on GitHub
- 💬 Ask questions in discussions
- 📧 Contact: [Your Contact Info]

### Reporting Bugs
Please include:
1. Browser and version
2. Steps to reproduce
3. Expected vs. actual behavior
4. Screenshots if applicable

### Feedback
We'd love to hear your feedback! Submit feature requests, suggestions, or improvements on GitHub.

---

**Made with ❤️ by Ole1630**

*Last Updated: July 2026*
