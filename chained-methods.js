const startsWithS = words => {
  const filtered = [];
  for(let i = 0, { length } = words; i < length; i++) {
    const word = words[i];
    if (word.startsWithS('s')) filtered.push(word);
  }
  return filtered;
}

startsWithS(['oops', 'gasp', 'shout', 'sun']);
// [ 'shout', 'sun' ]