# Plan Comparison Table - Cursor Pricing & Features

**Document Purpose:** Comprehensive comparison of all Cursor pricing plans to help teams and individuals select the right tier.

**Last Updated:** 17.12.25

---

## Quick Comparison: All Plans

| Feature | Free | Pro | Pro+ | Ultra | Teams | Enterprise |
|---------|------|-----|------|-------|-------|------------|
| **Monthly Cost** | $0 | $20 | $70 | $400 | $40/user | Custom |
| **Tab Completions** | Limited | Unlimited | Unlimited | Unlimited | Unlimited | Unlimited |
| **API Agent Usage** | Limited | $20/mo | $70/mo | $400/mo | $40/user/mo | Custom |
| **Fast Requests/Month** | 0 | 500 | 1,500 | 10,000 | 500/user | Pooled |
| **Slow Requests** | 50/mo | Unlimited | Unlimited | Unlimited | Unlimited | Unlimited |
| **Bugbot** | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Cloud Agents** | Limited | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Admin Dashboard** | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **SSO (SAML/OIDC)** | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| **Pooled Usage** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| **Priority Support** | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

---

## Detailed Plan Features

### Individual Plans

#### 🟢 Free Plan
**Cost:** $0/month

**Included:**
- Basic tab completions (limited)
- 50 slow premium requests/month
- Core Cursor features
- Trial access to premium features

**Good For:**
- Students and hobbyists
- Evaluation before purchase
- Small personal projects
- Learning the tool

**Limitations:**
- Very limited API requests
- No guaranteed usage
- Limited model access
- Not suitable for production

**When to Upgrade:** After using free tier, almost any paid plan offers better value

---

#### 🔵 Pro Plan ⭐ **Recommended for Most**
**Cost:** $20/month

**Included:**
- Unlimited tab completions
- $20/month API agent usage credits
- 500 fast premium requests/month
- Unlimited slow premium requests (after fast quota exhausted)
- Cloud Agents access
- All models (Composer-1, Sonnet, Haiku, etc.)
- Bonus usage on top of $20 credit

**Typical Usage (from data):**
- ~225 Sonnet 4.5 requests
- ~550 Gemini requests
- ~500 GPT-5 requests
- ~60+ Composer-1 requests (most cost-effective)

**Best For:**
- Daily tab completion users
- Developers doing limited agent usage
- Most individual developers
- Teams starting with Cursor

**What Happens After $20:**
- Requests automatically switch to slow requests (unlimited)
- Slow requests still work perfectly, just slightly longer wait times
- Or: pay for additional usage at API rates
- Or: upgrade to higher tier

**Common Usage Pattern:**
- ~$0.08/request for Composer-1
- ~$0.25+/request for Sonnet
- Average: 50-100 requests/month stays within $20

---

#### 🟣 Pro Plus Plan
**Cost:** $70/month (3.5× Pro)

**Included:**
- Everything in Pro, PLUS:
- $70/month API agent usage credits
- 1,500 fast premium requests/month (3× Pro)
- Bonus usage included

**Typical Usage:**
- ~675 Sonnet 4.5 requests
- ~1,650 Gemini requests
- ~1,500 GPT-5 requests

**Best For:**
- Daily agent users
- Power developers using complex reasoning frequently
- Teams that exhaust Pro regularly ($60-100/mo usage)
- Developers doing heavy refactoring

**vs. Pro:**
- Pay 3.5× more for 3× fast requests + higher budget
- Only upgrade if regularly exceeding $20/month on Pro

---

#### ⚫ Ultra Plan
**Cost:** $400/month (20× Pro)

**Included:**
- Everything in Pro Plus, PLUS:
- $400/month API agent usage credits
- 10,000 fast premium requests/month (20× Pro)
- Bonus usage included
- Intended for power users with automation

**Typical Usage:**
- ~4,500 Sonnet 4.5 requests
- ~11,000 Gemini requests
- ~10,000 GPT-5 requests

**Best For:**
- Power users with multiple agents running
- Automation-heavy workflows
- Enterprise-grade automation
- Very rare for most teams

**Note:** Most teams will never need this tier

---

### Team & Enterprise Plans

#### 🏢 Teams Plan
**Cost:** $40/user/month (2× Pro)

**Included in Addition to Pro Features:**
- Everything in Pro per user, PLUS:
- **Admin Dashboard** - View usage stats for all team members
- **Centralized Billing** - Single invoice for entire team
- **SSO (SAML/OIDC)** - Streamlined authentication
- **Privacy Mode Enforcement** - Control data handling
- Individual usage still tracked (500 fast requests/user/month)
- Each user gets their own $20 monthly API credits

**Best For:**
- Teams of 3-50 people
- Organizations wanting centralized management
- Companies needing SSO and admin dashboard
- Teams that want easier onboarding

**Team Size Examples (Monthly Cost):**
- 5 devs: $200/month
- 8 devs: $320/month
- 10 devs: $400/month

**vs. Pro Accounts:**
- Cost: +$20/user/month vs individual Pro
- Gain: Admin dashboard, centralized billing, SSO, privacy controls
- Usage: Still individual per user (not pooled)

---

#### 🏛️ Enterprise Plan
**Cost:** Custom pricing

**Included in Addition to Teams:**
- Everything in Teams, PLUS:
- **Pooled Usage** - Credits shared across team (not per-user)
- **Priority Support** - Dedicated support team
- **Invoicing** - Custom billing arrangements
- **SCIM Provisioning** - Advanced user management
- **Advanced Security Controls** - Additional compliance options
- **Custom SLA** - Service level agreements

