document.addEventListener('DOMContentLoaded',()=>{
    const display=document.querySelector(".display");
    const button=document.querySelectorAll("button");
    button.forEach((item)=>{
        item.onclick=()=>{
            if(item.id=='clear'){
                display.innerText='';
            }
            else if(item.id=='back'){
                let string=display.innerText
                display.innerText=string.substr(0, string.length-1)
            }
            else if(display.innerText!='' && item.id=='equal'){
                let expression = display.innerText.replace(/÷/g, '/').replace(/×/g, '*');
                display.innerText = eval(expression)
            }
            else{
                if (item.id === 'divide') {
                    display.innerText += '÷';
                } else if (item.id === 'multiply') {
                    display.innerText += '×';
                } else {
                    display.innerText += item.id;
                }
            }
        }
    });
});

