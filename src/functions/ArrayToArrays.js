export const arrayToArrays = (list, size) => {
  return list.reduce((prev, current) => {
    if (prev[prev.length - 1].length === size) {
      prev.push([]);
    }
    prev[prev.length - 1].push(current);
    return prev;
  }, [[]]);
};