---
title: "התקנת סביבת פיתוח ב־Windows עם WSL2 ו־Ubuntu"
description: "מדריך צעד־אחר־צעד להקמת סביבת פיתוח מקצועית על Windows בעזרת WSL2, Ubuntu ו־VSCode."
publishDate: "2025-10-12"
category: "Setup"
difficulty: "מתחיל"
tags: ["Windows", "WSL2", "Ubuntu", "VSCode", "Development Environment"]
image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
duration: "25 דקות"
views: 0
author: "Ariel Benesh"
nextTutorial: "/tutorials/linux-macos-setup"
---

# התקנת סביבת פיתוח ב־Windows עם WSL2 ו־Ubuntu

מדריך זה יעזור לך להקים סביבת פיתוח מלאה על **Windows 10 או 11**, שתאפשר לך לעבוד בדיוק כמו על מחשב Linux או macOS.  
נשתמש ב־**WSL2** (Windows Subsystem for Linux), נתקין **Ubuntu**, **Windows Terminal**, ונסנכרן אותם עם **VSCode**.

---

## שלב 1: הפעלת WSL2

1. פתח את תפריט Start והקלד **Windows Features**.  
2. סמן את האפשרויות הבאות:
   - *Windows Subsystem for Linux*
   - *Virtual Machine Platform*
3. אשר והפעל מחדש את המחשב.

במידה ואתה מקבל שגיאה הקשורה לוירטואליזציה – היכנס ל־BIOS והפעל את האפשרות **Virtualization Technology**.

---

## שלב 2: התקנת Windows Terminal

הורד את **Windows Terminal** מה־[Microsoft Store](https://aka.ms/terminal).  
לאחר ההתקנה, ניתן להגדיר אותו כ־terminal ברירת מחדל.

טיפ: בכל נתיב ב־terminal ניתן להריץ
```bash
explorer.exe .
```
כדי לפתוח את אותה תיקייה בחלון קבצים רגיל.

---

## שלב 3: התקנת Ubuntu

ב־Microsoft Store חפש **Ubuntu 22.04 LTS**, התקן ולחץ **Launch**.  
צור שם משתמש וסיסמה (אלה יידרשו בעתיד לפקודות sudo).

בדוק שהגרסה היא WSL2:
```bash
wsl -l -v
```
אם מופיע גרסה 1, המר לגרסה 2:
```bash
wsl --set-version Ubuntu-22.04 2
```

---

## שלב 4: עדכון מערכת והתקנת כלים בסיסיים

הרץ ב־terminal של Ubuntu:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install curl zip git -y
```

בדוק:
```bash
git --version
curl --version
```

---

## שלב 5: התקנת VSCode ו־WSL Extension

1. הורד את [VSCode](https://code.visualstudio.com/Download).  
2. פתח → Extensions → חפש “WSL” והתקן את ההרחבה.  
3. פתח את הפרויקט שלך:
```bash
code .
```

---

## שלב 6: התקנת Node.js עם nvm

התקנת nvm (Node Version Manager):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

לאחר מכן פתח מחדש את הטרמינל והרץ:
```bash
nvm install --lts
nvm alias default lts/*
node -v
npm -v
```

למידע נוסף: [ניהול גרסאות Node עם nvm →](/tutorials/linux-macos-setup)

---

## שלב 7: יצירת סביבת עבודה

```bash
mkdir -p ~/workspace/projects
cd ~/workspace/projects
```

---

## סיכום

במדריך זה:
- הפעלת WSL2
- התקנת Ubuntu
- עדכנת מערכת והתקנת Git, curl
- התקנת Node.js בעזרת nvm
- חיברת VSCode לסביבת WSL

מכאן המשך ל־[התקנת סביבת פיתוח ב־Linux או macOS →](/tutorials/linux-macos-setup)
