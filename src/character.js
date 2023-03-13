export default function unitStats(property) {
  if (property.health > 50) {
    return 'healthy';
  } if (property.health < 50 && property.health > 15) {
    return 'wounded';
  } if (property.health < 15) {
    return 'critical';
  }
}
