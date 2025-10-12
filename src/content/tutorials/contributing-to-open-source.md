---
title: "איך תורמים לפרויקט קוד פתוח ב־GitHub"
description: "מדריך מעשי לתרומה לקוד פתוח: איך עושים fork, עובדים ב־branch עצמאי, שולחים pull request ומתקשרים עם בעלי הפרויקט."
publishDate: "2025-10-12"
category: "Git & GitHub"
difficulty: "בינוני"
tags: ["Open Source", "GitHub", "Fork", "Pull Request", "Collaboration"]
image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop"
duration: "25 דקות"
author: "Ariel Benesh"
previousTutorial: "/tutorials/git-team-workflow"
---

# איך תורמים לפרויקט קוד פתוח ב־GitHub

קוד פתוח הוא דרך נהדרת ללמוד, לשפר את היכולות שלך ולתרום לקהילה.  
במדריך הזה נלמד איך לתרום לפרויקט קיים ב־GitHub בצורה מקצועית.

---

## שלב 1: מציאת פרויקט רלוונטי

גש ל־[GitHub Explore](https://github.com/explore) וחפש לפי תחום עניין.  
שים לב לתגים כמו:
- `good first issue`
- `help wanted`

---

## שלב 2: יצירת Fork

ראשית תבדוק מה הדרישות של ה repository owner לתרומות לקוד, לפעמים זה מופיע בreadme לפעמים יש מסמך נפרד, עקוב אחרי ההוראות והקונבנציות שהוגדרו ואז תוכל להתפנות לעבוד על הפרויקט.

כאשר אין לך הרשאה לכתוב ישירות בפרויקט, אתה יוצר **fork** — עותק אישי של הרפוזיטורי.

לחץ על כפתור **Fork** בצד ימין העליון בדף הפרויקט.  
לאחר מכן, ה־fork יופיע אצלך תחת המשתמש שלך.

---

## שלב 3: Clone ל־fork שלך

```bash
git clone git@github.com:your-username/the-forked-project.git
cd the-forked-project
```

---

## שלב 4: יצירת Branch חדש

כדי להפריד את השינויים שלך מה־main:
```bash
git switch -c fix/typo-in-readme
```

---

## שלב 5: בצע את השינוי שלך

ערוך את הקבצים, שמור, ובצע commit:
```bash
git add .
git commit -m "תיקון טעות כתיב בקובץ README"
```

---

## שלב 6: דחוף את השינויים שלך

```bash
git push -u origin fix/typo-in-readme
```

---

## שלב 7: שליחת Pull Request

1. חזור ל־GitHub שלך.  
2. יוצג לך כפתור **Compare & pull request**.  
3. כתוב תיאור קצר וברור של התרומה שלך.  
4. לחץ על **Create pull request**.

---

## שלב 8: עדכון ה־fork שלך

אם עבר זמן מאז יצרת את ה־fork, ייתכן שהפרויקט המקורי התעדכן.  
כדי למשוך את העדכונים:

```bash
git remote add upstream git@github.com:original-owner/original-repo.git
git fetch upstream
git switch main
git merge upstream/main
git push origin main
```

---

## שלב 9: התמודדות עם הערות ו־Reviews

אם מנהלי הפרויקט ביקשו שינויים, בצע אותם באותו branch ודחוף שוב:
```bash
git add .
git commit -m "יישום הערות מה־review"
git push
```

השינויים יתעדכנו אוטומטית באותו pull request.

---

## 💡 טיפים חשובים

- תמיד עבוד על branch חדש לכל תרומה.  
- קרא את קובץ ה־CONTRIBUTING.md של הפרויקט לפני התחלה.  
- שמור על שפה נעימה ותקשורת מכבדת ב־reviews.  
- גם תיקון קטן (כמו טעות כתיב) הוא תרומה חשובה!

---

🏁 ככה נראית תרומה אמיתית לקהילה – פשוטה, ברורה, מקצועית.  
אם עקבת אחרי כל השלבים — אתה כבר contributor.
