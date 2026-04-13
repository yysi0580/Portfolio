const animatedElements = document.querySelectorAll("[data-animate]");
const siteHeader = document.querySelector(".site-header");
const navItems = Array.from(document.querySelectorAll(".site-nav a"))
  .map((link) => {
    const targetId = link.getAttribute("href")?.replace("#", "");

    if (!targetId) {
      return null;
    }

    const section = document.getElementById(targetId);

    if (!section) {
      return null;
    }

    return { link, section };
  })
  .filter(Boolean);
const currentYear = document.getElementById("current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px",
  }
);

animatedElements.forEach((element) => revealObserver.observe(element));

const setActiveNavItem = (activeId) => {
  navItems.forEach(({ link, section }) => {
    const isCurrent = section.id === activeId;
    link.classList.toggle("is-active", isCurrent);

    if (isCurrent) {
      link.setAttribute("aria-current", "location");
      return;
    }

    link.removeAttribute("aria-current");
  });
};

const updateActiveNavItem = () => {
  const headerHeight = siteHeader?.getBoundingClientRect().height ?? 0;
  const scrollProbeY =
    window.scrollY + headerHeight + Math.min(window.innerHeight * 0.28, 200);
  let activeId = "";

  navItems.forEach(({ section }) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollProbeY >= sectionTop && scrollProbeY < sectionBottom) {
      activeId = section.id;
    }
  });

  const lastSection = navItems.length > 0
    ? navItems[navItems.length - 1].section
    : null;
  const isNearPageBottom =
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 2;

  if (!activeId && isNearPageBottom && lastSection) {
    activeId = lastSection.id;
  }

  setActiveNavItem(activeId);
  isScrollUpdateQueued = false;
};

let isScrollUpdateQueued = false;

const queueActiveNavItemUpdate = () => {
  if (isScrollUpdateQueued) {
    return;
  }

  isScrollUpdateQueued = true;
  window.requestAnimationFrame(updateActiveNavItem);
};

if (navItems.length > 0) {
  queueActiveNavItemUpdate();
  window.addEventListener("scroll", queueActiveNavItemUpdate, { passive: true });
  window.addEventListener("resize", queueActiveNavItemUpdate);
  window.addEventListener("load", queueActiveNavItemUpdate);
  window.addEventListener("hashchange", queueActiveNavItemUpdate);
}
