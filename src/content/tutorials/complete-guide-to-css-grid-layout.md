---
title: "המדריך השלם ל־CSS Grid Layout"
description: "בוא נלמד איך לעבוד עםCSS Grid מהבסיס ועד טכניקות מתקדמות."
publishDate: "2024-03-10"
category: "CSS"
difficulty: "בינוני"
tags: ["CSS", "Layout", "Grid", "Responsive Design"]
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
duration: "30 דקות"
views: 890
author: "Ariel Benesh"

---

# המדריך השלם ל־CSS Grid Layout

**CSS Grid** הוא אחד ממערכות הפריסה (Layout) החזקות ביותר הקיימות ב־CSS. הוא מאפשר ליצור מבנים מורכבים ורספונסיביים בדיוק ובקלות, דברים שבעבר היו כמעט בלתי אפשריים באמצעות שיטות פריסה מסורתיות כמו float או flexbox בלבד.

---

## מה זה בעצם CSS Grid?

**CSS Grid Layout** הוא מערכת דו־ממדית לפריסת תוכן — היא מאפשרת לך להניח אלמנטים בשורות ועמודות.
זוהי בחירה אידיאלית למבנים מורכבים שצריכים לעבוד היטב על מגוון גדלי מסכים.

---

## מושגי יסוד ב־Grid

### Grid Container ו־Grid Items

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}

.grid-item {
  background-color: #f0f0f0;
  padding: 20px;
}
```

### קווים, מסלולים ותאים (Lines, Tracks & Cells)

* **Grid Lines** – הקווים שמחלקים את הגריד לעמודות ושורות
* **Grid Tracks** – השטח שבין שני קווים סמוכים
* **Grid Cell** – התא שנוצר על ידי חיתוך שורה ועמודה

---

## יצירת גריד ראשון

דוגמה לגריד פשוט בן 3 עמודות:

```html
<div class="grid-container">
  <div class="grid-item">פריט 1</div>
  <div class="grid-item">פריט 2</div>
  <div class="grid-item">פריט 3</div>
  <div class="grid-item">פריט 4</div>
  <div class="grid-item">פריט 5</div>
  <div class="grid-item">פריט 6</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.grid-item {
  background-color: #3498db;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
}
```

---

## טכניקות מתקדמות ב־Grid

### קווים בעלי שם (Named Grid Lines)

```css
.grid-container {
  display: grid;
  grid-template-columns: [sidebar-start] 250px [sidebar-end main-start] 1fr [main-end];
  grid-template-rows: [header-start] auto [header-end content-start] 1fr [content-end footer-start] auto [footer-end];
}
```

### אזורי גריד (Grid Areas)

```css
.grid-container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

---

## גריד רספונסיבי

### Auto-fit ו־Auto-fill

```css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

**ההבדל ביניהם:**

* **auto-fit** – מתעלם ממסלולים ריקים ומכווץ אותם
* **auto-fill** – משאיר את המסלולים הריקים קיימים

---

### שימוש ב־Media Queries

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## תבניות גריד נפוצות

### פריסת Holy Grail

```css
.holy-grail {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

### פריסת כרטיסים (Card Layout)

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
```

---

## עקרונות עבודה מומלצים

1. **התחל פשוט** – התחל במבנה בסיסי והוסף מורכבות בהדרגה
2. **שמור על HTML סמנטי** – אל תשתמש ב־Grid כדי להחליף מבנה תקין של תוכן
3. **Mobile First** – תכנן תחילה למובייל, לאחר מכן הרחב למסכים גדולים
4. **בדוק בדפדפנים שונים** – התמיכה מצוינת, אך תמיד עדיף לבדוק בפועל
5. **שלב עם Flexbox** – השתמש ב־Grid לפריסת העמוד כולו וב־Flexbox לעיצוב רכיבים פנימיים

---

## תמיכה בדפדפנים

תמיכה מצוינת ברוב הדפדפנים המודרניים:

* Chrome 57+
* Firefox 52+
* Safari 10.1+
* Edge 16+

אם נדרשת תאימות לאחור, ניתן להשתמש בבדיקת תמיכה:

```css
@supports (display: grid) {
  .grid-container {
    display: grid;
    /* grid styles */
  }
}
```

---

## סיכום

**CSS Grid** שינה לגמרי את הדרך שבה בונים פריסות אתרים. עם תחביר אינטואיטיבי ויכולות עוצמתיות, הוא הפך לכלי בסיסי שכל מפתח מודרני חייב להכיר.

נסה לבנות מבנים שונים בעצמך — אל תפחד להתנסות. ככל שתעבוד יותר עם Grid, כך תרגיש בו יותר נוח וטבעי.
