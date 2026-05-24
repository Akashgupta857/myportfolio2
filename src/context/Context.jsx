import { createContext, useEffect, useRef, useState } from "react";

export const Contect = createContext({});

const VALID_SECTIONS = ["home", "about", "skills", "projects", "contact"];

// A module-level flag that scrollToSection.js can flip to suppress the
// observer while a programmatic smooth-scroll is running.
export let programmaticScrolling = false;
export function setProgrammaticScrolling(val) {
  programmaticScrolling = val;
}

function ContectProvider({ children }) {
  const [value, setLink] = useState("home");
  const observerRef = useRef(null);

  const handleClick = (data) => {
    setLink(data);
  };

  // ── Scroll-spy via IntersectionObserver ──────────────────────────────────
  useEffect(() => {
    // Track how much of each section is currently visible
    const visibilityMap = {};

    const pickMostVisible = () => {
      // While a click-triggered scroll is animating, don't change the highlight
      if (programmaticScrolling) return;

      let maxRatio = 0;
      let activeId = null;

      for (const [id, ratio] of Object.entries(visibilityMap)) {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          activeId = id;
        }
      }

      if (activeId) {
        setLink(activeId);
      }
    };

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap[entry.target.id] = entry.intersectionRatio;
        });
        pickMostVisible();
      },
      {
        // Fine-grained thresholds so switches feel smooth, not jumpy
        threshold: Array.from({ length: 21 }, (_, i) => i * 0.05),
      }
    );

    VALID_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  // ── Hash-based deep-link on first load ──────────────────────────────────
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (VALID_SECTIONS.includes(hash)) {
        setLink(hash);
        requestAnimationFrame(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "auto" });
        });
      } else if (!hash) {
        setLink("home");
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <Contect.Provider value={{ value, setLink, handleClick }}>
      {children}
    </Contect.Provider>
  );
}

export default ContectProvider;
