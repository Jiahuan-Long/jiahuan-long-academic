const translations = {
  en: {
    "nav.about": "About",
    "nav.news": "News",
    "nav.publications": "Publications",
    "nav.contact": "Contact",
    "profile.emailLink": "Email",
    "profile.name": "Jiahuan Long",
    "profile.role": "Assistant Professor (Hundred Talents Program), Ph.D. Supervisor",
    "facts.email": "Email:",
    "facts.affiliation": "Affiliation:",
    "facts.affiliationValue": "School of Artificial Intelligence, Shenzhen University",
    "facts.office": "Office:",
    "facts.officeValue": "Room 822, Huiyan Building, Yuehai Campus",
    "facts.research": "Research:",
    "facts.researchValue": "Visual adversarial attacks, Embodied AI security, VLLM security",
    "sections.news": "News",
    "sections.papers": "Selected Papers",
    "sections.selected": "Selected",
    "sections.awards": "Awards",
    "news.joined": "Excited to join the School of Artificial Intelligence at Shenzhen University! 🎉",
    "awards.sjtuGraduate": "Outstanding Graduate, Shanghai Jiao Tong University",
    "awards.byd": "BYD Scholarship, Shanghai Jiao Tong University",
    "awards.national": "National Scholarship, University of Electronic Science and Technology of China",
    "awards.edinburgh": "Master of Science with Distinction, University of Edinburgh",
    "footer": "Copyright 2026 Jiahuan Long. Powered by GitHub Pages."
  },
  zh: {
    "nav.about": "关于",
    "nav.news": "动态",
    "nav.publications": "论文",
    "nav.contact": "联系",
    "profile.emailLink": "邮箱",
    "profile.name": "龙佳欢",
    "profile.role": "百人计划助理教授，博士生导师",
    "facts.email": "邮箱：",
    "facts.affiliation": "单位：",
    "facts.affiliationValue": "深圳大学人工智能学院",
    "facts.office": "办公室：",
    "facts.officeValue": "粤海校区汇研楼822室",
    "facts.research": "研究方向：",
    "facts.researchValue": "视觉对抗攻击、具身智能安全、大模型安全",
    "sections.news": "动态",
    "sections.papers": "代表性论文",
    "sections.selected": "精选",
    "sections.awards": "荣誉奖励",
    "news.joined": "加入深圳大学人工智能学院！🎉",
    "awards.sjtuGraduate": "上海交通大学优秀毕业生",
    "awards.byd": "上海交通大学比亚迪奖学金",
    "awards.national": "电子科技大学国家奖学金",
    "awards.edinburgh": "爱丁堡大学理学硕士（Distinction）",
    "footer": "版权所有 © 2026 龙佳欢。由 GitHub Pages 提供支持。"
  }
};

const languageButtons = document.querySelectorAll("[data-language]");
const translatedElements = document.querySelectorAll("[data-i18n]");
const languageContent = document.querySelectorAll("[data-language-content]");

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "en";
  document.documentElement.lang = selectedLanguage === "zh" ? "zh-CN" : "en";
  document.title = "Jiahuan Long (龙佳欢) | Shenzhen University";

  translatedElements.forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[selectedLanguage][key];
  });

  languageContent.forEach((element) => {
    element.hidden = element.dataset.languageContent !== selectedLanguage;
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === selectedLanguage;
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("preferred-language", selectedLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

const bibtexButtons = document.querySelectorAll("[data-bibtex-target]");

bibtexButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const entry = document.getElementById(button.dataset.bibtexTarget);
    const shouldOpen = entry.hidden;

    document.querySelectorAll(".bibtex-entry").forEach((item) => {
      item.hidden = true;
    });
    bibtexButtons.forEach((item) => {
      item.setAttribute("aria-expanded", "false");
    });

    entry.hidden = !shouldOpen;
    button.setAttribute("aria-expanded", String(shouldOpen));
  });
});

setLanguage(localStorage.getItem("preferred-language") || "en");
