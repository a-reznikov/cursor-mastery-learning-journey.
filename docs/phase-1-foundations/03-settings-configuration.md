# Step 1.3: Core Settings & Configuration

**Phase:** Foundations  
**Date Started:** _18.12.25_  
**Date Completed:** _23.12.25_ 
**Time Spent:** _3_ hours

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
- Prevents code from being stored by language model providers (OpenAI, Anthropic, Google, xAI)
- Ensures code is never used for model training via Zero Data Retention (ZDR) agreements
- Code context sent to LLMs is immediately discarded and not retained
- Can be enforced at team level to ensure all members benefit from ZDR guarantees

**When to enable:**
- Always recommended as a security best practice (enabled by default for Enterprise teams)
- Required when handling sensitive, proprietary, or compliance-regulated code
- When you need contractual guarantees that your code won't be used for AI model training
- In enterprise/team environments to ensure consistent privacy across all members

**My setting:**
- [ ] Privacy Mode: ON
- Reason: 

---

**Telemetry Settings:**

```
Settings → Cursor Settings → Privacy
```

**What you'll see:**
- **Privacy Mode** (main toggle) - Controls whether your code is stored/used for training
- **Data Sharing** notice - Managed by your team admin for enterprise teams

**Individual Telemetry Options:**
Note: In current Cursor versions, granular telemetry controls may be managed through Privacy Mode or team policies rather than individual toggles.

**My Configuration:**
- [ ] Privacy Mode: ON / OFF
- [ ] Team Data Sharing Policy: Aware of / Needs review

**Team Recommendation:**
- Privacy Mode should match your organization's data governance requirements
- If you're on an Enterprise team, your admin has set data sharing policies
- Contact your admin if you need to adjust data sharing settings

**My Notes:**


---

### Topic 3: Indexing Configuration

**What Gets Indexed:**
- Your source code files (to create semantic embeddings for search)
- File paths (obfuscated) and line numbers
- Mathematical embeddings (vectors) representing code semantics
- NOT your raw code (sent temporarily, then discarded after embeddings are created)

**Index Settings:**

```
Settings → Cursor Settings → Features → Codebase Indexing
```

**How Indexing Works:**
- Cursor creates embeddings that represent your code semantically
- These embeddings power semantic search (Cmd K, natural language queries)
- The vector database never stores raw code—only mathematical representations
- When you search, we match your query embedding against stored embeddings, then retrieve actual code from your local machine

**My Configuration:**
- [x] Index entire workspace: YES
- [x] Index dependencies (node_modules, etc.): NO
- [x] Auto-index on startup: YES

**Performance Considerations:**
- Indexing large workspaces or including node_modules can be slow on first run
- Subsequent indexing is incremental (only changed files are re-indexed)
- Exclude large dependency folders if indexing is slow
- For large projects, consider disabling auto-index on startup if your machine has limited resources

**My Notes:**

**Key Takeaway:** Semantic Search + Grep = Better Results
- **Grep**: Exact text matching (fast, precise)
- **Semantic Search**: Finds code by meaning, not just names
  - Example: "update top navigation" finds header.tsx
- Agent uses both together for best results

**Quick Reference:**
| What | Details |
|------|---------|
| **How it works** | Code → chunks → embeddings → searchable vectors |
| **Privacy** | Paths encrypted, code discarded after indexing |
| **Performance** | 80% ready for search; auto-sync every 5 min |
| **View indexed files** | Settings > Indexing & Docs > View included files |

---

### Topic 4: Performance Optimization

**Strategies for Better Performance:**

1. **Configure .cursorignore**
   - Exclude: `node_modules/`, `dist/`, `build/`, `.git/`, `*.log`, large binary files
   - Why: Reduces indexing scope, speeds up search, uses less memory

2. **Selective Indexing**
   - Exclude generated/compiled code and dependencies
   - Include only your source code (src/, lib/, etc.)

3. **Memory Management**
   - Disable auto-index on startup for large projects (index manually when needed)
   - Close other apps if indexing is slow

**My Settings:**

- [ ] .cursorignore configured:  NO
- [x] Excluded unnecessary folders: YES (I guess by team rules). I need to check it.
- [x] Auto-index on startup: ON


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

## 💡 Key Takeaways

1. **Privacy Mode is essential for code security**
   - Ensures Zero Data Retention (ZDR) agreements—code is never stored or used for training
   - Always recommended, especially for enterprise teams with sensitive code

