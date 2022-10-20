import React, { createContext, useState, useContext } from "react";
import { db } from "../firebase";
import { updateDoc, doc, getDoc } from "firebase/firestore";

const NewCardContext = createContext();

export const useNewCardContext = () => useContext(NewCardContext);

export function NewCardProvider({ children }) {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [currentSet, setCurrentSet] = useState({ id: "", name: "" });

  const currentSetDoc = doc(db, "current", "ryO2O3JTb9yVDvOwL2bN");

  const addNewCard = (card) => {};

  const createNewBack = (input) => {
    setBack(input);
  };

  const getCurrentSet = async () => {
    const data = await getDoc(currentSetDoc);
    const tempSet = data.data();
    const currentDOMSet = await getDoc(doc(db, "sets", tempSet.author));
    await setCurrentSet({
      id: currentDOMSet.id,
      name: currentDOMSet.data().name,
    });
  };

  const estNewSet = async (inputid) => {
    await updateDoc(currentSetDoc, { author: inputid });
  };

  return (
    <NewCardContext.Provider
      value={{
        front,
        back,
        addNewCard,
        createNewBack,
        estNewSet,
        currentSet,
        getCurrentSet,
      }}
    >
      {children}
    </NewCardContext.Provider>
  );
}

export default NewCardContext;
