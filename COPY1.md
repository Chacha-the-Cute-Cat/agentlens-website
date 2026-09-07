# AgentLens 官网文案重组

> 用途：替换 `play-tailwind-main` 当前网站中的英文演示文案。
> 适配页面：`index.html`、`about.html`、`pricing.html`、`blog-grids.html`、`blog-details.html`、`contact.html`、`signin.html`、`signup.html`、`404.html`。
> 本文件按现有网站模块重新组织，便于后续逐个模块替换。

---

## 0. 全局文案

### 0.1 品牌

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 品牌名 | AgentLens | AgentLens |
| 品类 | Enterprise Agent Security Platform | 企业级 Agent 安全平台 |
| 定位 | The security control plane for the agentic enterprise. | Agent 化企业的安全控制平面。 |
| 品牌主张 | Secure Every AI Agent. | 保护每一个 AI Agent。 |
| 产品愿景 | Building the security layer for the agentic enterprise. | 构建 Agent 化企业的安全层。 |

### 0.2 导航

| 英文 | 中文 |
| --- | --- |
| Platform | 平台 |
| Solutions | 解决方案 |
| Resources | 资源 |
| Company | 公司 |
| Request a demo | 预约演示 |

### 0.3 平台下拉菜单

| 英文标题 | 中文标题 |
| --- | --- |
| Platform overview | 平台概览 |
| Agent Discovery | Agent 发现 |
| Agent Intelligence | Agent 智能分析 |
| Agent Risk | Agent 风险 |
| Agent Control | Agent 控制 |
| Runtime Protection | 运行时保护 |
| MCP Security | MCP 安全 |
| Data Protection | 数据保护 |

### 0.4 页脚

| 英文 | 中文 |
| --- | --- |
| Built for the agentic enterprise. | 为 Agent 化企业而生。 |
| Privacy | 隐私政策 |
| Terms | 服务条款 |

### 0.5 Demo 弹窗

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | See AgentLens in your environment. | 在你的环境中体验 AgentLens。 |
| 说明 | Tell us a little about your agent stack and we’ll show you what your security team has been missing. | 告诉我们你的 Agent 技术栈，我们将向你展示安全团队一直看不到的东西。 |
| 邮箱 | Work email | 工作邮箱 |
| 公司 | Company | 公司 |
| 角色 | Role | 角色 |
| 描述 | What are you trying to secure? | 你想保护什么？ |
| 提交按钮 | Request a demo | 预约演示 |

---

## 1. 首页 `index.html`

### 1.1 Hero

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| Eyebrow | Enterprise Agent Security Platform | 企业级 Agent 安全平台 |
| 标题 | Secure Every AI Agent. | 保护每一个 AI Agent。 |
| Lead | Discover, understand, and control every AI agent across your enterprise. | 发现、理解并控制企业中的每一个 AI Agent。 |
| 主按钮 | Request a demo | 预约演示 |
| 次按钮 | Explore platform | 了解平台 |

### 1.2 数字员工叙事

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | AI agents are becoming digital workers. | AI Agent 正在成为数字员工。 |
| 说明 | They no longer just answer questions. They operate inside your systems, use tools, access data, and take action on your behalf. | 它们不再只是回答问题，而是在你的系统中运行、使用工具、访问数据并代表你采取行动。 |

行动列表：

- They think. / 它们思考。
- They act. / 它们采取行动。
- They use tools. / 它们使用工具。
- They access data. / 它们访问数据。
- They make decisions. / 它们做出决策。
- Your security needs to understand them. / 你的安全体系需要理解它们。

### 1.3 The Problem

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| Eyebrow | The problem | 问题 |
| 标题 | The enterprise is becoming agentic. | 企业正在 Agent 化。 |
| 说明 | AI agents are no longer just assistants. They write code, access systems, call APIs, use tools, move data, and take action. | AI Agent 不再只是助手。它们写代码、访问系统、调用 API、使用工具、搬运数据并采取行动。 |

问题卡片：

