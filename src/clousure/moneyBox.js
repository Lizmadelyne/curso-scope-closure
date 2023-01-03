// como sacrle ventaja a clousure

/*function moneyBox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`)
}
moneyBox(5);
moneyBox(5);*/  // asi no funciono

function moneyBox(coins){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}
const myMoneyBox = moneyBox();
myMoneyBox(6);
myMoneyBox(4);
myMoneyBox(10);

const moneyBoxKarla = moneyBox();
moneyBoxKarla(10);
moneyBoxKarla(20);

const moneyBoxGIO = moneyBox();
moneyBoxGIO (5);
moneyBoxGIO(20);

//es muy practico, facil y se usa supercool