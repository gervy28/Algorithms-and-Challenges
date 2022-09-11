function factorialSolve(num){
    if(num === 1) return 1;  
    return num*factorialSolve(num-1);
}

factorialSolve(4);

function forLoopFactorial(num){
    for (let i = num-1; i >= 1; i--){
        num *= i;
    }
    return num;
}

forLoopFactorial(4);
