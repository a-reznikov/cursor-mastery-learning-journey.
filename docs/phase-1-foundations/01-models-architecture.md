# Step 1.1: Cursor AI Models & Architecture

**Phase:** Foundations  
**Date Started:** 17.11.25  
**Date Completed:** 02.12.25  
**Time Spent:** 8 hours

---

## 📋 Overview

Understanding the different AI models available in Cursor, their capabilities, performance characteristics, and when to use each one. This foundational knowledge will help you make informed decisions about model selection for different tasks.

---

## 🎯 Learning Objectives

By the end of this step, I should be able to:

- [x] Explain the differences between Claude Sonnet 4.5, Opus 4.1, GPT-5 Mini, and Composer1
- [x] Choose the appropriate model for different development tasks
- [x] Understand the performance vs capability trade-offs
- [x] Configure model selection in Cursor settings
- [x] Estimate costs and performance for each model

---

## 📚 Topics Covered

### Topic 1: Available AI Models

**Models in Cursor:**

#### Claude Sonnet 4.5
**Characteristics:**
- **Core specialization**: Balanced multimodal assistant optimized for developer workflows — strong instruction-following, code help, and image-aware reasoning.
- **Key capabilities**: Tool & plugin integration, long-context understanding (typical 200k, Max Mode 1M), robust step‑by‑step reasoning and summarization.
- **Limitations & controls**: Can hallucinate on edge cases and is costlier for large outputs (Input $3 / Output $15 per M tokens); use system prompts, temperature, and retrieval/guardrails for safer, more deterministic results.

**Best For:**
- **Developer workflows & pair-programming**: code generation, reviews, refactoring, and debugging assistance.
- **Long-context, multi-step reasoning**: design synthesis, summarization, and tasks that need large-context understanding.
- **High‑quality summarization**: condensing long PRs, meeting notes, or technical docs into actionable summaries.

**Performance:**
- Speed: medium
- Cost: Input - 3$ / Output - 15$ per million tokens
- Context: 200k (Max Mode - 1M)
- Capabilities: 🔌tools / 💡 thinking / 🌅 images

**My Notes:**
This model showed the best result when creating a project structure with linked links between files. 
It works very well with a large context and produces an almost error-free result based on the context.

**Prompt example**: Can you run multisteps (3 step) test answer? I want to check how it will be displayed on cursor dashboard.
This can be very expensive in multistep mode, with each new step the context increases and the total number of tokens is not known (for example, the number of tokens reached 1M)

---

#### Claude Opus 4.1 (Most Capable)
**Characteristics:**
- **Core specialization**: Top-tier, high-capability model for complex reasoning, multi-step synthesis, and creative/high-stakes outputs.
- **Key capabilities**: Deep factual & logical reasoning, strong multi-turn context handling, advanced code understanding and multimodal synthesis.
- **Limitations & controls**: Higher latency and cost; may still hallucinate on obscure facts — use strict guardrails, retrieval/RAG, and sampling/system-prompt controls for safer outputs.

**Best For:**
- **High‑stakes, in-depth research & synthesis**: literature reviews, technical whitepapers, policy analysis requiring careful reasoning.
- **Complex multi‑step code & architecture work**: designing systems, large refactors, cross-file reasoning, advanced code generation and explanation.
- **Expert-level technical writing**: high-quality docs, RFCs, proposals, and developer-facing tutorials with precise tone and structure.

**Performance:**
- Speed: low
- Cost: Input - 15$ / Output - 75$ per million tokens
- Context: - (Max mode 200k)
- Capabilities: 🔌tools / 💡 thinking / 🌅 images

**My Notes:**
It's too expensive. I need to think about how I can try this model in my work.

---

