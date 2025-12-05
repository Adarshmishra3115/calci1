const input = document.getElementById("userInput");
const result = document.querySelector(".outputbox");
function clickbutton(el){
    const a = el.innerText;
    if(a === "CLR")
    {
        input.value='';
        result.innerText='';
        return;
    }
    const exp = `${input.value}${el.innerText}`;
    
    input.value = exp;
    result.innerText = eval(exp);
}
 