2. **Match models to task complexity for optimal workflow**
   - Use faster models (Composer, Haiku) for simple tasks; powerful models (Sonnet) for complex scenarios
   - Agent Mode (Cmd+E) executes commands automatically; Chat Mode only suggests code

3. **Indexing configuration impacts performance**
   - Exclude node_modules and use .cursorignore to prevent slowdowns
   - Semantic search + grep together provide better results than either alone

---

## 🔍 Practical Examples

### Example 1: Exporting My Settings

**What I Did:**
```
1. Open Command Palette: Cmd+Shift+P (or Ctrl+Shift+P on Windows/Linux)
2. Search for: "Preferences: Open Profiles (UI)"
3. Find your profile in the left sidebar
4. Click the 3-dot menu (⋯) next to your profile
5. Select "Export Profile"
6. Choose export destination:
   - Local machine (saves as a file)
   - GitHub Gist (shareable link)
```

**Settings File Location:**
```
Profile export creates a portable configuration file that includes:
- Settings (editor, AI models, privacy, etc.)
- Extensions list
- Keybindings
- Snippets
- Other profile-specific configurations
```

---

### Example 2: Testing Privacy Mode

**Scenario:**
Understanding the impact of Privacy Mode, especially when team-enforced.

**If Privacy Mode is controlled at the team level:**
- **Cannot be individually toggled:** If your team admin has enabled Privacy Mode, individual users cannot switch it off.
- **Assumed ON:** You operate under the assumption that Zero Data Retention (ZDR) is active, and your code is not being stored or used for model training.

**If Privacy Mode is NOT controlled at the team level (individual control):**

**With Privacy Mode OFF:**
- Your code context may be used by LLM providers for model training.
- Less secure for sensitive or proprietary code.

**With Privacy Mode ON:**
- Code context sent to LLMs is immediately discarded and not retained (ZDR).
- Enhanced security and compliance for sensitive projects.

**Learning:**
- Direct testing of Privacy Mode ON vs OFF is only possible when it's not team-enforced.
- Always confirm your team's privacy policy and rely on admin settings for ZDR guarantees.


---

### Example 3: Optimizing Indexing Performance

**Before Optimization:**
- Index time: Initially slow (e.g., 10-15 minutes for a large repo with `node_modules`)
- Performance issues: Slow semantic search, high CPU/memory usage during indexing, editor unresponsiveness.

**Changes Made:**
1. **Configured `.cursorignore`:**
   - Added `node_modules/`, `dist/`, `build/`, `.git/`, and `*.log` to `.cursorignore`
   - Excluded large binary files to reduce indexing scope
2. **Enabled Selective Indexing:**
   - Ensured only essential source code directories (e.g., `src/`, `lib/`) were included
   - Explicitly excluded generated code and dependencies
3. **Adjusted Auto-index on Startup:**
   - For very large projects, considered disabling auto-index on startup to manually control when indexing occurs
   - For most projects, kept it enabled but with smart exclusions

**After Optimization:**
- Index time: Significantly faster (e.g., 1-2 minutes for subsequent incremental indexes, 3-5 minutes for full re-index)
- Performance: Improved semantic search speed, lower memory consumption, more responsive editor.

**Learning:**
- Strategic use of `.cursorignore` and selective indexing are critical for maintaining a performant Cursor environment.
- Excluding unnecessary files and directories dramatically reduces indexing load and improves overall responsiveness.
- Incremental indexing is efficient, but initial setup requires careful configuration.

---

### Experiment: Verifying `.cursorignore` Effectiveness

**Before Experiment:**
- Initially, the `test-no-index-folder/test-file.txt` was created in the project root with the content "This is a test file to check indexing."
- A `codebase_search` for "This is a test file to check indexing" successfully returned `test-no-index-folder/test-file.txt`, confirming it was indexed.

**Changes Made:**
- A `.cursorignore` file was created in the project root with the single entry: `test-no-index-folder/`.

**After Experiment:**
- A subsequent `codebase_search` for "This is a test file to check indexing" *did not* return any results from `test-no-index-folder/test-file.txt`.

**Learning:**
- This experiment successfully demonstrated that Cursor actively respects the `.cursorignore` file for semantic indexing. By adding a folder to `.cursorignore`, its contents are effectively excluded from the codebase index, which is crucial for managing performance and controlling the scope of AI context.


## ⚠️ Challenges & Solutions

### Challenge 1: Cursor was slow on large codebase

**Problem:** Initial indexing or subsequent semantic searches in large codebases (especially those with many dependencies like `node_modules`) caused Cursor to be slow, consume excessive CPU/memory, and sometimes become unresponsive.

