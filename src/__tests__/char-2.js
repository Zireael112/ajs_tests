/* eslint-disable linebreak-style */
import characterFilter from '../character-2';

test('test filter', () => {
  const result = characterFilter([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('test filter2', () => {
  const result2 = characterFilter([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
    { name: 'лучник', health: 80 },
  ]);
  expect(result2).toEqual([
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 10 },
  ]);
});