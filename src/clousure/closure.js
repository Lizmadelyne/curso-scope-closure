function greetings(){
    let username ='madelyne';

    function displayUserName(){
        return `hello ${username}`;

    }
    return displayUserName;
}
const g =greetings();
console.log(g);
console.log(g());