<template>
  <input :value="value" @input="$emit('input', $event.target.value)" />
</template>

<script>
export default {
  name: "Search",
  props: ["value"],
}
</script>
