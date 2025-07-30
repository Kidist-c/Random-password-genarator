const passwordBox=document.getElementById("Password")
const lengh=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbol="#$%^&*()_+~/{}[]<>=?"
const allChar=upperCase + lowerCase + numbers + symbol;
console.log("hello")

function createPassword(){
    let password="";
    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=numbers[Math.floor(Math.random()*numbers.length)];
    password +=symbol[Math.floor(Math.random()*symbol.length)];

    while(lengh > password.length){
            password += allChar[Math.floor(Math.random()*allChar.length)];
    }
    passwordBox.value=password;
}
function copyPassword(){
    navigator.clipboard.writeText(passwordBox.value)
    .then(()=> {alert("copied to clipboard")})
    .catch(err=>{
        console.log("Failed to copy:",err)
    })

}