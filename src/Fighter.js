/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
    constructor(name, str, dex){
        this.name = name;
        this.str = str;
        this.dex = dex;
        this.life = Fighter.MAX_LIFE;
        this.isAlive = true;
    }

    static get MAX_LIFE(){ return MAX_LIFE };

    takeDmg(dmg){
        if(dmg > this.life) this.isAlive = false;
        else this.life -= dmg;
    }

    fight(opponent){
        const dmgDone = Math.floor(Math.random() * this.str) + 1 - opponent.dex;
        const beforeLife = opponent.life;
        if(dmgDone > 0) {
            opponent.takeDmg(dmgDone);
            let fightRes = `${this.name} deals ${dmgDone} dmg to ${opponent.name}`;
            fightRes += `(💙 : ${beforeLife} -> ${opponent.isAlive ? opponent.life : "0"})`
            
            return(fightRes);            
        }else {
            const rnd = (Math.floor(Math.random()) * 3);
            const typeDef = (rnd == 0) ? 'blocks' : (rnd == 1) ? 'resists' : (rnd == 2) ? 'dodges' : 'avoids'; 

            return(`${this.name} attacks but ${opponent.name} ${typeDef} it (💙 : ${opponent.life})`)
        }
    }
    
}


export default Fighter;