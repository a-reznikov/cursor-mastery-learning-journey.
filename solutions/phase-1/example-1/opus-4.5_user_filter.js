/**
 * User Filter Utility
 * Model: Claude Opus 4.5
 * Date: November 30, 2025
 *
 * Filters duplicate emails, sorts by newest creation date, returns top 10 users.
 */

/**
 * Filters users to remove duplicate emails, sorts by creation date (newest first),
 * and returns the first 10 results.
 *
 * Approach:
 * 1. Use a Map to track seen emails - keeps the FIRST occurrence of each email
 *    (if you want to keep the newest, we sort first then dedupe)
 * 2. Sort by createdAt in descending order (newest first)
 * 3. Slice to get only the first 10
 *
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(n) for the Map and filtered array
 *
 * @param {Array<{name: string, email: string, createdAt: Date|string}>} users
 * @returns {Array<{name: string, email: string, createdAt: Date|string}>}
 */
function filterAndSortUsers(users) {
  if (!Array.isArray(users) || users.length === 0) {
    return [];
  }

  // Sort by createdAt descending (newest first)
  const sorted = [...users].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  // Remove duplicates by email, keeping the first (newest) occurrence
  const seen = new Set();
  const unique = sorted.filter((user) => {
    const email = user.email.toLowerCase();
    if (seen.has(email)) {
      return false;
    }
    seen.add(email);
    return true;
  });

  // Return only the first 10
  return unique.slice(0, 10);
}

// ============================================
// Example Usage
// ============================================

const users = [
  { name: "Alice", email: "alice@example.com", createdAt: "2025-11-01T10:00:00Z" },
  { name: "Bob", email: "bob@example.com", createdAt: "2025-11-15T14:30:00Z" },
  { name: "Charlie", email: "charlie@example.com", createdAt: "2025-11-20T09:00:00Z" },
  { name: "Alice (duplicate)", email: "ALICE@example.com", createdAt: "2025-11-25T16:00:00Z" },
  { name: "Diana", email: "diana@example.com", createdAt: "2025-11-28T11:00:00Z" },
  { name: "Eve", email: "eve@example.com", createdAt: "2025-11-10T08:00:00Z" },
  { name: "Frank", email: "frank@example.com", createdAt: "2025-11-05T12:00:00Z" },
  { name: "Grace", email: "grace@example.com", createdAt: "2025-11-22T15:00:00Z" },
  { name: "Henry", email: "henry@example.com", createdAt: "2025-11-18T10:30:00Z" },
  { name: "Ivy", email: "ivy@example.com", createdAt: "2025-11-12T14:00:00Z" },
  { name: "Jack", email: "jack@example.com", createdAt: "2025-11-08T09:30:00Z" },
  { name: "Kate", email: "kate@example.com", createdAt: "2025-11-03T11:00:00Z" },
  { name: "Bob (old account)", email: "bob@example.com", createdAt: "2025-10-01T10:00:00Z" },
];

const result = filterAndSortUsers(users);

console.log("Filtered and sorted users (top 10, newest first):");
console.log("================================================");
result.forEach((user, index) => {
  console.log(`${index + 1}. ${user.name} (${user.email}) - ${user.createdAt}`);
});

// Expected output: 10 users sorted by date, with duplicates removed
// "Alice (duplicate)" appears instead of "Alice" because it's newer
// "Bob" appears instead of "Bob (old account)" because it's newer

module.exports = { filterAndSortUsers };

