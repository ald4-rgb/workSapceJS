/**Let's have a look at the order here i'm defining my constant and my 
 * variable before i use it 
 * right 
 * i defien current result right at the top of the script file and 
 * then hare's the first  time where i try  to use it 
 * beacuase  i try to assign a new value to it to and then i also 
 * use it down there when i forward 
 * it or when i pass the value that sotered that stored inside of it 
 * to output result 
 * Now our code would break if i would move that all the way to the 
 * bottom  of the script 
 */
const defaultResult = 0;


function add(num1, num2) {
    
    result = num1 + num2;
    
    return result;
    
}


currentResult = add(1, 2);


let calculationDescription = `(${defaultResult}  + 10)  * 3 / 2 - 1`;
outPutResult(currentResult, calculationDescription);
let currentResult = defaultResult;


