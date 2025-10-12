---
title: "מדריך מלא לפרסום ספריות ב־npm עם ניהול גרסאות (SemVer)"
description: "למדו איך לנהל גרסאות בעזרת Semantic Versioning, ליצור ריליסים בגיטהאב, ולהפיץ ספריות ל־npm בצורה אוטומטית עם GitHub Actions."
publishDate: "2025-10-03"
category: "פיתוח"
difficulty: "בינוני"
tags: ["npm", "GitHub Actions", "SemVer", "Open Source", "Versioning"]
image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop"
duration: "25 דקות"
views: 0
author: "Ariel Benesh"
---

# מדריך מלא לפרסום ספריות ב־npm עם ניהול גרסאות (SemVer)

פרסום ספרייה משלכם ל־npm נשמע מאיים, אבל עם **ניהול גרסאות לפי SemVer** ואוטומציה ב־GitHub Actions, התהליך הופך לפשוט ומסודר.  
במדריך הזה נעבור שלב־שלב: איך להגדיר גרסאות, איך ליצור Release בגיטהאב, ואיך לדחוף אוטומטית את הספרייה ל־npm.

---

## מה זה Semantic Versioning (SemVer)?

**SemVer** הוא תקן שמחלק מספרי גרסאות לשלושה חלקים:

```
MAJOR.MINOR.PATCH
```

- **MAJOR** – שינוי ששובר תאימות (Breaking Changes)  
- **MINOR** – תוספת פיצ'רים חדשים בלי לשבור תאימות  
- **PATCH** – תיקוני באגים ושיפורים קטנים  

### דוגמאות:
- `1.0.0` → גרסה ראשונה יציבה  
- `1.0.1` → תיקון באג קטן  
- `1.1.0` → פיצ'ר חדש שנוסף בלי לשבור תאימות  
- `2.0.0` → שינוי גדול ששובר תאימות עם קוד קודם  

---

## שלב 1: עדכון גרסה מקומית

ב־npm יש פקודה מובנית לעדכון גרסה:

```bash
# תיקון באג קטן
npm version patch

# פיצ'ר חדש
npm version minor

# שינוי גדול ששובר תאימות
npm version major
```

הפקודה הזו:
1. תעדכן את `package.json` עם הגרסה החדשה.  
2. תיצור commit אוטומטי.  
3. תוסיף tag מתאים (למשל `v1.0.1`).  

---

## שלב 2: דחיפת הטאגים לגיטהאב

```bash
git push origin main --tags
```

הפקודה הזאת דוחפת ל־remote גם את הקוד וגם את ה־tag של הגרסה.
החליפו את השם של ה־branch הראשי שלכם בשם שמוגדר אצלכם (main, master, etc)

---

## שלב 3: יצירת Release בגיטהאב

1. היכנס ל־**Releases** ברפו.  
2. לחץ על **New Release**.  
3. בחר את ה־tag שיצרת (או צור חדש).  
4. תן כותרת – למשל:  
   ```
   v1.0.0 – גרסה ראשונה 🎉
   ```
5. הוסף Release Notes – מה חדש, אילו פיצ'רים נוספו או באגים תוקנו.  
6. לחץ **Publish release**.  

---

## שלב 4: GitHub Actions ל־npm

קובץ ה־workflow שלך (ב־`.github/workflows/publish.yml`) צריך להיראות בערך כך:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  build-and-publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://registry.npmjs.org
      - run: npm ci
      - run: npm run build
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

- צריך להכניס את ה־`NPM_TOKEN` שלך ל־**GitHub Secrets** של הרפוזיטורי.  
- בכל פעם שתיצור Release חדש → הוא ירוץ אוטומטית ויפרסם ל־npm.  

---

## שלב 5: בדיקה אחרי הפרסום

אחרי שה־workflow רץ בהצלחה:  
```bash
npm info שם-הספרייה-שלך
```

או פשוט גש לכתובת:  
```
https://www.npmjs.com/package/your-package-name
```

---

## טיפים לניהול גרסאות

1. **אל תדלג על מספרים** – תמיד patch → minor → major.  
2. **תעד שינויים** – נהל קובץ `CHANGELOG.md` או כתוב Notes בריליסים.  
3. **שמור על תאימות לאחור** – במידת האפשר, תעדכן MINOR במקום MAJOR.  
4. **בדוק לוקאלית לפני פרסום** – תריץ `npm run build` ותבדוק את הספרייה בפרויקט דמו.  
5. **שחרור ראשון?** תמיד `1.0.0`.  

---

## סיכום

בזכות **SemVer** ו־**GitHub Actions**, כל פרסום גרסה הופך לשגרה פשוטה:  
- `npm version`  
- `git push --tags`  
- יצירת Release בגיטהאב  
- פרסום ל־npm מתבצע אוטומטית  

כך אפשר לתחזק ספרייה בצורה מקצועית, ברורה ונוחה לשימוש גם עבורך וגם עבור הקהילה.
