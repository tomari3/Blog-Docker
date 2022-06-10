import { useState, useEffect } from "react";

const getLocalValues = (key, initValue) => {
  if (typeof window === "undefined") return initValue;

  const localValue = JSON.parse(localStorage.getItem(key));
  if (localValue) return localValue;

  if (initValue instanceof Function) return initValue();

  return initValue;
};

export const useLocalStorage = (key, initValue) => {
  const [value, setValue] = useState(() => {
    return getLocalValues(key, initValue);
  });

  useEffect(() => {
    localStorage.getItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
