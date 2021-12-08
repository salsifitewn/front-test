<template>
  <div class="home">
    <People :peopleList="peopleList" />
  </div>
</template>

<script>
// @ is an alias to /src
import People from "@/components/People.vue"
import swapi from "@/api/swapi.js"

export default {
  name: "Home",
  components: { People },
  data() {
    return {
      peopleList: [],
    }
  },
  async created() {
    this.peopleList = await swapi.searchPeople("")
  },
}
</script>
