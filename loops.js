function forLoop(array) {
  for(let i = 0; i < 25; i++) {
  if(i===0) {
    array.push("I am 1 strange loop.");
  } else {
    array.push(`"I am ${i} strange loops."`);
  }
}
return array;
}
function whileLoops(n) {
  while (whileLoops()) {
  console.log(--n)
  return 'done';
}
}

