# Chat Interface Prompt Library

Collection of proven, effective prompts for using Cursor Chat interface.

**Best Practice:** Use `[Context via @-mentions] + [Specific Question] + [What You Need]` structure. Be specific, include version numbers when relevant, and use 2-3 @-mentions max.

---

## @Files

```
@README.md please find link to cursor privacy
```

```
@composer1_user_filter.js The function isn't handling null emails correctly. Can you fix it?
```

```
@[filename.ext] please find [specific information]
```

---

## @Folders

```
@docs/phase-2-core-features/ please look through this folder and show me all files with their sizes
```

```
@docs/phase-2-core-features/ How are these files organized? What's the learning progression?
```

```
@[folder/path] please look through this folder and show me [what you need]
```

---

## @Code

```
@filterAndSortUsers what is the use of this function?
```

```
@UserService.getUserById How does this handle errors?
```

```
@[functionName] what does this function do and how is it used?
```

---

## @Docs

```
@docs NextJS please look at this documentation and find example of using middleware in nextjs app router 16
```

```
@docs Cursor keyboard shortcuts show me all chat shortcuts
```

```
@docs [framework/library] please look at this documentation and find example of [specific feature] in [version]
```

---

## Multiple @-Mentions

```
@LEARNING_PLAN.md @INDEX.md How does the learning plan map to the actual documentation structure? Are all phases and steps documented?
```

```
@src/components/Button.tsx @src/components/Input.tsx Do these follow the same styling pattern?
```

```
@[file1] @[file2] How do these relate? [specific question]
```

---

## Codebase Search

```
@deliverables/phase-1-foundations/keyboard-shortcuts-cheatsheet.md Where can I find information about keyboard shortcuts? Show me all relevant files.
```

```
@[reference-file] Where can I find information about [topic]? Show me all relevant files.
```

---

## Explaining Code

```
@[functionName] explain what this function does and how it works
```

```
@[filename.ext] explain this code and what it's doing
```

```
@[functionName] explain this function step by step
```

```
@[ClassName.method] what does this method do and what are its parameters?
```

---

## Debugging & Fixing Bugs

```
@[filename.ext] identify and fix the bug in this code
```

```
@[functionName] this function is throwing an error, can you fix it?
```

```
@[filename.ext] the code on line [X] isn't working correctly, can you debug and fix it?
```

```
@[filename.ext] explain this error: [error message] and how to fix it
```

---

## Writing Tests

```
@[functionName] write unit tests for this function
```

```
@[filename.ext] generate test cases for this code
```

```
@[functionName] write comprehensive tests covering edge cases
```

```
@[test-file] add test cases for [specific scenario]
```

---

## Refactoring

```
@[filename.ext] refactor this code to improve readability and maintainability
```

```
@[functionName] refactor this function to follow best practices
```

```
@[filename.ext] simplify this code without changing functionality
```

```
@[folder/path] refactor these files to follow consistent patterns
```

---

## Code Review

```
@[filename.ext] review this code and suggest improvements
```

```
@[filename.ext] check this code for potential bugs and security issues
```

```
@[filename.ext] review for code quality, performance, and best practices
```

```
@[file1] @[file2] review these files for consistency
```

---

## Generating Code

```
@[filename.ext] add a function that [description of functionality]
```

```
@[folder/path] create a new [component/function] that [description]
```

```
@[filename.ext] implement [feature] following the same pattern as the existing code
```

```
@[reference-file] create similar code that [description]
```

---

## Optimizing Code

```
@[functionName] optimize this function for better performance
```

```
@[filename.ext] improve the performance of this code
```

```
@[functionName] reduce the time complexity of this function
```

```
@[filename.ext] optimize this code without changing its behavior
```

---

## Adding Features

```
@[filename.ext] add [feature] to this code
```

```
@[folder/path] implement [feature] following the existing architecture
```

```
@[filename.ext] add [feature] that integrates with [existing functionality]
```

```
@[reference-file] add similar functionality to [target-file]
```

---

## Documentation

```
@[functionName] generate documentation comments for this function
```

```
@[filename.ext] add JSDoc comments to this code
```

```
@[filename.ext] create README documentation for this module
```

---

## Learning & Understanding

```
@[functionName] explain how this function works with examples
```

```
@[filename.ext] explain this code pattern and when to use it
```

```
@[folder/path] explain the architecture and how these files work together
```

```
@[functionName] what are the best practices for implementing this type of function?
```

---

**Last Updated:** 23.12.25
