const numberArr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numberArr.map((number: number) => {
  number == 1
    ? console.log(`${number}st`)
    : number == 2
    ? console.log(`${number}nd`)
    : number == 3
    ? console.log(`${number}rd`)
    : console.log(`${number}th`);
});
