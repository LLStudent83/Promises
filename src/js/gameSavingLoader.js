import json from './parser'; // Возвращает промис который резолвится с прочитанным ArrayBuffer
import read from './reader'; // Создает ArrayBuffer с данными пользователя

export default class GameSavingLoader {
  static load() {
    const promiseRead = read();
    return promiseRead.then((data) => json(data));
  }
}

GameSavingLoader.load().then((saving) => {
  console.log(saving);
});

// console.log(GameSavingLoader.load());
// GameSavingLoader.load();
