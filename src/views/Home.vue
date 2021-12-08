<template>
  <div class="home">
    <Search v-model="searchedName" />
    <People :peopleList="peopleList" />
  </div>
</template>

<script>
// @ is an alias to /src
import People from '@/components/People.vue'
import Search from '@/components/Search.vue'
import swapi from '@/api/swapi'

export default {
  name: 'Home',
  components: { People, Search },
  data() {
    return {
      searchedName: '',
      peopleList: [],
    }
  },
  async created() {
    this.peopleList = await swapi.searchPeople('')
  },
  watch: {
    async searchedName(val) {
      this.peopleList = await swapi.searchPeople(val)
    },
  },
}
</script>
