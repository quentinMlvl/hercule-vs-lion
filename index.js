import Fighter from "./src/Fighter.js";

// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const hercule = new Fighter("🧔 Hercule", 20, 6);
const lion = new Fighter("🦁 Nemean Lion", 11, 13);

function fight(fighter1, fighter2){
    let fightsCounter = 1;

    while(fighter1.isAlive && fighter2.isAlive){
        if(fightsCounter%2 == 0){
            console.log();
            console.log(`🕛 Round #${fightsCounter/2}`)
            console.log(fighter1.fight(fighter2));
        }else console.log(fighter2.fight(fighter1));
        fightsCounter++
    }
    const winner = (fighter1.isAlive) ? fighter1 : fighter2;
    const looser = (fighter1.isAlive) ? fighter2 : fighter1;
    console.log();
    console.log(`💀 ${ looser.name } is dead`);                
    console.log(`🏆 ${ winner.name} wins (💙 : ${winner.life})`);  

}


fight(hercule, lion);