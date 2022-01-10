<template>
  <section class='flex flex-col h-screen justify-center bg-amber-800/80 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-gray-300  h-64 flex justify-between relative'>
      <div class="w-full h-full bg-[#fffef0] shadow-paper p-4 flex">
        <div class="flex flex-col justify-center space-y-3">
          <div>
            <div v-if="winnerIndex" class="flex flex-col">
              <button @click="restartGame" class="bg-red-900 text-white text-xs mx-auto p-1 font-mono hover:bg-opacity-90 active:bg-opacity-100">Restart</button>
              <h6 class="font-serif text-md text-center text-amber-900 font-bold">
                <span class="font-serif" v-if="winnerIndex === 'draw'">Round Draw</span>
                <span class="font-serif" v-else>player {{winnerIndex}} wins</span>
              </h6>
            </div>
            <h6 class="font-serif text-amber-800 text-center">
              <span class="uppercase font-serif">{{currentTextTile}}</span> turn
            </h6>
          </div>
          <div v-for="(player,index) in players" :key="index" class="flex space-x-5 bg-amber-300/50 py-1 px-4 w-full">
            <div class="my-auto text-2xl h-8 flex text-amber-800">
              <ion-icon class="m-auto" :name="player.icon"></ion-icon>
            </div>
            <span class="table my-auto text-amber-800 font-bold">{{player.score}}</span>
          </div>
        </div>
        <div class="grid grid-cols-3 grid-rows-3 mx-auto w-max h-full">
          <div v-for="(tile,index) in tiles" :key="index" @click="writeTile(index)" class=" h-full border border-amber-800/30 w-20   transform transition-all flex select-none overflow-hidden duration-300" :class="[!tile ? 'hover:scale-90 active:scale-100 cursor-pointer' : '','', winTiles.includes(index) ? 'bg-red-900 text-amber-400' : 'text-amber-600','' ]" >
            <h6 class="mx-auto my-auto h-full -mb-3 text-7xl leading-3">
              {{tile}}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      winTiles : [],
      winnerIndex : "",
      XTurn : true,
      players : {
        "x" : {
        icon : "close",
          score : 0
        },
        "o" : {
          icon : "ellipse-outline",
          score : 0
        },
        
      },
      tiles : ['','','','','','','','','']
    }
  },
  methods: {
    restartGame(){
      this.tiles = ['','','','','','','','',''];
      this.winTiles = [];
      this.winnerIndex = "";
      this.XTurn = true;
    },
    writeTile(tileIndex){
      if(this.winnerIndex)return;
      if(this.tiles[tileIndex])return;
      var currentTextTile = 'o';
      if(this.XTurn)currentTextTile = 'x';
      this.tiles[tileIndex] = currentTextTile;
      this.XTurn = !this.XTurn;
    }
  },
  computed : {
    currentTextTile(){
      var currentTextTile = 'o';
      if(this.XTurn)currentTextTile = 'x';
      return currentTextTile;
    }
  },
  watch : {
    currentTextTile: {
      handler: function(currentTextTile,prevTextTile) {
        const tiles = this.tiles;
        if(this.winnerIndex)return;
        const WINNING_COMBINATIONS = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ]
        const textTile = prevTextTile;
        for(var i = 0; i < WINNING_COMBINATIONS.length;i++){
          const c = WINNING_COMBINATIONS[i];
          const c1 = c[0];
          const c2 = c[1];
          const c3 = c[2];

          if(tiles[c1] == textTile && tiles[c2] == textTile &&  tiles[c3] == textTile){
            this.winnerIndex = textTile;
            this.winTiles = [c1,c2,c3];
            this.players[textTile].score+=1;
            return;
          };
        }
        if(!tiles.includes(''))this.winnerIndex = "draw";
      },
      deep: true
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Shizuru&display=swap');

*{
  font-family: 'Shizuru', cursive;
}

.shadow-paper {
	box-shadow: 2px 3px 20px rgb(63 63 70), 0 0 125px #8f5922 inset;
}
</style>