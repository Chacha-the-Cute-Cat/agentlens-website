(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelectorAll(".header-logo");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    if(logo.length) {
      // === logo change
      if (ud_header.classList.contains("sticky")) {
        document.querySelector(".header-logo").src =
          "assets/images/logo/logo.svg"
      } else {
        document.querySelector(".header-logo").src =
          "assets/images/logo/logo-white.svg"
      }
    }

    if (document.documentElement.classList.contains("dark")) {
      if(logo.length) {
        // === logo change
        if (ud_header.classList.contains("sticky")) {
          document.querySelector(".header-logo").src =
            "assets/images/logo/logo-white.svg"
        } 
      }
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // ===== responsive navbar
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("hidden");
  });

  //===== close navbar-collapse when a  clicked
  document
    .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
    .forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      })
    );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector(".submenu").classList.toggle("hidden");
    });
  });

  // ===== Faq accordion
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((el) => {
    el.querySelector(".faq-btn").addEventListener("click", () => {
      el.querySelector(".icon").classList.toggle("rotate-180");
      el.querySelector(".faq-content").classList.toggle("hidden");
    });
  });

  // ===== wow js
  new WOW().init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };

    /* ========  themeSwitcher start ========= */

  // themeSwitcher
  const themeSwitcher = document.getElementById('themeSwitcher');

  // Theme Vars
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color0scheme: dark)').matches;

  // Initial Theme Check
  const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      document.documentElement.classList.add('dark');
      return;
    }
  };

  // Manual Theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      return;
    }

    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  // call theme switch on clicking buttons
  themeSwitcher.addEventListener('click', () => {
    themeSwitch();
  });

  // invoke theme check on initial load
  themeCheck();
  /* ========  themeSwitcher End ========= */

  /* ========  Language Switcher Start ========= */
  const I18N_DICT = {
    "Home": "首页",
    "About": "关于",
    "Pricing": "价格",
    "Team": "团队",
    "Contact": "联系",
    "Blog": "博客",
    "Pages": "页面",
    "Sign In": "登录",
    "Sign Up": "注册",
    "Request a demo": "预约演示",
    "Explore platform": "了解平台",
    "Features": "功能",
    "Latest blog": "最新博客",
    "Latest research": "最新研究",
    "About Us": "关于我们",
    "Platform overview": "平台概览",
    "Agent Security Reports": "Agent 安全报告",
    "MCP Security Research": "MCP 安全研究",
    "Deployment Guides": "部署指南",
    "Threat Landscape": "威胁态势",
    "Privacy": "隐私",
    "Terms of Service": "服务条款",
    "Built for the agentic enterprise": "为 Agent 化企业而生",
    "Made with": "由以下提供",
    "Designed and Developed by": "设计与开发",
    "Secure Every AI Agent.": "保护每一个 AI Agent。",
    "Discover, understand, and control every AI agent across your enterprise.": "发现、理解并控制企业中的每一个 AI Agent。",
    "One platform. Every agent.": "一个平台，管理所有 Agent。",
    "Agent Discovery": "Agent 发现",
    "Find every agent, MCP server, tool, skill, model, and connection across your enterprise.": "发现企业中的所有 Agent、MCP Server、工具、技能、模型和连接。",
    "Agent Intelligence": "Agent 智能分析",
    "Go beyond events to understand intent, context, behavior, and agent relationships.": "超越事件，理解意图、上下文、行为和 Agent 关系。",
    "Agent Risk": "Agent 风险",
    "Continuously assess agent identity, access, behavior, intent, and relationships.": "持续评估 Agent 的身份、访问、行为、意图和关系。",
    "Agent Control": "Agent 控制",
    "Define what every agent can access, what it can do, and when it needs approval.": "定义每个 Agent 可以访问什么、可以做什么，以及何时需要审批。",
    "A new security layer for a new kind of digital worker.": "为新型数字员工打造的全新安全层。",
    "Agents are becoming digital workers. They operate inside your systems, use tools, access data, and take action on your behalf. AgentLens gives security teams the visibility and control to protect every action.": "Agent 正在成为数字员工。它们在你的系统中运行、使用工具、访问数据并代表你采取行动。AgentLens 为安全团队提供可见性和控制能力，保护每一个动作。",
    "What are you looking for?": "你在寻找什么？",
    "Get started now.": "现在就开始。",
    "Start using AgentLens": "开始使用 AgentLens",
    "Pricing for the agentic enterprise": "面向 Agent 化企业的定价",
    "Start free, scale to control, and expand to enterprise governance.": "从免费开始，逐步扩展到企业级治理。",
    "Free": "免费",
    "Growth": "成长版",
    "Enterprise": "企业版",
    "Per Month": "每月",
    "For individual security practitioners exploring agent visibility.": "适合刚开始建立 Agent 可见性的个人安全从业者。",
    "For teams protecting MCP connections and sensitive data at scale.": "适合需要保护 MCP 连接和敏感数据的安全团队。",
    "For the agentic enterprise operating at full scale.": "适合大规模运营的 Agent 化企业。",
    "Everything in Free": "免费版全部功能",
    "Everything in Growth": "成长版全部功能",
    "Up to 100 agents": "最多 100 个 Agent",
    "Up to 10,000 agents": "最多 10,000 个 Agent",
    "Unlimited agents": "不限 Agent 数量",
    "Basic Agent Intelligence": "基础 Agent 智能分析",
    "Community support": "社区支持",
    "MCP Security": "MCP 安全",
    "Data Protection": "数据保护",
    "Human Approval": "人工审批",
    "Priority support": "优先支持",
    "Continuous Validation": "持续验证",
    "SSO / SCIM": "SSO / SCIM",
    "Audit and compliance": "审计与合规",
    "Dedicated support": "专属支持",
    "Get started free": "免费开始",
    "Contact sales": "联系销售",
    "Recommended": "推荐",
    "Testimonials": "客户评价",
    "What our clients say": "客户怎么说",
    "FAQ": "常见问题",
    "Frequently asked questions": "常见问题",
    "What is AgentLens?": "AgentLens 是什么？",
    "AgentLens is an Enterprise Agent Security Platform that discovers, understands, assesses, controls, and protects every AI agent.": "AgentLens 是一个企业级 Agent 安全平台，能够发现、理解、评估、控制和保护每一个 AI Agent。",
    "How does runtime protection work?": "运行时保护如何工作？",
    "AgentLens evaluates each action against identity, intent, context, and risk, then returns a decision before the action reaches its target.": "AgentLens 会基于身份、意图、上下文和风险评估每个动作，并在动作到达目标之前返回决策。",
    "Do we need to install agents on every device?": "是否需要在每台设备上安装 Agent？",
    "No. AgentLens connects through existing agent hooks, gateways, SDKs, and APIs.": "不需要。AgentLens 通过现有的 Agent hooks、网关、SDK 和 API 进行连接。",
    "Can we customize policies?": "可以自定义策略吗？",
    "Yes. Policies are built around who, what, where, when, why, risk, and decision.": "可以。策略围绕谁、做什么、在哪里、何时、为什么、风险和决策构建。",
    "Our team": "我们的团队",
    "Our Team Members": "团队成员",
    "Research": "研究",
    "The agentic attack surface is here": "Agent 化攻击面已经到来",
    "MCP security is the next identity problem": "MCP 安全是下一个身份问题",
    "From least privilege to least autonomy": "从最小权限到最小自主性",
    "Contact us": "联系我们",
    "Let's talk about your agent security.": "谈谈你的 Agent 安全。",
    "Our Location": "我们的位置",
    "How can we help?": "我们如何提供帮助？",
    "Send us a message": "给我们留言",
    "Full Name*": "姓名*",
    "Email*": "邮箱*",
    "Phone*": "电话*",
    "Message*": "消息*",
    "Send": "发送",
    "401 Broadway, 24th Floor, Orchard Cloud View, London": "伦敦 Orchard Cloud View 百老汇 401 号 24 层",
    "Sign in to AgentLens": "登录 AgentLens",
    "Create your AgentLens account": "创建你的 AgentLens 账户",
    "About AgentLens": "关于 AgentLens",
    "Page not found": "页面未找到",
    "We Can't Seem to Find The Page You're Looking For.": "我们找不到你访问的页面。",
    "Oops! The page you are looking for does not exist. It might have been moved or deleted.": "抱歉！你访问的页面不存在，可能已被移动或删除。",
    "Go To Home": "返回首页",
    "Blog details": "博客详情",
    "Pricings": "价格",
    "Already have an account?": "已有账户？",
    "Not a member yet?": "还没有账户？",
    "Forget Password?": "忘记密码？",
    "Connect With": "使用以下方式连接",
    "Don't worry, we don't spam": "别担心，我们不发垃圾邮件",
    "Enter your email to receive our latest newsletter.": "输入邮箱接收最新资讯。",
    "Join our newsletter!": "订阅我们的资讯！",
    "Popular Articles": "热门文章",
    "Related Articles": "相关文章",
    "Share This Post": "分享这篇文章",
    "By": "作者",
    "Founder & CEO": "创始人兼 CEO",
    "Head of Security Research": "安全研究负责人",
    "Product & Platform": "产品与平台",
    "Engineering & Agent Infrastructure": "工程与 Agent 基础设施",
    "CISO, Enterprise SaaS": "企业 SaaS 首席信息安全官",
    "Head of Security": "安全负责人",
    "VP, Platform Engineering": "平台工程副总裁",
    "We have": "我们已",
    "Years of experience": "年经验",
    "AgentLens": "AgentLens"
  };

  const TITLE_DICT = {
    "AgentLens | Enterprise Agent Security Platform": "AgentLens | 企业级 Agent 安全平台",
    "About | AgentLens": "关于 | AgentLens",
    "Pricing | AgentLens": "价格 | AgentLens",
    "Blogs | AgentLens": "博客 | AgentLens",
    "Blog Details | AgentLens": "博客详情 | AgentLens",
    "Contact | AgentLens": "联系 | AgentLens",
    "Sign In | AgentLens": "登录 | AgentLens",
    "Sign Up | AgentLens": "注册 | AgentLens",
    "Page not found | AgentLens": "页面未找到 | AgentLens"
  };

  const ORIGINAL_TEXT = new WeakMap();
  const normalizeText = (value) => value.replace(/\s+/g, " ").trim();

  const translateTextNode = (node, lang) => {
    const raw = node.nodeValue;
    const key = normalizeText(raw);
    if (!key) return;
    if (!ORIGINAL_TEXT.has(node)) ORIGINAL_TEXT.set(node, raw);
    if (lang === "zh" && I18N_DICT[key]) {
      node.nodeValue = I18N_DICT[key];
    } else if (lang === "en") {
      node.nodeValue = ORIGINAL_TEXT.get(node);
    }
  };

  const applyLanguage = (lang) => {
    document
      .querySelectorAll("body *:not(script):not(style):not(svg):not(textarea):not(input):not(#langSwitch)")
      .forEach((el) => {
        Array.from(el.childNodes).forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) translateTextNode(node, lang);
        });
      });

    const btn = document.getElementById("langSwitch");
    if (btn) btn.textContent = lang === "en" ? "中" : "EN";

    const originalTitle = document.title;
    if (lang === "zh") {
      document.title = TITLE_DICT[originalTitle] || originalTitle;
    } else {
      document.title = Object.keys(TITLE_DICT).find((title) => TITLE_DICT[title] === originalTitle) || originalTitle;
    }
  };

  let currentLang = localStorage.getItem("agentlens_lang") || "en";
  const themeLabel = document.querySelector('label[for="themeSwitcher"]');
  if (themeLabel && !document.getElementById("langSwitch")) {
    const langSwitch = document.createElement("button");
    langSwitch.type = "button";
    langSwitch.id = "langSwitch";
    langSwitch.setAttribute("aria-label", "Switch language");
    langSwitch.className =
      "mr-4 inline-flex items-center justify-center px-2 py-2 text-sm font-semibold text-white transition hover:opacity-70";
    langSwitch.textContent = currentLang === "en" ? "中" : "EN";
    themeLabel.parentNode.insertBefore(langSwitch, themeLabel);
    langSwitch.addEventListener("click", () => {
      const next = currentLang === "en" ? "zh" : "en";
      currentLang = next;
      localStorage.setItem("agentlens_lang", next);
      applyLanguage(next);
    });

    const updateLangSwitchAppearance = () => {
      const dark = document.documentElement.classList.contains("dark");
      const header = document.querySelector(".ud-header");
      const headerActive =
        (header && header.classList.contains("sticky")) ||
        (navbarToggler && navbarToggler.classList.contains("navbarTogglerActive"));

      if (headerActive) {
        langSwitch.style.color = dark ? "#ffffff" : "#111928";
      } else {
        langSwitch.style.color = "#ffffff";
      }
    };

    window.addEventListener("scroll", updateLangSwitchAppearance);
    navbarToggler.addEventListener("click", updateLangSwitchAppearance);
    themeSwitcher.addEventListener("click", updateLangSwitchAppearance);
    updateLangSwitchAppearance();
  }

  applyLanguage(currentLang);
  /* ========  Language Switcher End ========= */
})();
