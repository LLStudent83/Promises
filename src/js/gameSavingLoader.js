import json from './parser'; // Возвращает промис который резолвится с прочитанным ArrayBuffer
import read from './reader'; // Создает ArrayBuffer с данными пользователя
import GameSaving from './saving';

export default class GameSavingLoader {
  static load() {
    const promiseRead = read();
    const promiseParser = promiseRead.then((buffer) => json(buffer));
    return promiseParser.then((str) => {
      const obj = JSON.parse(str);
      return obj;
    })
      .then((obj) => {
        const gameSaving = new GameSaving(obj);
        return gameSaving;
      });
  }
}
