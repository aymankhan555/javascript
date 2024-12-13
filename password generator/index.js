function passwordGenarator(length, lowerCase, upperCase, symbols, numbers) {

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChars = "!@#$%^&*()_";
    const numberChars = "0123456789";
    let allowedChars = "";
    let passWord = "";

    allowedChars += lowerCase ? lowerCaseChars : "";
    allowedChars += upperCase ? upperCaseChars : "";
    allowedChars += symbols ? symbolChars : "";
    allowedChars += numbers ? numberChars : "";

    if(lenght<=0)
    {
        return `Select at least one charectar`;
    }
    if(allowedChars.length==0)
    {
        return `Select At least 1 Unit`;
    }
    for(let i=0;i<length;i++)
    {
        const index = Math.floor(Math.random()* allowedChars.length);
        passWord+=allowedChars[index];
    }
    return passWord;
    

}
const lenght = 12;
const lowerCase = true;
const upperCase = true;
const symbols = true;
const numbers = true;

const passWord = passwordGenarator(lenght, lowerCase, upperCase, symbols, numbers)
console.log(`Generated Password : ${passWord}`);