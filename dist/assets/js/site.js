const root = document.body.dataset.root || ".";
const current = document.body.dataset.page || "home";

const navItems = [
  ["home", "首页", "index.html"],
  ["about", "About", "about.html"],
  ["projects", "Projects", "projects.html"],
  ["skills", "Skills", "skills.html"],
  ["resume", "Resume", "resume.html"],
  ["contact", "Contact", "contact.html"],
];

const linkMarkup = navItems.map(([id, label, path]) =>
  `<a class="${current === id || (current === "case" && id === "projects") ? "active" : ""}" href="${root}/${path}">${label}</a>`
).join("");

const header = document.querySelector("[data-site-header]");
if (header) {
  header.innerHTML = `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="${root}/index.html"><span class="brand-mark">ZH</span><span>赵涵</span></a>
        <nav class="desktop-nav" aria-label="主导航">
          ${linkMarkup}
          <a class="nav-cta" href="mailto:zhhan0711@gmail.com">联系我</a>
        </nav>
        <button class="menu-btn" type="button" aria-expanded="false" aria-label="打开导航">☰</button>
      </div>
      <nav class="mobile-nav" aria-label="移动端导航">${linkMarkup}</nav>
    </header>`;

  const button = header.querySelector(".menu-btn");
  const mobile = header.querySelector(".mobile-nav");
  button.addEventListener("click", () => {
    const open = mobile.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "×" : "☰";
  });
}

const footer = document.querySelector("[data-site-footer]");
if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div><h2>让我们一起把想法做成可靠的软件。</h2><p>后端开发 · 全栈开发 · AI Application / LLM Agent</p></div>
        <div class="footer-links">
          <a href="mailto:zhhan0711@gmail.com">Email</a>
          <a href="${root}/resume.html">简历</a>
          <a href="${root}/projects.html">项目</a>
          <a href="#top">回到顶部 ↑</a>
        </div>
      </div>
    </footer>`;
}

const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

