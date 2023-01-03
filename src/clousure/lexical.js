const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){
        const inner  = 2;
        console.log(myNumber, myGlobal);

        function child (){
            console.log (inner, myNumber, myGlobal);
        }
        return child();
    }
   return  parent();

}
myFunction();

/*function sumar(num1, num2){

    let resultado = num1 + num2;
    return resultado;
}

sumar(1, 2);*/
//asi me funciono 