export default hasValuesFromArray(set, array) {
  return array.every(
    (element) => set.has(element)
  );
}
