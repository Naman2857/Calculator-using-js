let input = document.getElementById('input'); 
buttons= document.querySelectorAll('button');
let screenValue = '';
// buttons.addEventListener('click',function onclick(){
//     buttons.style.backgroundColor = rgb(106, 106, 106);
// });
for(item of buttons){
    item.addEventListener('click',(e)=>{
        // e.target will target the button which is pressed and innertext will note down that text
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText =='AC'){
            input.value = "";
            screenValue = '';
            // input.value = screenValue;
        }
        else if (buttonText == '='){
            input.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            input.value = screenValue;
        }

    })
}