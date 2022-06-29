import React, { createContext, useState } from "react";

const NewCardContext = createContext();

export function NewCardProvider({ children }) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const addNewCard = (card) => {
    
  };

  const createNewBack = (input) => {
    setBack(input);
  };

  return (
    <NewCardContext.Provider
      value={{ front, back, addNewCard, createNewBack }}
    >
      {children}
    </NewCardContext.Provider>
  );
}

export default NewCardContext;
