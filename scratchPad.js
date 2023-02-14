function stray(numbers) {
  let diffNum;
  if (numbers.length !== 0) {
    for (let i = 0; i < numbers.length; i++) {
      console.log(i);
      for (let j = 1; j < numbers.length; j++) {
        // console.log("iiii", j);
        if (numbers[i] === numbers[j]) {
          continue;
        } else {
          diffNum = numbers[i];
          console.log("AAAAA", diffNum);
          return;
        }
      }
    }
  } else {
    return 0;
  }
}

// stray([1, 1, 2]);
stray([1, 2, 1]);
// stray([2, 1, 1]);
