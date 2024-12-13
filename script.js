/*
digit array - [everything]
variable= stores index of array
function -triggers when onclick happens-generate(){
    empty array=[]
    and iterate through the digit-array by variable index
    and that digit append in empty array for 12 times
    show that array in password-container


}
*/
const allCharacters = [
    // Numbers
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    // Symbols 
    '!', '@', '#', '$', '%', '&',
    // Uppercase Letters (A-Z)
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    // Lowercase Letters (a-z)
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    // Other Symbols from Keyboard
    '_', '?'
];

const copyImg = document.getElementById("copy-btn");
const passContainer = document.querySelector(".password-cont");




function Generate(){
    const lengthSelector =document.getElementById("password-length");
    const selectedLength = parseInt(lengthSelector.value);
    const passElements = passContainer.querySelectorAll("p");
    passElements.forEach(element => element.remove());
    

    let pass ="";

    for(let i =1; i<=selectedLength;i++){
        let random_index = Math.floor(Math.random()*allCharacters.length);
        pass+= allCharacters[random_index];


    }

    let newpassElement = document.createElement("p");
    newpassElement.innerText =pass;
    if(newpassElement){
        passContainer.prepend(newpassElement);
        
        
    }else{
        alert(`no password existing`);
    }
    


}


copyImg.addEventListener("click",() => {
    const passTxt = passContainer.querySelector("p").innerText;
    navigator.clipboard.writeText(passTxt)
        .then(() => {
            alert(`Password copied to clipboard!`); // Success message
        })
        .catch(err => {
            alert(`Failed to copy password: ` + err); // Error handling
        });
  

});





