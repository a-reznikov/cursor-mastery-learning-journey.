# Step 2.1: Chat Interface (Cmd+L / Ctrl+L)

**Phase:** Core AI Features  
**Date Started:** _23.12.25_  
**Date Completed:** ____  
**Time Spent:** ___ hours

---

## 📋 Overview

Mastering the Chat interface - your primary way to ask questions, get explanations, and plan implementations. Learning to use @-mentions effectively and manage context for better results.

---

## 🎯 Learning Objectives

By the end of this step, I should be able to:

- [ ] Open and use Chat interface effectively
- [ ] Use all @-mention types (@Files, @Folders, @Code, @Docs, @Web)
- [ ] Provide effective context for better responses
- [ ] Ask questions that get useful answers
- [ ] Understand when to use Chat vs other features

---

## 📚 Topics Covered

### Topic 1: Chat Interface Basics

**How to Open Chat:**
- Keyboard shortcut: Cmd+I/Cmd+L
- Where it appears: aside
- How to close: Cmd+I/Cmd+L

**What Chat is Good For:**
- Asking questions about your code
- Understanding how things work
- Planning what to build
- Debugging problems
- Learning new stuff

**My Notes:**


---

### Topic 2: @-Mentions - Providing Context

#### @Files - Reference Specific Files

**Syntax:**
```
@filename.ext
```

**When to Use:**
- Pointing to similar code you want to emulate
- Asking about a specific file
- Needing context from one particular file

**Examples I Tried:**
```
@README.md please find link to cursor privacy

Used @Files to reference README.md, then asked to find and verify the Cursor privacy link. This gave me context from the file while asking a specific question.
```

**My Notes:**


---

#### @Folders - Reference Entire Directories

**Syntax:**
```
@folder/path
```

**When to Use:**
- Giving Cursor better understanding of project structure
- Working on changes that span multiple files
- Needing broader context about a directory

**Examples I Tried:**
```
@folders/phase-2-core-features/ please look through this folder and show me all files with its sizes here.

Used @Folders to reference the entire directory, then asked to list all files with their sizes. Got a complete overview of the folder contents (5 files, ~21.8KB total).
```

**My Notes:**


---

#### @Code - Reference Functions/Classes

**Syntax:**
```
@ClassName.methodName
@functionName
```

**When to Use:**
- Asking about a specific function or class
- Understanding how something works
- Modifying existing code

**Examples I Tried:**
```
@filterAndSortUsers what is the use of this function?

Used @Code to reference the filterAndSortUsers function directly, then asked about its usage. Got a clear explanation of what the function does, its parameters, return value, and example usage.
```

**My Notes:**
When I typed @filterAndSortUsers into chat, there was no autocomplete suggestion, but the model still found and understood the function correctly. So @Code mentions work even without autocomplete.

---

#### @Docs - Access Documentation

**Syntax:**
```
@docs [search query]
```

**When to Use:**
- Looking up how Cursor features work
- Finding syntax or usage examples
- Learning about Cursor capabilities

**Examples I Tried:**
```
@docs NextJS please look at this documentation and find example of using middleware in nextjs app router 16.

Used @Docs to search for Next.js 16 middleware documentation. Got accurate information that Next.js 16 uses proxy.ts instead of middleware.ts, along with code examples showing how to implement it. Excellent result - found current documentation and practical examples.
```

**My Notes:**


---

#### @Web - Search the Web

**⚠️ Deprecated in Cursor 2.0**

**Status:** @Web has been removed in Cursor 2.0. The agent can now automatically search the web without needing the @Web mention.

**What Changed:**
- Cursor 2.0 removed @Web, @Definitions, @Link, @Recent Changes, @Linter Errors, and others
- Agent can now self-gather context automatically
- Just ask directly instead of using @Web

**How to Use Now:**
Instead of: `@web latest React features`
Just ask: `What are the latest React features?` or `Search for latest React documentation`

**Examples I Tried:**
```
Checked if @Web is available in latest Cursor version. Found that @Web was removed in Cursor 2.0 - agent now searches web automatically without needing @Web mention.
```

**My Notes:**
Important lesson: When I asked to check if @Web is available and provided Cursor docs, the AI initially said @Web was available. However, after I showed the updated changelog documentation, it became clear that @Web was removed in Cursor 2.0. This shows the importance of:
- Checking documentation version/date
- Verifying information against latest changelogs
- Not assuming all documentation is current
- The AI can make mistakes even when given documentation - always verify!


---

### Topic 3: Effective Prompting in Chat

**Good Prompt Structure:**
```
[Context] + [Specific Question] + [What I Need]
```

**Examples of Good vs Bad Prompts:**