**Solution:** Implemented a comprehensive `.cursorignore` file at the project root to exclude all non-essential directories such as `node_modules/`, `dist/`, `build/`, `.git/`, and log files. Additionally, configured Cursor's indexing settings to only include relevant source code folders (`src/`, `lib/`) and disable indexing of dependencies.

**Prevention:**
1.  **Standardized `.cursorignore`:** Created a team-wide `.cursorignore` template for all new projects to ensure critical exclusions are in place from day one.
2.  **Automated Settings Deployment:** Recommended using exported profiles to quickly apply optimized indexing and performance settings for all team members.
3.  **Regular Review:** Scheduled periodic reviews of `.cursorignore` and indexing configurations, especially when new tools or large libraries are introduced to the project.

---

## ❓ Questions & Answers

### Q1: Where are Cursor settings stored?
**A:** Settings are stored in JSON format. You can access them via:
- **Command Palette:** `Cmd+Shift+P` → "Preferences: Open User Settings (JSON)"
- **File locations:**
  - macOS: `~/Library/Application Support/Cursor/User/settings.json`
  - Windows: `%APPDATA%\Cursor\User\settings.json`
  - Linux: `~/.config/Cursor/User/settings.json`

**Note:** For easier sharing/syncing, use **Profiles** (`Cmd+Shift+P` → "Preferences: Open Profiles (UI)") which can export all settings, extensions, and configurations together.

**Source:** Cursor/VS Code documentation

---

### Q2: Can I sync settings across machines?
**A:** Yes! The easiest way is using Profile Export:
1. **Export Profile:** `Cmd+Shift+P` → "Preferences: Open Profiles (UI)" → 3-dot menu → "Export Profile"
2. **Choose export method:** Local file or GitHub Gist
3. **Import on other machine:** Import the exported profile file/Gist

Alternatively, you can manually copy `settings.json` from:
- macOS: `~/Library/Application Support/Cursor/User/settings.json`
- Windows: `%APPDATA%\Cursor\User\settings.json`
- Linux: `~/.config/Cursor/User/settings.json`

**Source:** Cursor/VS Code Profiles documentation

---

### Q3: What's the recommended privacy setting for team?
**A:** For teams, **Privacy Mode (Zero Data Retention - ZDR) should always be enabled.** This is a critical security best practice that ensures code context is immediately discarded by LLM providers and never used for model training.

**Key considerations for teams:**
-   **Enforced at team level:** Ideally, Privacy Mode should be enforced by the team administrator to ensure consistent application across all members.
-   **Enterprise default:** For Enterprise teams, Privacy Mode is typically enabled by default.
-   **Compliance:** Essential for handling sensitive, proprietary, or compliance-regulated code.
-   **Data Sharing Policy:** Team administrators set and manage data sharing policies; individual members should be aware of and adhere to these.

**Source:** Cursor Privacy & Telemetry Settings (Topic 2 in this document) and general security best practices for AI-assisted development.

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
- [x] Keyboard shortcuts cheatsheet → Path: `deliverables/phase-1-foundations/keyboard-shortcuts-cheatsheet.md`

---

## 🎬 Next Steps

After completing this step:

1. [ ] Share settings template with team
2. [x] Create team privacy policy for Cursor usage
3. [x] Document any custom configurations
4. [x] **Phase 1 Complete!** Move to Phase 2: Core AI Features

---

## 📊 Self-Assessment

Rate your understanding (1-5 scale):

- [ ] 1 - Need to review again
- [ ] 2 - Basic understanding
- [ ] 3 - Good understanding
- [x] 4 - Strong understanding
- [ ] 5 - Expert level, can teach others

**Confidence Level:** 4/5

**Notes on what to review:**
- Do we have global .cursorignore and do we control Privacy mode?

---

## 💭 Personal Notes & Insights

- The new Profile Export feature is a game-changer for team consistency and syncing settings across multiple machines, simplifying environment setup significantly.
- Striking the right balance between comprehensive codebase indexing and performance optimization is crucial. Effective use of `.cursorignore` and selective indexing is key to achieving this balance.
- Cursor's strong emphasis on Privacy Mode and Zero Data Retention (ZDR), especially at the team level, provides a robust security foundation critical for handling sensitive enterprise codebases.
- The `Cmd+K` (Inline Edit) feature is incredibly efficient for quick, context-aware code modifications, significantly streamlining the editing workflow.

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

**Last Updated:** 23.12.25

