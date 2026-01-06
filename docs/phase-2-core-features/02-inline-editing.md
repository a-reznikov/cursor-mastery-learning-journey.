# Step 2.2: Inline Editing (Cmd+K / Ctrl+K)

**Phase:** Core AI Features  
**Date Started:** _26.12.25_  
**Date Completed:** ____  
**Time Spent:** ___ hours

---

## 📋 Overview

Mastering Cmd+K for quick, focused code edits without leaving your file. Learning when to use inline editing vs Chat or Composer for maximum efficiency.

---

## 🎯 Learning Objectives

By the end of this step, I should be able to:

- [ ] Use Cmd+K effectively for code modifications
- [ ] Select appropriate code before invoking Cmd+K
- [ ] Write effective prompts for inline editing
- [ ] Accept, reject, or modify AI suggestions
- [ ] Know when to use Cmd+K vs Chat vs Composer

---

## 📚 Topics Covered

### Topic 1: Cmd+K Basics

**How to Use:**
1. Select the code (line, block, or area) you want to edit directly in your file.
2. Press Cmd+K (Mac) or Ctrl+K (Windows/Linux) to trigger the Inline Editing command.
3. Type a clear instruction for your intended change (e.g., "Refactor to use async/await", "Add JSDoc comments", "Fix null pointer bug", or "Rename variable for clarity").
4. Review the suggestion: Accept if it's correct, Modify if you want to edit further, or Reject if it's not what you want.

**What Cmd+K is Good For:**
- Small, focused code changes (e.g., variable renaming, refactoring, fixing a bug in a function)
- Adding comments or documentation to selected code
- Quick rewrites of logic or style improvements within a function/block
- Applying code style/conventions or simple transformations

**What Cmd+K is NOT Good For:**
- Large-scale architecture changes that span multiple files or modules
- Edits that require deep project-wide context or lots of cross-references
- Generating new files, folders, or boilerplate outside the current scope

**My Notes:**
- Cmd+K shines best when the selected scope is narrowly targeted. If you want to edit across multiple files or need broader understanding, use Chat or the Composer.
- Your prompt can be as simple as "Make this more readable" or as specific as "Update this to handle null email addresses."
- The less you select, the more focused and relevant the suggestion. Selecting too much confuses context and may get generic results.

