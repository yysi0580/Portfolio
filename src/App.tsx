import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import CapabilitySection from "./components/CapabilitySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";

const sectionIds = ["about", "projects", "capability", "contact"] as const;

function App() {
  const [activeSectionId, setActiveSectionId] = useState("");

  useEffect(() => {
    document.documentElement.classList.add("js-ready");

    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-animate]")
    );

    if (animatedElements.length === 0) {
      return undefined;
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
        rootMargin: "0px 0px -40px 0px"
      }
    );

    animatedElements.forEach((element) => revealObserver.observe(element));

    return () => {
      revealObserver.disconnect();
      document.documentElement.classList.remove("js-ready");
    };
  }, []);

  useEffect(() => {
    const siteHeader = document.querySelector<HTMLElement>(".site-header");
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return undefined;
    }

    let animationFrame = 0;

    const updateActiveSection = () => {
      const headerHeight = siteHeader?.getBoundingClientRect().height ?? 0;
      const scrollProbeY =
        window.scrollY + headerHeight + Math.min(window.innerHeight * 0.28, 200);
      let nextActiveSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollProbeY >= sectionTop && scrollProbeY < sectionBottom) {
          nextActiveSectionId = section.id;
        }
      });

      const lastSection = sections.at(-1);
      const isNearPageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2;

      if (!nextActiveSectionId && isNearPageBottom && lastSection) {
        nextActiveSectionId = lastSection.id;
      }

      setActiveSectionId(nextActiveSectionId);
      animationFrame = 0;
    };

    const queueActiveSectionUpdate = () => {
      if (animationFrame !== 0) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    queueActiveSectionUpdate();

    window.addEventListener("scroll", queueActiveSectionUpdate, { passive: true });
    window.addEventListener("resize", queueActiveSectionUpdate);
    window.addEventListener("load", queueActiveSectionUpdate);
    window.addEventListener("hashchange", queueActiveSectionUpdate);

    return () => {
      window.removeEventListener("scroll", queueActiveSectionUpdate);
      window.removeEventListener("resize", queueActiveSectionUpdate);
      window.removeEventListener("load", queueActiveSectionUpdate);
      window.removeEventListener("hashchange", queueActiveSectionUpdate);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 바로가기
      </a>
      <div className="site-shell">
        <Header activeSectionId={activeSectionId} />
        <main id="main-content">
          <Hero />
          <AboutSection />
          <ProjectSection />
          <CapabilitySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
