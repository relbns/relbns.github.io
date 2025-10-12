---
title: "התקנת ZSH ו־Powerlevel10k לטרמינל מקצועי"
description: "איך לשדרג את סביבת הפיתוח שלך עם טרמינל מהיר, צבעוני ומותאם אישית. כולל התקנת ZSH, Oh My Zsh ו־Powerlevel10k."
publishDate: "2025-06-14"
category: "Setup"
difficulty: "בינוני"
tags: ["ZSH", "Terminal", "Powerlevel10k", "Customization"]
image: "https://images.pexels.com/photos/34600/pexels-photo.jpg"
duration: "15 דקות"
views: 0
author: "Ariel Benesh"
previousTutorial: "/tutorials/linux-macos-setup"
---

# התקנת ZSH ו־Powerlevel10k לטרמינל מקצועי

אם אתה רוצה שטרמינל הפיתוח שלך יהיה מהיר, ברור ומעוצב — זה המקום הנכון להתחיל.  
ZSH הוא shell מתקדם שמחליף את bash, ו־Powerlevel10k מעניק לו עיצוב מודרני עם מידע שימושי (branch נוכחי, שעה, חיבור git ועוד).

> 💡 שים לב: במחשבי **macOS** אין צורך להתקין ZSH – הוא כבר מגיע כברירת מחדל עם המערכת.  
---

## שלב 1: התקנת ZSH (Linux בלבד)

```bash
sudo apt install zsh -y
````

הגדר את ZSH כברירת מחדל:

```bash
chsh -s $(which zsh)
```

---

## שלב 2: התקנת Oh My Zsh

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

לאחר ההתקנה יווצר קובץ `~/.zshrc` שנשתמש בו בהמשך.

---

## שלב 3: התקנת Powerlevel10k

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```

ערוך את הקובץ `~/.zshrc` ושנה את שורת הנושא:

```
ZSH_THEME="powerlevel10k/powerlevel10k"
```

לאחר מכן הפעל מחדש את הטרמינל:

```bash
# Linux
exec zsh

# macOS
source ~/.zshrc

```

המערכת תפעיל את אשף ההגדרה האוטומטי, אם תרצה תוכל להריץ לבד `p10k configure`.

---

## שלב 4: התקנת פונט Powerlevel10k (MesloLGS NF)

Powerlevel10k משתמש באייקונים מיוחדים שמופיעים רק עם מותאם, אחד כזה הוא **MesloLGS NF**.

1. הורד את הגופן מהעמוד הרשמי:
   [MesloLGS NF Font](https://github.com/romkatv/powerlevel10k#meslo-nerd-font-patched-for-powerlevel10k)

2. התקן את ארבעת קובצי הפונט (Regular, Bold, Italic, Bold Italic).

3. הגדר את הטרמינל שלך להשתמש בפונט החדש:

   * **macOS iTerm2** – עבור ל־iTerm2 או Terminal → Preferences → Profiles → Text → Font.
   * **Windows Terminal** – פתח Settings → Profiles → Font face.
   * **VSCode** – הוסף להגדרות:

     ```json
     "terminal.integrated.fontFamily": "MesloLGS NF"
     ```

להרחבה וקישורים נוספים:
[הוראות נוספות והתקנות חלופיות](https://gist.github.com/480/3b41f449686a089f34edb45d00672f28)

---

## שלב 5: התקנת Plugins שימושיים

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

עדכן את שורת ה־plugins בקובץ `~/.zshrc`:

```
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

---

## שלב 6: טעינת nvm בתוך ZSH

בסוף הקובץ `~/.zshrc` הוסף:

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

כך nvm יעבוד אוטומטית בכל פתיחת טרמינל.

---

## שלב 7: בדיקות סופיות

```bash
zsh --version
echo $ZSH_THEME
nvm --version
```

אם הכול תקין – הטרמינל שלך צריך להיות צבעוני, נוח, ומוכן לעבודה 🚀

---

## סיכום

במדריך זה:

* התקנת ZSH (בלינוקס בלבד)
* הוספת Oh My Zsh
* התקנת Powerlevel10k
* התקנת פונט MesloLGS NF
* הוספת Plugins חשובים
* טעינת nvm אוטומטית

הטרמינל שלך מוכן לעבודה מקצועית, מהירה ואלגנטית 🧠
