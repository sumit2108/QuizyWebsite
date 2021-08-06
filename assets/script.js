const queDB = [
    //1
    {
        question: "Q.1: Which type of JavaScript language is ___",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Assembly-language",
        d:"High-level",
        ans:"ans2",
        
    },
    //2
    {
        question: "Q.2: Which one of the following also known as Conditional Expression:",
        a:"Alternative to if-else",
        b:"Switch statement",
        c:"If-then-else statement",
        d:"immediate if",
        ans:"ans4",
        
    },

    //3
    {
        question: "Q.3: When interpreter encounters an empty statements, what it will do:",
        a:"Shows a warning",
        b:"Prompts to complete the statement",
        c:"Throws an error",
        d:"Ignores the statements",
        ans:"ans4",
        
    },

    //4
    {
        question: "Q.4: The function and var are known as:",
        a:"Keywords",
        b:"Data types",
        c:"Declaration statements",
        d:"Prototypes",
        ans:"ans3",
        
    },

    //5
    {
        question: "Q.5: Which one of the following is the correct way for calling the JavaScript code?",
        a:"Preprocessor",
        b:"Triggering Event",
        c:"RMI",
        d:"Function/Method",
        ans:"ans4",
        
    },


    
]
   
let score=0;
let totalScore=queDB.length;
const scoreArea =document.getElementById('showScore');

const childDiv=document.getElementById('child');

const question =document.querySelector('#titleque');

const option1 =document.querySelector('#option1');
const option2 =document.querySelector('#option2');
const option3 =document.querySelector('#option3');
const option4 =document.querySelector('#option4');

const submit =document.querySelector('#submit');

const answers =document.querySelectorAll('.answer');

let questionCount =0;

const loadQuestion = () => {
    question.innerHTML = queDB[questionCount].question;
    option1.innerHTML =queDB[questionCount].a;
    option2.innerHTML =queDB[questionCount].b;
    option3.innerHTML =queDB[questionCount].c;
    option4.innerHTML =queDB[questionCount].d;
}
loadQuestion();

const getCheckedAnswer = () =>{
    let answer;
    answers.forEach((currentValue) =>{
        if(currentValue.checked){
            answer=currentValue.id;
        }
        
    })
  
    return answer;
    
}

submit.addEventListener('click' ,() =>{
   const checkedAnswer = getCheckedAnswer();
   console.log(checkedAnswer)
   console.log(queDB[questionCount].ans)
   if (checkedAnswer===queDB[questionCount].ans){
       score++;
       console.log(score)
   }else if (checkedAnswer==undefined){
    alert('select one of the options')
    return
}

   questionCount++;
   deselectAll();
 
     if(questionCount<totalScore){
       loadQuestion();
   }else{

    scoreArea.innerHTML= `<h1> Your score is ${score} out of ${totalScore}.</h1>
    <button id="reset" onclick="location.reload()">Play Again</button>
    <button id="reset1" onclick="location.href='index.html'">Home</button>`;
    
    scoreArea.classList.remove('scoreArea');
       childDiv.style.display= 'none';

   }


})

function deselectAll(){
    answers.forEach((currValue)=>currValue.checked = false);
}
