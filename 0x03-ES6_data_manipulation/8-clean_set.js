export default function cleanSet(set, startString) {
  // Convert the set to an array, filter values that start with startString
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const filtered = [...set]
    .filter((value) => value.startsWith(startString)) // Keep values that start with startString
    .map((value) => value.slice(startString.length)) // Remove the startString part of each value

  // Join the remaining parts of each value with a hyphen and return it
  return filtered.join('-');
}
