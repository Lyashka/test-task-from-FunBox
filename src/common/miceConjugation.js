export default function miceConjugation(quantityMice) {
  let conjugation = '';
  switch(true) {
    case quantityMice === 1:
      conjugation = 'мышь';
      break;
    case quantityMice >= 2 && quantityMice <= 4:
      conjugation = `мыши`;
      break;
    default: conjugation = `мышей`;
  }

  return conjugation;
}
