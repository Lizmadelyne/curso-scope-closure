
function greeting(){
    let username = 'Ana';
console.log(username);
if (username === 'Ana'){
    console.log(`Hello ${username}!`)
}

}
greeting(); // el bloque funciona bien

console.log(username)  //aqui  no es global y al llamarlo fuera del bloque genera error


//este es un alcance local