// Password Strength Analyzer - Main Script

class PasswordAnalyzer {
    constructor() {
        this.passwordInput = document.getElementById('passwordInput');
        this.strengthFill = document.getElementById('strengthFill');
        this.strengthText = document.getElementById('strengthText');
        this.togglePassword = document.getElementById('togglePassword');
        this.generatedPassword = document.getElementById('generatedPassword');
        this.generateBtn = document.getElementById('generateBtn');
        this.copyBtn = document.getElementById('copyBtn');
        this.passwordLength = document.getElementById('passwordLength');
        this.lengthValue2 = document.getElementById('lengthValue2');
        
        this.initEventListeners();
    }

    initEventListeners() {
        // Password input events
        this.passwordInput.addEventListener('input', () => this.analyzePassword());
        this.togglePassword.addEventListener('click', () => this.togglePasswordVisibility());

        // Generator events
        this.generateBtn.addEventListener('click', () => this.generatePassword());
        this.copyBtn.addEventListener('click', () => this.copyToClipboard());
        this.passwordLength.addEventListener('input', (e) => {
            this.lengthValue2.textContent = e.target.value;
        });

        // Trigger initial analysis
        this.analyzePassword();
    }

    // Toggle password visibility
    togglePasswordVisibility() {
        const isPassword = this.passwordInput.type === 'password';
        this.passwordInput.type = isPassword ? 'text' : 'password';
        this.togglePassword.textContent = isPassword ? '🙈' : '👁️';
    }

    // Analyze password strength
    analyzePassword() {
        const password = this.passwordInput.value;
        const analysis = this.calculateStrength(password);

        this.updateStrengthBar(analysis);
        this.updateRequirements(password);
        this.updateAnalysis(password, analysis);
    }

    // Calculate password strength
    calculateStrength(password) {
        let score = 0;
        const analysis = {
            length: password.length,
            hasUppercase: /[A-Z]/.test(password),
            hasLowercase: /[a-z]/.test(password),
            hasNumbers: /\d/.test(password),
            hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
            hasConsecutive: /(.)\1{2,}/.test(password),
            hasSequential: /(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|012|123|234|345|456|567|678|789)/i.test(password),
        };

        // Base score
        if (analysis.length >= 8) score += 10;
        if (analysis.length >= 12) score += 10;
        if (analysis.length >= 16) score += 10;

        // Character variety
        if (analysis.hasUppercase) score += 15;
        if (analysis.hasLowercase) score += 15;
        if (analysis.hasNumbers) score += 15;
        if (analysis.hasSpecial) score += 20;

        // Deductions
        if (analysis.hasConsecutive) score -= 10;
        if (analysis.hasSequential) score -= 10;

        analysis.score = Math.max(0, Math.min(100, score));
        return analysis;
    }

    // Update strength bar
    updateStrengthBar(analysis) {
        const score = analysis.score;
        let strength = 'Weak';
        let strengthClass = 'weak';

        if (score >= 80) {
            strength = 'Very Strong';
            strengthClass = 'strong';
        } else if (score >= 60) {
            strength = 'Strong';
            strengthClass = 'good';
        } else if (score >= 40) {
            strength = 'Fair';
            strengthClass = 'fair';
        }

        this.strengthFill.className = `strength-fill ${strengthClass}`;
        this.strengthText.textContent = strength;
    }

    // Update requirements checklist
    updateRequirements(password) {
        const requirements = {
            'req-length': password.length >= 8,
            'req-uppercase': /[A-Z]/.test(password),
            'req-lowercase': /[a-z]/.test(password),
            'req-numbers': /\d/.test(password),
            'req-special': /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
        };

        Object.keys(requirements).forEach(reqId => {
            const element = document.getElementById(reqId);
            if (requirements[reqId]) {
                element.classList.add('met');
            } else {
                element.classList.remove('met');
            }
        });
    }

    // Update analysis details
    updateAnalysis(password, analysis) {
        // Length
        document.getElementById('lengthValue').textContent = password.length;

        // Entropy
        const entropy = this.calculateEntropy(password);
        document.getElementById('entropy').textContent = `${entropy} bits`;

        // Time to crack
        const crackTime = this.estimateCrackTime(entropy);
        document.getElementById('crackTime').textContent = crackTime;
    }

    // Calculate entropy
    calculateEntropy(password) {
        let characterSpace = 0;
        if (/[a-z]/.test(password)) characterSpace += 26;
        if (/[A-Z]/.test(password)) characterSpace += 26;
        if (/\d/.test(password)) characterSpace += 10;
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) characterSpace += 32;

        if (characterSpace === 0) return 0;
        const entropy = Math.log2(Math.pow(characterSpace, password.length));
        return Math.round(entropy);
    }

    // Estimate crack time
    estimateCrackTime(entropy) {
        const guessesPerSecond = 1e9; // 1 billion guesses per second
        const secondsToGuess = Math.pow(2, entropy) / guessesPerSecond;

        if (secondsToGuess < 1) return 'Less than 1 second';
        if (secondsToGuess < 60) return `${Math.round(secondsToGuess)} seconds`;
        if (secondsToGuess < 3600) return `${Math.round(secondsToGuess / 60)} minutes`;
        if (secondsToGuess < 86400) return `${Math.round(secondsToGuess / 3600)} hours`;
        if (secondsToGuess < 2592000) return `${Math.round(secondsToGuess / 86400)} days`;
        if (secondsToGuess < 31536000) return `${Math.round(secondsToGuess / 2592000)} months`;
        return `${Math.round(secondsToGuess / 31536000)} years`;
    }

    // Generate password
    generatePassword() {
        const length = parseInt(this.passwordLength.value);
        const useUppercase = document.getElementById('genUppercase').checked;
        const useLowercase = document.getElementById('genLowercase').checked;
        const useNumbers = document.getElementById('genNumbers').checked;
        const useSpecial = document.getElementById('genSpecial').checked;

        let characters = '';
        if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (useNumbers) characters += '0123456789';
        if (useSpecial) characters += '!@#$%^&*()_+-=[]{};\':"|,.<>/?';

        if (characters.length === 0) {
            this.showNotification('Select at least one character type', 'error');
            return;
        }

        let password = '';
        for (let i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        this.generatedPassword.value = password;
        this.passwordInput.value = password;
        this.analyzePassword();
        this.showNotification('Password generated successfully!', 'success');
    }

    // Copy to clipboard
    copyToClipboard() {
        const password = this.generatedPassword.value;
        
        if (!password) {
            this.showNotification('Generate a password first', 'error');
            return;
        }

        navigator.clipboard.writeText(password).then(() => {
            this.copyBtn.textContent = '✓';
            this.copyBtn.classList.add('copied');
            this.showNotification('Password copied to clipboard!', 'success');

            setTimeout(() => {
                this.copyBtn.textContent = '📋';
                this.copyBtn.classList.remove('copied');
            }, 2000);
        }).catch(() => {
            this.showNotification('Failed to copy password', 'error');
        });
    }

    // Show notification
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 16px 24px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' : 'linear-gradient(135deg, #eb3349 0%, #f45c43 100%)'};
            color: white;
            border-radius: 10px;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
            font-weight: 600;
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Add animation styles for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PasswordAnalyzer();
});
