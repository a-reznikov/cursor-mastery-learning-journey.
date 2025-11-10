# Step 3.2: Test Writing Best Practices

**Phase:** Advanced Features  
**Date Started:** ____  
**Date Completed:** ____  
**Time Spent:** ___ hours

---

## 📋 Overview

Mastering AI-assisted test generation - learning to prompt for high-quality unit tests, integration tests, and E2E tests that actually add value.

---

## 🎯 Learning Objectives

By the end of this step, I should be able to:

- [ ] Generate high-quality unit tests with Cursor
- [ ] Create effective E2E test prompts
- [ ] Achieve good test coverage with AI assistance
- [ ] Review and improve AI-generated tests
- [ ] Build a library of test generation prompts

---

## 📚 Topics Covered

### Topic 1: Unit Test Generation

**Effective Unit Test Prompts:**
```
Template:
Write unit tests for [function/class]:
- Test happy path
- Test edge cases: [list]
- Test error conditions: [list]
- Use [test framework]
- Aim for 100% coverage
```

**Example:**
```
[Your actual prompt]
```

**Generated Tests Quality:**
- Coverage achieved: 
- Edge cases included: 
- What was missing: 

**My Notes:**


---

### Topic 2: Test Quality Checklist

**What Makes a Good Test:**
- [ ] Tests one thing
- [ ] Clear test name
- [ ] Arrange-Act-Assert structure
- [ ] Independent of other tests
- [ ] Fast execution
- [ ] Tests behavior, not implementation

**Reviewing AI-Generated Tests:**
```
Checklist:
- [ ] All edge cases covered?
- [ ] Error conditions tested?
- [ ] Mocks used appropriately?
- [ ] Test names descriptive?
- [ ] Assertions meaningful?
```

**My Notes:**


---

### Topic 3: Testing Patterns

**Unit Test Pattern:**
```typescript
describe('[Module]', () => {
  it('should [expected behavior]', () => {
    // Arrange
    [setup]
    
    // Act
    [action]
    
    // Assert
    [verification]
  });
});
```

**Integration Test Pattern:**
```
[Your pattern]
```

**E2E Test Pattern:**
```
[Your pattern]
```

**My Notes:**


---

### Topic 4: Test Coverage Strategy

**Prompting for Coverage:**
```
Good prompt:
[Your template]
```

**Before/After:**
- Coverage before AI help: ____%
- Coverage after: ____%
- Time saved: 

**Coverage Goals:**
- Critical paths: 100%
- Business logic: 90%+
- Utilities: 80%+
- Overall: 80%+

**My Notes:**


---

### Topic 5: E2E Test Generation

**E2E Test Prompt Template:**
```
Create E2E test for [user flow]:
- Navigate to [page]
- Steps: [list]
- Verify: [expectations]
- Handle: [edge cases]
- Use [test framework]
```

**Example:**
```
[Your actual E2E test prompt]
```

**Result:**


**My Notes:**


---

### Topic 6: TDD with Cursor

**Test-First Approach:**
```
1. Describe desired functionality
2. Ask Cursor to write tests first
3. Review tests
4. Ask Cursor to implement code
5. Verify tests pass
```

**Example TDD Session:**
```
[Your example]
```

**Benefits:**


**My Notes:**


---

## 💡 Key Takeaways

1. **[Be Specific in Prompts]**
   - 
   - 

2. **[Always Review Generated Tests]**
   - 
   - 

3. **[Test Quality Matters]**
   - 
   - 

---

## 🔍 Practical Examples

### Example 1: Generating Unit Tests

**Function Tested:**
```typescript
[Your function]
```

**Prompt:**
```
[Your prompt]
```

**Generated Tests:**
```typescript
[The tests Cursor generated]
```

**Quality Assessment:**
- What was good: 
- What needed improvement: 
- Final coverage: ____%

---

### Example 2: TDD Session

**Feature:**
[Description]

**Step 1 - Write Tests:**
```
Prompt: [Your prompt]
Generated: [Tests]
```

**Step 2 - Implement:**
```
Prompt: [Your prompt]
Generated: [Implementation]
```

**Step 3 - Verify:**
- Tests pass: Yes/No
- Refactoring needed: 

**Learning:**


---

### Example 3: Improving Test Coverage

**Module:**
[Name]

**Starting Coverage:** ____%

**Prompt:**
```
[Your prompt to improve coverage]
```

**Missing Tests Added:**
- 
- 
- 

**Final Coverage:** ____%

---

## ✅ What Worked Well

- 
- 
- 

---

## ⚠️ Challenges & Solutions

### Challenge 1: [e.g., "Generated tests missed edge cases"]

**Problem:**


**Solution:**


**Prevention:**


---

## ❓ Questions & Answers

### Q1: How specific should test prompts be?
**A:** 

**Source:** 

---

### Q2: Should I always accept generated tests as-is?
**A:** 

**Source:** 

---

### Q3: How to handle complex mocking scenarios?
**A:** 

**Source:** 

---

## 🔗 Resources

### Official Documentation
- [Your test framework docs]
- 

### Community Resources
- [Helpful resources]

### Internal Resources
- [Step 8: Browser Tools](08-browser-tools-testing.md)

---

## 📦 Deliverables Created

- [ ] Test generation prompts → Add to PROMPT_LIBRARY.md
- [ ] Test quality checklist → Share with team
- [ ] Testing patterns → Document for team

---

## 🎬 Next Steps

After completing this step:

1. [ ] Generate tests for existing untested code
2. [ ] Try TDD approach on new feature
3. [ ] Build test prompt library
4. [ ] Move to Step 3.3: Terminal Integration

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

[Your free-form notes about test generation, quality, coverage improvements, etc.]




---

## 🔄 Review Checklist

Before moving to the next step:

- [ ] All learning objectives completed
- [ ] Generated tests for multiple functions
- [ ] Tried TDD approach
- [ ] Built test prompt templates
- [ ] Improved coverage on real code
- [ ] Questions answered
- [ ] Key takeaways summarized

---

**Status:** 🟡 In Progress

**Last Updated:** ____

