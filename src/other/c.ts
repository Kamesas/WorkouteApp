export const operations: { [key: string]: (a: number, b: number) => number } = {
  "*": (a: number, b: number) => a * b,
  "/": (a: number, b: number) => a / b,
  "+": (a: number, b: number) => a + b,
  "-": (a: number, b: number) => a - b,
};

//"-10+5*0.5*1+15-30 + 2,2 / 40+20 / 60 / 1"
export const calculate = (arString: string) => {
  const formatted = arString.replace(/,/, ".");
  const propsArr: { [key: number]: string | number } | null = formatted.match(
    /^[-\d.,]+|[\d.,]+|[+\-*/]+/g
  );

  if (!Array.isArray(propsArr) || !propsArr.length) return "No data";
  const priorityOperators = ["*", "/"];
  const priorityLoops: { [key: string]: number } = {};

  priorityOperators.forEach((operator: string) => {
    const matches = formatted.match(new RegExp(`[${operator}]+`, "g"));
    Array.isArray(matches) && (priorityLoops[operator] = matches.length);
  });

  console.log(priorityLoops);

  priorityOperators.forEach((action) => {
    for (let j = 0; j < priorityLoops[action]; j++) {
      const actionIndex = propsArr.indexOf(action);
      if (actionIndex < 0) break;
      propsArr.splice(
        actionIndex - 1,
        3,
        operations[action](
          propsArr[actionIndex - 1] * 1,
          propsArr[actionIndex + 1] * 1
        )
      );
    }
  });

  console.log(propsArr);

  while (propsArr.length > 1) {
    propsArr.splice(
      0,
      3,
      operations[propsArr[1]](propsArr[0] * 1, propsArr[2] * 1)
    );
  }
  return propsArr[0];
};