| 标题 | 英文说明 | 中文说明 |
| --- | --- | --- |
| Hidden agents | Most security teams cannot see how many agents already operate across their company — let alone what those agents can reach. | 大多数安全团队甚至不知道公司里已经运行着多少 Agent，更不用说这些 Agent 能触及什么。 |
| Expanding risk | Agent autonomy compounds across identities, tools, MCP connections, data, and downstream systems. | Agent 的自主性会在身份、工具、MCP 连接、数据和下游系统中不断放大风险。 |
| Legacy controls | Access control built for humans cannot explain intent or stop an agent at the moment of action. | 为人设计的访问控制无法解释意图，也无法在动作发生的瞬间阻止 Agent。 |

关键句：

- But most enterprises still cannot see what their agents are doing.
- 但大多数企业仍然看不见自己的 Agent 正在做什么。

### 1.4 Vision

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| Eyebrow | A new model | 一种新的安全模型 |
| 标题 | A new security layer for a new kind of digital worker. | 为新型数字员工打造的全新安全层。 |
| 说明 | The enterprise is moving from human → application → data to a much longer chain. AgentLens sits between intent and action. | 企业正在从“人 → 应用 → 数据”转向更长的链条。AgentLens 位于意图与动作之间。 |

传统企业链路：

- Human / Application / Data
- 人类 / 应用 / 数据

Agent 化企业链路：

- Human / AI Agent / Model / Tools / MCP / Applications / Data
- 人类 / AI Agent / 模型 / 工具 / MCP / 应用 / 数据

关键句：

- AgentLens sits between intent and action.
- AgentLens 位于意图与动作之间。

### 1.5 Features

#### 基础版：4 个功能

| 编号 | 英文标题 | 中文标题 | 英文说明 | 中文说明 |
| --- | --- | --- | --- | --- |
| 01 | Agent Discovery | Agent 发现 | Know every agent. | 了解每一个 Agent。 |
| 02 | Agent Intelligence | Agent 智能分析 | Understand every action. | 理解每一个动作。 |
| 03 | Agent Risk | Agent 风险 | Know what matters. | 知道什么重要。 |
| 04 | Agent Control | Agent 控制 | Decide what agents can do. | 决定 Agent 能做什么。 |

#### 扩展版：8 个功能

| 编号 | 英文标题 | 中文标题 | 英文说明 | 中文说明 |
| --- | --- | --- | --- | --- |
| 01 | Agent Discovery | Agent 发现 | Find every agent, MCP server, tool, skill, model, and connection across your enterprise. | 发现企业中的所有 Agent、MCP Server、工具、技能、模型和连接。 |
| 02 | Agent Intelligence | Agent 智能分析 | Go beyond events to understand intent, context, behavior, and relationships. | 超越事件，理解意图、上下文、行为和关系。 |
| 03 | Agent Risk | Agent 风险 | Continuously assess agent identity, access, behavior, intent, and relationships. | 持续评估 Agent 的身份、访问、行为、意图和关系。 |
| 04 | Agent Control | Agent 控制 | Define what every agent can access, what it can do, and when it needs approval. | 定义每个 Agent 可以访问什么、可以做什么，以及何时需要审批。 |
| 05 | Runtime Protection | 运行时保护 | Evaluate actions at runtime and enforce security decisions before risk becomes impact. | 在运行时评估动作，并在风险变成影响之前执行安全决策。 |
| 06 | MCP Security | MCP 安全 | Discover, understand, and control MCP servers, tools, skills, and agent connections. | 发现、理解并控制 MCP Server、工具、技能和 Agent 连接。 |
| 07 | Data Protection | 数据保护 | Control how AI agents access, use, and move sensitive enterprise data. | 控制 AI Agent 如何访问、使用和移动敏感的企业数据。 |
| 08 | Enterprise Ready | 企业级就绪 | One platform. Every agent. | 一个平台，管理所有 Agent。 |

#### 可继续扩展：12 个功能

在 8 个功能基础上增加：

