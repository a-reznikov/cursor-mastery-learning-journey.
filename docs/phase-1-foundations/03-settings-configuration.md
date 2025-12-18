# Step 1.3: Core Settings & Configuration

**Phase:** Foundations  
**Date Started:** _18.12.25_  
**Date Completed:** ____  
**Time Spent:** ___ hours

---

## 📋 Overview

Configuring Cursor optimally for your workflow, including model selection per feature, privacy settings, indexing configuration, and performance optimization.

---

## 🎯 Learning Objectives

By the end of this step, I should be able to:

- [ ] Configure model selection for each Cursor feature
- [ ] Set up privacy and telemetry settings appropriately
- [ ] Optimize indexing for performance
- [ ] Export and share settings with the team
- [ ] Master essential keyboard shortcuts

---

## 📚 Topics Covered

### Topic 1: Model Selection Per Feature

**Where to Configure:**
```
Cursor → Settings → Cursor Settings → Models
```

#### Chat (Cmd+L / Cmd+I)

**My Configuration:**
- Model: Composer 1 for easy tasks, Haiku 4.5 for simple but creative tasks, Sonnet 4.5 for difficult tasks
- Why: Composer is quick and efficient for straightforward work. Haiku 4.5 offers a good balance between speed and capability, ideal for creative tasks. Sonnet excels with large context windows and complex planning scenarios.

```
Note: If I select something and then use Cmd+L / Cmd+I, it will add the selected code to chat.
---

#### Cmd+K (Inline Edit)

**My Configuration:**
- Model: Auto.
- Why: Currently, I only see one available model (GPT-4.1) for this feature.

**Settings:**
```
Default
```

---

#### Agent Mode (Cmd+E)

**How to activate:**  
- Keyboard shortcut: **Cmd E** (or Cmd . to open Mode Menu)
- This toggles the Agent layout, which provides advanced AI assistance for complex tasks

**How to see if Agent Mode is active:**
- Press **Cmd .** to open Mode Menu—you'll see "Agent" highlighted/selected
- Look at the chat panel header—should show "Agent" mode indicator
- When active, the AI will execute commands automatically (you'll see terminal output in responses)

**Why use Agent Mode:**
- AI can execute terminal commands automatically (run tests, install packages, etc.)
- Can create/edit multiple files in sequence without asking permission each time
- Better for complex, multi-step tasks (setup projects, debugging, refactoring)
- **Note:** The UI looks similar to Chat mode—the difference is that Agent Mode can *do* things (run commands, modify files) rather than just *suggest* code

**My Configuration:**
- Model:
- Why:

**Settings:**
```
Default
```

---

#### New Chat

**How to create a new chat:**
- When **focused on the chat tab**: Press `Cmd N` or `Cmd R` to create a new chat
- When **focused on a file/editor**: Press `Cmd Shift I` to open a new chat with the file context

**What this does:**  
Opens a brand new chat session in Cursor for a fresh conversation (context-dependent based on focus).

**My Configuration:**
- Model:
- Why:

**Settings:**
```
Default
```

---

### Topic 2: Privacy & Telemetry Settings

**Privacy Mode:**

**What it does:**
- 
- 
- 

**When to enable:**
- 

**My setting:**
- [ ] Privacy Mode: ON / OFF
- Reason: 

---

**Telemetry Settings:**

```
Settings → Cursor Settings → Privacy
```

**My Configuration:**
- [ ] Send telemetry data: YES / NO
- [ ] Send crash reports: YES / NO
- [ ] Log conversations: YES / NO

**Team Recommendation:**


**My Notes:**


---

### Topic 3: Indexing Configuration

**What Gets Indexed:**
- 
- 
- 

**Index Settings:**

```
Settings → Cursor Settings → Features → Codebase Indexing
```

**My Configuration:**
- [ ] Index entire workspace: YES / NO
- [ ] Index dependencies (node_modules, etc.): YES / NO
- [ ] Auto-index on startup: YES / NO

**Performance Considerations:**


**My Notes:**


---

### Topic 4: Performance Optimization

**Strategies for Better Performance:**

1. **Configure .cursorignore**
   - Exclude: 
   - Why: 

2. **Selective Indexing**
   - 
   - 

3. **Memory Management**
   - 
   - 

**My Settings:**


---

### Topic 5: Essential Keyboard Shortcuts

**Core Shortcuts:**

| Shortcut | Action | Notes |
|----------|--------|-------|
| `Cmd+L` / `Cmd+I` | Open Chat (Sidepanel) | |
| `Cmd+K` | Inline Edit | |
| `Cmd+E` | Toggle Agent Layout | Main AI mode |
| `Cmd+.` | Open Mode Menu | Cycle through modes |
| `Cmd+N` / `Cmd+R` | New Chat | Fresh chat session |
| `Cmd+/` | Loop between AI models | |
| `Cmd+Return` | Submit/Send message | |
| `Cmd+Shift+Backspace` | Cancel generation | |
| `Escape` | Unfocus/Close | |
| `Cmd+Shift+P` | Command palette | |

**Custom Shortcuts I Added:**

| Shortcut | Action | Why |
|----------|--------|-----|
| | | |

---

### Topic 6: Editor & Workspace Settings

**Key Settings:**

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  // Add your settings
}
```