#### GPT-5 Mini (Cheap)
**Characteristics:**
- **Core specialization**: Compact, low‑latency assistant optimized for high‑throughput developer tooling and in‑IDE completions—fast, cost‑effective automation for routine tasks.
- **Key capabilities**: Very fast token throughput and low cost; reliable short‑to‑medium context code completions, snippet generation, and interactive suggestions.
- **Limitations & controls**: Modest context window and limited deep‑reasoning ability; not suited for long multi‑step workflows without retrieval/chaining—use conservative sampling and escalate to larger models when needed.

**Best For:**
- **In‑IDE/autocomplete & real‑time suggestions**: low‑latency completions, contextual code hints, and inline assistance.
- **High‑throughput routine automation**: bulk refactors, test generation, lint fixes, and CI automation where cost and speed matter.
- **Lightweight documentation & summarization**: PR summaries, commit messages, function docstrings, and short technical notes.

**Performance:**
- Speed: medium
- Cost: Input - 0,25$ / Output - 2$ per million tokens
- Context: 272k (Max mode -)
- Capabilities: 🔌tools / 💡 thinking / 🌅 images

**My Notes:**
Well-suited for daily developer workflows: low‑latency autocompletion, ask mode.

---

#### Composer1 (Fast & Light)
**Characteristics:**
- **Core specialization**: Lightweight, low‑latency assistant optimized for high‑throughput developer workflows — in‑IDE completions, quick refactors, and fast autocompletion.
- **Key capabilities**: Very fast token throughput and low cost; excels at short‑to‑medium context code generation, concise summaries, and interactive assistant tasks.
- **Limitations & controls**: Not designed for deep multi‑step reasoning or very long contexts; lower factual robustness on complex queries — use prompt engineering, conservative temperature, and retrieval/guardrails when needed.

**Best For:**
- 
- 

**Performance:**
- Speed: fast
- Cost: Input - 1.5$ / Output - 10$ per million tokens
- Context: 200k (Max mode -)
- Capabilities: 🔌tools / 🌅 images

**My Notes:**
Good for fast refactoring and daily use; not ideal for complex multi‑step workflows.

---

### Topic 2: Model Selection Strategy

**Decision Matrix:**

| Task Type | Recommended Model | Why |
|-----------|-------------------|-----|
| Daily coding | Composer1 | Very fast, cheap, designed for writing code |
| Autocomplete | GPT-5 Mini, Composer1 | cheap and fast |
| Complex architecture | Claude Sonnet 4.5 or Claude Opus 4.1| multi-steps with large context handling |
| Quick refactoring |  Composer1 | fast and good at refactoring|
| Debugging complex issues | Claude Sonnet 4.5 | better at multi-step debugging and context-heavy traces | 
| Writing tests | add after writing tests| |
| Documentation | Claude Sonnet 4.5 or Claude Opus 4.1 | this course was created with Sonnet 4.5 |

**My Notes:**
We should use cheaper models for everyday use (Composer1 or others).
Claude Sonnet 4.5 is very good at programming, but it can be very expensive, we have to use it when cheaper models cannot solve the required task.

---

### Topic 3: Context Windows Explained

**What is a Context Window?**

A **context window** is the **maximum amount of text** (measured in tokens) that an **AI model can "see" and process at one time**. Think of it as the model's memory or working space for a single conversation or task.

**Simple analogy**: If you were reading a book, your context window would be how many pages you can keep in your mind at once. A larger context window means the model can reference more previous messages, code files, or documentation simultaneously.


**1 Token = ?**
- Approximately _4_ characters
- Approximately _0.75_ words

**200k Token = ?**
- Approximately _800k_ characters
- Approximately _150k_ words


**In practice**: 

*Objective:** Understand tokens in practice by testing various texts with different tokenizers.

**Available Tokenizer Tools:**
1. **Skytells AI Token Counter** → https://www.skytells.ai/tools/tokenizer
2. **Pinecone Tokenization Demo** → https://www.pinecone.io/learn/tokenization/
3. **Tokenizers #3** → find it yourself
4. **Tokenizers #4** → find it yourself

**Test Texts (Count tokens for each):**

