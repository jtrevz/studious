import React, { createContext, useState } from "react";

const NewCardContext = createContext();

export function NewCardProvider({ children }) {
  const [newCard, setNewCard] = useState({ front: "", back: "" });

  const createNewCard = (newfront, newback) => {
    setNewCard({ front: newfront, back: newback });
  };

  return (
    <NewCardContext.Provider value={{ newCard, createNewCard }}>
      {children}
    </NewCardContext.Provider>
  );
}

export default NewCardContext;