| 编号 | 英文标题 | 中文标题 | 英文说明 | 中文说明 |
| --- | --- | --- | --- | --- |
| 09 | Continuous Validation | 持续验证 | Break agents to build safer ones. | 通过破坏 Agent 来构建更安全的 Agent。 |
| 10 | Identity & Access | 身份与访问 | Every agent needs an identity. Every action needs an owner. | 每个 Agent 都需要身份，每个动作都需要责任人。 |
| 11 | Policy & Approval | 策略与审批 | Keep high-risk actions moving by routing them to the right person for approval. | 将高风险动作转给合适的人审批，而不是让业务停摆。 |
| 12 | Shadow Agent Discovery | 影子 Agent 发现 | Find the agents you didn’t know existed. | 发现你不知道已经存在的 Agent。 |

### 1.6 About / 价值叙事

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| Eyebrow | A new model | 一种新的安全模型 |
| 标题 | Security designed for autonomy. | 为自主性而设计的安全。 |
| 说明 | A new security model must be agent-native, identity-first, intent-aware, and enforced at runtime. | 新的安全模型必须是 Agent 原生、身份优先、理解意图，并在运行时强制执行。 |

核心原则：

| 编号 | 英文标题 | 中文标题 | 英文说明 | 中文说明 |
| --- | --- | --- | --- | --- |
| 01 | Agent-Native | Agent 原生 | Built for agents, not adapted from yesterday’s security models. | 为 Agent 而生，而不是沿用昨天的安全模型。 |
| 02 | Identity First | 身份优先 | Every agent needs an identity. Every action needs an owner. | 每个 Agent 都需要身份，每个动作都需要责任人。 |
| 03 | Intent Matters | 意图至关重要 | Understanding what an agent intends to do is as important as knowing what it did. | 理解 Agent 打算做什么，与知道它做了什么同样重要。 |
| 04 | Runtime Control | 运行时控制 | Security decisions belong at the moment of action. | 安全决策必须发生在动作发生的瞬间。 |
| 05 | Least Autonomy | 最小自主性 | Give an agent enough freedom to finish the task — but never more autonomy than the task requires. | 给 Agent 完成任务所需的自由，但绝不超出任务边界。 |

数据指标：

| 数值 | 英文标签 | 中文标签 |
| --- | --- | --- |
| 1,284 | Agents | Agents |
| 327 | MCP servers | MCP Server |
| 5,812 | Tools | 工具 |
| 14,293 | Connections | 连接 |

### 1.7 CTA

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | What are you looking for? | 你在寻找什么？ |
| 副标题 | Get started now. | 现在就开始。 |
| 按钮 | Start using AgentLens | 开始使用 AgentLens |
| 次要按钮 | Request a demo | 预约演示 |

### 1.8 Pricing

| 套餐 | 英文标题 | 中文标题 | 价格 | 推荐标记 | 英文说明 | 中文说明 |
| --- | --- | --- | --- | --- | --- | --- |
| Starter | Starter | 入门版 | $25/month | 否 | For early security teams starting agent visibility. | 适合刚开始建立 Agent 可见性的早期安全团队。 |
| Basic | Growth | 成长版 | $59/month | Recommended / 推荐 | For teams that need discovery, risk, and runtime control. | 适合需要发现、风险和运行时控制的团队。 |
| Premium | Enterprise | 企业版 | $99/month | 否 | For the agentic enterprise operating at scale. | 适合大规模运营的 Agent 化企业。 |

套餐功能建议：

| 功能 | Starter | Growth | Enterprise |
| --- | --- | --- | --- |
| Agent Discovery | 是 | 是 | 是 |
| Agent Risk | 否 | 是 | 是 |
| Runtime Protection | 否 | 是 | 是 |
| MCP Security | 否 | 是 | 是 |
| Data Protection | 否 | 是 | 是 |
| Human Approval | 否 | 是 | 是 |
| SSO / SCIM | 否 | 否 | 是 |
| Continuous Validation | 否 | 否 | 是 |

### 1.9 Testimonials

| 姓名 | 职位 | 英文评价 | 中文评价 |
| --- | --- | --- | --- |
| Sabo Masties | CISO, Enterprise SaaS | AgentLens gave us visibility into agents we didn’t know were running. | AgentLens 让我们看到了我们不知道已经在运行的 Agent。 |
| Musharof Chowdhury | Head of Security | We can finally explain what agents are doing before they reach production. | 我们终于能在 Agent 接触生产环境之前解释它们在做什么。 |
| William Smith | VP, Platform Engineering | It feels less like blocking innovation and more like enabling safe autonomy. | 这不是阻止创新，而是让安全的自主性成为可能。 |