| # | Sample Text | Tokens (Your Count) / (Tokenizers) | Notes |
|---|---|---|---|
| 1 | Hello, world! | _4/4_ | Simple greeting |
| 2 | The quick brown fox jumps over the lazy dog | _10/10_ | Common phrase |
| 3 | `def calculate_sum(a, b):\n    return a + b` | _10/11-13_ | Python code |
| 4 | Your project's README section | _300/310_ | Real-world text |




**Why Context Matters:**
Context window size directly impacts the LLM's ability to understand and process information. A larger context window allows the model to "see" and reference more of your code, documentation, or conversation history at once. If you're working with large files or complex multi-step tasks, choosing a model with adequate context ensures the LLM won't lose critical information and can provide better, more accurate responses.


**My Notes:** 

**_Key Insight:_** Context window and model thinking power are INDEPENDENT.

- **Context Window** = How much text the model can see at once (storage capacity)
- **Model Intelligence** = How well it reasons and understands (processing power)

A model with a SMALLER context can be SMARTER than one with a LARGER context:
- GPT-5 Mini (272k context) = Fast but simple reasoning
- Sonnet 4.5 (200k context) = Smaller window but much deeper thinking

Choose your model based on TASK COMPLEXITY, not just context size.

---

## 💡 Key Takeaways

1. **Model Selection Should Match Task Complexity, Not Just Specs**
   - Use lightweight models (Composer1, GPT-5 Mini) for daily coding, autocomplete, and quick refactors
   - Reserve powerful models (Claude Sonnet 4.5, Opus 4.1) for complex architecture, multi-step reasoning, and high-stakes work

2. **Cost-Performance Trade-offs Are Critical for Sustainable Development**
   - Multi-step workflows, making costs unpredictable
   - Smart model selection can reduce costs by 10-50x while maintaining quality for most tasks
   - Start new conversations when previous context isn't needed — avoids paying for irrelevant conversation history tokens

3. **Context Window ≠ Model Intelligence — Both Matter Independently**
   - Context window = how much text the model can see at once (storage capacity)
   - Model intelligence = reasoning depth and understanding quality (processing power)
   - Example: Sonnet 4.5 (200k context) provides deeper reasoning than GPT-5 Mini (272k context) despite smaller window
   

4. **Cursor Rules Are Injected Into Every Request — Keep Them Minimal**
   - ALL cursor rules are added to EVERY conversation, even for simple questions (can increase costs 10-100x for tiny queries)
   - Keep rules concise (<2KB recommended) — every character consumes context tokens and costs money
   - Use project docs (`@docs/conventions.md`) for detailed guidelines instead of bloated cursor rules

---

## 🔍 Practical Examples

### Example 1: Testing Different Models

**Scenario:**
I tested the same prompt with different models to compare results.

**Prompt Used:**
```
I have a JavaScript array of user objects with 'name', 'email', and 'createdAt' properties.
Write a function that filters out duplicate emails, sorts by creation date (newest first),
and returns only the first 10 users. Make it readable and efficient.

Create a new file at: solutions/phase-1/example-1/{model_name}_user_filter.js

The file should include:
1. Your complete solution with the function
2. A comment at the top with your model name and the date
3. Example usage showing how to call the function
4. Comments explaining your approach

Replace {model_name} with your actual model name (e.g., sonnet-4.5, opus-4.1, gpt-5-mini, composer1).
```



**Results:**

| Model | Response Time | Tokens | Cost | Quality (0-10) | Notes |
|-------|--------------|---------|-------|-------|-------|
| [Sonnet 4.5](../../solutions/phase-1/example-1/sonnet-4.5_user_filter.js) | 41.44s | 54.2K | US$0.08 | 8 | Short, easy to read and understand. This solution doesn't validate email or date. |
| [Opus 4.5](../../solutions/phase-1/example-1/opus-4.5_user_filter.js) | 37.9s | 66.7K | US$1.60 | 8 | Implemented by Claude 4.5 Opus. Cost calculation is approximate (assumes an 85% input / 15% output split). Same solution as Sonnet's. |
| [GPT-5 Mini](../../solutions/phase-1/example-1/gpt-5-mini_user_filter.js) | 1m 18s | 93K | US$0.04 | 8 | This solution is almost the same as Composer's, but is easier to read. |
| [Composer1](../../solutions/phase-1/example-1/composer1_user_filter.js) | 15.5s | 41.4K | US$0.02 | 7 | Difficult to read, but includes input validation and can handle different date formats. |

