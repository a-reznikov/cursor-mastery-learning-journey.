# Step 1.2: Plans, Limits & Context Windows

**Phase:** Foundations  
**Date Started:** 01.12.25  
**Date Completed:** ____  
**Time Spent:** ___ hours

---

## 📋 Overview

Understanding Cursor's pricing plans, usage limits, token budgets, and how the context window works. This knowledge is essential for team planning and budgeting.

---

## 🎯 Learning Objectives

By the end of this step, I should be able to:

- [ ] Compare Free, Pro, and Business plans
- [ ] Understand token budgets and quotas
- [ ] Explain what 1M token context window means in practice
- [ ] Plan budget for team adoption
- [ ] Implement strategies to manage rate limits

---

## 📚 Topics Covered

### Topic 1: Cursor Pricing Plans

#### Free Plan

**Features:**
- Try Cursor for free (trial period)
- Basic tab completions
- Access to test core features

**Limitations:**
- Limited requests compared to paid plans
- No guaranteed API usage credits
- Limited access to premium models

**Good For:**
- Evaluating Cursor before committing
- Small personal projects
- Learning the tool

**My Notes:**
Good for evaluation and learning. Not suitable for production work due to limited requests and no guaranteed credits.


---

#### Individual Plans

**All individual plans include:**
- Unlimited tab completions
- Extended agent usage limits on all models
- Access to Bugbot
- Access to Cloud Agents
- Usage charged at model inference API prices (with included credits + bonus usage)

**Pro Plan ($20/month):**
- **Included usage**: $20 of API agent usage + bonus usage per month
- **Roughly equivalent to**: ~225 Sonnet 4.5 requests, ~550 Gemini requests, or ~500 GPT 5 requests
- **Good for**: Daily tab users (always stay within $20), Limited agent users (often stay within $20)

**Pro Plus Plan ($70/month):**
- **Included usage**: $70 of API agent usage + bonus usage per month
- **Roughly equivalent to**: ~675 Sonnet 4.5 requests, ~1,650 Gemini requests, or ~1,500 GPT 5 requests
- **Good for**: Daily agent users (typically $60–$100/mo total usage)

**Ultra Plan ($400/month):**
- **Included usage**: $400 of API agent usage + bonus usage per month
- **Roughly equivalent to**: ~4,500 Sonnet 4.5 requests, ~11,000 Gemini requests, or ~10,000 GPT 5 requests
- **Good for**: Power users (multiple agents/automation, often $200+/mo total usage)

