import { createContext, useEffect, useState } from "react";

export const Contect = createContext({});

const VALID_SECTIONS = ["home", "about", "skills", "projects", "contact"];

function ContectProvider({ children }) {
  const [value, setLink] = useState("home");

  const handleClick = (data) => {
    setLink(data);
  };

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