**Learning:**

Composer is the fastest (15.5s) and most cost-efficient ($0.02)—ideal for prototyping. All models produced working solutions with different trade-offs:

- **Readability**: Sonnet 4.5 & Opus 4.5 → clean, nearly identical code
- **Robustness**: GPT-5 Mini → good balance of clarity and input validation  
- **Speed/Cost**: Composer1 → fast but denser code

**Key insight:** Premium models (Opus) don't guarantee better results for simple algorithmic tasks. Use them for complex reasoning or architecture decisions. For standard transformations, Composer or smaller models are more cost-effective.


---

## ⚠️ Challenges & Solutions

### Challenge 1: "Unexpected Bill Spike from Multi-Step Workflows"

**Problem:**
Started using Claude Sonnet 4.5 for a complex multi-step task (refactor → test → document), but noticed the final bill was 10-50x higher than expected. Each step added previous conversation context, causing token count to balloon unpredictably.

**Solution:**
- Start a **new conversation for each distinct phase** (refactoring, testing, documentation)
- Use the decision matrix to select cheaper models (Composer1, GPT-5 Mini) for standalone tasks
- Calculate context accumulation before multi-step workflows: multiply estimated tokens per step by 3-4x
- For truly complex work, use streaming or retrieval-augmented approaches to avoid full context re-submission

**Prevention:**
- Monitor token usage in real-time during development
- Set monthly budgets and track model spending by category
- Create a `.cursorrules` guideline: "Use Composer1 for single refactors; only escalate to Sonnet for tasks requiring deep reasoning"
- Review past conversations for unnecessary context carry-over before each new message

---

### Challenge 2: "Choosing Between Fast & Smart: Model Paralysis"

**Problem:**
Unsure whether to use Composer1 (fast, cheap) or Claude Sonnet 4.5 (slower, pricier) for a debugging task. Worry that Composer1 won't catch subtle bugs, but Sonnet 4.5 feels wasteful for simple issues.

**Solution:**
- **Start with Composer1** for initial issue reproduction and symptom gathering (1-2 turns)
- If Composer1 identifies the root cause, stop there and save cost
- **Escalate to Sonnet 4.5 only if**: the bug is multi-faceted, involves cross-file reasoning, or requires understanding edge cases
- Use this decision tree: _Is the problem describable in under 500 tokens?_ → Composer1. _Does it require understanding 3+ files or historical context?_ → Sonnet 4.5

**Prevention:**
- Document decision thresholds in your team's `.cursorrules`
- Test a few debugging scenarios with both models to build intuition for escalation
- Set a rule: "Default to cheaper model; only escalate if stuck after 2 attempts"

---

### Challenge 3: "Hallucinations & Unreliable Outputs"

**Problem:**
Claude Sonnet 4.5 generated a "solution" that looked great but included non-existent API methods and incorrect logic. The code passed initial review but failed in testing. Felt misled by the model's confident tone.

**Solution:**
- **All models hallucinate**—treat model output as a first draft, not gospel
- Use system prompts to add guardrails: "Only use methods from the provided API docs. Flag any uncertainty."
- Request step-by-step reasoning: "Explain your approach before writing code"
- Implement retrieval/documentation checks: reference actual API docs or code examples in your prompt
- For high-stakes work (production code, architecture), use Sonnet 4.5 or Opus 4.1 with explicit verification steps

