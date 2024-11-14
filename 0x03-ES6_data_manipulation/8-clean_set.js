export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }

  const filtered = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return filtered.join('-');
}
