function combineliteral(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAgesliteral = combineliteral(30, 26, 'as-number');
console.log(combinedAges);

const combinedAgesliteralString = combineliteral('30', '26', 'as-number');
console.log(combinedAgesliteralString);

// const combinedNamesliteral = combineliteral('Max', 'Anna');
// console.log(combinedNames);
