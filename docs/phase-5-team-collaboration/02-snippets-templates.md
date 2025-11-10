# Step 19: Snippets & Templates

**Phase:** Team Collaboration  
**Date Started:** ____  
**Date Completed:** ____  
**Time Spent:** ___ hours

---

## 📋 Overview

Creating team code snippet library and templates for common patterns, accelerating development and ensuring consistency.

---

## 🎯 Learning Objectives

By the end of this step, I should be able to:

- [ ] Create VS Code snippets for team patterns
- [ ] Integrate snippets with Cursor
- [ ] Build snippet library for common tasks
- [ ] Share snippets with team

---

## 📚 Topics Covered

### Topic 1: VS Code Snippets Basics

**What Are Snippets:**
- Quick code templates
- Triggered by prefix
- Support placeholders and variables

**Location:**
```
.vscode/snippets.code-snippets (project)
or
User Snippets (global)
```

**My Notes:**


---

### Topic 2: Creating Snippets

**Basic Snippet Structure:**
```json
{
  "Snippet Name": {
    "scope": "typescript,typescriptreact",
    "prefix": "prefix",
    "body": [
      "line 1",
      "line 2 with ${1:placeholder}"
    ],
    "description": "What this snippet does"
  }
}
```

**Example - React Component:**
```json
[Your snippet]
```

**My Notes:**


---

### Topic 3: Team Snippet Library

**Common Patterns to Snippet:**

**Components:**
- React functional component
- Component with props
- [Your patterns]

**Testing:**
- Test suite template
- Test case template
- [Your patterns]

**API:**
- Route handler template
- Service method template
- [Your patterns]

**My Team's Snippets:**

| Pattern | Prefix | Status |
|---------|--------|--------|
| React Component | rfc | ✅ / ☐ |
| Custom Hook | hook | ✅ / ☐ |
| Test Suite | test | ✅ / ☐ |
| [Your pattern] | | |

---

### Topic 4: Integration with Cursor

**How Cursor Uses Snippets:**
- Type prefix + Tab
- Or ask: "Create [pattern] using our snippet"
- Cursor understands snippet patterns

**Testing Integration:**
```
Test: [Your test]
Result: [What happened]
```

**My Notes:**


---

### Topic 5: Advanced Snippet Features

**Placeholders:**
```json
"${1:first}", "${2:second}", "$0" (final position)
```

**Variables:**
```json
"$TM_FILENAME", "$TM_DIRECTORY", "$CURRENT_YEAR"
```

**Transformations:**
```json
"${1/(.*)/${1:/capitalize}/}"
```

**My Advanced Snippets:**
```json
[Your examples]
```

---

### Topic 6: Distribution & Maintenance

**Sharing with Team:**
1. Add to project: `.vscode/snippets.code-snippets`
2. Commit to git
3. Team automatically gets snippets

**Maintenance:**
- Review quarterly
- Add new patterns
- Remove unused
- Update based on feedback

**My Notes:**


---

## 💡 Key Takeaways

1. **Snippets Save Time**
   - 
2. **Ensure Consistency**
   - 
3. **Living Library**
   - 

---

## 🔍 Practical Examples

### Example 1: Creating Component Snippet

**Pattern to Snippet:**
```typescript
[Your common pattern]
```

**Snippet Created:**
```json
[Your snippet JSON]
```

**Usage:**
```
Type: rfc
Result: [Generated code]
```

---

### Example 2: Team Snippet Library

**Snippets File:**
```json
[Excerpt from your snippets.code-snippets]
```

**Team Adoption:**
- Developers using: ___/%
- Time saved per dev: ___ min/day
- Feedback: 

---

### Example 3: Before/After Snippets

**Before:**
- Time to write component: ___ minutes
- Consistency: Variable

**After:**
- Time to write component: ___ seconds
- Consistency: 100%

---

## ✅ What Worked Well

- 
- 

---

## ⚠️ Challenges & Solutions

### Challenge 1: [Description]

**Problem:**


**Solution:**


---

## ❓ Questions & Answers

### Q1: Can snippets work with Cursor AI?
**A:** 

---

### Q2: How to share snippets across projects?
**A:** 

---

## 🔗 Resources

- [Snippets Template](../../templates/snippets.code-snippets)
- VS Code Snippets Guide: https://code.visualstudio.com/docs/editor/userdefinedsnippets

---

## 📦 Deliverables Created

- [x] Snippets template → At templates/snippets.code-snippets
- [ ] Project snippets → Created
- [ ] Snippet guide → Documented

---

## 🎬 Next Steps

1. [ ] Create snippets for common patterns
2. [ ] Test with team
3. [ ] Gather and add more patterns
4. [ ] Move to Step 20: CI/CD Integration Patterns

---

## 📊 Self-Assessment

**Confidence Level:** ___/5

---

## 💭 Personal Notes & Insights




---

## 🔄 Review Checklist

- [ ] All objectives completed
- [ ] Snippets created
- [ ] Team library established
- [ ] Shared with team
- [ ] Integrated with Cursor

---

**Status:** 🟡 In Progress  
**Last Updated:** ____

