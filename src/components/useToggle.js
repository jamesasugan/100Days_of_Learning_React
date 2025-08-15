import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useToggle(initialValue = false, key = null) {
  const [value, setValue] = key 
  ? useLocalStorage(key, initialValue)
  : useState(initialValue);

  const toggle = () => setValue((prev) => !prev);

  return [value, toggle];
}
