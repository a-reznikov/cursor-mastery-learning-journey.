/**
 * Model: composer1
 * Date: 2025-01-27
 * 
 * Solution for filtering and processing user arrays:
 * - Removes duplicate emails (keeps first occurrence)
 * - Sorts by creation date (newest first)
 * - Returns top 10 users
 */

/**
 * Filters users by removing duplicate emails, sorts by creation date (newest first),
 * and returns the first 10 users.
 * 
 * Approach:
 * 1. Use a Set to track seen emails for O(1) duplicate detection
 * 2. Filter array to keep only first occurrence of each email
 * 3. Sort by createdAt in descending order (newest first)
 * 4. Slice to get first 10 results
 * 
 * Time Complexity: O(n log n) due to sorting
 * Space Complexity: O(n) for the Set and filtered array
 * 
 * @param {Array<{name: string, email: string, createdAt: Date|string|number}>} users - Array of user objects
 * @returns {Array<{name: string, email: string, createdAt: Date|string|number}>} Filtered and sorted array of up to 10 users
 */
function filterAndSortUsers(users) {
  // Validate input
  if (!Array.isArray(users)) {
    throw new Error('Input must be an array');
  }

  // Track seen emails using a Set for O(1) lookup
  const seenEmails = new Set();

  // Filter out duplicates - keep first occurrence of each email
  const uniqueUsers = users.filter(user => {
    // Handle missing or invalid email
    if (!user || !user.email) {
      return false;
    }

    // Normalize email to lowercase for case-insensitive comparison
    const normalizedEmail = user.email.toLowerCase().trim();

    // If email already seen, skip this user
    if (seenEmails.has(normalizedEmail)) {
      return false;
    }

    // Mark email as seen and include this user
    seenEmails.add(normalizedEmail);
    return true;
  });

  // Sort by creation date (newest first)
  // Handle different date formats: Date objects, ISO strings, or timestamps
  const sortedUsers = uniqueUsers.sort((a, b) => {
    const dateA = a.createdAt instanceof Date
      ? a.createdAt.getTime()
      : typeof a.createdAt === 'string'
        ? new Date(a.createdAt).getTime()
        : a.createdAt || 0;

    const dateB = b.createdAt instanceof Date
      ? b.createdAt.getTime()
      : typeof b.createdAt === 'string'
        ? new Date(b.createdAt).getTime()
        : b.createdAt || 0;

    // Descending order (newest first)
    return dateB - dateA;
  });

  // Return first 10 users
  return sortedUsers.slice(0, 10);
}

// Example usage
const exampleUsers = [
  { name: 'Alice', email: 'alice@example.com', createdAt: new Date('2024-01-15') },
  { name: 'Bob', email: 'bob@example.com', createdAt: new Date('2024-03-20') },
  { name: 'Charlie', email: 'alice@example.com', createdAt: new Date('2024-02-10') }, // Duplicate email
  { name: 'Diana', email: 'diana@example.com', createdAt: new Date('2024-05-01') },
  { name: 'Eve', email: 'eve@example.com', createdAt: new Date('2024-04-15') },
  { name: 'Frank', email: 'frank@example.com', createdAt: new Date('2024-01-01') },
  { name: 'Grace', email: 'grace@example.com', createdAt: new Date('2024-06-10') },
  { name: 'Henry', email: 'henry@example.com', createdAt: new Date('2024-02-28') },
  { name: 'Iris', email: 'iris@example.com', createdAt: new Date('2024-07-05') },
  { name: 'Jack', email: 'jack@example.com', createdAt: new Date('2024-03-10') },
  { name: 'Karen', email: 'karen@example.com', createdAt: new Date('2024-08-12') },
  { name: 'Liam', email: 'liam@example.com', createdAt: new Date('2024-09-01') },
  { name: 'Mia', email: 'mia@example.com', createdAt: new Date('2024-10-15') },
  { name: 'Noah', email: 'noah@example.com', createdAt: new Date('2024-11-20') },
];

console.log('Original users:', exampleUsers.length);
const filteredUsers = filterAndSortUsers(exampleUsers);
console.log('Filtered and sorted (top 10):', filteredUsers);
console.log('\nResult details:');
filteredUsers.forEach((user, index) => {
  console.log(`${index + 1}. ${user.name} (${user.email}) - Created: ${user.createdAt}`);
});

// Test with different date formats
const mixedFormatUsers = [
  { name: 'User1', email: 'user1@test.com', createdAt: '2024-12-01T00:00:00Z' },
  { name: 'User2', email: 'user2@test.com', createdAt: 1701388800000 }, // timestamp
  { name: 'User3', email: 'user3@test.com', createdAt: new Date('2024-11-01') },
];

console.log('\n--- Testing with mixed date formats ---');
const mixedResult = filterAndSortUsers(mixedFormatUsers);
console.log('Mixed format result:', mixedResult);

