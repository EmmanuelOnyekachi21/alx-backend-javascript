export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    let value = appendString + idx;
    newArray.push(value)
  }

  return newArray;
}
