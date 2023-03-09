/* eslint-disable linebreak-style */
export default function characterFilter(list) {
  // eslint-disable-next-line array-callback-return, consistent-return
  list.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    if (a.health < b.health) {
      return 1;
    }
  });
  return list;
}
