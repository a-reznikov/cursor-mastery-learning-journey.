# @-Mention Usage Patterns for Teams

Quick reference guide for using @-mentions effectively in Cursor Chat to provide context and get better AI responses.

**Last Updated:** 23.12.25

---

## Quick Reference

| Type | Syntax | Use When | Example |
|------|--------|----------|---------|
| **@Files** | `@filename.ext` | Single file questions, specific context | `@README.md find the privacy policy link` |
| **@Folders** | `@folder/path` | Multi-file changes, directory overview | `@src/components/ list all React components` |
| **@Code** | `@functionName` or `@ClassName.method` | Function/class questions | `@filterAndSortUsers what does this do?` |
| **@Docs** | `@docs [query]` | Cursor features, framework docs | `@docs NextJS middleware examples` |

---

## @Files

**When:** Single file questions, comparing implementations, specific context

**Syntax:** `@filename.ext [your question]`

**Examples:**
- `@README.md please find link to cursor privacy`
- `@composer1_user_filter.js The function isn't handling null emails correctly. Can you fix it?`

---

## @Folders

**When:** Multi-file changes, directory overview, project structure

**Syntax:** `@folder/path [your question]`

**Examples:**
- `@src/components/ please look through this folder and show me all files with their sizes`
- `@docs/phase-2-core-features/ How are these files organized?`

---

## @Code

**When:** Function/class questions, understanding code, modifying implementations

**Syntax:** `@functionName [question]` or `@ClassName.method [question]`

**Examples:**
- `@filterAndSortUsers what is the use of this function?`
- `@UserService.getUserById How does this handle errors?`

**Tip:** Works even without autocomplete - type `@functionName` directly.

---

## @Docs

**When:** Cursor features, framework/library documentation, syntax examples

**Syntax:** `@docs [search query] [your question]`

**Examples:**
- `@docs NextJS please find example of using middleware in nextjs app router 16`
- `@docs Cursor keyboard shortcuts show me all chat shortcuts`

---

## Multiple @-Mentions

**When:** Comparing files, cross-referencing, understanding relationships

**Syntax:** `@file1.md @file2.md [your question]`

**Examples:**
- `@LEARNING_PLAN.md @INDEX.md How does the learning plan map to the documentation structure?`
- `@src/components/Button.tsx @src/components/Input.tsx Do these follow the same styling pattern?`

**Best Practice:** Use 2-3 @-mentions max. Too many can overwhelm context.

---

## Effective Prompt Formula

```
[Context via @-mentions] + [Specific Question] + [What You Need]
```

### Good vs Bad

| Bad | Good | Why Better |
|-----|------|------------|
| "fix this" | `@README.md please find link to cursor privacy` | Context + specific task |
| "how does this work?" | `@filterAndSortUsers what is the use of this function?` | Code reference + clear question |
| "show me files" | `@docs/phase-2-core-features/ please look through this folder and show me all files with their sizes` | Folder context + specific info |
| "what's wrong?" | `@composer1_user_filter.js The function isn't handling null emails correctly. Can you fix it?` | File context + problem description |

---

## Key Principles

**✅ Do:**
- Use @-mentions strategically (only what's relevant)
- Be specific (version numbers, file paths, expected output)
- Describe problems clearly (not just "fix it")
- Start minimal, add more if needed

**❌ Don't:**
- Skip @-mentions (generic prompts = generic answers)
- Paste entire files (use @Files instead)
- Use too many @-mentions (2-3 max)
- Be vague ("fix this" without context)

---

## Common Patterns

| Pattern | Example |
|---------|---------|
| Understanding code | `@functionName what does this function do and how is it used?` |
| Finding information | `@folder/path find all files that contain [search term]` |
| Comparing implementations | `@file1.ts @file2.ts Do these follow the same pattern?` |
| Fixing issues | `@problematic-file.js The function on line 45 doesn't handle null values. Can you fix it?` |
| Learning features | `@docs [feature] show me examples of how to use [specific aspect]` |

---

## Troubleshooting

**Q: Autocomplete doesn't show my file/function**  
A: Type `@filename.ext` directly anyway. @-mentions work without autocomplete.

**Q: How many @-mentions is too many?**  
A: Start with 1-2, add more only if needed. 3+ can slow responses. Use @Folders instead of many @Files.

**Q: @Files or @Folders?**  
A: @Files for specific questions about one file. @Folders for multi-file changes or directory overviews.

**Q: Can I combine different @-mention types?**  
A: Yes! Example: `@src/components/ @Button.tsx How does Button fit into the components folder structure?`

---

## Related Resources

- **Chat Interface Guide:** `docs/phase-2-core-features/01-chat-interface.md`
- **Prompt Library:** `deliverables/PROMPT_LIBRARY.md`
- **Cursor Docs:** Use `@docs` in Chat to search official documentation

---

**Last Updated:** 23.12.25  
**Version:** 1.0
