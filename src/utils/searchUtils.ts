// Tag sorting configuration
export const TAG_SORT_METHOD = 'alphabetical' as const; // 'alphabetical' | 'frequency' | 'recent'

export type TagSortMethod = 'alphabetical' | 'frequency' | 'recent';

export interface PostData {
  title: string;
  description?: string;
  excerpt?: string;
  tags: string[];
  category: string;
  publishDate: string;
}

/**
 * Sort tags based on the specified method
 */
export function sortTags(tags: string[], method: TagSortMethod = TAG_SORT_METHOD): string[] {
  switch (method) {
    case 'alphabetical':
      return [...tags].sort((a, b) => a.localeCompare(b));
    case 'frequency':
      // For future implementation - would need tag frequency data
      return [...tags].sort((a, b) => a.localeCompare(b));
    case 'recent':
      // For future implementation - would need tag recency data
      return [...tags].sort((a, b) => a.localeCompare(b));
    default:
      return [...tags].sort((a, b) => a.localeCompare(b));
  }
}

/**
 * Enhanced search function that searches across multiple fields with relevance scoring
 */
export function searchPosts(posts: any[], searchTerm: string): any[] {
  if (!searchTerm.trim()) return posts;
  
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = normalizedSearchTerm.split(/\s+/);
  
  // Filter and score posts
  const scoredPosts = posts.map(post => {
    const data = post.data;
    let score = 0;
    let hasMatch = false;
    
    // Helper function to check if text contains search terms
    const checkMatch = (text: string, weight: number) => {
      if (!text) return false;
      const normalizedText = text.toLowerCase();
      
      // Check for exact phrase match (higher score)
      if (normalizedText.includes(normalizedSearchTerm)) {
        score += weight * 2;
        hasMatch = true;
        return true;
      }
      
      // Check for individual word matches
      let wordMatches = 0;
      searchWords.forEach(word => {
        if (normalizedText.includes(word)) {
          wordMatches++;
          hasMatch = true;
        }
      });
      
      if (wordMatches > 0) {
        score += (wordMatches / searchWords.length) * weight;
        return true;
      }
      
      return false;
    };
    
    // Search in different fields with different weights
    checkMatch(data.title || '', 10); // Title has highest weight
    checkMatch(data.description || '', 5);
    checkMatch(data.excerpt || '', 5);
    checkMatch(data.category || '', 3);
    
    // Search in tags
    if (data.tags) {
      data.tags.forEach((tag: string) => {
        if (checkMatch(tag, 4)) {
          // Tag matches get bonus points
        }
      });
    }
    
    return { post, score, hasMatch };
  })
  .filter(item => item.hasMatch)
  .sort((a, b) => b.score - a.score) // Sort by relevance score
  .map(item => item.post);
  
  return scoredPosts;
}

/**
 * Extract and sort unique tags from posts
 */
export function extractUniqueTags(posts: any[], sortMethod: TagSortMethod = TAG_SORT_METHOD): string[] {
  const allTags = posts.flatMap(post => post.data.tags || []);
  const uniqueTags = [...new Set(allTags)];
  return sortTags(uniqueTags, sortMethod);
}

/**
 * Filter posts by category
 */
export function filterByCategory(posts: any[], category: string): any[] {
  if (category === 'הכל' || category === 'All') return posts;
  return posts.filter(post => post.data.category === category);
}

/**
 * Filter posts by difficulty (for tutorials)
 */
export function filterByDifficulty(posts: any[], difficulty: string): any[] {
  if (difficulty === 'הכל' || difficulty === 'All') return posts;
  return posts.filter(post => post.data.difficulty === difficulty);
}

/**
 * Filter posts by tags
 */
export function filterByTags(posts: any[], selectedTags: string[]): any[] {
  if (selectedTags.length === 0) return posts;
  return posts.filter(post => 
    selectedTags.some(tag => post.data.tags?.includes(tag))
  );
}

/**
 * Client-side search function for DOM elements with enhanced multilingual support
 */
