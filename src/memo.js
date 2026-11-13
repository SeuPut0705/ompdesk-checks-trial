export default function memo(fn) {
  const cache = new Map();
  return async (key) => {
    if (!cache.has(key)) cache.set(key, fn(key));
    return cache.get(key);
  };
}
