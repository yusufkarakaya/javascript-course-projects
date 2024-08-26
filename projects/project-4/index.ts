// password generator

function generatePassword(
  length: number,
  specialChars: boolean,
  lowerCase: boolean,
  upperCase: boolean,
  numbers: boolean
): string {
  let password = "";
  let allowedChars = "";

  const specialCharsList = "!@#$%^&*()_+";
  const lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersList = "0123456789";

  specialChars ? (allowedChars += specialCharsList) : "";
  lowerCase ? (allowedChars += lowerCaseList) : "";
  upperCase ? (allowedChars += upperCaseList) : "";
  numbers ? (allowedChars += numbersList) : "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}

const password = generatePassword(10, true, true, true, true);
console.log(password);