**Prevention:**
- Always test generated code before deploying
- Pair AI-generated code reviews with human code review
- Maintain a "trusted reference" doc for critical APIs/patterns and inject it into prompts
- Use temperature settings wisely: lower temperature (0.3-0.5) for deterministic tasks, higher (0.7+) for creative work


---

## ❓ Questions & Answers

### Q1: How do I know which model is currently active?
**A:** Check the **model selector dropdown** at the top of the Chat or Composer panel. The active model name is displayed there and in message headers. You can also see your default model in **Settings → Models**.

**Source:** Cursor IDE Interface

---

### Q2: Can I switch models mid-conversation?
**A:** Yes, you can switch models at any point during a conversation using the model selector dropdown. When you switch:
- **All previous messages remain visible** and are included in the context sent to the new model
- **The new model takes over immediately** for subsequent messages
- **Token usage increases** because the full conversation history gets resubmitted to the new model
- **Each message shows which model generated it** in the message header

This is useful for escalating from a cheaper/faster model (like Composer1) to a more capable model (like Sonnet 4.5) when you need deeper reasoning. However, be mindful of costs—longer conversations that switch models multiple times can accumulate significant token usage (see Challenge 1 above).

**Source:** Cursor IDE behavior & practical testing 

---

### Q3: Which model should be default for my team?
**A:** 

**Recommendation: Composer1 as primary default, with strategic Sonnet 4.5 for complex tasks**

**Team Context:** 8 developers × $20/developer = $160/month total budget

For your Next.js frontend team with this budget constraint, here's the cost-optimized strategy:

#### Primary Default: **Composer1** (Fast & Cost-Efficient)
**Why it's the right choice at $160/month budget:**
- **Cost**: $0.02-0.05 per query → ~1,600-4,000 queries/month team-wide
- **Speed**: Fastest response time (15.5s) for in-IDE suggestions
- **Good for 80% of daily work**: autocompletion, quick refactors, test generation, linting
- **Adequate for React/TypeScript**: Example 1 shows Composer1 produces valid solutions (7/10 quality)
- **Reliability**: While code is denser, it includes input validation and edge case handling

**Use Composer1 for:**
- ✅ In-IDE autocompletion and suggestions
- ✅ Routine refactoring (renaming, formatting, simple restructuring)
- ✅ Writing tests and lint fixes
- ✅ Component updates and simple UI changes
- ✅ PR summaries and commit messages
- ✅ Boilerplate generation

#### Secondary: **Claude Sonnet 4.5** (Selective High-Value Tasks)
**Budget allocation:** ~$40/month per developer (~20% of queries)

**Use ONLY for:**
- 🎯 Complex architecture decisions
- 🎯 Multi-file debugging involving 3+ files
- 🎯 Performance optimization across components
- 🎯 Critical production bugs
- 🎯 Code review of complex logic

**Decision Rule:** Try Composer1 first (max 2 attempts). If stuck, escalate to Sonnet 4.5.

#### Avoid Completely at This Budget:
- ❌ **Opus 4.1** ($1.60/query = 12 queries total/month team-wide)
- ❌ **Long multi-step workflows** (costs balloon from context accumulation)

#### Implementation for Your Team:

```
.cursorrules (suggested):
Default model: Composer1
Cost management:
- Default: Composer1 for all daily tasks
- Escalation: Use Sonnet 4.5 only after 2 failed Composer1 attempts
- CRITICAL: Start fresh conversations to avoid context bloat
- Track: Monitor spending monthly per developer

Budget per developer: $20/month
- ~$16/month on Composer1 (~320-800 queries)
- ~$4/month on Sonnet 4.5 (~50 queries for complex work)
```

#### Monthly Budget Breakdown:
| Model | Team Total | Per Dev | Query Budget |
|-------|-----------|---------|--------------|
| **Composer1 (80%)** | ~$128 | ~$16 | ~2,560 queries |
| **Sonnet 4.5 (20%)** | ~$32 | ~$4 | ~400 queries |
| **Total** | **$160** | **$20** | **~2,960 queries** |

