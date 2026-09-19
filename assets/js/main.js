/* =========================================================
 *  main.js —— 把 content.js 的数据渲染成页面
 *  一般不需要修改这个文件
 * ========================================================= */

(function () {
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  function applyTheme() {
    const t = SITE.theme || {};
    if (t.primary) document.documentElement.style.setProperty("--primary", t.primary);
    if (t.primarySoft) document.documentElement.style.setProperty("--primary-soft", t.primarySoft);
    if (t.accent) document.documentElement.style.setProperty("--accent", t.accent);
    if (t.radius) document.documentElement.style.setProperty("--radius", t.radius);
  }

  function statusClass(status) {
    if (status === "已上线") return "tag tag-live";
    if (status === "开发中") return "tag tag-wip";
    return "tag";
  }

  /* ---------- header ---------- */
  function renderHeader() {
    const b = SITE.brand;
    const logoInner = b.logoIcon
      ? `<img src="${esc(b.logoIcon)}" alt="${esc(b.name)}">`
      : esc(b.shortName || "M");
    document.getElementById("siteHeader").innerHTML = `
      <div class="header-inner">
        <a class="logo" href="#">
          <span class="logo-mark">${logoInner}</span>
          <span>${esc(b.name)}</span>
        </a>
        <nav class="nav">
          ${SITE.nav.map((n) => `<a href="${esc(n.href)}">${esc(n.label)}</a>`).join("")}
        </nav>
      </div>`;
  }

  /* ---------- hero ---------- */
  function renderHero() {
    const h = SITE.hero;
    let title = esc(h.title);
    if (h.highlight && title.includes(h.highlight)) {
      title = title.replace(h.highlight, `<span class="hl">${esc(h.highlight)}</span>`);
    }
    document.getElementById("hero").innerHTML = `
      <div class="hero-inner">
        ${h.badge ? `<span class="hero-badge">${esc(h.badge)}</span>` : ""}
        <h1>${title}</h1>
        <p class="hero-desc">${esc(h.desc)}</p>
        <div class="hero-cta">
          <a class="btn btn-primary" href="${esc(h.primaryCta.href)}">${esc(h.primaryCta.label)}</a>
          <a class="btn btn-ghost" href="${esc(h.secondaryCta.href)}">${esc(h.secondaryCta.label)}</a>
        </div>
        <div class="hero-stats">
          ${h.stats.map((s) => `
            <div>
              <div class="stat-value">${esc(s.value)}</div>
              <div class="stat-label">${esc(s.label)}</div>
            </div>`).join("")}
        </div>
      </div>`;
  }

  /* ---------- tools ---------- */
  function priceText(p) {
    if (!p) return "";
    return `${esc(p.currency || "")}${esc(p.amount)}<span class="unit">${esc(p.unit || "")}</span>`;
  }

  function renderTools() {
    document.getElementById("tools").innerHTML = `
      <div class="wrap">
        <div class="section-head">
          <h2>我的工具</h2>
          <p>每一个都在解决一个具体的问题</p>
        </div>
        <div class="tool-grid">
          ${SITE.tools.map((t, i) => `
            <div class="tool-card">
              <div class="tool-top">
                <div class="tool-icon">${esc(t.icon || t.name[0])}</div>
                <div>
                  <div class="tool-name">${esc(t.name)}</div>
                  <div class="tool-cat">${esc(t.category || "")} ·
                    <span class="${statusClass(t.status)}">${esc(t.status || "")}</span>
                  </div>
                </div>
                ${t.badge ? `<span class="tag tag-hot" style="margin-left:auto">${esc(t.badge)}</span>` : ""}
              </div>
              <div class="tool-tagline">${esc(t.tagline)}</div>
              <ul class="tool-highlights">
                ${(t.highlights || []).map((x) => `<li>${esc(x)}</li>`).join("")}
              </ul>
              <div class="tool-bottom">
                <div class="tool-price">${priceText(t.price)}</div>
                <div class="tool-actions">
                  <button class="btn btn-ghost btn-sm" data-detail="${i}">详情</button>
                  <button class="btn btn-primary btn-sm" data-buy="${i}">购买</button>
                </div>
              </div>
            </div>`).join("")}
        </div>
      </div>`;

    document.querySelectorAll("[data-detail]").forEach((btn) => {
      btn.addEventListener("click", () => openModal(SITE.tools[+btn.dataset.detail]));
    });
    document.querySelectorAll("[data-buy]").forEach((btn) => {
      btn.addEventListener("click", () => handleBuy(SITE.tools[+btn.dataset.buy]));
    });
  }

  /* ---------- features ---------- */
  function renderFeatures() {
    document.getElementById("features").innerHTML = `
      <div class="wrap">
        <div class="section-head">
          <h2>为什么选这些工具</h2>
          <p>简单、克制、不折腾</p>
        </div>
        <div class="feature-grid">
          ${SITE.features.map((f) => `
            <div class="feature-card">
              <div class="feature-icon">${esc(f.icon || "•")}</div>
              <h3>${esc(f.title)}</h3>
              <p>${esc(f.desc)}</p>
            </div>`).join("")}
        </div>
      </div>`;
  }

  /* ---------- pricing ---------- */
  function renderPricing() {
    document.getElementById("pricing").innerHTML = `
      <div class="wrap">
        <div class="section-head">
          <h2>价格</h2>
          <p>明码标价，一次买断</p>
        </div>
        <div class="price-grid">
          ${SITE.pricing.map((p) => `
            <div class="price-card ${p.highlighted ? "highlight" : ""}">
              <div class="price-name">${esc(p.name)}</div>
              <div class="price-desc">${esc(p.desc)}</div>
              <div class="price-num"><span class="cur">${esc(p.currency || "")}</span>${esc(p.price)}</div>
              <div class="price-period">${esc(p.period || "")}</div>
              <ul class="price-features">
                ${(p.features || []).map((f) => `<li>${esc(f)}</li>`).join("")}
              </ul>
              <a class="btn ${p.highlighted ? "btn-primary" : "btn-ghost"} btn-block"
                 href="${esc(p.cta.href)}">${esc(p.cta.label)}</a>
            </div>`).join("")}
        </div>
      </div>`;
  }

  /* ---------- faq ---------- */
  function renderFaq() {
    document.getElementById("faq").innerHTML = `
      <div class="wrap">
        <div class="section-head">
          <h2>常见问题</h2>
        </div>
        <div class="faq-list">
          ${SITE.faq.map((f) => `
            <div class="faq-item">
              <button class="faq-q">${esc(f.q)}<span class="faq-arrow">+</span></button>
              <div class="faq-a"><div class="faq-a-inner">${esc(f.a)}</div></div>
            </div>`).join("")}
        </div>
      </div>`;

    document.querySelectorAll(".faq-item").forEach((item) => {
      item.querySelector(".faq-q").addEventListener("click", () => {
        item.classList.toggle("open");
      });
    });
  }

  /* ---------- about ---------- */
  function renderAbout() {
    const a = SITE.about;
    document.getElementById("about").innerHTML = `
      <div class="wrap">
        <div class="section-head">
          <h2>${esc(a.title)}</h2>
        </div>
        <div class="about-box">
          ${a.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}
          <a class="btn btn-primary" href="${esc(a.emailCta.href)}">${esc(a.emailCta.label)}</a>
        </div>
      </div>`;
  }

  /* ---------- footer ---------- */
  function renderFooter() {
    const f = SITE.footer;
    document.getElementById("siteFooter").innerHTML = `
      <div class="footer-inner">
        <div class="footer-copy">${esc(f.copyright)}</div>
        <div class="footer-links">
          ${f.links.map((l) => `<a href="${esc(l.href)}">${esc(l.label)}</a>`).join("")}
        </div>
      </div>`;
  }

  /* ---------- modal ---------- */
  function openModal(t) {
    if (!t) return;
    const root = document.getElementById("modalRoot");
    root.innerHTML = `
      <div class="modal-mask">
        <div class="modal">
          <button class="modal-close" id="modalClose">×</button>
          <h3>${esc(t.name)}</h3>
          <div class="modal-sub">${esc(t.summary || "")}</div>
          <div>
            <span class="${statusClass(t.status)}">${esc(t.status || "")}</span>
            <span class="tag" style="margin-left:6px">${esc(t.category || "")}</span>
            <div class="platform-tags">
              ${(t.platforms || []).map((p) => `<span class="tag">${esc(p)}</span>`).join("")}
            </div>
          </div>
          <div class="modal-section-title">主要功能</div>
          ${(t.features || []).map((f) => `
            <div class="modal-feature">
              <div class="modal-feature-dot"></div>
              <div>
                <h4>${esc(f.title)}</h4>
                <p>${esc(f.desc)}</p>
              </div>
            </div>`).join("")}
          <div class="modal-footer">
            <div class="tool-price">${priceText(t.price)}</div>
            <button class="btn btn-primary" id="modalBuy">立即购买</button>
          </div>
        </div>
      </div>`;

    const close = () => { root.innerHTML = ""; };
    document.getElementById("modalClose").addEventListener("click", close);
    root.querySelector(".modal-mask").addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-mask")) close();
    });
    document.getElementById("modalBuy").addEventListener("click", () => handleBuy(t));
  }

  /* ---------- purchase ---------- */
  function handleBuy(t) {
    const cfg = (t && t.purchase) || {};
    const mode = cfg.mode || PURCHASE_CONFIG.defaultMode;
    if (mode === "link" && cfg.url) {
      window.open(cfg.url, "_blank");
    } else if (mode === "contact") {
      window.location.href = `mailto:${SITE.brand.email}?subject=${encodeURIComponent("咨询购买：" + (t ? t.name : ""))}`;
    } else {
      showToast(PURCHASE_CONFIG.disabledTip);
    }
  }

  let toastTimer = null;
  function showToast(msg) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2400);
  }

  /* ---------- init ---------- */
  document.title = SITE.brand.name;
  applyTheme();
  renderHeader();
  renderHero();
  renderTools();
  renderFeatures();
  renderPricing();
  renderFaq();
  renderAbout();
  renderFooter();
})();
