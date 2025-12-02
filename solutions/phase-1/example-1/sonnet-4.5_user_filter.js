// Model: Claude Sonnet 4.5
// Date: November 30, 2025
//
// This solution filters duplicate emails, sorts by newest creation date,
// and returns the top 10 users.

/**
 * Filters and processes a list of users to remove duplicates,
 * sort by creation date, and return the top 10 most recent users.
 * 
 * Approach:
 * 1. Use a Map to track unique emails (keeps first occurrence based on processing order)
 * 2. Sort by createdAt in descending order (newest first)
 * 3. Filter duplicates by only keeping the first occurrence of each email after sorting
 * 4. Return the first 10 users using slice
 * 
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(n) for the Map and intermediate arrays
 * 
 * @param {Array<{name: string, email: string, createdAt: Date|string}>} users - Array of user objects
 * @returns {Array<{name: string, email: string, createdAt: Date|string}>} Filtered and sorted array of up to 10 users
 */
function getTopRecentUsers(users) {
  // Validate input
  if (!Array.isArray(users) || users.length === 0) {
    return [];
  }

  // Step 1: Sort by creation date (newest first)
  // We sort first to ensure that when we deduplicate, we keep the newest entry
  const sortedUsers = [...users].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA; // Descending order (newest first)
  });

  // Step 2: Remove duplicates based on email
  // Using a Map to track seen emails efficiently
  const seenEmails = new Set();
  const uniqueUsers = sortedUsers.filter(user => {
    if (seenEmails.has(user.email)) {
      return false; // Skip duplicate email
    }
    seenEmails.add(user.email);
    return true; // Keep this user
  });

  // Step 3: Return only the first 10 users
  return uniqueUsers.slice(0, 10);
}

// ============================================
// EXAMPLE USAGE
// ============================================

// Sample data with duplicate emails and various dates
const users = [
  { name: 'Alice Johnson', email: 'alice@example.com', createdAt: '2025-11-15' },
  { name: 'Bob Smith', email: 'bob@example.com', createdAt: '2025-11-20' },
  { name: 'Alice Updated', email: 'alice@example.com', createdAt: '2025-11-25' }, // Duplicate email, newer
  { name: 'Charlie Brown', email: 'charlie@example.com', createdAt: '2025-11-18' },
  { name: 'Diana Prince', email: 'diana@example.com', createdAt: '2025-11-22' },
  { name: 'Eve Wilson', email: 'eve@example.com', createdAt: '2025-11-19' },
  { name: 'Frank Miller', email: 'frank@example.com', createdAt: '2025-11-23' },
  { name: 'Grace Hopper', email: 'grace@example.com', createdAt: '2025-11-21' },
  { name: 'Henry Ford', email: 'henry@example.com', createdAt: '2025-11-24' },
  { name: 'Ivy League', email: 'ivy@example.com', createdAt: '2025-11-17' },
  { name: 'Jack Ryan', email: 'jack@example.com', createdAt: '2025-11-16' },
  { name: 'Kate Bishop', email: 'kate@example.com', createdAt: '2025-11-26' },
  { name: 'Bob Duplicate', email: 'bob@example.com', createdAt: '2025-11-14' }, // Duplicate email, older
  { name: 'Lily Potter', email: 'lily@example.com', createdAt: '2025-11-27' },
  { name: 'Mike Ross', email: 'mike@example.com', createdAt: '2025-11-28' },
];

// Call the function
const result = getTopRecentUsers(users);

// Display results
console.log('Top 10 Recent Unique Users:');
console.log('============================');
result.forEach((user, index) => {
  console.log(`${index + 1}. ${user.name} (${user.email}) - Created: ${user.createdAt}`);
});

console.log(`\nTotal users returned: ${result.length}`);

// ============================================
// EXPECTED OUTPUT:
// ============================================
// Top 10 Recent Unique Users:
// ============================
// 1. Mike Ross (mike@example.com) - Created: 2025-11-28
// 2. Lily Potter (lily@example.com) - Created: 2025-11-27
// 3. Kate Bishop (kate@example.com) - Created: 2025-11-26
// 4. Alice Updated (alice@example.com) - Created: 2025-11-25
// 5. Henry Ford (henry@example.com) - Created: 2025-11-24
// 6. Frank Miller (frank@example.com) - Created: 2025-11-23
// 7. Diana Prince (diana@example.com) - Created: 2025-11-22
// 8. Grace Hopper (grace@example.com) - Created: 2025-11-21
// 9. Bob Smith (bob@example.com) - Created: 2025-11-20
// 10. Eve Wilson (eve@example.com) - Created: 2025-11-19
//
// Total users returned: 10
//
// Note: Alice's newer entry is kept (2025-11-25), Bob's newer entry is kept (2025-11-20)

// Export for use in other modules (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getTopRecentUsers };
}

