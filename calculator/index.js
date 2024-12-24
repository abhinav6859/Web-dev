function updateTime() {
    const timeElement = document.getElementById('time');
 
   const now = new Date();

    // Format the time as HH:MM:SS
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}
// Update time immediately and then every second
updateTime();
setInterval(updateTime, 1000);



// const outputElement = document.getElementById("output");

// outputElement.style.color = "green";

// function a(){

//     const Num1=document.getElementById("input");
//     const Num2=document.getElementById("input1");
//     const Num3=document.getElementById("input2");


//  var b = calculator(Num1,Num2,Num3);
// outputElement.textContent = `Ans: ${b}`;
// }

// function add(num1,num2) {
// return num1+num2;
// }
// function substract(num1,num2) {
//     return num1-num2;
//     }
//     function multiply(num1,num2) {
//         return num1*num2;
//         }
//         function divide(num1,num2) {
//             return num1/num2;
//             }
//             function modulo(num1,num2) {
//                 return num1%num2;
//                 }

// function calculator(num1,num2,operator) {
  
//     return operator(num1,num2);
   
//     }

    const outputElement = document.getElementById("output");

    outputElement.style.color = "green";
    
    function a() {
        const num1 = document.getElementById("input").value;
        const num2 = document.getElementById("input1").value;
        const operator = document.getElementById("input2").value;
    
        const b = calculator(parseFloat(num1), parseFloat(num2), operator);
        outputElement.textContent = `Ans: ${b}`;
    }
    
    function add(num1, num2) {
        return num1 + num2;
    }
    function subtract(num1, num2) {
        return num1 - num2;
    }
    function multiply(num1, num2) {
        return num1 * num2;
    }
    function divide(num1, num2) {
        return num1 / num2;
    }
    function modulo(num1, num2) {
        return num1 % num2;
    }
    
    function calculator(num1, num2, operator) {
        switch (operator) {
            case "add":
                return add(num1, num2);
            case "subtract":
                return subtract(num1, num2);
            case "multiply":
                return multiply(num1, num2);
            case "divide":
                return divide(num1, num2);
            case "modulo":
                return modulo(num1, num2);
            default:
                return "Invalid operator";
        }
    }
    