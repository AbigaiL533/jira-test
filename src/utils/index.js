import { useState, useEffect } from "react";
export const isFalsy = (value) => (value === 0 ? false : !value);

export const cleanObject = (obj) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useState(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // 每次在上哥useEffect处理后再运行
    return () => clearTimeout(timeout); 
  }, [value, delay]);

  return debounceValue;
};
