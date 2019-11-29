export function findTitleRight(str) {
  const arr = str.split(" ");
  const titleRight = arr[arr.length - 1];
  return titleRight;
}

export function findTitleLeft(str) {
  const arr = str.split(" ");
  const titleLeft = arr.length <= 2 ? arr[0] : arr.slice(0, 2).join(" ");
  return titleLeft;
}
