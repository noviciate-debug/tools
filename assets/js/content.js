/* =========================================================
 *  content.js —— 全站唯一内容配置
 *  改网站内容只需要改这个文件，改完刷新页面即可生效。
 *  不用动 index.html / styles.css / main.js
 * ========================================================= */

const SITE = {
  /* ---------- 品牌 ---------- */
  brand: {
    name: "我的工具箱",
    shortName: "MT",           // 左上角 logo 方块里的字（建议 2 个字符）
    logoIcon: null,            // 有 logo 图片就填路径，例如 "assets/img/logo.png"，否则用 shortName
    email: "hello@example.com" // 后续接支付 / 客服用
  },

  /* ---------- 主题配色 ---------- */
  theme: {
    primary: "#4F46E5",   // 主色：按钮、强调
    primarySoft: "#EEF0FF",
    accent: "#0EA5E9",
    radius: "14px"        // 圆角大小
  },

  /* ---------- 导航 ---------- */
  nav: [
    { label: "工具", href: "#tools" },
    { label: "特性", href: "#features" },
    { label: "价格", href: "#pricing" },
    { label: "常见问题", href: "#faq" },
    { label: "关于", href: "#about" }
  ],

  /* ---------- 首屏 ---------- */
  hero: {
    badge: "独立开发 · 自用工具集合",
    title: "把重复的事，交给工具",
    highlight: "交给工具",       // 标题里要高亮的那句话（需是 title 的子串）
    desc: "这里收录我自己做的小工具：解决一个具体问题，不堆功能，开箱即用。持续更新中。",
    primaryCta: { label: "浏览工具", href: "#tools" },
    secondaryCta: { label: "邮件联系我", href: "mailto:hello@example.com" },
    stats: [
      { value: "3", label: "已上线工具" },
      { value: "2000+", label: "累计用户" },
      { value: "4.9", label: "用户评分" }
    ]
  },

  /* ---------- 工具列表（核心区，后续主要改这里） ---------- */
  tools: [
    {
      id: "tool-1",
      name: "示例工具 A",
      tagline: "一句话说清它解决什么问题",
      category: "效率",
      status: "已上线",          // 已上线 / 内测中 / 开发中
      icon: "A",                 // 卡片图标文字，也可以换成 emoji 或留空
      price: { amount: "39", currency: "¥", unit: "/ 永久" },
      badge: "热卖",             // 不显示就填 null
      summary: "两三句话介绍这个工具是干什么的、给谁用。",
      highlights: [
        "核心能力一，一句话",
        "核心能力二，一句话",
        "核心能力三，一句话"
      ],
      features: [
        { title: "功能点一", desc: "这个功能的详细说明，写清用户能得到什么。" },
        { title: "功能点二", desc: "这个功能的详细说明，写清用户能得到什么。" },
        { title: "功能点三", desc: "这个功能的详细说明，写清用户能得到什么。" }
      ],
      platforms: ["Windows", "macOS"],
      purchase: { mode: "disabled", url: "" }  // 见文件底部“购买按钮”说明
    },
    {
      id: "tool-2",
      name: "示例工具 B",
      tagline: "一句话说清它解决什么问题",
      category: "开发",
      status: "内测中",
      icon: "B",
      price: { amount: "99", currency: "¥", unit: "/ 年" },
      badge: null,
      summary: "两三句话介绍这个工具是干什么的、给谁用。",
      highlights: [
        "核心能力一，一句话",
        "核心能力二，一句话"
      ],
      features: [
        { title: "功能点一", desc: "这个功能的详细说明。" },
        { title: "功能点二", desc: "这个功能的详细说明。" }
      ],
      platforms: ["Web"],
      purchase: { mode: "disabled", url: "" }
    },
    {
      id: "tool-3",
      name: "示例工具 C",
      tagline: "一句话说清它解决什么问题",
      category: "效率",
      status: "开发中",
      icon: "C",
      price: { amount: "待定", currency: "", unit: "" },
      badge: null,
      summary: "这个工具正在开发中，可以留下邮件，上线后第一时间通知你。",
      highlights: ["预计功能一", "预计功能二"],
      features: [
        { title: "规划中", desc: "功能尚未最终确定，欢迎提需求。" }
      ],
      platforms: ["待定"],
      purchase: { mode: "disabled", url: "" }
    }
  ],

  /* ---------- 通用特性（整站卖点） ---------- */
  features: [
    { icon: "⚡", title: "轻量好用", desc: "不堆功能，打开就能用，学习成本接近于零。" },
    { icon: "🔒", title: "本地优先", desc: "数据尽量留在你自己的电脑上，不上传、不追踪。" },
    { icon: "💎", title: "一次买断", desc: "不搞订阅套牢，能用多久就用多久。" },
    { icon: "🔄", title: "持续更新", desc: "独立开发者直接对接，需求反馈到上线很快。" }
  ],

  /* ---------- 定价 ---------- */
  pricing: [
    {
      name: "单工具",
      price: "39",
      currency: "¥",
      period: "起 / 永久",
      desc: "只买你需要的那一个",
      features: ["单个工具永久授权", "免费更新", "邮件支持"],
      highlighted: false,
      cta: { label: "去选购", href: "#tools" }
    },
    {
      name: "全家桶",
      price: "199",
      currency: "¥",
      period: "/ 永久",
      desc: "一次拿下所有工具",
      features: ["现有全部工具", "未来新工具免费解锁", "优先支持", "30 天无理由退款"],
      highlighted: true,
      cta: { label: "订阅上线通知", href: "#about" }
    },
    {
      name: "团队版",
      price: "联系我们",
      currency: "",
      period: "",
      desc: "多人协作与批量授权",
      features: ["5 人以上团队授权", "统一开票", "专属部署支持"],
      highlighted: false,
      cta: { label: "发邮件询价", href: "mailto:hello@example.com" }
    }
  ],

  /* ---------- 常见问题 ---------- */
  faq: [
    { q: "购买后怎么拿到工具？", a: "付款后会收到一封邮件，里面是下载链接和授权码，按说明激活即可。" },
    { q: "支持退款吗？", a: "支持 30 天内无理由退款，发邮件说明订单号即可，不追问原因。" },
    { q: "可以在几台设备上用？", a: "个人授权默认支持 2 台常用设备，换电脑可以发邮件重置授权。" },
    { q: "后续会涨价吗？", a: "早买的用户锁定价，后续涨价不追溯已购用户。" },
    { q: "有试用吗？", a: "大部分工具提供免费版或试用期，具体看每个工具的介绍页。" }
  ],

  /* ---------- 关于我 ---------- */
  about: {
    title: "关于开发者",
    paragraphs: [
      "我是一个独立开发者，这些工具最开始都是做给自己用的——因为市面上的要么太重、要么太贵。",
      "如果你有想要的工具，或者有具体的效率痛点，欢迎直接发邮件告诉我，我会优先考虑做出来。"
    ],
    emailCta: { label: "给我发邮件", href: "mailto:hello@example.com" }
  },

  /* ---------- 页脚 ---------- */
  footer: {
    copyright: "© 2026 我的工具箱 · 独立开发",
    links: [
      { label: "邮件联系", href: "mailto:hello@example.com" },
      { label: "使用条款", href: "#" },
      { label: "隐私政策", href: "#" }
    ]
  }
};

/* =========================================================
 *  购买按钮的行为（接服务器前先全部用 disabled）
 *  mode 可选值：
 *    "disabled" —— 点击提示“购买通道尚未开放”，本地阶段用这个
 *    "link"     —— 跳转到 url（后续接支付页 / 第三方收银台）
 *    "contact"  —— 发邮件咨询
 * ========================================================= */
const PURCHASE_CONFIG = {
  defaultMode: "disabled",
  disabledTip: "购买通道还在对接中，可以先订阅上线通知 🙂"
};
