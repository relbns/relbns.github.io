---
title: "עבודה נכונה עם Git ו־GitHub בצוות"
description: "מדריך מלא לניהול עבודה בצוותי פיתוח: clone, branch, commit, push, pull, merge ו־checkout ל־branches של אחרים."
publishDate: "2025-10-12"
category: "Git & GitHub"
difficulty: "מתחיל"
tags: ["Git", "GitHub", "Branching", "Collaboration", "Workflow"]
image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop"
duration: "20 דקות"
author: "Ariel Benesh"
nextTutorial: "/tutorials/contributing-to-open-source"
---

# עבודה נכונה עם Git ו־GitHub בצוות

בעולם הפיתוח, עבודה עם **Git ו־GitHub** היא חלק יומיומי בלתי נפרד.  
המדריך הזה יסביר איך עובדים נכון בצוות – משלב ההעתקה של הרפוזיטורי, דרך יצירת branch חדש, ועד ניהול מיזוגים ופתרון קונפליקטים.

---

## שלב 1: יצירת עותק מקומי מהרפוזיטורי (Clone)

ב־GitHub, עבור לרפוזיטורי הרצוי, לחץ על כפתור **Code → SSH** והעתק את הקישור.  
לאחר מכן, פתח טרמינל והרץ:

```bash
git clone git@github.com:username/repo-name.git
```

לאחר סיום ההורדה:
```bash
cd repo-name
```

---

## שלב 2: יצירת Branch חדש (מומלץ עם git switch)

למרות ש־`git checkout -b` עדיין נפוצה, אני ממליץ להשתמש ב `git switch`:

```bash
git switch -c feature/user-profile
```

הסבר:
- `-c` יוצר branch חדש.
- כדאי לתת שם תיאורי לבראנץ', לדוגמה:
  - /feature
  - /fix
  - /hotfix

---

## שלב 3: ביצוע שינויים ו־Commit

לאחר שביצעת שינויים בקוד:
```bash
git add .
git commit -m "הוספת קומפוננטת פרופיל משתמש"
```

אתה יכול לבדוק את הסטטוס שלך בכל שלב:
```bash
git status
```

---

## שלב 4: דחיפת השינויים ל־GitHub

```bash
git push origin feature/user-profile
```

אם זו הפעם הראשונה שאתה דוחף את הבראנץ':
```bash
git push -u origin feature/user-profile
```

ה־`-u` מגדיר את הקישור בין ה־branch המקומי ל־remote כך שבעתיד תוכל פשוט להריץ `git push` בלבד.

אם התקנתם zsh git plugin אתם תוכלו להשתמש בפונציות וב alias שמוגדרים שם כדי לא לכתוב כל פעם את שם הbranch

למשל

```bash
git push origin "$(git_current_branch)"
```

---

## שלב 5: עבודה על Branch של מפתח אחר

לפעמים תצטרך לבדוק או להוסיף קוד ל־branch של קולגה.  
קודם משוך את כל העדכונים:
```bash
git fetch
```

לאחר מכן, הרץ:
```bash
git switch -t origin/feature/teammate-branch
```

אם במהלך העבודה הקולגה דחף עוד תיקונים תצטרך למשוך אליך ולמרג׳ג׳ את הremote האחרון כך:
```bash
git pull origin feature/teammate-branch
```

גם כאן ניתן להשתמש בפונקציה שמאחורי הקלעים מוגדרת כך:
```bash
git pull origin $(git_main_branch)
```



---

## שלב 6: מעבר ל־Commit ספציפי (לצורך בדיקה)

אם אתה רוצה לבדוק מצב מסוים של הקוד לפי commit hash מה־GitHub:
```bash
git checkout 3fb7ac231f7bd355abe7cc09886b541eca69b892
```
כדי לחזור ל־branch הרגיל שלך:
```bash
git switch main
```

---

## שלב 7: משיכת עדכונים (Pull / Rebase)

אם מישהו עדכן את ה־branch הראשי, תעדכן את הקוד שלך:
```bash
git pull origin main
```
או במידה ואתה מעדיף היסטוריה מסודרת:
```bash
git pull --rebase origin main
```

---

## שלב 8: פתיחת Pull Request

לאחר שדחפת את השינויים שלך ל־GitHub, עבור לעמוד הרפוזיטורי – תוצג לך הצעה לפתוח **Pull Request**.  
תאר את השינוי שביצעת, ובחר מישהו שיבצע review.

---

## שלב 9: פתרון Merge Conflicts

אם במהלך המיזוג מופיע קונפליקט:
1. פתח את הקובץ בIDE המועדף עליך.
2. בחר אילו שינויים לשמור.
3. לאחר התיקון:
   ```bash
   git add .
   git commit
   git push
   ```

---

## 💡 טיפים לסיום

- בצע `git pull` בכל תחילת יום עבודה.  
- שמור על שמות branches ברורים.  
- כתוב הודעות commit משמעותיות.  
- השתמש ב־`git switch` כדי לעבור בין ענפים בקלות.

---

המשך למדריך הבא: [איך תורמים לקוד פתוח ב־GitHub →](/tutorials/contributing-to-open-source)

---
