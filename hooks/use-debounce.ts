import { useEffect, useState } from "react";

//We dont want to exhaust our database with every key stroke the user is writing therefore we want to delay/debounce it.
//To reduce db queries
export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
