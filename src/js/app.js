/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import {
  Bowman,
  Swordsman,
  Magician,
  Daemon,
  Undead,
  Zombie,
} from './Characters';

const bowman = new Bowman('Игорь', 'Bowman'),
  swordsman = new Swordsman('Федот', 'Swordsman'),
  magician = new Magician('Тарас', 'Magician'),
  daemon = new Daemon('Дима', 'Daemon'),
  undead = new Undead('Константин', 'Undead'),
  zombie = new Zombie('Кристинка', 'Zombie');

const characters = [bowman, swordsman, magician, daemon, undead, zombie];

characters.forEach((char) => char.levelUp());
characters.forEach((char) => char.damage(10));
console.log(characters);
