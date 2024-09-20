import { createContext, useState } from "react";

export const Contect = createContext({});

function ContectProvider({ children }) {
  const [value, setLink] = useState("");

  const handleClick = (data) => {
    setLink(data);
  };

  return (
    <Contect.Provider value={{ value, setLink, handleClick }}>
      {children}
    </Contect.Provider>
  );
}

export default ContectProvider;
