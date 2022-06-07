import React, { createContext, useState } from "react";

const NewCardContext = createContext();

export function NewCardProvider({ children }) {
  const [NewCardInfo, setNewCardInfo] = useState({});

  return (
    <NewCardContext.Provider value={NewCardInfo}>
      {children}
    </NewCardContext.Provider>
  );
}

export default NewCardContext;
