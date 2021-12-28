<template>
  <section class='flex flex-col h-screen justify-center bg-[#FFD371] bg-opacity-30 p-3'>
    <div class='mx-auto w-full max-w-md rounded-sm bg-[#ECDAD0]  shadow-xl shadow-orange-300/50 justify-between relative grid grid-cols-12'>
    <div class="col-span-full pt-8">
      <h1 class="text-amber-700 text-2xl font-black text-center">
        Delivery Location Form
      </h1>
    </div>
    <div class="col-span-7 pl-8 py-8 space-y-3">
      <select  class="outline-yellow-800 py-2 w-full bg-transparent rounded-none  border-2 border-yellow-800 text-yellow-900" v-model="regionIndex" >
        <option disabled value="-1" >Select Region</option>
        <option v-for="(province,index) in orderedLocations" :key="index" :value="index">
          {{province['region_name']}}
        </option>
      </select>
      <select  :disabled="regionIndex == -1"  class="outline-yellow-800 py-2 w-full bg-transparent rounded-none  border-2 border-yellow-800 text-yellow-900" v-model="provinceIndex" dis>
          <option disabled value="-1">Select Province</option>
          <option v-for="(province,index) in selectedProvince" :key="index"  :value="index">
            {{index}}
          </option>
      </select>
      <select :disabled="provinceIndex == -1 "  class="outline-yellow-800 py-2 w-full bg-transparent rounded-none  border-2 border-yellow-800 text-yellow-900" v-model="municipalityIndex">
          <option disabled value="-1">Select Municipality</option>
          <option v-for="(municipality,index) in selectedMunicipality" :key="index"  :value="index">
            {{index}}
          </option>
      </select>
      <select :disabled="municipalityIndex == -1 "  class="outline-yellow-800 py-2 w-full bg-transparent rounded-none  border-2 border-yellow-800 text-yellow-900" v-model="barangayIndex">
          <option disabled value="-1">Select Barangay</option>
          <option v-for="(barangay,index) in selectedBarangay" :key="index"  :value="barangay">
            {{barangay}}
          </option>
      </select>
    </div>

    <div class="col-span-5 h-full p-4">
      <img class="w-full transform -scale-x-100" src="https://ouch-cdn2.icons8.com/oiF3ua0uD2nUC-qLJHYyLXDHly73O3ygTQrY3VGE-Mw/rs:fit:196:196/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzY3/LzU3MDUzNGJkLTBm/YmQtNGEwMi05NTFi/LWFmMjlkNmI0MjFk/YS5wbmc.png" >
      <p class="text-xs font-serif text-amber-900 text-center">
        By filling up the form you agree on our terms and condition.
      </p>
    </div>

    <div class="col-span-full pb-8 px-8">
      <h1 class="text-sm p-3 hover:text-white  font-bold bg-amber-800 bg-opacity-0 border border-amber-800 text-amber-800  text-center cursor-pointer hover:bg-opacity-90 active:bg-opacity-100 select-none transition-all">
        Confirm Address
      </h1>
    </div>

    </div>
  </section>
</template>

<script>
import locationsJson from '@/assets/json/ph-location.json'
export default {
  data(){
    return {
      locations : locationsJson,
      regionIndex : -1,
      provinceIndex : -1,
      municipalityIndex : -1,
      barangayIndex : -1
    }
  },
  methods: {

  },
  computed : {
    orderedLocations(){
        var ordered = [];
        const unordered = this.locations;
        var keys = Object.keys(unordered);
        keys.sort();
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i];
          ordered[i] = unordered[k];
        }
        return ordered;
    },
    selectedProvince(){
      if(this.regionIndex != -1){
        return this.orderedLocations[this.regionIndex]['province_list'];
      }
      return {};
    },
    selectedMunicipality(){
      if(this.regionIndex != -1 && this.provinceIndex != -1)
          return this.orderedLocations[this.regionIndex]['province_list'][this.provinceIndex]['municipality_list'];
      return {};
    },
    selectedBarangay(){
      if(this.regionIndex != -1 && this.provinceIndex != -1 && this.municipalityIndex != -1)
          return this.orderedLocations[this.regionIndex]['province_list'][this.provinceIndex]['municipality_list'][this.municipalityIndex]['barangay_list'];
      return {};
    }

  },
  watch : {
    regionIndex(){
      this.provinceIndex = -1;
      this.municipalityIndex = -1;
      this.barangayIndex = -1;
    },
    provinceIndex(){
      this.municipalityIndex = -1;
      this.barangayIndex = -1;
    },
    municipalityIndex(){
      this.barangayIndex = -1;
    },
    
  }
}

</script>

<style>

</style>