### 1.10 FAQ

| 英文问题 | 中文问题 | 英文回答 | 中文回答 |
| --- | --- | --- | --- |
| What is AgentLens? | AgentLens 是什么？ | AgentLens is an Enterprise Agent Security Platform that discovers, understands, assesses, controls, and protects every AI agent. | AgentLens 是一个企业级 Agent 安全平台，能够发现、理解、评估、控制和保护每一个 AI Agent。 |
| Do we need to install agents on every device? | 是否需要在每台设备上安装 Agent？ | No. AgentLens connects through existing agent hooks, gateways, SDKs, and APIs. | 不需要。AgentLens 通过现有的 Agent hooks、网关、SDK 和 API 进行连接。 |
| What is MCP security? | 什么是 MCP 安全？ | It is the discovery, visibility, permission analysis, trust assessment, runtime monitoring, and control of MCP servers and tools. | 它是对 MCP Server 和工具的发现、可见性、权限分析、信任评估、运行时监控与控制。 |
| How does runtime protection work? | 运行时保护如何工作？ | AgentLens evaluates each action against identity, intent, context, and risk, then returns a decision before the action reaches its target. | AgentLens 会基于身份、意图、上下文和风险评估每个动作，并在动作到达目标之前返回决策。 |
| Can we customize policies? | 可以自定义策略吗？ | Yes. Policies are built around who, what, where, when, why, risk, and decision. | 可以。策略围绕谁、做什么、在哪里、何时、为什么、风险和决策构建。 |
| Is this only for coding agents? | 只适用于编程 Agent 吗？ | No. It covers coding agents, embedded agents, employee agents, business agents, and autonomous agents. | 不。它覆盖编程 Agent、内嵌 Agent、员工 Agent、业务 Agent 和自主 Agent。 |

### 1.11 Team

| 姓名 | 职位 |
| --- | --- |
| Melissa Tatcher | Founder & CEO |
| Eva Hudson | Head of Security Research |
| Jackie Sanders | Product & Platform |
| Alex Morgan | Engineering & Agent Infrastructure |

### 1.12 Blog

| 日期 | 英文标题 | 中文标题 | 英文摘要 | 中文摘要 |
| --- | --- | --- | --- | --- |
| Dec 22, 2023 | The agentic attack surface is here | Agent 化攻击面已经到来 | Why security teams need to treat AI agents as digital workers. | 为什么安全团队需要把 AI Agent 当作数字员工来对待。 |
| Mar 15, 2023 | MCP security is the next identity problem | MCP 安全是下一个身份问题 | How MCP connections create new paths from prompts to production. | MCP 连接如何打通从提示词到生产环境的新路径。 |
| Jan 05, 2023 | From least privilege to least autonomy | 从最小权限到最小自主性 | The security model shift required for agentic enterprise. | Agent 化企业所需的安全模型转变。 |

### 1.13 Contact

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | Let's talk about your agent security. | 谈谈你的 Agent 安全。 |
| 地址 | 401 Broadway, 24th Floor, Orchard Cloud View, London | 401 Broadway, 24th Floor, Orchard Cloud View, London |
| 邮箱 | info@agentlens.io | info@agentlens.io |
| 联系邮箱 | contact@agentlens.io | contact@agentlens.io |
| 表单标题 | Send us a message | 给我们留言 |
| 姓名字段 | Full Name* | 姓名* |
| 邮箱字段 | Email* | 邮箱* |
| 电话字段 | Phone* | 电话* |
| 消息字段 | Message* | 消息* |
| 提交按钮 | Send | 发送 |

### 1.14 Brands / 合作伙伴

建议替换为：

- AgentLens Research
- MCP Security Alliance
- Enterprise Security Partners
- Cloud Security Providers
- AI Platform Providers

---

## 2. 关于页 `about.html`

### 2.1 Hero

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | Building the Security Layer for the Agentic Enterprise. | 构建 Agent 化企业的安全层。 |
| 副标题 | AI is moving from generating information to taking action. Security has to move with it. | AI 正在从生成信息走向采取行动，安全也必须同步演进。 |

