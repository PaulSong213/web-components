<template>
  <section class="h-screen flex flex-col justify-center p-4 bg-amber-200 bg-gradient-to-br1 from-[#654210] to-[#fac697]">

    <div class="h-72 w-full max-w-md mx-auto shadow-md bg-white rounded-md grid grid-cols-2 p-4 gap-5">

      <div class="flex flex-col justify-center space-y-10">
        <h1 class="text-amber-700 font-serif text-center uppercase font-black text-lg">
          1000 Most common English Words
        </h1>

        <div  class="relative my-6 w-28">
          <input @keyup.enter="$refs.search.click()" v-model="query"  id="email" name="email" type="text" class="peer h-8 w-full border-b-2 border-amber-500 text-amber-900 placeholder-transparent focus:outline-none focus:border-gray-700 bg-transparent" placeholder="john@doe.com" autocomplete="off" maxlength="20" />

          <label for="email" class="absolute left-0 -top-3.5 text-amber-600 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-amber-600 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-800 peer-focus:text-xs">
            Search Word
          </label>
          
          <small v-if="isNoSearchResult" class="text-rose-700">No possible word</small>

          <div class="mt-3 w-full">
            <a ref="search" :href="searchAnchor" class="p-2 text-xs text-center w-full block bg-amber-300">
            Search
            </a>
          </div>

      </div>

      </div>

      <div class="overflow-auto p-4 small-scroll space-y-5 scroll-smooth">
        <p v-for="(word,index) in words" :key="index" class="text-left pl-2 sm:text-right text-3xl font-semibold text-slate-600 break-all" :id="index + 1" >
          <span class="text-xs text-amber-900 opacity-50 font-black">{{index + 1}}.)</span> {{word}}
        </p>

      </div>


    </div>

  </section>
</template>

