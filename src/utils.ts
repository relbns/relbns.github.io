export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('he-IL', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export function getCategoryColor(category: string): string {
  const colors: { [key: string]: string } = {
    "אישי": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "טכנולוגיה": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "השוואה": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "קריירה": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "כלים": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    "טיפים": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
  };
  return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
}

export function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case "מתחיל":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "בינוני":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    case "מתקדם":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
}
