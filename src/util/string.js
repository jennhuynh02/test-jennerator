function string(length) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let output = '\"';
  for (let i = 0; i < length; i++) {
    output = output + alphabet[Math.floor(Math.random() * 100) % 26]
  }
  return output + '\"';
}

export default string;