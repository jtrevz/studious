import React, { useState } from "react";
import { useNewCardContext } from "./../../utils/NewCardContext";

export default function NewSet() {
  const { currentSet } = useNewCardContext();

  return <div>{currentSet}</div>;
}
