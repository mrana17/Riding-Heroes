import { useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initalValue: T
): [T, (value: T) => void] {
  const readFromLocalStorage = (): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initalValue;
    } catch (error) {
      console.error(error);
      return initalValue;
    }
  };

  const writeToLocalStorage = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const [storedValue, setStoredValue] = useState<T>(readFromLocalStorage);

  const setValue = (value: T) => {
    writeToLocalStorage(value);
    setStoredValue(value);
  };
  return [storedValue, setValue];
}
