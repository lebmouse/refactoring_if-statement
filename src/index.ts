export function getInitalDataLS<T extends number | boolean | string>(
  key: string,
  initial: T
): T {
  let value: T;
  if (typeof initial === "boolean") {
    const saved = localStorage.getItem(key);
    if (saved === "true") {
      value = true as T;
    } else if (saved === "false") {
      value = false as T;
    } else {
      value = initial;
    }
  } else if (typeof initial === "number") {
    const saved = localStorage.getItem(key);
    if (saved) {
      value = Number(saved) as T;
    } else {
      value = initial;
    }
  } else {
    value = (localStorage.getItem(key) as T) || initial;
  }
  localStorage.setItem(key, String(value));
  return value;
}
