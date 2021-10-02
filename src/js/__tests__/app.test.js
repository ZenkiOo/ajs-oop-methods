import { LevelUp } from '../Character';
import {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from '../Characters';



test('Bowman', () => {
  expect(new Bowman('Alex', 'Bowman')).toEqual({
    name: 'Alex',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Swordsman', () => {
  expect(new Swordsman('Alex', 'Swordsman')).toEqual({
    name: 'Alex',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Magician', () => {
  expect(new Magician('Alex', 'Magician')).toEqual({
    name: 'Alex',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('Daemon', () => {
  expect(new Daemon('Alex', 'Daemon')).toEqual({
    name: 'Alex',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Undead', () => {
  expect(new Undead('Alex', 'Undead')).toEqual({
    name: 'Alex',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

test('Zombie', () => {
  expect(new Zombie('Alex', 'Zombie')).toEqual({
    name: 'Alex',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('levelUp', () => {
  const bowman = new Bowman('Alex', 'Bowman');
  bowman.levelUp();
  const result = bowman;
  expect(result).toEqual({
    name: 'Alex',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('damage', () => {
  const bowman = new Bowman('Alex', 'Bowman');
  bowman.damage(10);
  const result = bowman;
  expect(result).toEqual({
    name: 'Alex',
    type: 'Bowman',
    health: 92.5,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test('Error name', () => {
  expect(() => {
    new Bowman('B', 'bowman');
    throw new Error('имя должно быть от 2 до 10 символов');
  }).toThrow();
});

test('Error levelUp', () => {
  expect(() => {
    const bowman = new Bowman('Alex', 'bowman');
    bowman.health = 0;
    bowman.levelUp();
    throw new Error('The deceased cannot be leveled!');
  }).toThrow();
});

test('function damage', () => {
  const bowman = new Bowman('Alex', 'Bowman');
  bowman.health = -10;
  bowman.damage(10);
  expect(bowman).toEqual({
    name: 'Alex',
    type: 'Bowman',
    health: -10,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
