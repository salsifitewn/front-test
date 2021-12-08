<template>
  <ul>
    <li v-for="(person, i) in peopleList" :key="i">
      <a :href="`/character/${person.url}`">{{ person.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["peopleList"],
}
</script>

<style></style>
