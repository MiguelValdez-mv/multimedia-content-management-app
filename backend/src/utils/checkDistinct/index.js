export function checkDistinct(arr) {
  const checkSet = new Set(arr);

  return checkSet.size === arr.length;
}
