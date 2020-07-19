import Team from '../team';
import Character from '../character';

test('Добавление игрока', () => {
  const character = new Character('Ann', 'Bowman');
  const team = new Team();
  team.add(character);
  const newContainer = new Set();
  newContainer.add({ name: 'Ann', type: 'Bowman' });
  expect(team.members).toEqual(newContainer);
});

test('Добавление существующего игрока', () => {
  const character = new Character('Ann', 'Bowman');
  const team = new Team();
  team.add(character);
  expect(() => {
    team.add(character);
  }).toThrow();
});

test('Добавление нескольких игроков, проверка задвоения', () => {
  const character1 = new Character('Ann', 'Bowman');
  const character2 = new Character('Roman', 'Undead');
  const character3 = new Character('Alex', 'Zombie');
  const team = new Team();
  team.addAll(character1, character2, character3, character2);
  expect(team.members.size).toBe(3);
});

test('проверка конвертации Set в массив', () => {
  const character1 = new Character('Ann', 'Bowman');
  const character2 = new Character('Roman', 'Undead');
  const team = new Team();
  team.addAll(character1, character2);
  team.toArray();
  expect(team.members).toEqual([{ name: 'Ann', type: 'Bowman' }, { name: 'Roman', type: 'Undead' }]);
});
