---
title: "התקנת סביבת פיתוח ב־Linux או macOS"
description: "מדריך מלא להקמת סביבת פיתוח על Linux או macOS. כולל התקנת Git, Curl, Node.js, nvm, VSCode, ויצירת SSH keys."
publishDate: "2025-9-13"
category: "Setup"
difficulty: "מתחיל"
tags: ["Linux", "macOS", "Node.js", "nvm", "VSCode", "Git"]
image: "https://images.pexels.com/photos/34258667/pexels-photo-34258667.jpeg"
duration: "20 דקות"
views: 0
author: "Ariel Benesh"
previousTutorial: "/tutorials/windows-wsl-setup"
nextTutorial: "/tutorials/zsh-setup"
---

# התקנת סביבת פיתוח ב־Linux או macOS

אם אתה עובד על מחשב macOS או Linux, אתה כבר קרוב מאוד לסביבת פיתוח מוכנה.  
במדריך זה נתקין את הכלים הבסיסיים שכל מפתח צריך: Git, Node.js, nvm, VSCode, ו־SSH key לחיבור ל־GitHub.

---

## שלב 1: עדכון מערכת

**Linux (Ubuntu / Debian):**
```bash
sudo apt update && sudo apt upgrade -y
```

**macOS (עם Homebrew):**
```bash
brew update && brew upgrade
```

---

## שלב 2: התקנת Git ו־Curl

**Linux:**
```bash
sudo apt install git curl zip -y
```

**macOS:**
```bash
brew install git curl
```

בדוק:
```bash
git --version
curl --version
```

---

## שלב 3: הגדרת זהות Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

## שלב 4: יצירת SSH Key לחיבור ל־GitHub

```bash
ssh-keygen -t ed25519 -C "your@email.com"
```
לאחר מכן:
```bash
cat ~/.ssh/id_ed25519.pub
```
העתק את הפלט אל [GitHub SSH Keys](https://github.com/settings/keys) → Add new SSH key.

---

## שלב 5: התקנת Node.js עם nvm

**Linux:**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

**macOS:**
```bash
brew install nvm
```

לאחר מכן:
```bash
nvm install --lts
nvm alias default lts/*
node -v
npm -v
```

---

## שלב 6: התקנת VSCode

- הורד מ־[https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)  
- התקן הרחבות חובה:
  - Prettier
  - ESLint
  - GitLens
  - Bracket Pair Colorizer

---

## שלב 7: יצירת תיקיית עבודה

```bash
mkdir -p ~/workspace/projects
cd ~/workspace/projects
```

---

## סיכום

במדריך זה הגדרת סביבת עבודה מלאה בלינוקס או מק:  
- עדכון מערכת  
- התקנת Git, Curl, nvm, Node.js  
- יצירת SSH key  
- התקנת VSCode עם הרחבות מומלצות  

המשך אל [התקנת ZSH ו־Powerlevel10k →](/tutorials/zsh-setup)

---