**Usage Expectations (Based on Cursor's usage data):**
- **Daily Tab users**: Always stay within $20
- **Limited Agent users**: Often stay within the included $20
- **Daily Agent users**: Typically $60–$100/mo total usage
- **Power users**: Often $200+/mo total usage

**What happens when you reach your limit?**
When you exceed your included monthly usage, you'll be notified in the editor and can choose to:
- **Add on-demand usage**: Continue using Cursor at the same API rates with pay-as-you-go billing
- **Upgrade your plan**: Move to a higher tier for more included usage
- On-demand usage is billed monthly at the same rates as your included usage
- Requests are never downgraded in quality or speed

**My Notes:**
**Pro ($20)**: Best value for most developers. Covers daily tab users and limited agent usage. Start here. **Pro Plus ($70)**: For daily agent users who exceed $20 regularly. **Ultra ($400)**: Only for power users with automation/multiple agents. Most teams won't need this.


---

#### Teams Plans

**Teams Plan ($40/user/month):**
- Everything in Pro
- Privacy Mode enforcement
- Admin Dashboard with usage stats
- Centralized team billing
- SAML/OIDC SSO
- **Recommended for**: Customers happy self-serving

**Enterprise Plan (Custom Pricing):**
- Everything in Teams
- Priority support
- Pooled usage across team
- Invoicing
- SCIM provisioning
- Advanced security controls
- **Recommended for**: Customers needing priority support, pooled usage, invoicing, SCIM, or advanced security controls

**My Notes:**
**Teams ($40/user)**: Good for small-medium teams needing centralized billing, SSO, and usage tracking. **Enterprise**: Only for large orgs needing pooled usage, invoicing, SCIM, or advanced security. Most teams can self-serve with Teams plan.


---

#### Additional Features

**Auto Mode:**
- Allows Cursor to select the premium model best fit for the immediate task
- Automatically switches models based on highest reliability and current demand
- Can detect degraded output performance and switch models automatically
- **Usage rates**: Input + Cache Write: $1.25/1M tokens, Output: $6.00/1M tokens, Cache Read: $0.25/1M tokens
- Usage shown in both editor and dashboard
- If you prefer to select a model directly, usage is incurred at that model's list API price

**Max Mode:**
- Available on certain models
- Allows for longer reasoning and larger context windows up to 1M tokens
- Helpful for complex queries, especially with large files or codebases
- Consumes more usage than standard mode
- View all requests and token breakdowns on dashboard

**Bugbot (Separate Product):**
- **Pro**: $40/mo - Unlimited reviews on up to 200 PRs/month, unlimited Cursor Ask, integration with Cursor to fix bugs, Bugbot Rules
- **Teams**: $40/user/mo - Unlimited code reviews across all PRs, unlimited Cursor Ask, pooled usage, advanced rules and settings
- **Enterprise**: Custom - Everything in Teams plus advanced analytics, priority support, account management

**Cloud Agents:**
- Charged at API pricing for the selected model
- You'll be asked to set a spend limit when first using them


---

### Topic 2: Token Budgets & Quotas

**What is a Token?**

A token is the basic unit of text that AI models process. It's roughly equivalent to:
- **~4 characters** of text (or ~0.75 words)
- **~1 token per word** for English text
- **Variable for code**: Depends on syntax, comments, and formatting

**Examples from Real Usage:**
- Small request: 25K tokens ≈ ~18,750 words ≈ ~75 pages of text
- Medium request: 250K tokens ≈ ~187,500 words ≈ ~750 pages
- Large request: 5.2M tokens ≈ ~3,900,000 words ≈ ~15,600 pages (your Dec 15 outlier!)

**Why Tokens Matter:**
- Models charge per token (input + output)
- Context window limits are measured in tokens
- Longer conversations = more tokens = higher costs
- Code with comments and whitespace uses more tokens than dense code

**Understanding Request Types:**

**Fast Premium Requests:**
- Processed with minimal latency for quicker responses
- Used for time-sensitive operations like inline completions and quick code suggestions
- Each plan includes a specific monthly quota
- **Pro plan: 500/month**
- **Pro+ plan: 1,500/month (3× Pro)**
- **Ultra plan: 10,000/month (20× Pro)**
- **Teams plan: 500/user/month**

**Slow Premium Requests:**
- Processed after fast request quota is exhausted
- May experience longer wait times but still provide full functionality
- Used for chat conversations, code generation, refactoring, and complex tasks
- **Pro plan: Unlimited**
- **Pro+ plan: Unlimited**
- **Ultra plan: Unlimited**
- **Teams plan: Unlimited**

**How They're Counted:**
- Fast requests are counted first from your monthly quota
- Once fast request quota is exhausted, requests automatically become slow requests
- Slow requests are unlimited on paid plans (Pro and above)
- Free (Hobby) plan: 50 slow requests/month, no fast requests


**My Notes:**
Token management is critical for cost control. Fast requests (500/month Pro) are usually sufficient - they're used first, then unlimited slow requests kick in automatically. Most requests are 25K-500K tokens, which is manageable. Key: Start fresh conversations to prevent context bloat.


---

### Topic 3: Context Window (1M Tokens)

**What Does 1M Tokens Mean?**

- In words: ~750,000 words
- In pages: ~3,000 pages
- In code: ~200,000-500,000 lines (depends on complexity, comments, formatting)

**Practical Examples (Based on Real Usage):**
- Small chat request: ~25K-50K tokens (quick questions, simple code)
- Medium request: ~200K-500K tokens (typical development session, refactoring)
- Large request: ~500K-1M tokens (complex multi-file refactoring, architecture work)
- **Very large request**: 5.2M tokens (your Dec 15 example - likely accumulated context from long conversation)

**Real-World Context Consumption:**
- **Composer-1 requests**: 25K-822K tokens (most common range: 50K-400K)
- **Sonnet requests**: 23K-786K tokens (most common range: 50K-300K)
- **Your largest request**: 5.2M tokens - this exceeded typical 1M token context window, achieved using **Plan Mode** (Shift+Tab in agent input)

**What Consumes Context:**
- **Your messages**: Every question, instruction, or code snippet you send
- **AI responses**: Every response from the model (both input and output count)
- **Code files referenced**: When you @mention files or Cursor indexes them
- **Conversation history**: All previous messages in the current chat session
- **Cursor rules**: Your `.cursorrules` file is injected into every request
- **System prompts**: Cursor's internal instructions and context

**Real Example from Your Usage:**
- Your 5.2M token request (Dec 15, 07:55 AM) used **Plan Mode** (Shift+Tab in agent input)
- Plan Mode creates detailed plans before code generation, which requires:
  - Comprehensive codebase analysis
  - Multiple file references and @mentions
  - Large codebase context scanning
  - Cursor rules and system prompts
  - Model's reasoning process (thinking tokens for planning)
  - Plan generation and markdown creation
- **Why Plan Mode consumes so many tokens**: It analyzes the entire codebase, creates structured plans with file paths and to-dos, and may include inline diagrams - all before executing any code

**Context Reset:**
- **When**: Start a new chat/conversation
- **Why**: Prevents context bloat and reduces costs
- **Best practice**: Start fresh conversations for new topics or when context gets large (>500K tokens)
- **Your case**: The 5.2M token request suggests a very long conversation - should have started fresh earlier


**My Notes:**
1M tokens is massive (~3K pages), but most requests stay in 25K-500K range. Context accumulates from everything: messages, responses, @mentions, conversation history, and .cursorrules (injected every time!). Plan Mode can explode to 5M+ tokens by analyzing entire codebase. Key: Reset conversations at >500K tokens or when switching topics. Keep .cursorrules minimal since they're added to every request.


---

### Topic 4: Rate Limits & Management

**Rate Limits:**

**Fast Premium Requests:**
- **Pro plan**: 500 fast requests/month
- **Pro+ plan**: 1,500 fast requests/month
- **Ultra plan**: 10,000 fast requests/month
- **Teams plan**: 500 fast requests/user/month
- Fast requests are used first, then automatically switch to slow requests
- Once fast quota exhausted, requests become slow (unlimited on paid plans)

**Slow Premium Requests:**
- **Unlimited** on Pro plan and above
- May experience longer wait times compared to fast requests
- Still provide full functionality
- Used automatically after fast request quota is exhausted

**API Usage Credits:**
- **Pro plan**: $20/month included credits
- Additional usage charged at model inference API prices
- No hard rate limit on total requests, but costs accumulate beyond $20

**Real-World Testing (Dec 12, 2025):**
- Made ~60 requests in a single day
- No rate limits encountered
- All requests processed successfully
- Fast requests quota (500/month) was not exhausted
- Conclusion: Pro plan handles high-volume daily usage without issues

**Strategies to Manage Limits:**

1. **Optimize Context**
   - **Start fresh conversations** for new topics to prevent context bloat
   - Reset when requests exceed 500K tokens (prevents expensive outliers)
   - **Use @mentions selectively** - only reference files you actually need
   - **Keep .cursorrules minimal** - they're injected into every request, increasing token usage
   - **Monitor token usage** in dashboard to catch expensive requests early
   - **Break large tasks** into smaller, focused requests (multiple 200K token requests are cheaper than one 5M token request)

2. **Strategic Model Selection**
   - **Default to Composer-1** for routine tasks (~$0.08 per request vs Sonnet's ~$0.25+)
   - **Use Haiku** for quick questions and simple tasks (even cheaper)
   - **Reserve Sonnet** for complex reasoning, architecture decisions, or when Composer-1 fails
   - **Use Plan Mode selectively** - only for major multi-file projects (can consume 5M+ tokens)
   - **Leverage tab completions** - unlimited and don't count against API credits
   - **Auto mode** can help select appropriate model automatically

3. **Use .cursorignore**
   - **Exclude build artifacts**: `node_modules/`, `dist/`, `build/`, `.next/`
   - **Exclude dependencies**: Reduces indexed files, faster searches, lower context usage
   - **Exclude large files**: Logs, generated files, binary files
   - **Exclude sensitive data**: `.env`, `*.key`, `secrets/` (also for security)
   - **Benefits**: Faster indexing, reduced context window usage, lower costs, better performance

**Additional Strategies:**

4. **Monitor Usage Regularly**
   - Check dashboard weekly to track spending patterns
   - Identify expensive operations early (like Plan Mode usage)
   - Adjust model selection based on actual costs
   - Set personal limits or reminders

5. **Workflow Optimization**
   - **Use tab completions** for simple code suggestions (unlimited, free)
   - **Batch related questions** into single requests when possible
   - **Test locally first** to reduce failed queries and retries
   - **Use IDE features** before AI queries when appropriate

6. **Plan Mode Best Practices**
   - Only use for complex multi-file refactoring or new feature implementation
   - Start fresh conversation before using Plan Mode
   - Break large projects into smaller sub-plans if possible
   - Monitor token usage - Plan Mode can consume 5M+ tokens in one request

**My Notes:**
- Pro plan's 500 fast requests/month appears sufficient for normal development workflow
- No rate limits encountered even with 60+ requests/day
- Main constraint is cost ($20/month credits), not request limits
- Context management is more critical than rate limit management for cost control


---

### Topic 5: Cost Analysis for Our Team

**Team Size:** 8 developers

**Estimated Monthly Cost:**

| Plan | Per User | Total Team | Notes |
|------|----------|------------|-------|
| Free | $0 | $0 | Limited, evaluation only |
| Pro | $20 | $160 | Per developer, individual billing |
| Teams (Business) | $40 | $320 | Centralized billing, admin dashboard, SSO |

**Our Recommendation:**
**Start with Pro plan ($160/month total)** for 8 developers. Monitor usage for 1-2 months, then:
- If staying within $20 credits: Continue with Pro
- If exceeding credits frequently: Optimize usage (more Composer-1, less Sonnet) or upgrade heavy users to Pro+ ($60/month)
- If need centralized management: Consider Teams plan ($320/month) for admin dashboard and SSO

**Budget Justification:**
- **Expected productivity gains**: 5-10 hours saved per developer/month (faster coding, debugging, documentation, code review)
- **ROI calculation**: 
  - Cost: $160/month (8 × $20)
  - Value: 5 hours × 8 devs × $50/hour = $2,000/month
  - **ROI: 1,150%** | **Payback: <1 month**
- **Additional benefits**: Faster onboarding, improved code quality, automated documentation, reduced debugging time

**My Notes:**
- Pro plan provides excellent value - $20/month covers most usage patterns
- Main cost risk: Context bloat and Plan Mode overuse (one 5.2M token request = $8.11)
- Key optimization: Default to Composer-1, use Sonnet selectively, start fresh conversations regularly


---

## 🔍 Practical Examples

### Example 1: Monitoring My Token Usage

**What I Did:**
```
1. Opened Cursor Settings/Dashboard
2. Navigated to Usage/Billing section
3. Viewed "Your included usage" display
```

**What I Found:**
- Dashboard shows: "Your included usage US$20 / US$20"
- This means: All $20 monthly API credits have been used
- Reset date: "Resets 7 Jan 2026" (monthly quota refresh date)
- Status: At limit, additional usage will be charged

**Detailed Usage Analysis (Dec 10-15, 2025):**

**Usage Summary:**
- **Total requests**: ~100 requests over 6 days
- **Date range**: Dec 10-15, 2025
- **Peak usage day**: Dec 12 (heaviest development day with ~60+ requests)
- **Models used**: composer-1, claude-4.5-sonnet-thinking, claude-4.5-haiku-thinking, gemini-3-pro-preview, auto

**Cost Breakdown by Model:**
- **Composer-1**: Most frequently used (~50% of requests), very cost-effective ($0.01-$0.25 per request)
  - Average cost: ~$0.08 per request
  - Token range: 25K-822K tokens
  - Best for: Daily coding tasks, code generation, refactoring
  
- **Claude Sonnet 4.5 Thinking**: High cost, used for complex tasks (~40% of requests)
  - Average cost: ~$0.20-$0.30 per request
  - Token range: 23K-786K tokens
  - **Outlier**: One massive request (5.2M tokens, $8.11) consumed ~40% of monthly budget!
  - Best for: Complex reasoning, architecture decisions
  
- **Claude Haiku 4.5 Thinking**: Low cost alternative (~5% of requests)
  - Average cost: ~$0.01-$0.19 per request
  - Token range: 25K-370K tokens
  - Best for: Quick questions, simple tasks
  
- **Gemini 3 Pro Preview**: Moderate usage (~5% of requests)
  - Average cost: ~$0.06-$0.39 per request
  - Token range: 49K-550K tokens

**Key Insights:**
1. **One expensive request dominated costs**: The 5.2M token Sonnet request ($8.11) was 40% of monthly budget
   - **Caused by**: **Plan Mode** (Shift+Tab) - creates comprehensive plans by analyzing entire codebase before code generation
   - Plan Mode requires extensive codebase scanning, file analysis, and structured plan creation
   - **Solution**: Use Plan Mode selectively for complex multi-file projects, start fresh conversations for new topics, or break large plans into smaller focused tasks

2. **Composer-1 is highly cost-effective**: Used for majority of work with minimal cost impact
   - Average: ~$0.08 per request vs Sonnet's ~$0.25+ per request
   - **Recommendation**: Default to Composer-1, escalate to Sonnet only when needed

3. **Usage pattern**: Heavy development day (Dec 12) shows normal workflow
   - Multiple small requests are more cost-effective than few large ones
   - Breaking work into smaller conversations helps manage costs

4. **Cost per token varies dramatically**:
   - Composer-1: ~$0.0003 per 1K tokens (most efficient)
   - Sonnet Thinking: ~$0.0015 per 1K tokens (5x more expensive)
   - Haiku Thinking: ~$0.0005 per 1K tokens (good middle ground)

**What This Means:**
- **US$20 / US$20**: Used all included monthly API agent usage credits
- **Resets date**: When your monthly quota refreshes (typically monthly billing cycle)
- **Current status**: Can still use Cursor, but will be charged for additional usage beyond included credits
- **Options**: Add on-demand usage, wait for reset, or upgrade plan

**Optimization Strategies Based on Your Usage:**
1. **Default to Composer-1** for 80% of tasks (saves 5x cost)
2. **Start fresh conversations** to avoid context bloat (prevent $8+ requests)
3. **Use Haiku for quick questions** instead of Sonnet when possible
4. **Monitor large requests** - anything over 500K tokens should prompt a fresh conversation
5. **Break complex tasks** into smaller, focused requests rather than one massive query
6. **Use tab completions** (unlimited) instead of chat for simple code suggestions

**Learning:**
The $20 included usage covers API agent requests (chat, code generation, refactoring). Tab completions are unlimited and don't count against this budget. One large request can consume a significant portion of monthly budget - context management is critical. Composer-1 provides excellent cost efficiency for most development tasks, while Sonnet should be reserved for complex reasoning tasks that truly require it.


---

### Example 2: Testing Rate Limits

**Scenario:**
Heavy development day on Dec 12 with ~60+ requests in a single day, testing various models and workflows.

**What Happened:**
- Made ~60 requests throughout the day (morning through evening)
- No rate limits encountered - all requests processed successfully
- Mix of Composer-1 (most), Sonnet, and Gemini models
- Fast requests quota (500/month) was not exhausted
- All requests marked as "Included" (within $20 monthly budget)

**How I Managed It:**
- Used Composer-1 for majority of tasks (cost-effective)
- Switched to Sonnet only for complex reasoning needs
- Multiple small requests rather than few large ones
- No rate limiting issues experienced

**Learning:**
- **No rate limits hit**: Even with 60+ requests in one day, Pro plan handled it smoothly
- **Fast requests**: 500/month quota appears sufficient for normal development workflow
- **Model switching**: Easy to switch between models based on task complexity
- **Cost management**: Using Composer-1 as default kept costs manageable despite high request volume


---

## 💡 Key Takeaways

### Pricing Plans
- **Pro plan ($20/month) offers best value** for most developers - covers daily tab use and limited agent usage
- **Teams plan ($40/user)** adds centralized billing, SSO, and admin dashboard for team management
- **No quality degradation** - requests maintain speed and quality even when exceeding included credits
- **Pay-as-you-go** - additional usage charged at API rates without hard limits

### Token Budgets
- **1 token ≈ 4 characters or 0.75 words** - directly impacts costs
- **Pro plan includes 500 fast requests/month**, then unlimited slow requests kick in automatically
- **Most requests: 25K-500K tokens** - manageable for typical development work
- **Start fresh conversations** regularly to prevent context bloat and control costs

### Context Window Management
- **1M tokens = ~3,000 pages** of text or ~200K-500K lines of code
- **Context accumulates from everything**: messages, responses, @mentions, conversation history, and .cursorrules (injected every request)
- **Plan Mode can explode to 5M+ tokens** by analyzing entire codebase - use selectively
- **Reset at >500K tokens** or when switching topics to prevent expensive requests

### Rate Limits & Optimization
- **No hard rate limits** - Pro plan handles 60+ requests/day without issues
- **Optimize strategically**: Default to Composer-1 (~$0.08/request), reserve Sonnet (~$0.25+/request) for complex reasoning
- **Use .cursorignore** to exclude node_modules/, dist/, build/ - reduces context and speeds indexing
- **Keep .cursorrules minimal** - they're injected into every request, increasing token usage

### Cost Management
- **8 developers × $20 = $160/month** - excellent ROI of 1,150% (payback <1 month)
- **Main cost risk**: Context bloat and Plan Mode overuse (one 5.2M token request = $8.11 = 40% of monthly budget)
- **Composer-1 is 5x cheaper than Sonnet** - use as default for routine tasks
- **Tab completions are unlimited** - don't count against API credits, use liberally

---

## ✅ What Worked Well

- **Composer-1 as default**: Highly cost-effective for most development tasks (~$0.08 avg per request)
- **Model selection strategy**: Using cheaper models (Composer-1, Haiku) for routine work, Sonnet for complex tasks
- **Multiple small requests**: Breaking work into focused requests rather than one massive query
- **No rate limit issues**: Pro plan handled 60+ requests/day without problems
- **Fast requests quota**: 500/month appears sufficient for normal workflow

---

## ⚠️ Challenges & Solutions

### Challenge 1: Context Bloat Leading to Expensive Requests

**Problem:**
One request consumed 5.2M tokens ($8.11) - 40% of monthly budget in a single request. This was caused by **Plan Mode** (Shift+Tab), which:
- Analyzes the entire codebase to create comprehensive plans
- Scans multiple files and references (@mentions)
- Generates structured markdown plans with file paths and to-dos
- Includes model's thinking/reasoning tokens for planning
- May include inline diagrams and visualizations
- Cursor rules injected into every request

**Solution:**
- **Use Plan Mode selectively**: Only for complex multi-file projects that truly need comprehensive planning
- Start fresh conversations before using Plan Mode to avoid context bloat
- Monitor token usage in dashboard regularly
- Break large projects into smaller, focused plans
- Use .cursorignore to reduce indexed files
- Keep .cursorrules minimal (they're injected into every request)

**Prevention:**
- Reserve Plan Mode for major refactoring or new feature implementation
- For routine tasks, use regular chat or Composer mode instead
- Use Composer-1 for most tasks (cheaper, faster)
- Only use Plan Mode with Sonnet when truly needed for complex architecture work
- Consider breaking large plans into smaller sub-plans to reduce token consumption


---

## ❓ Questions & Answers

### Q1: How do I check my current usage?
**A:** 
Open Cursor Settings/Dashboard and navigate to the Usage/Billing section. You'll see:
- "Your included usage US$X / US$20" - Shows how much of your monthly $20 API credits you've used
- "Resets [date]" - Shows when your monthly quota will refresh
- Example: "US$20 / US$20" means you've used all credits; "US$5 / US$20" means you have $15 remaining

**Source:** Cursor Dashboard/Settings 

---

### Q2: What happens when I hit the limit?
**A:** 
When you've used all $20 of included API credits (shows "US$20 / US$20"):
- **You can still use Cursor** - The tool continues to work
- **Additional usage is charged** - Beyond the $20, you'll be charged at model inference API prices
- **Options available:**
  1. Add on-demand usage/payment method for additional credits
  2. Wait for monthly reset (shown as "Resets [date]")
  3. Upgrade to Pro+ ($60/month, 3× fast requests) or Ultra ($200/month, 20× fast requests)
- **Tab completions remain unlimited** - These don't count against the $20 budget

**Source:** Cursor Pro Plan documentation 

---

### Q3: Can we share a team account?
**A:** 
**No, individual accounts cannot be shared** - each user must have their own account. However, Cursor offers team management options:

- **Individual Plans (Pro, Pro+, Ultra)**: Each developer needs their own account ($20-400/month per user). Accounts cannot be shared between users.

- **Teams Plan ($40/user/month)**: 
  - Each team member still requires their own individual account
  - Provides centralized billing and admin dashboard
  - Includes SSO (SAML/OIDC) for easier authentication
  - Usage is tracked per user (500 fast requests/user/month)
  - **Recommended for**: Teams needing centralized management without shared usage

- **Enterprise Plan (Custom Pricing)**:
  - Each user still has their own account
  - **Pooled usage** - credits can be shared across the team (unique feature)
  - Additional features: invoicing, SCIM provisioning, priority support
  - **Recommended for**: Large organizations needing pooled usage or advanced features

**For our 8-person team**: Start with individual Pro accounts ($20/user = $160/month). If you need centralized billing or SSO later, upgrade to Teams plan ($40/user = $320/month). Only consider Enterprise if you need pooled usage or advanced security features.

**Source:** Cursor Teams Plan documentation, Cursor Pricing page

---

### Q4: How do unused requests roll over?
**A:** 
**Unused requests do NOT roll over** - any unused fast requests or API credits are forfeited at the end of your monthly billing cycle. However, Cursor provides alternatives:

**What Happens:**
- **Fast requests**: Unused fast requests (500/month on Pro) are lost at billing cycle reset
- **API credits**: Unused $20 included credits do not carry over to next month
- **Reset date**: Your quota refreshes on your monthly billing date (shown as "Resets [date]" in dashboard)

**Alternatives Available:**
1. **Slow requests**: After exhausting fast requests, you automatically move to slow requests (unlimited on paid plans) - these have longer wait times but maintain full functionality
2. **Additional fast request packs**: Can purchase extra fast request packs (500 requests/month for $20/month) - prorated if purchased mid-cycle
3. **On-demand usage**: Can add payment method for additional API credits beyond included $20

**Best Practice:**
- Use your included credits and fast requests throughout the month
- Don't worry about "saving" requests - they reset monthly anyway
- If you consistently have unused credits, you might be on too high a plan tier

**Source:** Cursor Forum discussions, Cursor Pricing documentation

---

## 🔗 Resources

### Official Documentation
- Cursor Pricing: https://cursor.sh/pricing
- Plan Mode: https://cursor.com/blog/plan-mode
- Plan Mode Changelog: https://cursor.com/changelog/2-1

### Internal Resources
- Budget proposal template: 
- Team decision doc: 

---

## 📦 Deliverables Created

- [x] Plan comparison table → [📊 View Document](../../deliverables/phase-1-foundations/plan-comparison.md)
- [ ] Team budget proposal → Path: `[budget proposal doc]`
- [ ] Usage monitoring guide → Path: `[team guide]`

---

## 🎬 Next Steps

After completing this step:

1. [ ] Discuss plan selection with team lead
2. [ ] Get budget approval if needed
3. [ ] Set up usage monitoring for team
4. [ ] Move to Step 1.3: Core Settings & Configuration

---

## 📊 Self-Assessment

Rate your understanding (1-5 scale):

- [ ] 1 - Need to review again
- [ ] 2 - Basic understanding
- [ ] 3 - Good understanding
- [x] 4 - Strong understanding
- [] 5 - Expert level, can teach others

**Confidence Level:** 4/5

**Notes on what to review:**
- 

---

## 💭 Personal Notes & Insights

**1. Plan Mode's Hidden Cost:** I learned the hard way that Plan Mode (Shift+Tab) can consume massive amounts of tokens - my 5.2M token request cost $8.11 and consumed 40% of my monthly budget in a single request! The issue was that Plan Mode analyzes the entire codebase, creates comprehensive plans with file paths and to-dos, and includes all the reasoning tokens before even generating code. I now use Plan Mode only for truly complex multi-file projects, and I always start a fresh conversation before using it to avoid context bloat from previous messages.

**2. Fast vs Slow Requests Are Seamless:** I discovered that the fast request system (500/month on Pro) works beautifully in practice. During my heavy development day with 60+ requests, I never hit any hard limits - fast requests are used first automatically, and once exhausted, unlimited slow requests kick in seamlessly. The only difference is slightly longer wait times for slow requests, but functionality remains identical. This means I don't need to worry about "saving" requests or hitting walls - the system gracefully handles high-volume usage.

**3. Hitting the Limit Isn't the End:** When I reached my $20 monthly limit (shows "US$20 / US$20"), I realized Cursor doesn't stop working - it just continues with pay-as-you-go billing. The key relief was discovering that tab completions remain completely unlimited even after hitting the API credit limit, so my daily coding workflow wasn't disrupted. I had three options: add on-demand usage to continue at the same rates, wait for the monthly reset, or upgrade my plan. This flexibility means the $20 limit is more of a cost checkpoint than a hard barrier.


---

## 🔄 Review Checklist

Before moving to the next step:

- [x] All learning objectives completed
- [x] Plan comparison documented
- [x] Token usage understood
- [x] Budget calculated for team
- [x] Rate limit strategies identified
- [x] Questions answered
- [x] Key takeaways summarized

---

**Status:** ✅ Completed

**Last Updated:** 17.12.25