### 2.2 Our View

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | AI is no longer just information. | AI 不再只是信息。 |
| 说明 | Agents are becoming digital workers. They read, write, decide, execute, communicate, purchase, deploy, and operate. | Agents 正在成为数字员工。它们读取、写入、决策、执行、沟通、采购、部署和运营。 |

核心观点：

- As agents become digital workers, enterprises need a new security model designed around identity, intent, action, and autonomy. We are building that security layer.
- 当 Agent 成为数字员工，企业需要围绕身份、意图、动作和自主性设计新的安全模型。我们正在构建这个安全层。

### 2.3 Principles

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | The ideas behind AgentLens. | AgentLens 背后的理念。 |
| 说明 | A security model for agents cannot be borrowed from the identity era. It has to be built agent-native. | Agent 安全模型不能照搬身份时代的方法，它必须从 Agent 原生出发重新构建。 |

### 2.4 Vision

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | The enterprise is becoming agentic. | 企业正在 Agent 化。 |
| 说明 | Tomorrow’s enterprise will have more digital workers than human workers. Security must understand all of them. | 未来的企业将拥有比人类员工更多的数字员工。安全必须理解所有员工。 |

关键句：

- Every agent should be discoverable, every action understandable, and every decision controllable.
- 每个 Agent 都应可被发现，每个动作都应可被理解，每个决策都应可被控制。

---

## 3. 价格页 `pricing.html`

### 3.1 Hero

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| Eyebrow | Pricing | 价格 |
| 标题 | Pricing for the agentic enterprise. | 面向 Agent 化企业的定价。 |
| 说明 | Start with visibility. Scale to control. | 从可见性开始，逐步扩展到控制。 |

### 3.2 价格方案

| 方案 | 英文名称 | 中文名称 | 价格 | 英文说明 | 中文说明 |
| --- | --- | --- | --- | --- | --- |
| Starter | Starter | 入门版 | $25/month | Agent discovery and basic visibility. | Agent 发现与基础可见性。 |
| Growth | Growth | 成长版 | $59/month | Discovery, intelligence, risk, control, and runtime protection. | 发现、智能分析、风险、控制和运行时保护。 |
| Enterprise | Enterprise | 企业版 | $99/month | Full platform, MCP security, data protection, SSO, and continuous validation. | 完整平台，包含 MCP 安全、数据保护、SSO 和持续验证。 |

---

## 4. 博客列表 `blog-grids.html`

| 日期 | 英文标题 | 中文标题 | 英文摘要 | 中文摘要 |
| --- | --- | --- | --- | --- |
| Dec 22, 2023 | The agentic attack surface is here | Agent 化攻击面已经到来 | Why security teams need to treat AI agents as digital workers. | 为什么安全团队需要把 AI Agent 当作数字员工来对待。 |
| Mar 15, 2023 | MCP security is the next identity problem | MCP 安全是下一个身份问题 | How MCP connections create new paths from prompts to production. | MCP 连接如何打通从提示词到生产环境的新路径。 |
| Jan 05, 2023 | From least privilege to least autonomy | 从最小权限到最小自主性 | The security model shift required for agentic enterprise. | Agent 化企业所需的安全模型转变。 |

---

## 5. 博客详情 `blog-details.html`

### 示例文章：《The agentic attack surface is here》

**英文标题**

The agentic attack surface is here.

**中文标题**

Agent 化攻击面已经到来。

**英文正文结构**

- AI agents are becoming digital workers.
- They operate inside systems, use tools, access data, and take action.
- Security teams must discover, understand, assess, control, and protect every agent.

**中文正文结构**

- AI Agent 正在成为数字员工。
- 它们在系统中运行、使用工具、访问数据并采取行动。
- 安全团队必须发现、理解、评估、控制和保护每一个 Agent。

---

