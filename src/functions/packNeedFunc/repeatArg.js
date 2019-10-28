export const repeatArgs = (n = 2, char = "some") => (typeof n === "number" && n > 0 ? char.repeat(n) : false);
