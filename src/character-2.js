export default function characterFilter(list) {
  [...list].sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    if (a.health < b.health) {
      return 1;
    }
  });
}