## 6. 联系页 `contact.html`

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | Let's talk about your agent security. | 谈谈你的 Agent 安全。 |
| 地址 | 401 Broadway, 24th Floor, Orchard Cloud View, London | 401 Broadway, 24th Floor, Orchard Cloud View, London |
| 邮箱 | info@agentlens.io | info@agentlens.io |
| 联系邮箱 | contact@agentlens.io | contact@agentlens.io |
| 表单标题 | Send us a message | 给我们留言 |
| 姓名字段 | Full Name* | 姓名* |
| 邮箱字段 | Email* | 邮箱* |
| 电话字段 | Phone* | 电话* |
| 消息字段 | Message* | 消息* |
| 提交按钮 | Send | 发送 |

---

## 7. 登录页 `signin.html`

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | Sign in to AgentLens | 登录 AgentLens |
| 副标题 | Welcome back | 欢迎回来 |
| 邮箱 | Email | 邮箱 |
| 密码 | Password | 密码 |
| 登录按钮 | Sign In | 登录 |
| 忘记密码 | Forgot password? | 忘记密码？ |
| 注册提示 | Don’t have an account? Sign up | 没有账户？立即注册 |

---

## 8. 注册页 `signup.html`

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | Create your AgentLens account | 创建你的 AgentLens 账户 |
| 副标题 | Start securing every AI agent | 开始保护每一个 AI Agent |
| 姓名 | Name | 姓名 |
| 邮箱 | Email | 邮箱 |
| 密码 | Password | 密码 |
| 注册按钮 | Sign Up | 注册 |
| 登录提示 | Already have an account? Sign in | 已有账户？立即登录 |

---

## 9. 404 页 `404.html`

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | Page not found | 页面未找到 |
| 说明 | The page you are looking for doesn’t exist or has been moved. | 你访问的页面不存在或已被移动。 |
| 按钮 | Back to home | 返回首页 |

---

## 10. Platform 页深度文案

### 10.1 Hero

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | One platform. Every agent. Every action. | 一个平台，管理所有 Agent 和每一个动作。 |
| 副标题 | A unified security control plane for AI agents, tools, identities, data, and runtime interactions. | 面向 AI Agent、工具、身份、数据和运行时交互的统一安全控制平面。 |

### 10.2 控制平面

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | Discover. Understand. Assess. Control. Protect. | 发现。理解。评估。控制。保护。 |
| 说明 | AgentLens follows the lifecycle of every agent action, from first discovery to real-time enforcement. | AgentLens 覆盖每个 Agent 动作的完整生命周期，从首次发现到实时执行。 |

### 10.3 平台模块

| 编号 | 英文标题 | 中文标题 | 英文说明 | 中文说明 |
| --- | --- | --- | --- | --- |
| 01 | Agent Discovery | Agent 发现 | Know every agent. Build a complete inventory of agents, MCP servers, tools, skills, models, connections, and identities. | 了解每一个 Agent，建立包含 Agent、MCP Server、工具、技能、模型、连接和身份的完整清单。 |
| 02 | Agent Intelligence | Agent 智能分析 | Understand what agents are doing. Go beyond events to identity, intent, context, behavior, and relationships. | 理解 Agent 正在做什么。超越事件，深入身份、意图、上下文、行为和关系。 |
| 03 | Agent Risk | Agent 风险 | Know the risk before it becomes an incident. | 在风险变成事件之前了解风险。 |
| 04 | Agent Control | Agent 控制 | Give agents freedom. Keep control. | 给 Agent 自由，同时保持控制。 |
| 05 | Runtime Protection | 运行时保护 | Protect every action in real time. | 实时保护每一个动作。 |
| 06 | Continuous Validation | 持续验证 | Break agents to build safer ones. | 通过破坏 Agent 来构建更安全的 Agent。 |

### 10.4 核心模型

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | Identity. Intent. Context. Action. Risk. | 身份。意图。上下文。动作。风险。 |
| 链路 | AI Agent / Identity / Intent / Context / Action / Risk / Policy / Decision | AI Agent / 身份 / 意图 / 上下文 / 动作 / 风险 / 策略 / 决策 |

产品定义：

- AgentLens is an Enterprise Agent Security Platform that discovers every AI agent, understands its identity, intent, context, and actions, continuously assesses risk, and enforces security controls at runtime.
- AgentLens 是一个企业级 Agent 安全平台，能够发现每个 AI Agent，理解其身份、意图、上下文和动作，持续评估风险，并在运行时执行安全控制。

