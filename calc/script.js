let expression='';
let answer='';
let results='';


function solution(str){
    if(str=='del'){
     expression=expression.slice(0,-1);
     document.getElementById("result").innerText=expression;
     
    }
    else if(str=='clear')
    {
        expression='';
        results='';
        document.getElementById("result").innerText=expression;
        document.getElementById("remb").innerText=expression;
    }
    else if(str=='enter')
    {
        results=eval(expression);
        answer=results;
        document.getElementById("result").innerText=results;
        document.getElementById("remb").innerText=expression;
        expression=results;
        
    }
    else if(str=='%')
    {
        results=eval(expression);
        results/=100;
        answer=results;
        document.getElementById("result").innerText=results;
        document.getElementById("remb").innerText=expression;
        expression=results;
    }
    else if(str=='±')
    {
        if(expression[0]=='-')
        {
            expression=expression.slice(1,);
            expression='+'+expression;
        }else if(expression[0]=='+'){
            expression=expression.slice(1,);
            expression='-'+expression;
        }
        else{
            expression='-'+expression;  
        }
        document.getElementById("result").innerText=expression;
    }
            
   
    else if(str=='ans')
    {
           expression+=answer;
           document.getElementById("result").innerText=expression;
    }
    else{
       
        expression+=str;
        document.getElementById("result").innerText=expression;
    }

    
    }
    
     
    
     
