import React, { createContext, useState } from "react";

const NewCardContext = createContext();

export function NewCardProvider({ children }) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  const createNewFront = (input) => {
    setFront(input);
  };

  const createNewBack = (input) => {
    setBack(input);
  };

  return (
    <NewCardContext.Provider
      value={{ front, back, createNewFront, createNewBack }}
    >
      {children}
    </NewCardContext.Provider>
  );
}

export default NewCardContext;
