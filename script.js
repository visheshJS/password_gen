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
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    // Uppercase Letters (A-Z)
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    // Lowercase Letters (a-z)
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    // Other Symbols from Keyboard
    '`', '~', '-', '_', '=', '+', '[', '{', ']', '}', '|', ';', ':', ',', '<', '.', '>', '/', '?'
];
const empty=[];


const passContainer = document.querySelector(".password-cont");

function Generate(){
    for(let i =1; i<=12;i++){
        let char = Math.floor(Math.random()*(allCharacters-1).length);
        empty.push(char);

        for(let i=1;i<=char.length;i++){
            let pass = document.createElement("p");
            pass.innerText=char[i];
            passContainer.prepend(pass);
        }
    }

    
    
}

Generate();





