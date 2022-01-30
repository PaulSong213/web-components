<template>
  <section class='flex flex-col h-screen justify-center bg-amber-400 px-2 relative max-w-full overflow-hidden'>
    <div class='mx-auto  rounded-sm  h-full flex flex-col justify-center '>
        <section class="grid grid-cols-4  scale-50 gap-x-52 -ml-28 gap-y-4  transform " >
          <div v-for="(cube,index) in cubes" :key="index" class="scene transform" >
            <div class="cube" :class="[showSide[cube[count]] ]" >
              <div class="cube__face cube__face--front"></div>
              <div class="cube__face cube__face--back"></div>
              <div class="cube__face cube__face--right"></div>
              <div class="cube__face cube__face--left"></div>
              <div class="cube__face cube__face--top"></div>
              <div class="cube__face cube__face--bottom"></div>
            </div>
          </div>
        </section>
    </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      isCountDown : true,
      count : 4,
      showSide : ['show-back','show-front','show-right','show-left','show-top','show-bottom'],
      cubes : [
        [7,0,5,1,2],[2,3,3,8,2],[3,3,3,2,5],[0,5,5,8,3],
        [0,2,8,7,3],[0,1,8,3,7],[2,4,7,2,6],[0,3,5,7,8],
        [0,8,1,5,2],[0,7,3,3,2],[3,3,5,2,5],[0,8,3,6,3],
        [0,6,7,8,8],[0,3,8,8,7],[5,1,7,2,6],[0,1,3,1,3],
        [0,5,3,7,2],[0,3,5,7,2],[5,3,3,2,5],[0,3,3,8,3],
      ]
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    init(){
      setInterval(() => {
        if(this.isCountDown)this.count--;
        else this.count++;

        if(this.count == 0)this.isCountDown = false;
        else if(this.count == 4)this.isCountDown = true;
      }, 2000);
    }
  }
}

</script>

<style scoped>
.scene {
  width: 200px;
  height: 200px;
  border: 1px solid #CCC;
  perspective: 400px;
}

.cube {
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 1s;
}

.cube.show-front  { transform: translateZ(-100px) rotateY(   0deg); }
.cube.show-right  { transform: translateZ(-100px) rotateY( -90deg); }
.cube.show-back   { transform: translateZ(-100px) rotateY(-180deg); }
.cube.show-left   { transform: translateZ(-100px) rotateY(  90deg); }
.cube.show-top    { transform: translateZ(-100px) rotateX( -90deg); }
.cube.show-bottom { transform: translateZ(-100px) rotateX(  90deg); }

.cube__face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid black;
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
}

.cube__face--front  { background: #eeff03 }
.cube__face--right  { background: #02171f }
.cube__face--back   { background: #eeff03 }
.cube__face--left   { background: #02171f }
.cube__face--top    { background: #eeff03 }
.cube__face--bottom { background: #02171f }

.cube__face--front  { transform: rotateY(  0deg) translateZ(100px); }
.cube__face--right  { transform: rotateY( 90deg) translateZ(100px); }
.cube__face--back   { transform: rotateY(180deg) translateZ(100px); }
.cube__face--left   { transform: rotateY(-90deg) translateZ(100px); }
.cube__face--top    { transform: rotateX( 90deg) translateZ(100px); }
.cube__face--bottom { transform: rotateX(-90deg) translateZ(100px); }

label { margin-right: 10px; }
</style>