Resources:
- Cursor Docs: [Inline Editing Guide](https://cursor.com/docs/inline-edit/overview)




---

### Topic 2: Selection Strategies

**How Much to Select:**

**Too Little:**
- Problem: Selecting only a partial expression or incomplete code block means Cursor can't understand the full context of what you want to change. The edit may be syntactically correct but miss dependencies or break the logic flow.
- Example: Selecting just `data.value` without the variable declaration or the function it's in. Cursor might change it in a way that doesn't match the data structure or function signature.

**Too Much:**
- Problem: Selecting entire files or very large blocks (100+ lines) can make Cursor's suggestions less focused. While Cursor includes default context automatically, explicitly selecting too much can dilute the specific change you want.
- Example: Selecting an entire 300-line component when you only want to refactor one method. Cursor might suggest changes to unrelated parts or produce a generic refactor instead of a targeted one.

**Just Right:**
- Strategy: Select the complete logical unit you want to edit—a full function, a complete if/else block, or a cohesive section. For generating new code, place your cursor without selection; Cursor automatically includes relevant surrounding context (e.g., if cursor is on a function name, it includes the entire function). Trust Cursor's default context to include related files and recently viewed code.
- Example: To refactor a function, select the entire function including its signature. To add a new method to a class, place cursor at the insertion point without selection—Cursor will include the class context automatically. To fix a specific bug in a try/catch block, select the entire try/catch including error handling.

**My Notes:**
- **With selection (Cmd+K)**: Edits the specific selected code. Select complete, logical units (functions, blocks, related lines).
- **Without selection (Cmd+K)**: Generates new code at cursor. Cursor automatically includes surrounding context (e.g., entire function if cursor is on function name).
- **Default context is automatic**: Cursor includes related files, recently viewed code, and relevant information—you don't need to manually add everything.
- **Quick Question (Opt+Return)**: Use without selection to ask about code at cursor, or with selection to ask about specific code. Type "do it" after to convert answer to code.
- **Full File Edits (Cmd+Shift+Return)**: For comprehensive file-wide changes—no selection needed, Cursor handles the entire file context.


---

### Topic 3: Effective Cmd+K Prompts

**Prompt Templates:**

**For Refactoring:**
```
Refactor to use [pattern/approach]
```
```
Convert to [async/await | promises | arrow functions | etc.]
```
```
Simplify this code
```
```
Extract [function/variable] for better readability
```
```
Make this more readable/maintainable
```

**For Adding Features:**
```
Add [feature] that [does something]
```
```
Add error handling for [specific case]
```
```
Add validation for [input/parameter]
```
```
Add logging/debugging for [specific part]
```
```
Add support for [new case/type]
```

**For Fixing Issues:**
```
Fix [specific bug/issue]
```
```
Handle [null/undefined/edge case]
```
```
Fix the [error type] on line [X]
```
```
Make this handle [edge case] correctly
```
```
Fix [variable/function] not working correctly
```

**For Adding Documentation:**
```
Add JSDoc comments
```
```
Add comments explaining [what/why]
```
```
Add inline documentation
```
```
Document this function's parameters and return value
```

**Examples of Good Prompts:**

| Task | Selection | Prompt | Result |
|------|-----------|--------|--------|
| Refactor callback to async/await | Entire function with callback chain | `Convert to async/await` | Function rewritten with async/await syntax |
| Add null check | Function that accesses object properties | `Add null check for user.email` | Added optional chaining or null check |
| Fix bug | try/catch block | `Fix the error handling - should log and continue` | Improved error handling logic |
| Add JSDoc | Function signature and body | `Add JSDoc comments` | Complete JSDoc with params and return type |
| Extract helper | Complex expression in function | `Extract this to a helper function called calculateTotal` | New helper function created |
| Add validation | Function parameter | `Add validation to ensure age is positive number` | Input validation added |
| Simplify code | Nested if statements | `Simplify this logic` | Refactored to cleaner conditional logic |
| Generate new function | Cursor at class method position (no selection) | `Add a method to validate email format` | New method generated with email validation |

**My Notes:**
- **Keep prompts short and direct**: Inline editor works best with concise, action-oriented prompts (1-10 words typically)
- **Be specific about what you want**: "Add null check for user.email" is better than "add null check"
- **Use action verbs**: Convert, Add, Fix, Refactor, Extract, Simplify, Document
- **You can be very simple**: "Make this async" or "Add error handling" often works perfectly
- **For Quick Question (Opt+Return)**: Ask questions first, then type "do it" to convert answer to code
- **Follow-up prompts**: After seeing a suggestion, add more instructions and press Return to refine
- **Context is automatic**: Don't over-explain—Cursor already has file context, related files, and recently viewed code


---

### Topic 4: Review & Accept Workflow

**Review Process:**
1. Read the inline suggestion to understand the change.
2. Use built-in diff viewer to see exactly what will be modified.
3. Decide: Accept, Reject, or Refine (iterate) with further prompts.

**When to Accept:**
- The change fully resolves your issue
- Code and comments meet your standards (style, correctness, clarity)
- Tests (if present) still pass or behavior is as expected

**When to Reject:**
- The suggestion breaks something else or introduces new issues
- The fix/feature is incorrect, unsafe, or incomplete
- Style or documentation are not acceptable, even after further tweaks

**When to Iterate:**
- The suggestion is close, but needs improvements or tweaks
- You want the AI to add, adjust, or explain the change further
- After reviewing, you spot edge cases or further enhancements to request

**Keyboard Shortcuts:**
- Accept: Cmd+Return (Windows: Ctrl+Enter)
- Reject: Esc, or click "Reject" on the suggestion bar
- View diff: Cmd+D (Windows: Ctrl+D)
- Trigger inline edit: Cmd+K (Windows: Ctrl+K)
- Quick question ("Quick Fix"): Opt+Return (Windows: Alt+Enter)

**My Notes:**
- **Cost/Pricing**: Inline editing (Cmd+K) is usually included in your plan and doesn't count against usage limits—unlike Chat (Cmd+L), which uses credits. Use Cmd+K freely for quick edits.
- Some advanced features or heavy usage may count against limits. Check your dashboard for details.


---

### Topic 5: Cmd+K vs Chat

**Use Cmd+K When:**
- Making quick, focused edits to a single file or small code section
- Refactoring a function, method, or code block
- Adding error handling, validation, or documentation to selected code
- Fixing bugs within a specific scope (function, class, or block)
- Converting code style (async/await, arrow functions, etc.)
- You want immediate code changes without leaving your file
- Cost matters—Cmd+K is usually free/included, Chat uses credits

**Use Chat Instead When:**
- Asking questions about your codebase or architecture
- Understanding how code works or debugging complex problems
- Planning what to build or discussing approaches
- Need to reference multiple files with @-mentions
- Want explanations, learning, or code reviews
- Multi-file features that span across modules
- Need to search the codebase or explore relationships

**Decision Matrix:**

| Scenario | Tool | Why |
|----------|------|-----|
| Single function refactor | Cmd+K | Quick, focused edit without leaving file |
| Ask about architecture | Chat | Need discussion and exploration |
| Multi-file feature | Chat | Can use @-mentions to reference multiple files |
| Add error handling | Cmd+K | Focused change to selected code block |
| Understand code flow | Chat | Need explanation and discussion |
| Fix bug in one function | Cmd+K | Targeted fix, immediate result |
| Plan new feature | Chat | Need to discuss approach and requirements |
| Add JSDoc comments | Cmd+K | Quick documentation addition |
| Debug complex issue | Chat | Need to explore and understand root cause |

**My Notes:**
- **Cost difference**: Cmd+K is typically included in plans (free/included), while Chat uses credits. Use Cmd+K freely for quick edits.
- **Workflow**: Cmd+K keeps you in flow—no context switching. Chat is better for exploration and learning.
- **Context**: Both have access to project context, but Chat allows explicit @-mentions for multi-file work.
- **Iteration**: Both support follow-up prompts, but Cmd+K is faster for quick refinements.

**Yes!** Inline editing (Cmd+K) **now uses** `.cursor/rules` and project rules:

- **`.cursor/rules` applies to all Cursor AI interactions**, including Cmd+K inline editing
- The `.cursor/rules` file is read on every interaction, ensuring consistency across all features
- This means your team's coding standards, conventions, and best practices defined in `.cursor/rules` are automatically applied when using Cmd+K
- Both **project-level** (`.cursor/rules` in project root) and **team-level** rules (if configured) are respected

**What this means:**
- Code style conventions from `.cursor/rules` are followed in Cmd+K suggestions
- Tech stack preferences (e.g., TypeScript rules, React patterns) are applied
- Testing requirements and error handling patterns are respected
- Security rules and best practices are enforced

**Example:** If your `.cursor/rules` specifies "Always use TypeScript strict mode" and "Use async/await instead of promises", Cmd+K will follow these rules when generating code.

**Note:** `.cursor/rules` is a project-level file. If you're working in a project with `.cursor/rules`, all Cursor features (Chat, Cmd+K, Composer) will use it. There's no separate configuration needed for inline editing.

**⚠️ Important: Cmd+K Behavior with Similar Changes**

When making similar changes across multiple lines or sections, **be careful with your selection**:

- **Problem**: If you select only one line and ask Cmd+K to make a change, then select the next section and ask for the same change, Cmd+K may **create duplicates** instead of replacing the old content
- **Solution**: Select **all the content you want to change in one go** (e.g., select all lines that need the same modification) rather than doing it line-by-line
- **Example**: To replace `.cursorrules` with `.cursor/rules` across multiple lines, select all affected lines at once, not one at a time
- **Best Practice**: For find-and-replace operations across a file, use Chat with explicit instructions or your editor's find-and-replace feature instead of Cmd+K

**Why this happens**: Cmd+K edits only the selected code. If you don't include the old content in your selection, it adds new content without removing the old, creating duplicates.


---

## 🔍 Practical Examples

### Example 1: Simple Refactoring

**Scenario:** Converting callback-based code to async/await pattern

**Before:**
```typescript
function fetchUserData(userId: string, callback: (error: Error | null, data?: User) => void) {
  fetch(`/api/users/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      return response.json();
    })
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error);
    });
}
```

**Selection:** Select the entire function (from `function fetchUserData` to the closing `}`)

**Prompt:** 
```
Convert to async/await
```

**After:**
```typescript
async function fetchUserData(userId: string, callback: (error: Error | null, data?: User) => void) {
  try {
    const response = await fetch(`/api/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    const data = await response.json();
    callback(null, data);
  } catch (error) {
    callback(error as Error);
  }
}
```

**Learning:**
- ✅ **What worked**: Cmd+K correctly converted the promise chains (`.then()/.catch()`) to async/await syntax with try/catch blocks
- ✅ **Correct behavior**: Cmd+K preserved the callback parameter because it's part of the function signature - the function's API contract requires it. This is the right approach - Cmd+K converted the internal implementation without breaking the function's interface
- 💡 **Key insight**: The prompt "Convert to async/await" was interpreted correctly - it converted the promise-based implementation to async/await while maintaining the existing function signature and callback pattern
- 🔄 **If you want a different API**: To change the function signature itself (remove callback, return Promise), that's a **different refactoring** that affects callers. You would need:
  - **Option 1**: Accept this change, then select the function again and prompt: "Change function signature to return Promise<User> instead of using callback"
  - **Option 2**: Be explicit in the original prompt: "Convert to async/await and change function to return Promise<User> instead of callback"
- 📝 **Takeaway**: Cmd+K respects the function's API contract. If you want to change the signature, be explicit about it in your prompt
- ✅ **Result**: The conversion is complete and correct for the given function signature - async/await syntax is cleaner than promise chains, even when using callbacks

---

### Example 2: Adding Error Handling

**Before:**
```typescript
function saveData(data) {
  localStorage.setItem('appData', JSON.stringify(data));
}
```

**Prompt:**
```
Add error handling so that if localStorage throws, an error is caught and logged to the console
```

**After:**
```typescript
function saveData(data) {
  try {
    localStorage.setItem('appData', JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
}
```

**What Worked Well:**
- ✅ Cmd+K correctly added try/catch for error handling
- ✅ The update was localized and precise
- ✅ Clear prompt led to a clear result

**Cmd+K Best Used When:**
- ✅ Modifying just the selected code, not needing global/file-wide changes

**Limitations:**
- ❌ Not for changes needing edits outside your selection (use Chat or Composer for those)
- ✅ Works best for small, direct refactors in one place


---

### Example 3: Converting Code Style

**Scenario:** Converting string concatenation to template literals for better readability

**Before:**
```typescript
function createGreeting(name: string, age: number, city: string) {
  return 'Hello, ' + name + '! You are ' + age + ' years old and live in ' + city + '.';
}

function createUrl(base: string, path: string, query: string) {
  return base + '/' + path + '?' + query;
}
```

**Selection:** Select both functions (from `function createGreeting` to the closing `}` of `createUrl`)

**Prompt:**
```
Convert string concatenation to template literals
```

**After:**
```
[Run the experiment and fill in the result here]
```

**What to observe:**
- Did Cmd+K convert all the string concatenation (`+`) to template literals?
- Are the template literals properly formatted with backticks?
- Did it preserve the function logic correctly?
- Are there any edge cases it missed?

**Result (from chat):**
```typescript
function createGreeting(name: string, age: number, city: string) {
  return `Hello, ${name}! You are ${age} years old and live in ${city}.`;
}

function createUrl(base: string, path: string, query: string) {
  return `${base}/${path}?${query}`;
}
```

**Result (from Cmd+k):**
```typescript
function createGreeting(name: string, age: number, city: string) {
  return `Hello, ${name}! You are ${age} years old and live in ${city}.`;
}

function createUrl(base: string, path: string, query: string) {
  return `${base}/${path}?${query}`;
}
```


**Time Saved:**
- Actually, it doesn't save time when we have to put results in other places (like documenting them in markdown files)
- However, for direct code changes in your actual codebase, Cmd+K is faster since the change happens immediately in place

**Learning:**
- Both Chat and Cmd+K produced identical results, showing that both tools can handle this type of refactoring effectively
- Cmd+K is ideal for direct code changes where you want immediate edits in your actual files
- When you need to document or copy results elsewhere, the time savings are reduced, but the quality of the conversion is consistent
- Template literal conversion was perfect: all string concatenation (`+`) was replaced with template literals using `${}` syntax
- Both functions were converted correctly, preserving all logic and parameters




---

## ⚠️ Challenges & Solutions

### Challenge 1: [e.g., "AI changed more than I wanted"]

**Problem:**


**Solution:**


**Prevention:**


---

## ❓ Questions & Answers

### Q1: Can I use Cmd+K without selecting code?
**A:** 

**Source:** 

---

### Q2: How do I undo changes made by Cmd+K?
**A:** 

**Source:** 

---

### Q3: Can I iterate on a Cmd+K suggestion?
**A:** 

**Source:** 

---

## 🔗 Resources

### Official Documentation
- Cursor Cmd+K Docs: 
- 

### Community Resources
- [Helpful resources]

### Internal Resources
- [Related docs]

---


## ✅ What Worked Well

- 
- 
- 


---

## 💡 Key Takeaways

1. **[Selection Matters]**
   - 
   - 

2. **[Be Specific]**
   - 
   - 

3. **[Always Review]**
   - 
   - 

___

## 📦 Deliverables Created

- [ ] Cmd+K prompt templates → Add to PROMPT_LIBRARY.md
- [ ] Before/after examples → Document for team
- [ ] Decision matrix → Share with team

---

## 🎬 Next Steps

After completing this step:

1. [ ] Practice Cmd+K on real code
2. [ ] Build a library of effective prompts
3. [ ] Compare Cmd+K vs manual editing speed
4. [ ] Move to Step 2.3: Composer Mode

---

## 📊 Self-Assessment

Rate your understanding (1-5 scale):

- [ ] 1 - Need to review again
- [ ] 2 - Basic understanding
- [ ] 3 - Good understanding
- [ ] 4 - Strong understanding
- [ ] 5 - Expert level, can teach others

**Confidence Level:** ___/5

**Notes on what to review:**
- 

---

## 💭 Personal Notes & Insights

[Your free-form notes about Cmd+K, when it works best, productivity gains, etc.]




---

## 🔄 Review Checklist

Before moving to the next step:

- [ ] All learning objectives completed
- [ ] Used Cmd+K on 10+ different tasks
- [ ] Built prompt templates
- [ ] Understand selection strategies
- [ ] Know when to use vs other tools
- [ ] Questions answered
- [ ] Key takeaways summarized

---

**Status:** 🟡 In Progress

**Last Updated:** ____

