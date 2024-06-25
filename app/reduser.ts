type Moneys = {
  eur: number;
  usd: number;
};
type Action = {
  type: 'eur' | 'usd';
  value: number;
};
export default function moneyReducer(moneys: Moneys, action: Action) {
  switch (action.type) {
    case 'eur':
      return {
        ...moneys,
        eur: action.value,
        usd: formater(action.value * 1.07),
      };

    case 'usd':
      return {
        ...moneys,
        eur: formater(action.value / 1.07),
        usd: action.value,
      };
  }
}

function formater(value: number) {
  const number = Number(value);
  const rounded = number.toFixed(2);
  return parseFloat(rounded);
}
