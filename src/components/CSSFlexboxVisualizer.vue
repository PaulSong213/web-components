<template>
  <section class='flex flex-col h-screen justify-center bg-slate-500 bg-gradient-to-b from-slate-500 via-slate-600 to-slate-500 px-2'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-amber-300  h-64 shadow-xl  relative grid grid-cols-12 overflow-hidden gap-5'>
      <div class="pt-4 space-y-5 col-span-5 px-4">
        <h6 class="font-semibold text-xl text-center leading-5">CSS Display <br/> Visualizer</h6>
        <section class="flex flex-col overflow-auto space-y-3 small-scroll h-40 pl-2">
          <div v-for="(property,index) in properties" :key="index" class="space-y-2 opacity-70 hover:opacity-100 transition-all">
            <h6 class="text-sm font-bold text-slate-800">{{property.name}}</h6>
            <div class="pl-4 space-y-1">
              <div v-for="(option,optionIndex) in property.options" :key="optionIndex" class="block">
                <div class="flex w-max" @click="combinations[index] = optionIndex " >
                  <input v-if="optionIndex !== 0" :name="property.name" class="accent-slate-900 my-auto" type="radio" :id="property.name + optionIndex" />
                  <input v-else :name="property.name" checked class="accent-slate-900 my-auto" type="radio" :id="property.name + optionIndex" />
                  <label class="text-xs my-auto pl-1" :for="property.name + optionIndex">{{option.name}}</label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="h-full flex flex-col justify-center my-auto relative">
        <div class="m-auto h-44 w-60 bg-red-900/20 p-2 relative transition-all duration-1000" >
          <div v-for="(block,index) in blocks " :key="index" class="h-6 w-8 transform transition-all duration-1000 absolute" :class="[block.color]"  :style="{left : block.left + 'px' , top: block.top + 'px'}" >
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
      selectedIndex : 0,
      combinations : [0,0,0,0],
      properties : [
        {
          name : 'display:',
          options : [
            {
              name : 'flex',
              class : 'flex'
            }
          ]
        },
        {
          name : 'gap:',
          options : [
            {
              name : '0',
              class : ''
            },
            {
              name : '4px',
              class : 'gap-1'
            },
          ]
        },
        {
          name : 'flex-direction:',
          options : [
            {
              name : 'row',
              class : 'flex-row'
            },
            {
              name : 'row-reverse',
              class : 'flex-row-reverse'
            },
            {
              name : 'column',
              class : 'flex-column'
            },
            {
              name : 'column-reverse',
              class : 'flex-column-reverse'
            },
            
          ]
        },
        {
          name : 'justify-content:',
          options : [
            {
              name : 'flex-start',
              class : 'justify-start'
            },
            {
              name : 'flex-end',
              class : 'justify-end'
            },
            {
              name : 'space-between',
              class : 'justify-between'
            },
            {
              name : 'space-around',
              class : 'justify-around'
            },
            {
              name : 'center',
              class : 'justify-center'
            },
          ]
        },
      ],
      blocks : [
        {
          top :  5,
          left : 5,
          color : 'bg-red-900'
        },
        {
          top :  5,
          left : 37,
          color : 'bg-red-800'
        },
        {
          top : 5,
          left : 69,
          color : 'bg-red-700'
        },
        {
          top :  5,
          left : 101,
          color : 'bg-red-600'
        },
        {
          top : 5,
          left : 133,
          color : 'bg-red-500'
        },
      ]
    }
  },
  computed : {
    combinationString(){
      return this.combinations.join("");
    }
  },
  watch : {
    combinationString(combination){
      let colorShade = 900;
      let blocks  = [
            {top :  5, left : 5   , },
            {top :  5, left : 37   ,},
            {top :  5, left : 69   ,},
            {top :  5, left : 101   ,},
            {top :  5, left : 133   , },
          ]
      let gap  = 5;
      

      switch (combination) {
        case "0100":
          for (let i = 0; i < blocks.length; i++) {
            blocks[i].left += gap;
            gap += 5;
          }
          gap = 5;
          break;
        case "0010":
          gap = 0;
          blocks = blocks.reverse();
          break;
        case "0110":
          gap = 0;
          blocks = blocks.reverse();
          for (let i = (blocks.length - 1); i >= 0 ; i--) {
            blocks[i].left += gap ;
            gap += 5;
          }
          gap = 5;
          break;
        case "0020":
          gap = 0;
          for (let i = 0; i < blocks.length; i++) {
            let top = blocks[i].top;
            let left = blocks[i].left - gap;
            blocks[i].top = left;
            blocks[i].left = top;
            gap += 8;
          }
          break;
        case "0120":
          gap = 0;
          for (let i = 0; i < blocks.length; i++) {
            let top = blocks[i].top;
            let left = blocks[i].left - gap;
            blocks[i].top = left;
            blocks[i].left = top;
            gap += 3;
          }
          break;
          case "0130":
            gap = 0;
            for (let i = 0; i < blocks.length; i++) {
              let top = blocks[i].top;
              let left = blocks[i].left - gap;
              blocks[i].top = left;
              blocks[i].left = top;
              gap += 3;
            }
            blocks = blocks.reverse();
            break;
          case "0030":
            gap = 0;
            for (let i = 0; i < blocks.length; i++) {
              let top = blocks[i].top;
              let left = blocks[i].left - gap;
              blocks[i].top = left;
              blocks[i].left = top;
              gap += 8;
            }
            blocks = blocks.reverse();
          break;
          case "0001":
            gap = 70;
            for (let i = (blocks.length - 1); i >= 0 ; i--) {
              blocks[i].left += gap;
            }
            break;
          case "0101":
            gap = 70;
            for (let i = (blocks.length - 1); i >= 0 ; i--) {
              blocks[i].left += gap;
              gap -= 4;
            }
            break;
          case "0111":
            blocks = blocks.reverse();
            gap = 70;
            for (let i = 0; i < blocks.length ; i++) {
              blocks[i].left += gap;
              gap -= 4;
            }
            break;
          case "0021":
            gap = 50;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].top = gap;
              blocks[i].left = 5;
              gap += 24;
            }
            break;
          case "0121":
            gap = 40;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].top = gap;
              blocks[i].left = 5;
              gap += 28;
            }
            break;
          case "0031":
            gap = 50;
            for (let i = (blocks.length - 1); i >= 0 ; i--) {
              blocks[i].top = gap;
              blocks[i].left = 5;
              gap += 24;
            }
            break;
          case "0131":
            gap = 38;
            for (let i = (blocks.length - 1); i >= 0 ; i--) {
              blocks[i].top = gap;
              blocks[i].left = 5;
              gap += 27;
            }
            break;
          case "0002":
            gap = 5;
            for (let i = 0; i < blocks.length ; i++) {
              blocks[i].top = 5;
              blocks[i].left = gap;
              gap += 49;
            }
            break;
          case "0012":
            gap = 5;
            for (let i = 0; i < blocks.length ; i++) {
              blocks[i].top = 5;
              blocks[i].left = gap;
              gap += 49;
            }
            blocks = blocks.reverse();
            break;
          case "0102":
            gap = 5;
            for (let i = 0; i < blocks.length ; i++) {
              blocks[i].top = 5;
              blocks[i].left = gap;
              gap += 49;
            }
            break;
          case "0112":
            gap = 5;
            for (let i = 0; i < blocks.length ; i++) {
              blocks[i].top = 5;
              blocks[i].left = gap;
              gap += 49;
            }
            blocks = blocks.reverse();
            break;
          case "0022":
            gap = 5;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].top = gap;
              blocks[i].left = 5;
              gap += 35;
            }
          break;
          case "0122":
            gap = 5;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].top = gap;
              blocks[i].left = 5;
              gap += 35;
            }
          break;
          case "0032":
            gap = 5;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].top = gap;
              blocks[i].left = 5;
              gap += 35;
            }
            blocks = blocks.reverse();
          break;
          case "0132":
            gap = 5;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].top = gap;
              blocks[i].left = 5;
              gap += 35;
            }
            blocks = blocks.reverse();
          break;
          case "0003":
          gap = 15;
          for (let i = 0; i < blocks.length; i++) {
            blocks[i].left += gap;
            gap += 10;
          }
          gap = 5;
          break;
          case "0103":
          gap = 15;
          for (let i = 0; i < blocks.length; i++) {
            blocks[i].left += gap;
            gap += 10;
          }
          gap = 5;
          break;
          case "0113":
          gap = 15;
          for (let i = 0; i < blocks.length; i++) {
            blocks[i].left += gap;
            gap += 10;
          }
          blocks = blocks.reverse();
          gap = 5;
          break;
          case "0013":
          gap = 15;
          for (let i = 0; i < blocks.length; i++) {
            blocks[i].left += gap;
            gap += 10;
          }
          blocks = blocks.reverse();
          gap = 5;
          break;
          case "0004":
            gap = 40;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].left += gap;
              blocks[i].top = 5;
            }
            gap = 5;
          break;
          case "0104":
            gap = 28;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].left += gap;
              blocks[i].top = 5;
              gap += 5;
            }
            gap = 5;
          break;
          case "0014":
            gap = 40;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].left += gap;
              blocks[i].top = 5;
            }
            blocks = blocks.reverse();
            gap = 5;
          break;
          case "0114":
            gap = 28;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].left += gap;
              blocks[i].top = 5;
              gap += 5;
            }
            blocks = blocks.reverse();
            gap = 5;
          break;
          case "0024":
            gap = 28;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].left = 5;
              blocks[i].top = gap;
              gap += 24;
            }
            gap = 5;
          break;
          case "0034":
            gap = 28;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].left = 5;
              blocks[i].top = gap;
              gap += 24;
            }
            blocks = blocks.reverse();
            gap = 5;
          break;
          case "0124":
            gap = 24;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].left = 5;
              blocks[i].top = gap;
              gap += 28;
            }
            gap = 5;
          break;
          case "0134":
            gap = 24;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].left = 5;
              blocks[i].top = gap;
              gap += 28;
            }
            gap = 5;
            blocks = blocks.reverse();
          break;
          case "0023":
            gap = 15;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].left = 5;
              blocks[i].top = gap;
              gap += 32;
            }
            gap = 5;
          break;
          case "0123":
            gap = 15;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].left = 5;
              blocks[i].top = gap;
              gap += 32;
            }
            gap = 5;
          break;
          case "0133":
            gap = 15;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].left = 5;
              blocks[i].top = gap;
              gap += 32;
            }
            blocks = blocks.reverse();
            gap = 5;
          break;
          case "0033":
            gap = 15;
            for (let i = 0; i < blocks.length; i++) {
              blocks[i].left = 5;
              blocks[i].top = gap;
              gap += 32;
            }
            blocks = blocks.reverse();
            gap = 5;
          break;
          default:
          blocks = [
            {top :  5, left : 5   , },
            {top :  5, left : 37   ,},
            {top :  5, left : 69   ,},
            {top :  5, left : 101   ,},
            {top :  5, left : 133   , },
          ]
          break
      }

      for (let i = 0; i < blocks.length; i++) {
        blocks[i].color = 'bg-red-' + colorShade ;
        colorShade-= 100;
      }
      this.blocks = blocks;
    }
  }
}

</script>

<style>
.small-scroll::-webkit-scrollbar {
  width: 4px;
  height: 4x;
  border-radius: 100%;
}

/* Track */
.small-scroll::-webkit-scrollbar-track {
  background: rgba(252, 252, 252, 0.3);

}

/* Handle */
.small-scroll::-webkit-scrollbar-thumb {
  background: rgb(255, 255, 255);
}

/* Handle on hover */
.small-scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(172, 172, 172);
}
</style>