**My Configuration:**


---

## 💡 Key Takeaways

1. **[Model Selection Strategy]**
   - 
   - 

2. **[Privacy Configuration]**
   - 
   - 

3. **[Performance Tips]**
   - 
   - 

---

## 🔍 Practical Examples

### Example 1: Exporting My Settings

**What I Did:**
```
[Steps to export settings]
1. 
2. 
3. 
```

**Settings File Location:**
```
[Path to settings file]
```

**What I'll Share with Team:**
- 
- 

---

### Example 2: Testing Privacy Mode

**Scenario:**
Testing the difference between Privacy Mode ON vs OFF

**With Privacy Mode OFF:**
- 
- 

**With Privacy Mode ON:**
- 
- 

**Learning:**


---

### Example 3: Optimizing Indexing Performance

**Before Optimization:**
- Index time: 
- Performance issues: 

**Changes Made:**
1. 
2. 
3. 

**After Optimization:**
- Index time: 
- Performance: 

**Learning:**


---

## ✅ What Worked Well

- 
- 
- 

---

## ⚠️ Challenges & Solutions

### Challenge 1: [e.g., "Cursor was slow on large codebase"]

**Problem:**


**Solution:**


**Prevention:**


---

## ❓ Questions & Answers

### Q1: Where are Cursor settings stored?
**A:** 

**Source:** 

---

### Q2: Can I sync settings across machines?
**A:** 

**Source:** 

---

### Q3: What's the recommended privacy setting for team?
**A:** 

**Source:** 

---

## 🔗 Resources

### Official Documentation
- Cursor Settings Docs: 
- 

### Internal Resources
- Team settings template: `templates/cursor-settings.json`
- 

---

## 📦 Deliverables Created

- [x] Team settings JSON → Path: `templates/cursor-settings.json`
- [ ] Privacy configuration guide → Path: `[team docs]`
- [ ] Keyboard shortcuts cheatsheet → Path: `[team docs]`

---

## 🎬 Next Steps

After completing this step:

1. [ ] Share settings template with team
2. [ ] Create team privacy policy for Cursor usage
3. [ ] Document any custom configurations
4. [ ] **Phase 1 Complete!** Move to Phase 2: Core AI Features

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

[Your free-form notes about settings, performance, team configuration, etc.]




---

## 🔄 Review Checklist

Before moving to the next step:

- [ ] All learning objectives completed
- [ ] Models configured for each feature
- [ ] Privacy settings decided
- [ ] Indexing optimized
- [ ] Settings exported for team
- [ ] Shortcuts memorized
- [ ] Questions answered
- [ ] Phase 1 complete!

---

**Status:** 🟡 In Progress

**Last Updated:** ____

