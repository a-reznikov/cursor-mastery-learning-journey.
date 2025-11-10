# Step 15: .cursorrules Security Section

**Phase:** Security & Privacy 🔒  
**Date Started:** ____  
**Date Completed:** ____  
**Time Spent:** ___ hours

---

## 📋 Overview

Adding comprehensive security requirements to your `.cursorrules` file so Cursor AI automatically follows security best practices in generated code.

---

## 🎯 Learning Objectives

By the end of this step, I should be able to:

- [ ] Create security section for .cursorrules
- [ ] Define clear security requirements for AI
- [ ] Include incident response guidance
- [ ] Create PR security checklist

---

## 📚 Topics Covered

### Topic 1: Security Rules for .cursorrules

**Security Section Template:**
```markdown
## Security & Privacy Rules

### Secrets Management
- NEVER include actual API keys, passwords, or tokens
- ALWAYS use environment variables
- Reference via process.env.VARIABLE_NAME
- Use .env.example for documentation

### Code Review for AI
- No hardcoded credentials
- No real production URLs
- Proper error handling without leaks
- Logging without secrets

### What's Safe to Share with AI
✅ Code structure and logic
✅ Public API documentation
✅ Redacted error messages
✅ Anonymized test data

### What's NOT Safe
❌ Production credentials
❌ Real customer data
❌ Internal endpoints
❌ Security vulnerabilities (unpatched)
```

**My Project's Security Rules:**
```
[Your customized security section]
```

---

### Topic 2: Team Security Checklist

**PR Security Checklist:**
```markdown
### Security Checklist for Every PR
- [ ] No hardcoded secrets
- [ ] Environment variables used
- [ ] .env not committed
- [ ] No sensitive data in comments
- [ ] Error messages don't expose credentials
- [ ] Logs don't contain secrets
- [ ] Test data is anonymized
```

**My Additions:**
- [ ] 
- [ ] 

---

### Topic 3: Incident Response in .cursorrules

**Template:**
```markdown
### Incident Response
If credentials are accidentally committed or shared:
1. Immediately rotate/revoke exposed credentials
2. Check git history for exposure duration
3. Notify: [team lead contact]
4. Review access logs
5. Update .cursorignore to prevent recurrence
```

**My Project's Response Plan:**
```
[Your customized plan]
```

---

### Topic 4: AI Code Generation Rules

**Security Requirements for Generated Code:**
```markdown
### When Generating Code

Always Include:
1. Input validation
2. Error handling without leaks
3. Environment variable usage
4. Security comments where appropriate

Never Include:
1. Hardcoded credentials
2. Real data in examples
3. Commented-out sensitive code
4. Insecure patterns
```

**My Notes:**


---

## 💡 Key Takeaways

1. **Automated Security Guidance**
   - 
2. **Consistent Standards**
   - 
3. **Team Alignment**
   - 

---

## 🔍 Practical Examples

### Example 1: Complete Security Section

**.cursorrules Security Section:**
```markdown
[Your complete security section for .cursorrules]
```

**Testing:**
- Generated code follows rules: ✅/❌
- Security patterns applied: ✅/❌

---

### Example 2: Before/After .cursorrules

**Before (no security section):**
- AI generated: [Example with issue]

**After (with security section):**
- AI generated: [Improved example]

**Improvement:**


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

### Q1: Does .cursorrules guarantee secure code?
**A:** 

---

### Q2: How to enforce checklist?
**A:** 

---

## 🔗 Resources

- [.cursorrules Template](../../templates/.cursorrules.template.md)
- [Previous security steps]

---

## 📦 Deliverables Created

- [ ] Security section for .cursorrules → Created
- [ ] PR security checklist → Defined
- [ ] Incident response → Documented

---

## 🎬 Next Steps

1. [ ] Add security section to .cursorrules
2. [ ] Test with code generation
3. [ ] Share checklist with team
4. [ ] Move to Step 16: Team Security Guidelines Document

---

## 📊 Self-Assessment

**Confidence Level:** ___/5

---

## 💭 Personal Notes & Insights




---

## 🔄 Review Checklist

- [ ] All objectives completed
- [ ] Security section added to .cursorrules
- [ ] Checklist created
- [ ] Tested with AI generation

---

**Status:** 🟡 In Progress  
**Last Updated:** ____

