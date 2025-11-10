# Step 4.4: Safe Prompting Strategies

**Phase:** Security & Privacy 🔒  
**Date Started:** ____  
**Date Completed:** ____  
**Time Spent:** ___ hours

---

## 📋 Overview

Learning to redact sensitive data before sharing with AI, recognizing safe vs unsafe prompts, and developing habits for secure AI interaction.

---

## 🎯 Learning Objectives

By the end of this step, I should be able to:

- [ ] Redact sensitive data before sharing
- [ ] Distinguish safe from unsafe prompts
- [ ] Use redaction scripts and tools
- [ ] Teach safe prompting to team

---

## 📚 Topics Covered

### Topic 1: Safe vs Unsafe Prompts

**❌ UNSAFE:**
```
"Here's my error:
Error: Failed to connect to postgresql://admin:P@ssw0rd@prod.db.com
API Key: sk_live_51Hx...
```

**✅ SAFE:**
```
"Here's my error (credentials redacted):
Error: Failed to connect to postgresql://[USER]:[PASS]@[HOST]
API Key: sk_live_[REDACTED]
```

**My Examples:**

| Unsafe | Safe | Why |
|--------|------|-----|
| | | |

---

### Topic 2: What to Redact

**Always Redact:**
- Passwords and API keys
- Database connection strings
- Email addresses (use user@example.com)
- Phone numbers
- Session tokens
- [Your additions]

**Safe to Share:**
- Error types
- Stack traces (redacted)
- Code structure
- Architecture questions

**My Notes:**


---

### Topic 3: Redaction Techniques

**Manual Redaction:**
```
Find: actual_api_key_value
Replace with: [REDACTED]
```

**Redaction Script:**
```bash
#!/bin/bash
sed -E \
  -e 's/password[=:][^&[:space:]]*/password=REDACTED/gi' \
  -e 's/api[_-]?key[=:][^&[:space:]]*/api_key=REDACTED/gi' \
  -e 's/token[=:][^&[:space:]]*/token=REDACTED/gi'
```

**My Redaction Workflow:**


---

### Topic 4: Real-World Scenarios

**Scenario 1: Debugging Database Error**

**Wrong Way:**
```
[Example with real credentials]
```

**Right Way:**
```
[Example with redacted credentials]
```

**Scenario 2: Sharing API Response**

**Wrong Way:**
```
[Your example]
```

**Right Way:**
```
[Your example]
```

---

## 💡 Key Takeaways

1. **When in Doubt, Redact**
   - 
2. **Use Placeholders**
   - 
3. **Review Before Sending**
   - 

---

## 🔍 Practical Examples

### Example 1: Redacting Error Log

**Original:**
```
[Your example with fake sensitive data]
```

**Redacted:**
```
[Your redacted version]
```

**Method Used:**


---

### Example 2: Creating Redaction Script

**Script Created:**
```bash
[Your script]
```

**Test:**
- Input: 
- Output: 
- Effectiveness: 

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

### Q1: Can I share error stack traces?
**A:** 

---

### Q2: What about localhost URLs?
**A:** 

---

## 🔗 Resources

- [Redaction tools]
- [Best practices]

---

## 📦 Deliverables Created

- [ ] Redaction script → Share with team
- [ ] Safe prompting guide → Document
- [ ] Examples library → Create

---

## 🎬 Next Steps

1. [ ] Create redaction script
2. [ ] Test with real (redacted) data
3. [ ] Train team on safe prompting
4. [ ] Move to Step 4.5: .cursorrules Security Section

---

## 📊 Self-Assessment

**Confidence Level:** ___/5

---

## 💭 Personal Notes & Insights




---

## 🔄 Review Checklist

- [ ] All objectives completed
- [ ] Redaction methods learned
- [ ] Scripts created
- [ ] Team training planned

---

**Status:** 🟡 In Progress  
**Last Updated:** ____