### 10.5 Solutions 页

#### Hero

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | Secure the ways your enterprise uses agents. | 保护企业使用 Agent 的每一种方式。 |
| 副标题 | Solutions are organized around real enterprise scenarios — not technology features. | 解决方案围绕真实企业场景组织，而不是技术功能。 |

#### 使用场景

| 英文标题 | 中文标题 | 英文说明 | 中文说明 |
| --- | --- | --- | --- |
| Secure AI-Powered Development. | 保护 AI 驱动的开发。 | Claude Code, Codex, Cursor, Gemini CLI, and custom coding agents — with guardrails around code, repositories, credentials, tools, MCP, cloud, and production. | Claude Code、Codex、Cursor、Gemini CLI 和自定义编程 Agent，覆盖代码、仓库、凭据、工具、MCP、云和生产环境。 |
| Bring Autonomy to the Enterprise. Safely. | 安全地把自主性带入企业。 | Internal agents, business agents, customer agents, workflow agents, and fully autonomous agents — all under one control plane. | 内部 Agent、业务 Agent、客户服务 Agent、工作流 Agent 和完全自主 Agent，全部纳入同一个控制平面。 |
| Secure Every Agent Connection. | 保护每一条 Agent 连接。 | Discover, trust, and control every MCP server and tool before it becomes a path into the enterprise. | 在 MCP Server 和工具成为企业入口之前，发现、信任并控制它们。 |
| Find the Agents You Didn’t Know Existed. | 发现你不知道已经存在的 Agent。 | Surface unauthorized and forgotten agents across SaaS, endpoints, and developer environments. | 发现 SaaS、终端和开发者环境中的未授权及被遗忘的 Agent。 |

### 10.6 Resources 页

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | Researching the agentic attack surface. | 研究 Agent 化攻击面。 |
| 副标题 | Security is an ongoing investigation. Explore the research, lab work, and guides behind AgentLens. | 安全是一场持续的调查。探索 AgentLens 背后的研究、实验室工作和指南。 |

资源模块：

| 英文标题 | 中文标题 | 英文说明 | 中文说明 |
| --- | --- | --- | --- |
| Researching the Agentic Attack Surface. | 研究 Agent 化攻击面。 | Agent Security Reports, MCP security research, agent behavior research, and agent identity research. | Agent 安全报告、MCP 安全研究、Agent 行为研究和 Agent 身份研究。 |
| Breaking Agents to Build Safer Ones. | 通过破坏 Agent，构建更安全的 Agent。 | Agent attacks, MCP attacks, tool abuse, agent hijacking, data exposure, and privilege escalation. | Agent 攻击、MCP 攻击、工具滥用、Agent 劫持、数据泄露和权限提升。 |
| Guides for security teams. | 面向安全团队的指南。 | Reference architectures, deployment guides, and policy playbooks for agent security. | 面向 Agent 安全的参考架构、部署指南和策略手册。 |
| The agentic threat landscape. | Agent 化威胁态势。 | Tracking new attack techniques and real-world patterns across agent systems. | 追踪 Agent 系统中的新攻击技术和真实攻击模式。 |

### 10.7 Company 页

| 字段 | 英文 | 中文 |
| --- | --- | --- |
| 标题 | Building the Security Layer for the Agentic Enterprise. | 构建 Agent 化企业的安全层。 |
| 副标题 | AI is moving from generating information to taking action. Security has to move with it. | AI 正在从生成信息走向采取行动，安全也必须同步演进。 |

---

## 11. 替换备注

- 当前模板中的 Lorem Ipsum、Play、TailGrids 等品牌词，应全部替换为 AgentLens 与上述 Agent 安全内容。
- 首页 Features 建议先使用 8 个卡片版本；如果布局支持 12 个，再使用 12 个卡片版本。
- Pricing 的套餐名、价格和功能列可以按 1.8 节替换。
- Blog、Team、Testimonials 当前为示例数据，后续有真实客户和文章时再替换。
- Contact、Sign in、Sign up 中的 `yourdomain.com` 和默认占位符需替换为 `agentlens.io` 与真实字段。

