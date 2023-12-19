import Team from '../app';

class Character {
  constructor(name) {
    this.name = name;
  }
}

test('check create new team', () => {
  const team = new Team();
  const result = { members: new Set() };
  expect(team).toEqual(result);
});

test('check method add(character)', () => {
  const team = new Team();
  const lobo = new Character('Lobo');
  team.add(lobo);
  const result = {
    members: new Set([{
      name: 'Lobo',
    }]),
  };
  expect(team).toEqual(result);
});

test('test to dublicate', () => {
  const team = new Team();
  const lobo = new Character('Lobo');
  team.add(lobo);
  expect(() => team.add(lobo)).toThrow('Этот персонаж уже есть в команде!');
});

test('check method addAll(...characters)', () => {
  const team = new Team();
  const zorro = new Character('Zorro');
  const perro = new Character('Perro');
  const lobo = new Character('Lobo');

  expect(() => team.addAll(zorro, perro, lobo)).not.toThrow();
});

test('check method toArray(arr)', () => {
  const team = new Team();
  const zorro = new Character('Zorro');
  const perro = new Character('Perro');
  const lobo = new Character('Lobo');
  team.add(zorro);
  team.add(perro);
  team.add(lobo);
  expect(team.toArray()).toEqual([zorro, perro, lobo]);
});