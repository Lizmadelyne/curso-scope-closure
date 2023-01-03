function fruits(){
    if(true){
        var fruit1 ='Apple';  //function sscope
        let fruit2 ='banano'; // block scope
        const fruit3 ='piña';// block scope
    }


console.log(fruit1); // esste si logra  el alcance
/*console.log(fruit2); al ejecutar asi no loggra el alance 
console.log(fruit3);*/
}
fruits();