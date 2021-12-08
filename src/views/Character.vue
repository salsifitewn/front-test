<template>
  <div>{{ niceDescription(person) }}</div>
</template>

<script>
import swapi from '@/api/swapi'

export default {
  name: 'Character',
  props: ['url'],
  data() {
    return {
      person: null,
    }
  },
  async created() {
    const { name: nom, mass: poids, eye_color: couleur_des_yeux } = await swapi.get(this.url)
    this.person = {
      nom,
      poids,
      couleur_des_yeux,
    }
  },
  methods: {
    niceDescription(person) {
      return Object.entries(person)
        .map(([key, value]) => `${key.charAt(0).toUpperCase()}${key.slice(1).replaceAll('_', ' ')} : ${value}`)
        .join(' , ')
    },
  },
}
</script>
