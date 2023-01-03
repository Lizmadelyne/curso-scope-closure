function createPetList(myPet) {

    let petList = [];
    function addPet(myPet) {
      petList += myPet;
      console.log(`mi mascota: ${myPet}`)
  
    }
    return addPet;
  
  }
  
  const myPetList = createPetList();
  
  myPetList("michi");
  myPetList("firulais");