<script>
export default {
  data(){
    return {
      isNoSearchResult : false,
      query : "",
      searchAnchor : "/most-common-words#1",
      words : ["the" ,"of" ,"to" ,"and" ,"a" ,"in" ,"is" ,"it" ,"you" ,"that" ,"he" ,"was" ,"for" ,"on" ,"are" ,"with" ,"as" ,"I" ,"his" ,"they" ,"be" ,"at" ,"one" ,"have" ,"this" ,"from" ,"or" ,"had" ,"by" ,"not" ,"word" ,"but" ,"what" ,"some" ,"we" ,"can" ,"out" ,"other" ,"were" ,"all" ,"there" ,"when" ,"up" ,"use" ,"your" ,"how" ,"said" ,"an" ,"each" ,"she" ,"which" ,"do" ,"their" ,"time" ,"if" ,"will" ,"way" ,"about" ,"many" ,"then" ,"them" ,"write" ,"would" ,"like" ,"so" ,"these" ,"her" ,"long" ,"make" ,"thing" ,"see" ,"him" ,"two" ,"has" ,"look" ,"more" ,"day" ,"could" ,"go" ,"come" ,"did" ,"number" ,"sound" ,"no" ,"most" ,"people" ,"my" ,"over" ,"know" ,"water" ,"than" ,"call" ,"first" ,"who" ,"may" ,"down" ,"side" ,"been" ,"now" ,"find" ,"any" ,"new" ,"work" ,"part" ,"take" ,"get" ,"place" ,"made" ,"live" ,"where" ,"after" ,"back" ,"little" ,"only" ,"round" ,"man" ,"year" ,"came" ,"show" ,"every" ,"good" ,"me" ,"give" ,"our" ,"under" ,"name" ,"very" ,"through" ,"just" ,"form" ,"sentence" ,"great" ,"think" ,"say" ,"help" ,"low" ,"line" ,"differ" ,"turn" ,"cause" ,"much" ,"mean" ,"before" ,"move" ,"right" ,"boy" ,"old" ,"too" ,"same" ,"tell" ,"does" ,"set" ,"three" ,"want" ,"air" ,"well" ,"also" ,"play" ,"small" ,"end" ,"put" ,"home" ,"read" ,"hand" ,"port" ,"large" ,"spell" ,"add" ,"even" ,"land" ,"here" ,"must" ,"big" ,"high" ,"such" ,"follow" ,"act" ,"why" ,"ask" ,"men" ,"change" ,"went" ,"light" ,"kind" ,"off" ,"need" ,"house" ,"picture" ,"try" ,"us" ,"again" ,"animal" ,"point" ,"mother" ,"world" ,"near" ,"build" ,"self" ,"earth" ,"father" ,"head" ,"stand" ,"own" ,"page" ,"should" ,"country" ,"found" ,"answer" ,"school" ,"grow" ,"study" ,"still" ,"learn" ,"plant" ,"cover" ,"food" ,"sun" ,"four" ,"between" ,"state" ,"keep" ,"eye" ,"never" ,"last" ,"let" ,"thought" ,"city" ,"tree" ,"cross" ,"farm" ,"hard" ,"start" ,"might" ,"story" ,"saw" ,"far" ,"sea" ,"draw" ,"left" ,"late" ,"run" ,"don't" ,"while" ,"press" ,"close" ,"night" ,"real" ,"life" ,"few" ,"north" ,"open" ,"seem" ,"together" ,"next" ,"white" ,"children" ,"begin" ,"got" ,"walk" ,"example" ,"ease" ,"paper" ,"group" ,"always" ,"music" ,"those" ,"both" ,"mark" ,"often" ,"letter" ,"until" ,"mile" ,"river" ,"car" ,"feet" ,"care" ,"second" ,"book" ,"carry" ,"took" ,"science" ,"eat" ,"room" ,"friend" ,"began" ,"idea" ,"fish" ,"mountain" ,"stop" ,"once" ,"base" ,"hear" ,"horse" ,"cut" ,"sure" ,"watch" ,"color" ,"face" ,"wood" ,"main" ,"enough" ,"plain" ,"girl" ,"usual" ,"young" ,"ready" ,"above" ,"ever" ,"red" ,"list" ,"though" ,"feel" ,"talk" ,"bird" ,"soon" ,"body" ,"dog" ,"family" ,"direct" ,"pose" ,"leave" ,"song" ,"measure" ,"door" ,"product" ,"black" ,"short" ,"numeral" ,"class" ,"wind" ,"question" ,"happen" ,"complete" ,"ship" ,"area" ,"half" ,"rock" ,"order" ,"fire" ,"south" ,"problem" ,"piece" ,"told" ,"knew" ,"pass" ,"since" ,"top" ,"whole" ,"king" ,"space" ,"heard" ,"best" ,"hour" ,"better" ,"true" ,"during" ,"hundred" ,"five" ,"remember" ,"step" ,"early" ,"hold" ,"west" ,"ground" ,"interest" ,"reach" ,"fast" ,"verb" ,"sing" ,"listen" ,"six" ,"table" ,"travel" ,"less" ,"morning" ,"ten" ,"simple" ,"several" ,"vowel" ,"toward" ,"war" ,"lay" ,"against" ,"pattern" ,"slow" ,"center" ,"love" ,"person" ,"money" ,"serve" ,"appear" ,"road" ,"map" ,"rain" ,"rule" ,"govern" ,"pull" ,"cold" ,"notice" ,"voice" ,"unit" ,"power" ,"town" ,"fine" ,"certain" ,"fly" ,"fall" ,"lead" ,"cry" ,"dark" ,"machine" ,"note" ,"wait" ,"plan" ,"figure" ,"star" ,"box" ,"noun" ,"field" ,"rest" ,"correct" ,"able" ,"pound" ,"done" ,"beauty" ,"drive" ,"stood" ,"contain" ,"front" ,"teach" ,"week" ,"final" ,"gave" ,"green" ,"oh" ,"quick" ,"develop" ,"ocean" ,"warm" ,"free" ,"minute" ,"strong" ,"special" ,"mind" ,"behind" ,"clear" ,"tail" ,"produce" ,"fact" ,"street" ,"inch" ,"multiply" ,"nothing" ,"course" ,"stay" ,"wheel" ,"full" ,"force" ,"blue" ,"object" ,"decide" ,"surface" ,"deep" ,"moon" ,"island" ,"foot" ,"system" ,"busy" ,"test" ,"record" ,"boat" ,"common" ,"gold" ,"possible" ,"plane" ,"stead" ,"dry" ,"wonder" ,"laugh" ,"thousand" ,"ago" ,"ran" ,"check" ,"game" ,"shape" ,"equate" ,"hot" ,"miss" ,"brought" ,"heat" ,"snow" ,"tire" ,"bring" ,"yes" ,"distant" ,"fill" ,"east" ,"paint" ,"language" ,"among" ,"grand" ,"ball" ,"yet" ,"wave" ,"drop" ,"heart" ,"am" ,"present" ,"heavy" ,"dance" ,"engine" ,"position" ,"arm" ,"wide" ,"sail" ,"material" ,"size" ,"vary" ,"settle" ,"speak" ,"weight" ,"general" ,"ice" ,"matter" ,"circle" ,"pair" ,"include" ,"divide" ,"syllable" ,"felt" ,"perhaps" ,"pick" ,"sudden" ,"count" ,"square" ,"reason" ,"length" ,"represent" ,"art" ,"subject" ,"region" ,"energy" ,"hunt" ,"probable" ,"bed" ,"brother" ,"egg" ,"ride" ,"cell" ,"believe" ,"fraction" ,"forest" ,"sit" ,"race" ,"window" ,"store" ,"summer" ,"train" ,"sleep" ,"prove" ,"lone" ,"leg" ,"exercise" ,"wall" ,"catch" ,"mount" ,"wish" ,"sky" ,"board" ,"joy" ,"winter" ,"sat" ,"written" ,"wild" ,"instrument" ,"kept" ,"glass" ,"grass" ,"cow" ,"job" ,"edge" ,"sign" ,"visit" ,"past" ,"soft" ,"fun" ,"bright" ,"gas" ,"weather" ,"month" ,"million" ,"bear" ,"finish" ,"happy" ,"hope" ,"flower" ,"clothe" ,"strange" ,"gone" ,"jump" ,"baby" ,"eight" ,"village" ,"meet" ,"root" ,"buy" ,"raise" ,"solve" ,"metal" ,"whether" ,"push" ,"seven" ,"paragraph" ,"third" ,"shall" ,"held" ,"hair" ,"describe" ,"cook" ,"floor" ,"either" ,"result" ,"burn" ,"hill" ,"safe" ,"cat" ,"century" ,"consider" ,"type" ,"law" ,"bit" ,"coast" ,"copy" ,"phrase" ,"silent" ,"tall" ,"sand" ,"soil" ,"roll" ,"temperature" ,"finger" ,"industry" ,"value" ,"fight" ,"lie" ,"beat" ,"excite" ,"natural" ,"view" ,"sense" ,"ear" ,"else" ,"quite" ,"broke" ,"case" ,"middle" ,"kill" ,"son" ,"lake" ,"moment" ,"scale" ,"loud" ,"spring" ,"observe" ,"child" ,"straight" ,"consonant" ,"nation" ,"dictionary" ,"milk" ,"speed" ,"method" ,"organ" ,"pay" ,"age" ,"section" ,"dress" ,"cloud" ,"surprise" ,"quiet" ,"stone" ,"tiny" ,"climb" ,"cool" ,"design" ,"poor" ,"lot" ,"experiment" ,"bottom" ,"key" ,"iron" ,"single" ,"stick" ,"flat" ,"twenty" ,"skin" ,"smile" ,"crease" ,"hole" ,"trade" ,"melody" ,"trip" ,"office" ,"receive" ,"row" ,"mouth" ,"exact" ,"symbol" ,"die" ,"least" ,"trouble" ,"shout" ,"except" ,"wrote" ,"seed" ,"tone" ,"join" ,"suggest" ,"clean" ,"break" ,"lady" ,"yard" ,"rise" ,"bad" ,"blow" ,"oil" ,"blood" ,"touch" ,"grew" ,"cent" ,"mix" ,"team" ,"wire" ,"cost" ,"lost" ,"brown" ,"wear" ,"garden" ,"equal" ,"sent" ,"choose" ,"fell" ,"fit" ,"flow" ,"fair" ,"bank" ,"collect" ,"save" ,"control" ,"decimal" ,"gentle" ,"woman" ,"captain" ,"practice" ,"separate" ,"difficult" ,"doctor" ,"please" ,"protect" ,"noon" ,"whose" ,"locate" ,"ring" ,"character" ,"insect" ,"caught" ,"period" ,"indicate" ,"radio" ,"spoke" ,"atom" ,"human" ,"history" ,"effect" ,"electric" ,"expect" ,"crop" ,"modern" ,"element" ,"hit" ,"student" ,"corner" ,"party" ,"supply" ,"bone" ,"rail" ,"imagine" ,"provide" ,"agree" ,"thus" ,"capital" ,"won't" ,"chair" ,"danger" ,"fruit" ,"rich" ,"thick" ,"soldier" ,"process" ,"operate" ,"guess" ,"necessary" ,"sharp" ,"wing" ,"create" ,"neighbor" ,"wash" ,"bat" ,"rather" ,"crowd" ,"corn" ,"compare" ,"poem" ,"string" ,"bell" ,"depend" ,"meat" ,"rub" ,"tube" ,"famous" ,"dollar" ,"stream" ,"fear" ,"sight" ,"thin" ,"triangle" ,"planet" ,"hurry" ,"chief" ,"colony" ,"clock" ,"mine" ,"tie" ,"enter" ,"major" ,"fresh" ,"search" ,"send" ,"yellow" ,"gun" ,"allow" ,"print" ,"dead" ,"spot" ,"desert" ,"suit" ,"current" ,"lift" ,"rose" ,"continue" ,"block" ,"chart" ,"hat" ,"sell" ,"success" ,"company" ,"subtract" ,"event" ,"particular" ,"deal" ,"swim" ,"term" ,"opposite" ,"wife" ,"shoe" ,"shoulder" ,"spread" ,"arrange" ,"camp" ,"invent" ,"cotton" ,"born" ,"determine" ,"quart" ,"nine" ,"truck" ,"noise" ,"level" ,"chance" ,"gather" ,"shop" ,"stretch" ,"throw" ,"shine" ,"property" ,"column" ,"molecule" ,"select" ,"wrong" ,"gray" ,"repeat" ,"require" ,"broad" ,"prepare" ,"salt" ,"nose" ,"plural" ,"anger" ,"claim" ,"continent" ,"oxygen" ,"sugar" ,"death" ,"pretty" ,"skill" ,"women" ,"season" ,"solution" ,"magnet" ,"silver" ,"thank" ,"branch" ,"match" ,"suffix" ,"especially" ,"fig" ,"afraid" ,"huge" ,"sister" ,"steel" ,"discuss" ,"forward" ,"similar" ,"guide" ,"experience" ,"score" ,"apple" ,"bought" ,"led" ,"pitch" ,"coat" ,"mass" ,"card" ,"band" ,"rope" ,"slip" ,"win" ,"dream" ,"evening" ,"condition" ,"feed" ,"tool" ,"total" ,"basic" ,"smell" ,"valley" ,"nor" ,"double" ,"seat" ,"arrive" ,"master" ,"track" ,"parent" ,"shore" ,"division" ,"sheet" ,"substance" ,"favor" ,"connect" ,"post" ,"spend" ,"chord" ,"fat" ,"glad" ,"original" ,"share" ,"station" ,"dad" ,"bread" ,"charge" ,"proper" ,"bar" ,"offer" ,"segment" ,"slave" ,"duck" ,"instant" ,"market" ,"degree" ,"populate" ,"chick" ,"dear" ,"enemy" ,"reply" ,"drink" ,"occur" ,"support" ,"speech" ,"nature" ,"range" ,"steam" ,"motion" ,"path" ,"liquid" ,"log" ,"meant" ,"quotient" ,"teeth" ,"shell" ,"neck"
    ]
    }
  },
  watch : {
    query(query){
      this.isNoSearchResult = false;
      var currentPath =  '/most-common-words';
      if(!query)return currentPath + '#1';
      var searched = this.words.filter((item)=>{
        return query.toLowerCase().split(' ').every(v => item.toLowerCase().includes(v))
      });
      if(searched.length <= 0)return this.isNoSearchResult = true;
      this.searchAnchor = currentPath + '#' + (this.words.indexOf(searched[0]) + 1);
    }
  }
}
</script>

<style>

.small-scroll::-webkit-scrollbar {
  width: 6px;
  height: 6x;
  border-radius: 40px;
}

/* Track */
.small-scroll::-webkit-scrollbar-track {
  background: rgba(255, 209, 4, 0.3);

}

/* Handle */
.small-scroll::-webkit-scrollbar-thumb {
  background: rgb(172, 141, 4,1);
}

/* Handle on hover */
.small-scroll::-webkit-scrollbar-thumb:hover {
  background: rgb(172, 141, 4,1);

}

</style>