<template>
  <div id="app">
    <label>
      Input:
      <input v-model="text">
    </label>
    <p> Reverse: {{ reversed }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      text: ''
    }
  },
  computed: {
    reversed () {
      if (this.text !== '') {
        return this.text.split('').reverse().join('');
      }
      else {
        return '';
      }
    }
  }
}
</script>

<style>

</style>
