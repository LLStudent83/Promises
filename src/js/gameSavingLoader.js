import json from './parser'; // Возвращает промис который резолвится с прочитанным ArrayBuffer
import read from './reader'; // Создает ArrayBuffer с данными пользователя

export default class GameSavingLoader {
  static load() {
    const promiseRead = read();
    return promiseRead.then((data) => json(data));
  }
}
