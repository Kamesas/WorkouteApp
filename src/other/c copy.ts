export const operations: { [key: string]: (a: number, b: number) => number } = {
  "*": (a: number, b: number) => a * b,
  "/": (a: number, b: number) => a / b,
  "+": (a: number, b: number) => a + b,
  "-": (a: number, b: number) => a - b,
};

//"-10+5*0.5*1+15-30 + 2,2 / 40+20 / 60 / 1"
export const MyCalculate = (arString: string) => {
  const formatted = arString.replace(/,/, ".");
  const propsArr: { [key: number]: string | number } | null = formatted.match(
    /^[-\d.,]+|[\d.,]+|[+\-*/]+/g
  );

  if (!Array.isArray(propsArr) || !propsArr.length) return "No data";
  console.log("---------------------------------------------");
  console.log(propsArr);

  let res: any = [];
  propsArr.forEach((item, i) => {
    // console.log(i, "---", item);
    if ((i > 0 && item === "+") || item === "-") {
      console.log(item);
      res.push(propsArr[i - 1]);
      res.push(propsArr[i]);
    }
    if (item === "*" || item === "/") {
      console.log(item);
      const calc = operations[item](propsArr[+i - 1], propsArr[+i + 1]);
      // console.log(calc);
      res.push(calc);
    }
  });

  console.log(res);
  console.log("-----------------------------------------");
};