export function searchPostElements(postElements: NodeListOf<Element>, searchTerm: string): Element[] {
  if (!searchTerm.trim()) return Array.from(postElements);
  
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = normalizedSearchTerm.split(/\s+/);
  
  // Filter and score posts
  const scoredPosts = Array.from(postElements).map(element => {
    const htmlElement = element as HTMLElement;
    let score = 0;
    let hasMatch = false;
    
    // Enhanced helper function to check if text contains search terms
    const checkMatch = (text: string, weight: number) => {
      if (!text) return false;
      const normalizedText = text.toLowerCase();
      
      // Check for exact phrase match (highest score)
      if (normalizedText.includes(normalizedSearchTerm)) {
        score += weight * 3;
        hasMatch = true;
        return true;
      }
      
      // Check for individual word matches with partial matching
      let wordMatches = 0;
      let partialMatches = 0;
      
      searchWords.forEach(word => {
        if (word.length < 2) return; // Skip very short words
        
        // Exact word match
        if (normalizedText.includes(word)) {
          wordMatches++;
          hasMatch = true;
        }
        // Partial match for words longer than 3 characters
        else if (word.length > 3) {
          const wordStart = word.substring(0, Math.ceil(word.length * 0.7));
          if (normalizedText.includes(wordStart)) {
            partialMatches++;
            hasMatch = true;
          }
        }
      });
      
      if (wordMatches > 0) {
        score += (wordMatches / searchWords.length) * weight;
      }
      if (partialMatches > 0) {
        score += (partialMatches / searchWords.length) * weight * 0.5; // Lower score for partial matches
      }
      
      return wordMatches > 0 || partialMatches > 0;
    };
    
    // Search in different fields with different weights
    checkMatch(htmlElement.dataset.title || '', 10); // Title has highest weight
    checkMatch(htmlElement.dataset.description || '', 7);
    checkMatch(htmlElement.dataset.excerpt || '', 6);
    checkMatch(htmlElement.dataset.category || '', 4);
    
    // Enhanced tag search with better handling
    const tags = htmlElement.dataset.tags || '';
    if (tags) {
      const tagList = tags.split(',').map(tag => tag.trim());
      tagList.forEach(tag => {
        // Give higher weight to exact tag matches
        if (tag.toLowerCase() === normalizedSearchTerm) {
          score += 15; // Very high score for exact tag match
          hasMatch = true;
        } else {
          checkMatch(tag, 5); // Regular tag matching
        }
      });
    }
    
    return { element, score, hasMatch };
  })
  .filter(item => item.hasMatch)
  .sort((a, b) => b.score - a.score) // Sort by relevance score
  .map(item => item.element);
  
  return scoredPosts;
}

/**
 * Enhanced search function for better multilingual and English word support
 */
export function enhancedSearchPosts(posts: any[], searchTerm: string): any[] {
  if (!searchTerm.trim()) return posts;
  
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();
  const searchWords = normalizedSearchTerm.split(/\s+/);
  
  // Filter and score posts
  const scoredPosts = posts.map(post => {
    const data = post.data;
    let score = 0;
    let hasMatch = false;
    
    // Enhanced helper function to check if text contains search terms
    const checkMatch = (text: string, weight: number) => {
      if (!text) return false;
      const normalizedText = text.toLowerCase();
      
      // Check for exact phrase match (highest score)
      if (normalizedText.includes(normalizedSearchTerm)) {
        score += weight * 3;
        hasMatch = true;
        return true;
      }
      
      // Check for individual word matches with partial matching
      let wordMatches = 0;
      let partialMatches = 0;
      
      searchWords.forEach(word => {
        if (word.length < 2) return; // Skip very short words
        
        // Exact word match
        if (normalizedText.includes(word)) {
          wordMatches++;
          hasMatch = true;
        }
        // Partial match for words longer than 3 characters
        else if (word.length > 3) {
          const wordStart = word.substring(0, Math.ceil(word.length * 0.7));
          if (normalizedText.includes(wordStart)) {
            partialMatches++;
            hasMatch = true;
          }
        }
      });
      
      if (wordMatches > 0) {
        score += (wordMatches / searchWords.length) * weight;
      }
      if (partialMatches > 0) {
        score += (partialMatches / searchWords.length) * weight * 0.5;
      }
      
      return wordMatches > 0 || partialMatches > 0;
    };
    
    // Search in different fields with different weights
    checkMatch(data.title || '', 10);
    checkMatch(data.description || '', 7);
    checkMatch(data.excerpt || '', 6);
    checkMatch(data.category || '', 4);
    
    // Enhanced tag search
    if (data.tags) {
      data.tags.forEach((tag: string) => {
        // Give higher weight to exact tag matches
        if (tag.toLowerCase() === normalizedSearchTerm) {
          score += 15;
          hasMatch = true;
        } else {
          checkMatch(tag, 5);
        }
      });
    }
    
    return { post, score, hasMatch };
  })
  .filter(item => item.hasMatch)
  .sort((a, b) => b.score - a.score)
  .map(item => item.post);
  
  return scoredPosts;
}
