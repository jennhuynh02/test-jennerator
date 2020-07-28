function integer(minimum, maximum, type) {
  let min = Number(minimum);
  let max = Number(maximum);
  if (max < min) return "Maximum number must be greater than or equal the minimum number."

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export default integer;