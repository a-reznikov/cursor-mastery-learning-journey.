/**
 * Model: gpt-5-mini
 * Date: 2025-11-30
 *
 * Filters an array of user objects to:
 *  - remove duplicate emails (case-insensitive),
 *  - sort by createdAt (newest first),
 *  - return up to `limit` users (default 10).
 *
 * Approach:
 * 1. Make a shallow copy of the input to avoid mutating it.
 * 2. Sort the copy by `createdAt` descending so the newest users come first.
 * 3. Iterate the sorted list and keep the first occurrence of each normalized email
 *    (trimmed, lowercased) using a `Set` for O(1) lookups.
 * 4. Stop once we've collected `limit` users.
 *
 * Time complexity: O(n log n) due to sorting. Space: O(n).
 */

/**
 * Filters users by unique email (newest kept), sorts newest-first, returns up to `limit`.
 * @param {Array<{name: string, email: string, createdAt: Date|string|number}>} users
 * @param {number} [limit=10]
 * @returns {Array} Filtered users (up to `limit`) newest first
 */
function filterNewestUniqueEmails(users, limit = 10) {
  // Defensive checks
  if (!Array.isArray(users)) {
    throw new TypeError('Expected `users` to be an array');
  }
  if (typeof limit !== 'number' || limit <= 0) {
    return [];
  }

  // Copy so we don't mutate input
  const usersCopy = users.slice();

  // Sort by createdAt descending (newest first). Support Date, ISO string, or timestamp.
  usersCopy.sort((a, b) => {
    const toMillis = value => {
      if (value instanceof Date) return value.getTime();
      if (typeof value === 'number') return value;
      if (typeof value === 'string') return new Date(value).getTime();
      return 0;
    };
    return toMillis(b.createdAt) - toMillis(a.createdAt);
  });

  const seen = new Set();
  const result = [];

  for (const user of usersCopy) {
    if (!user || !user.email) continue; // skip malformed entries

    const normalizedEmail = String(user.email).trim().toLowerCase();
    if (seen.has(normalizedEmail)) continue;

    seen.add(normalizedEmail);
    result.push(user);

    if (result.length >= limit) break;
  }

  return result;
}

// Export for Node.js/CommonJS consumers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { filterNewestUniqueEmails };
}

// --------------------------
// Example usage
// --------------------------
if (require && require.main === module) {
  const sampleUsers = [
    { name: 'Alice', email: 'alice@example.com', createdAt: '2025-11-29T12:00:00Z' },
    { name: 'Bob', email: 'BOB@example.com', createdAt: '2025-11-30T08:00:00Z' },
    { name: 'Carol', email: 'carol@example.com', createdAt: new Date('2025-11-28T09:30:00Z') },
    { name: 'Dave', email: 'alice@example.com', createdAt: '2025-11-30T09:00:00Z' }, // duplicate email (alice) newer than Alice
    { name: 'Eve', email: ' eve@example.com ', createdAt: 1700000000000 }, // timestamp
  ];

  const topUsers = filterNewestUniqueEmails(sampleUsers, 10);
  console.log('Top users (newest, unique emails):', topUsers);
}