#### Quality Trade-offs at $160/month:
- ✅ **Speed**: Composer1 is fastest
- ✅ **Cost efficiency**: 8x cheaper than all-Sonnet
- ⚠️ **Code readability**: Composer code is denser (but functional)
- ⚠️ **Complex reasoning**: Limited for 5+ file refactors (escalate to Sonnet)
- ⚠️ **Architecture decisions**: May need Sonnet for critical decisions

#### Cost Optimization Tips:
1. **Keep conversations short** → New conversation = reset context (saves tokens)
2. **Use retrieval** → Paste relevant code snippets rather than asking model to find files
3. **Bundle questions** → Group related queries into one message
4. **Test locally first** → Reduce failed queries by testing ideas locally
5. **IDE autocompletion** → Use built-in Cursor features before AI queries

**Source:** Analysis based on your team constraints (8 developers, $20/dev/month = $160 total), tech stack (Next.js 15.3, React 19, TypeScript 5.8), and model comparison data (Example 1: rows 254-269)

---

## 🔗 Resources

### Official Documentation
- Cursor Docs: https://cursor.sh/docs
- Model comparison: [link if found]

### Community Resources
- [Links to helpful articles or videos]

### Internal Resources
- [Related docs in this learning path]

---

## 📦 Deliverables Created

- [ ] Model comparison table for team → Include in team docs
- [ ] Decision matrix for model selection → Add to .cursorrules guidance
- [ ] Performance notes → Share with team

---

## 🎬 Next Steps

After completing this step:

1. [ ] Update team recommendations based on learnings
2. [ ] Test each model with real code from our projects
3. [ ] Document model preferences for our use cases
4. [ ] Move to Step 1.2: Plans, Limits & Context Windows

---

## 📊 Self-Assessment

Rate your understanding (1-5 scale):

- [ ] 1 - Need to review again
- [ ] 2 - Basic understanding
- [ ] 3 - Good understanding
- [x] 4 - Strong understanding
- [ ] 5 - Expert level, can teach others

**Confidence Level:** _4_/5

**Notes on what to review:**
- 

---

## 💭 Personal Notes & Insights

### Core Realizations

1. **"Cheap by default, smart when stuck"** — Start with Composer1/GPT-5 Mini. Only escalate to Sonnet after 2 failed attempts. This alone can cut costs 10-50x.

2. **Context ≠ Intelligence** — GPT-5 Mini has 272k context but shallow reasoning. Sonnet 4.5 has 200k but thinks deeper. Pick models by *task complexity*, not window size.

3. **Multi-step = money trap** — Each step accumulates context. A 3-step Sonnet workflow can balloon to 1M tokens unexpectedly. Start fresh conversations between phases.

4. **All models lie confidently** — Even Sonnet hallucinated non-existent APIs. Treat every output as draft code. Test everything. Trust nothing blindly.

### What I Learned From Testing

- **Sonnet 4.5** shines at large-context work (project structures, linked files). Almost error-free when given good context.
- **Opus 4.1** is overkill for most tasks. Same quality as Sonnet for simple code at 20x the price.
- **Composer1** is the workhorse — fastest (15.5s), cheapest ($0.02), handles 80% of daily coding. Denser code but includes validation.
- **GPT-5 Mini** best for autocomplete and quick questions. Sweet spot of speed + cost.

### Cost Survival Rules

- **New chat = reset context = save tokens** — Don't carry irrelevant history.
- **Keep `.cursorrules` under 2KB** — They're injected into EVERY request.
- **Premium models don't guarantee premium results** — Opus and Sonnet produced identical code for the user filter task.


---

## 🔄 Review Checklist

Before moving to the next step:

- [x] All learning objectives completed
- [x] Tested all available models
- [x] Created comparison table
- [x] Documented decision criteria
- [x] Questions answered
- [x] Key takeaways summarized
- [x] Confidence level assessed

---

**Status:** ✅ Completed

**Last Updated:** 02.12.25

