# Templates

Reusable configuration files and templates for team projects.

---

## 📄 Available Templates

### 1. [.cursorrules.template.md](.cursorrules.template.md)
**Team coding standards for Cursor AI**

**Usage:**
1. Copy to your project root as `.cursorrules`
2. Customize for your tech stack
3. Fill in project-specific sections
4. Keep updated as standards evolve

**When to Create:**
- At the start of every new project
- When onboarding to existing projects
- To be completed in Step 18

**Customization Points:**
- Tech stack section
- Coding conventions
- Testing requirements
- Project-specific rules

---

### 2. [.cursorignore.template](.cursorignore.template)
**Security and performance exclusions**

**Usage:**
1. Copy to your project root as `.cursorignore`
2. Add project-specific patterns
3. Test that sensitive files are excluded
4. Review regularly

**When to Create:**
- At the start of every project
- BEFORE first Cursor use on project
- To be completed in Step 12

**Security Critical:**
- ⚠️ Always review security section
- ⚠️ Test with sensitive files
- ⚠️ Update for new secret types

---

### 3. [cursor-settings.json](cursor-settings.json)
**Shared Cursor configuration**

**Usage:**
1. Open: Cursor → Settings → Open Settings (JSON)
2. Copy relevant sections
3. Customize for team preferences
4. Share with team

**When to Use:**
- During initial Cursor setup
- When onboarding new team members
- To maintain consistent settings
- To be refined in Step 3

**Customization Points:**
- Model selection per feature
- Privacy settings
- Editor preferences
- Language-specific formatters

---

### 4. [snippets.code-snippets](snippets.code-snippets)
**Team code snippet library**

**Usage:**
1. Copy to `.vscode/snippets.code-snippets` in your project
2. Or add to user snippets: Cmd+Shift+P → "Configure User Snippets"
3. Customize for your patterns
4. Add team-specific snippets

**When to Use:**
- At project start
- When establishing team patterns
- To speed up common tasks
- To be completed in Step 19

**Customization Points:**
- Add component patterns
- Add test templates
- Add API route templates
- Add domain-specific snippets

---

## 🎯 Template Workflow

### For New Projects

1. **Start with .cursorignore** (Security first!)
   ```bash
   cp templates/.cursorignore.template .cursorignore
   # Review and customize
   ```

2. **Create .cursorrules** (Team standards)
   ```bash
   cp templates/.cursorrules.template.md .cursorrules
   # Fill in tech stack and conventions
   ```

3. **Set up snippets** (Productivity boost)
   ```bash
   mkdir -p .vscode
   cp templates/snippets.code-snippets .vscode/
   # Customize for your patterns
   ```

4. **Apply Cursor settings** (Individual developers)
   - Share cursor-settings.json
   - Each developer applies to their Cursor

### For Existing Projects

1. **Audit first:**
   - What secrets exist?
   - What's the tech stack?
   - What are current conventions?

2. **Start with security:**
   - Create .cursorignore
   - Test with real code
   - Verify sensitive files excluded

3. **Document standards:**
   - Create .cursorrules
   - Capture existing patterns
   - Get team review

4. **Enhance productivity:**
   - Add snippets
   - Share settings
   - Iterate based on usage

---

## 📝 Customization Guide

### Tech Stack Variables

Replace these placeholders in templates:

- `[Your Project Name]` → Actual project name
- `[Framework + Version]` → e.g., "React 18.2"
- `[Database]` → e.g., "PostgreSQL 16"
- `[Test Framework]` → e.g., "Vitest"
- `[Package Manager]` → e.g., "pnpm"

### Project-Specific Patterns

Add sections for:
- Authentication patterns
- API conventions
- State management patterns
- Error handling approaches
- Deployment processes

### Team Preferences

Customize based on:
- Team size and structure
- Code review processes
- Testing requirements
- Documentation standards
- CI/CD pipelines

---

## 🔄 Maintenance

### Regular Updates

**Monthly:**
- Review .cursorignore for new secret types
- Update .cursorrules with new patterns
- Add new snippets discovered by team

**Quarterly:**
- Full template review
- Incorporate Cursor updates
- Team feedback integration
- Documentation refresh

**When:**
- New team member joins → Review and improve onboarding
- New tool adopted → Update templates
- Security incident → Update .cursorignore
- Pattern emerges → Add to .cursorrules

---

## 💡 Tips

### For .cursorrules
- Start simple, add detail over time
- Include examples for complex rules
- Link to full documentation
- Keep it under 1000 lines

### For .cursorignore
- Test thoroughly with real secrets
- Err on the side of excluding more
- Document why each pattern exists
- Review after security scans

### For Snippets
- Focus on frequently used patterns
- Include descriptive placeholders
- Test snippets before sharing
- Gather team feedback

### For Settings
- Start with recommended defaults
- Adjust based on team feedback
- Document any non-standard choices
- Version control with project

---

## 📚 Resources

- [Step 4.2: .cursorignore Guide](../docs/phase-4-security-privacy/02-cursorignore-guide.md)
- [Step 5.1: .cursorrules Guide](../docs/phase-5-team-collaboration/01-cursorrules-guide.md)
- [Step 5.2: Snippets Guide](../docs/phase-5-team-collaboration/02-snippets-templates.md)
- [Cursor Documentation](https://cursor.sh/docs)

---

**Last Updated:** ____  
**Maintained By:** [Your Name / Team]

