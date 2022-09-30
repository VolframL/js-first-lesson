const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

  if (arr.length === 0) {
    return 'Нет доступных валют.';
  } else {
    let money = [...baseCurrencies, ...additionalCurrencies];
    let str = `Доступные валюты:\n`;
    for (let item of money) {
      if (item !== missingCurr) {
        str += `${item}\n`;
      }
    }
    return str;
  }
}
console.log(availableCurr([], 'CNY'));