| Bad Prompt | Good Prompt | Why Better |
|------------|-------------|------------|
| "fix this" | `@README.md please find link to cursor privacy` | Provides context (@-mention) and specific task |
| "how does this work?" | `@filterAndSortUsers what is the use of this function?` | References specific code and asks clear question |
| "show me files" | `@docs/phase-2-core-features/ please look through this folder and show me all files with its sizes here.` | Uses @Folders for context, specifies what info needed |
| "check if feature exists" | `@docs NextJS please look at this documentation and find example of using middleware in nextjs app router 16.` | Uses @Docs, specifies version and what to find |
| "what's wrong?" | `@composer1_user_filter.js The function isn't handling null emails correctly. Can you fix it?` | Provides file context and describes specific issue |

**Key Principles:**
- **Use @-mentions** to provide context (@Files, @Folders, @Code, @Docs)
- **Be specific** about what you need (version numbers, file paths, expected output)
- **Describe the problem** clearly, not just "fix it"
- **Include constraints** if needed (e.g., "for Next.js 16", "without breaking existing code")
- **Ask follow-up questions** if the answer isn't clear

**My Notes:**


---

### Topic 4: Chat vs Cmd+K vs Composer

**When to Use Chat (Cmd+L / Cmd+I):**
- Asking questions about your codebase
- Understanding how code works
- Getting explanations and learning
- Planning what to build
- Debugging problems
- Single questions or discussions

**When NOT to Use Chat:**
- **Use Cmd+K instead when:** You need quick, inline edits to a single file or small code section
- **Use Composer (Cmd+Shift+I) instead when:** You need to make changes across multiple files, implement complete features, or do complex refactoring

**My Notes:**
⚠️ **DISCREPANCY FOUND:** When testing Cmd+Shift+I, it opens a new chat (same as Cmd+L/Cmd+I), not a separate "Composer" mode. The documentation claims Composer exists and uses Cmd+Shift+I, but in practice:
- Cmd+Shift+I = Opens new chat (same as Cmd+L/Cmd+I)
- Cmd+L = Opens new chat
- Cmd+I = Opens new chat

**Question:** Does Composer mode actually exist as a separate feature? Or is it accessed differently (e.g., through Mode Menu with Cmd+.)? Need to verify:
1. Check Mode Menu (Cmd+.) for available modes
2. Check Cursor Settings → Keyboard Shortcuts for Composer-related commands
3. Verify Cursor version - Composer might be a newer feature or might not exist

**Current understanding:** All three shortcuts (Cmd+L, Cmd+I, Cmd+Shift+I) appear to open the same Chat interface. For multi-file changes, Chat can still be used with @-mentions to reference multiple files.


---

## 💡 Key Takeaways

1. **[@-Mentions are Powerful]**
   - 
   - 

2. **[Context is Key]**
   - 
   - 

3. **[Good Questions = Good Answers]**
   - 
   - 

---

## 🔍 Practical Examples

### Example 1: Asking About My Codebase

**Scenario:**
[What I wanted to learn]

**Prompt Used:**
```
[Your actual prompt with @-mentions]
```

**Response Quality:**
- Helpful: Yes/No
- Why: 

**What I Learned:**


---

### Example 2: Using Multiple @-Mentions

**Scenario:**
[Complex question requiring multiple files]

**Prompt Used:**
```
[Your prompt]
```

**Files Referenced:**
- @file1
- @file2

**Result:**


**Learning:**


---

### Example 3: Debugging with Chat

**Scenario:**
[Bug or error I encountered]

**Prompt Used:**
```
[Your debugging prompt]
```

**How Chat Helped:**


**Resolution:**


---

## ✅ What Worked Well

- 
- 
- 

---

## ⚠️ Challenges & Solutions

### Challenge 1: [e.g., "Chat gave generic answers"]

**Problem:**


**Solution:**


**Prevention:**


---

## ❓ Questions & Answers

### Q1: How do I know what files are available for @-mention?
**A:** 

**Source:** 

---

### Q2: Can I reference multiple files in one prompt?
**A:** 

**Source:** 

---

### Q3: How much context is too much?
**A:** 

**Source:** 

---

## 🔗 Resources

### Official Documentation
- Cursor Chat Docs: 
- 

### Community Resources
- [Helpful articles/videos]

### Internal Resources
- [Related learning docs]

---

## 📦 Deliverables Created

- [ ] List of effective prompts → Add to PROMPT_LIBRARY.md
- [ ] @-mention usage patterns → Document for team
- [ ] Chat workflow examples → Share with team

---

## 🎬 Next Steps

After completing this step:

1. [ ] Practice Chat with real questions from your work
2. [ ] Build a personal prompt library
3. [ ] Share effective prompts with team
4. [ ] Move to Step 2.2: Inline Editing (Cmd+K)

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

[Your free-form notes about Chat, effective prompting, discoveries, etc.]




---

## 🔄 Review Checklist

Before moving to the next step:

- [ ] All learning objectives completed
- [ ] Tried all @-mention types
- [ ] Asked 10+ questions in Chat
- [ ] Built personal prompt examples
- [ ] Understand context management
- [ ] Questions answered
- [ ] Key takeaways summarized

---

**Status:** 🟡 In Progress

**Last Updated:** ____

