import GameSavingLoader from './gameSavingLoader';


GameSavingLoader.load().then((saving) => {
  if (!saving) {
    throw new Error('Значение объекта не определено');
  }
})
  .catch((e) => {
    console.log(`Произошла ошибка - ${e.message}`);
  });
