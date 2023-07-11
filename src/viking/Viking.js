import Soldier from '../soldier/Soldier.js';

class Viking extends Soldier{
    constructor(name, health , strength) {
        super(health , strength);
        this.name=name;
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health-=damage;
        if(this.health<=0){
            return `${this.name} has died in act of combat`
        } 
        if(this.health>0) {
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

module.exports = Viking;

