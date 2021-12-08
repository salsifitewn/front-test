<template>
  <ul>
    <li v-for="(person, i) in peopleList" :key="i">
      <router-link :to="{ name: 'Character', params: { url: person.url } }">{{ person.name }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['peopleList'],
}
</script>

<style></style>
