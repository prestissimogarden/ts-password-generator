function genPassword(
  len: number,
  lowercase: boolean,
  uppercase: boolean,
  numbers: boolean,
  symbols: boolean
): string {
  if (len < 1) {
    return "Password length cannot be less than 1.";
  }

  const chars = "abcdefghijklmnopqrstuvwxyz";
  const nums = "1234567890";
  const symbolChars = "!@#$%&*?-_=+~/|<>.,:;";
  let passwd = "";
  let allowed = "";

  allowed += numbers ? nums : "";
  allowed += symbols ? symbolChars : "";
  allowed += lowercase ? chars : "";
  allowed += uppercase ? chars.toUpperCase() : "";

  if (allowed.length === 0) {
    return "No characters selected.";
  }

  for (let i = 0; i < len; i++) {
    const randIdx = Math.floor(Math.random() * allowed.length);
    passwd += allowed[randIdx];
  }

  return passwd;
}

const len = 15;
const lowercase = true;
const uppercase = true;
const numbers = true;
const symbols = true;

const password: string = genPassword(
  len,
  lowercase,
  uppercase,
  numbers,
  symbols
);
console.log(`Your password is: \t ${password}`);
