function getRandomValue(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}


const app = Vue.createApp({
    data(){
        return{
            monsterHealth:100,
            playerHealth:100,
            round: 0,
            winner: null,
            logMessages : [],
        }
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <=0){ //draw
                this.winner = 'draw'
            }
            else if( value <= 0){ //player lost
                this.winner = 'monster'
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <=0){ //draw
                this.winner = 'draw'
            }
            else if( value <= 0){ //monster lost
                this.winner = 'player'
            }
        }
    },
    computed:{
        monsterBarStyles(){
            if(this.monsterHealth <0){
                return {width: '0%'};
            }
            return {width: this.monsterHealth+'%'};
        },
        playerBarStyles(){
            if(this.playerHealth <0){
                return {width: '0%'};
            }
            return {width: this.playerHealth+'%'};
        },
        mayUseSpecialAttack(){
            return this.round % 3 !== 0;
        }
    },
    methods:{
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.round = 0;
            this.winner = null;
            this.logMessages= [];
        },
        attack(){
            this.round++;
            const attckvalue = getRandomValue(5,12);
            this.monsterHealth -= attckvalue;
            this.addLogMessage('player', 'attack', attckvalue)
            this.attackPlayer();
        },
        attackPlayer(){
            const attckvalue = getRandomValue(8,15);
            this.addLogMessage('monster', 'attack', attckvalue)
            this.playerHealth -= attckvalue;
        },
        specialAttack(){
            this.round++;
            const attckvalue = getRandomValue(10,25);
            this.monsterHealth -= attckvalue;
            this.addLogMessage('player', 'special attack', attckvalue)
            this.attackPlayer();
        },
        heal(){
            this.round++;
            const healvalue = getRandomValue(8,20);
            if( this.playerHealth + healvalue > 100){
                this.playerHealth = 100;
            }
            else{
                this.playerHealth += healvalue;
            }
            this.addLogMessage('player', 'heal', healvalue)
            this.attackPlayer();
            
        },
        surrender(){
            this.winner = 'monster';
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        }
    }
})

app.mount('#game')