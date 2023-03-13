import unitStats from '../character';

test('test healthy', () => {
  const result = unitStats({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('test wounded', () => {
  const result = unitStats({ name: 'Воин', health: 40 });
  expect(result).toBe('wounded');
});

test('test critical', () => {
  const result = unitStats({ name: 'Лучник', health: 10 });
  expect(result).toBe('critical');
});
