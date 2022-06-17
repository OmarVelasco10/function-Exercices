const btn2 = document.querySelector("#button2");

btn2.addEventListener('click',function () {
    let sentence = document.getElementById("sentence").value; 
    let word = document.getElementById("word").value; 
    document.getElementById("function2").innerHTML = `Respuesta: ${sentence.includes(word)}`;
    return console.log(sentence.includes(word));
   
    }
);

//sentenceValidator('omar es guapo','omar');
const btn3 = document.querySelector("#button3");
btn3.addEventListener('click', function (){
    let number1 = parseInt(document.getElementById("number1").value); 
    let number2 = parseInt(document.getElementById("number2").value); 
    console.log(number1);
    if(number1 == number2) {
        document.getElementById("function3").innerHTML = `Respuesta: ${((number1 + number2) * 4)}`;
        return console.log((number1 + number2) * 4); 
    } else {
        document.getElementById("function3").innerHTML = `Respuesta: ${(number1 + number2)}`;
        return console.log((number1 + number2));
    }

});
function numberValidator(number1,number2) {

    if(number1 == number2) {
        return console.log((number1 + number2) * 4); 
    } else return console.log((number1 + number2));
}

numberValidator(6,5);

const btn4 = document.querySelector("#button4");
btn4.addEventListener('click', function() {
    let volcancode = "Volcancode";
    let sentenceVolcan = document.getElementById("sentenceVolcan").value; 
    if(sentenceVolcan.includes("Volcancode")){
        document.getElementById("function4").innerHTML = `Respuesta: ${sentenceVolcan}`;
        return console.log(sentence);
    } else {
        document.getElementById("function4").innerHTML = `Respuesta: ${volcancode} ${sentenceVolcan}`;
        return console.log(volcancode.concat(" ").concat(sentence));
    }

});
function volcanCodeValidator(sentence) {
    let volcancode = "Volcancode";
    if(sentence.includes("Volcancode")) {
        return console.log(sentence);
    } else return console.log(volcancode.concat(" ").concat(sentence));
}

volcanCodeValidator("soy Omar");

const btn5 = document.querySelector("#button5");
btn5.addEventListener('click', function () {
    let n1 = parseInt(document.getElementById("n1").value); 
    let n2 = parseInt(document.getElementById("n2").value); 
    let n3 = parseInt(document.getElementById("n3").value); 
    if(n1 > n2 && n1 > n3) {
        document.getElementById("function5").innerHTML = `Respuesta: El número mayor es ${n1}`;
        return console.log(`El número mayor es ${n1}`);
    } 
    if(n2 > n1 && n2 > n3) {
        document.getElementById("function5").innerHTML = `Respuesta: El número mayor es ${n2}`;
        return console.log(`El número mayor es ${n2}`);
    } 
    if(n3 > n1 && n3 > n2) {
        document.getElementById("function5").innerHTML = `Respuesta: El número mayor es ${n3}`;
        return console.log(`El número mayor es ${n3}`);
    }
});
function numberMajor (number1,number2,number3) {

    if(n1 > n2 && n1 > n3) return console.log(`El número mayor es ${number1}`);
    if(n2 > n1 && n2 > n3) return console.log(`El número mayor es ${number2}`);
    if(n3 > n1 && n3 > n2) return console.log(`El número mayor es ${number3}`);
}

numberMajor(1,7,3);

function getDayAndTime() {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Suturday',
      ];
    console.log(
    `Today is: ${days[day]}
    Curren time is: ${hour%12} PM : ${minutes}: ${seconds}`);
    document.getElementById("function1").innerHTML = `
    Today is:  ${days[day]} <br>
    Curren time is: ${hour%12} PM : ${minutes}: ${seconds}`;

    console.log("hola");
}

getDayAndTime();

