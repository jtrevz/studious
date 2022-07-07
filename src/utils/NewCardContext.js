import React, { createContext, useState } from "react";

const NewCardContext = createContext();

export function NewCardProvider({ children }) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [currentSet, setCurrentSet] = useState();

  const addNewCard = (card) => {};

  const createNewBack = (input) => {
    setBack(input);
  };

  const estNewSet = (input) => {
    setCurrentSet(input);
  };

  return (
    <NewCardContext.Provider
      value={{ front, back, addNewCard, createNewBack, estNewSet }}
    >
      {children}
    </NewCardContext.Provider>
  );
}

export default NewCardContext;