**Best For:**
- Large organizations (50+ people)
- Companies needing pooled usage
- Organizations with strict compliance requirements
- Enterprises wanting priority support
- Teams requiring invoicing and custom terms

**Key Difference from Teams:**
- **Pooled usage** means the entire team shares one budget (not per-user limits)
- Custom pricing based on org needs
- Priority support and account management

---

## Real-World Cost Examples

### Small Team (8 developers)

**Option 1: Individual Pro Accounts**
```
8 developers × $20/month = $160/month
Total yearly: $1,920
Per developer: $20/month
```
**Pros:** Simple, lowest cost, each person manages their own usage  
**Cons:** No centralized admin, manual billing

---

**Option 2: Teams Plan**
```
8 developers × $40/month = $320/month
Total yearly: $3,840
Per developer: $40/month
```
**Pros:** Admin dashboard, SSO, centralized billing  
**Cons:** 2× cost vs individual Pro

---

**Option 3: Mixed Approach (Hybrid)**
```
5 developers on Pro: 5 × $20 = $100/month
3 power users on Pro+: 3 × $70 = $210/month
Total: $310/month
```
**Pros:** Tailored to individual needs  
**Cons:** More complex to manage

---

## Decision Matrix: Which Plan is Right for You?

### Individual Developers

```
START HERE: Free Plan
    ↓
After evaluation: Is $20/month worth the productivity gains?
    ├─ YES (most developers) → Pro Plan ($20/month)
    ├─ Heavy agent usage? → Pro Plus ($70/month)
    └─ NO → Continue with Free or other tools
```

**Pro Tip:** Pro plan's $20/month is less than 30 minutes of developer time. The ROI is almost always positive.

---

### Small Teams (2-10 people)

```
START HERE: Individual Pro Accounts ($20/person/month)
    ↓
After 1-2 months: Do we need centralized management?
    ├─ NO (self-service OK) → Stay with Pro ($20/person)
    ├─ YES (want dashboard/SSO) → Teams Plan ($40/person)
    └─ YES (need advanced features) → Enterprise (contact sales)
```

**Recommendation:** Start with individual Pro, upgrade to Teams if you need admin dashboard.

---

### Medium Teams (10-50 people)

```
TEAMS PLAN recommended: $40/user/month
Reasons:
  - Admin dashboard for usage tracking
  - SSO reduces onboarding friction
  - Centralized billing simplifies accounting
  - At scale, $20/person overhead is worth convenience
```

---

### Large Organizations (50+ people)

```
ENTERPRISE PLAN recommended
Reasons:
  - Pooled usage more cost-effective
  - Priority support for large teams
  - Custom SLA and invoicing options
  - Advanced security controls
  - Dedicated account management
```

**Note:** Contact sales for custom pricing based on team size and needs.

---

## Cost Analysis: Free vs Pro

### Scenario: An Individual Developer

**Monthly time savings with Pro:**
- Faster code completion: 1 hour/week
- Quicker debugging: 1.5 hours/week  
- Better code reviews: 0.5 hours/week
- Improved documentation: 0.5 hours/week
- **Total: ~3.5 hours/week = 14 hours/month**

**ROI Calculation:**
```
Cost: $20/month
Value: 14 hours × $75/hour (developer rate) = $1,050/month
ROI: ($1,050 - $20) / $20 = 5,150%
```

**Conclusion:** Even 10 minutes of saved time per day (~2 hours/month) pays for Pro plan.

---

## Upgrades & Changes

### Can I Upgrade Mid-Month?
**Yes.** Upgrades are prorated.
- Example: Upgrade from Pro to Pro+ on day 15
- You'll be charged the difference prorated for remaining days

### What Happens If I Hit My Budget?
**Depends on plan:**

| Scenario | Pro | Pro+ | Ultra |
|----------|-----|------|-------|
| Exceed $20 | Auto → Slow requests | Can add on-demand | Can add on-demand |
| User choice | Add on-demand or upgrade | - | - |
| Continue | Yes, pay per token | Yes, pay per token | Yes, pay per token |

Tab completions remain unlimited regardless of budget status.

---

## Bugbot Add-On (Separate Product)

Bugbot is a **separate product** that can be added to any plan:

| Tier | Cost | Features |
|------|------|----------|
| **Pro** | $40/mo | Unlimited reviews on 200 PRs/month, unlimited Cursor Ask |
| **Teams** | $40/user/mo | Unlimited code reviews across all PRs, pooled usage |
| **Enterprise** | Custom | Everything + analytics + priority support |

**Good For:** Teams doing heavy code review, PR analysis, continuous integration.

---

## Summary: Best Practices for Plan Selection

### ✅ Do This:
1. **Start with Pro** - It's the best value for almost all developers
2. **Monitor usage** - Check your dashboard monthly
3. **Use Composer-1 as default** - It's 5× cheaper than Sonnet
4. **Start fresh conversations** - Prevents context bloat and high token usage
5. **Evaluate annually** - Reassess team needs and budget yearly

### ❌ Don't Do This:
1. **Don't pick Free** for any serious development - $20 ROI is immediate
2. **Don't jump to Teams** immediately - Start with Pro, upgrade when needed
3. **Don't waste money on Ultra** - Only 1% of users need this
4. **Don't use Sonnet for simple tasks** - Default to Composer-1 instead
5. **Don't ignore the dashboard** - Monitor usage to optimize costs

---

## Related Resources

- **Pricing Page:** https://cursor.sh/pricing
- **Plans Documentation:** https://cursor.com/docs/plans
- **Plan Mode Guide:** https://cursor.com/blog/plan-mode
- **Dashboard Usage Tracking:** Settings → Usage/Billing

---

**Last Updated:** 17.12.25  
**Version:** 1.0
