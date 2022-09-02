import React, { createContext, useState, useContext } from "react";

const NewCardContext = createContext();

export const useNewCardContext = () => useContext(NewCardContext);

export function NewCardProvider({ children }) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [currentSet, setCurrentSet] = useState({ id: "", name: "" });

  const addNewCard = (card) => {};

  const createNewBack = (input) => {
    setBack(input);
  };

  const estNewSet = (inputid, inputname) => {
    setCurrentSet({ id: inputid, name: inputname });
  };

  return (
    <NewCardContext.Provider
      value={{ front, back, addNewCard, createNewBack, estNewSet, currentSet }}
    >
      {children}
    </NewCardContext.Provider>
  );
}

export default NewCardContext;
