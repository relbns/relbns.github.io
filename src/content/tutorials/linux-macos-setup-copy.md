---
title: "התקנת סביבת פיתוח ב־Linux או macOS"
description: "מדריך מלא להקמת סביבת פיתוח על Linux או macOS. כולל התקנת Git, Curl, Node.js, nvm, VSCode, ויצירת SSH keys."
publishDate: "2025-09-13"
category: "Setup"
difficulty: "מתחיל"
tags: ["Linux", "macOS", "Node.js", "nvm", "VSCode", "Git"]
image: "https://images.pexels.com/photos/34258667/pexels-photo-34258667.jpeg"
duration: "25 דקות"
views: 0
author: "Ariel Benesh"
previousTutorial: "/tutorials/windows-wsl-setup"
nextTutorial: "/tutorials/zsh-setup"
---

# התקנת סביבת פיתוח ב־Linux או macOS

אם אתה עובד על מחשב **macOS** או **Linux**, אתה כבר קרוב מאוד לסביבת פיתוח מושלמת.  
במדריך זה נתקין את הכלים החשובים ביותר: Git, Node.js, nvm, VSCode, ו־SSH key לחיבור מאובטח ל־GitHub.

---

## שלב 1: עדכון מערכת

**Linux (Ubuntu / Debian):**
```bash
sudo apt update && sudo apt upgrade -y
````

**macOS:**
נשתמש ב־[Homebrew](https://brew.sh), מנהל החבילות המומלץ למק.

אם אין לך אותו מותקן, הרץ:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

לאחר מכן:

```bash
brew update && brew upgrade
```

---

## שלב 2: התקנת Git ו־כלים בסיסיים

**Linux:**

```bash
sudo apt install git curl zip -y
```

**macOS:**

```bash
brew install git
```

> אין צורך להתקין `curl` – הוא כבר קיים ב־macOS כברירת מחדל.

בדוק את ההתקנה:

```bash
git --version
curl --version
```

---

## שלב 3: הגדרת זהות Git

הגדר את השם והאימייל שלך כפי שהם מופיעים ב־GitHub:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

## שלב 4: יצירת מפתח SSH לחיבור ל־GitHub

המפתח מאפשר עבודה מאובטחת מול GitHub בלי להזין סיסמה בכל פעולה.

צור את המפתח:

```bash
ssh-keygen -t ed25519 -C "your@email.com"
```

לאחר מכן הפעל את ssh-agent והוסף את המפתח אליו:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

כעת הוסף את המפתח הציבורי לחשבון שלך ב־GitHub:

**Linux:**
```bash
cat ~/.ssh/id_ed25519.pub
```

**macOS:**
```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

העתק את הפלט לאתר
➡️ [GitHub SSH Keys → Add new key](https://github.com/settings/keys)

למדריך מפורט של GitHub [לחץ כאן](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

---

### קובץ config (לא חובה אך מומלץ)

אם יש לך כמה חשבונות GitHub או מפתחות שונים, צור קובץ הגדרות:

```bash
nano ~/.ssh/config
```

והדבק:

```
Host *
  AddKeysToAgent yes

Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519
```

שמור (`Ctrl+O`, `Enter`, `Ctrl+X`).

---

## שלב 5: התקנת Node.js עם nvm

ה־nvm מאפשר לך לנהל כמה גרסאות Node.js במקביל.

**Linux:**

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

**macOS (עם Homebrew):**

```bash
brew install nvm
```

לאחר ההתקנה, טען את nvm לכל סשן טרמינל אוטומטית על ידי הוספה לקובץ `~/.zshrc`:

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

סגור ופתח מחדש את הטרמינל (או הרץ `source ~/.zshrc`), ואז:

```bash
nvm install --lts
nvm alias default lts/*
node -v
npm -v
```

---

## שלב 6: התקנת VSCode

1. הורד את [Visual Studio Code](https://code.visualstudio.com/Download)
2. התקן הרחבות מומלצות:

   * **Prettier – Code Formatter**
   * **ESLint**
   * **GitLens**
   * **Bracket Pair Colorizer 2**

---

## שלב 7: יצירת תיקיית עבודה

מומלץ לרכז את כל הפרויקטים בתיקייה אחת, למשל:

```bash
mkdir -p ~/workspace
cd ~/workspace
```

---

## סיכום

✅ במדריך זה:

* עדכנת את המערכת
* התקנת Git, Curl (בלינוקס), Node.js ו־nvm
* יצרת SSH key מאובטח
* התקנת VSCode והרחבות
* הכנת תיקיית עבודה נוחה

כעת יש לך סביבת פיתוח מוכנה, יציבה ומסודרת.
המשך אל [המדריך לשדרוג הטרמינל עם ZSH ו־Powerlevel10k →](/tutorials/zsh-setup)
