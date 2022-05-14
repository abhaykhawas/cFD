<template>
  <h2>hey</h2>
</template>

<script>
export default {
  name: 'HomeComponent',
  // props: {
  //   msg: String
  // }

}
import HomeService from '../HomeService.js';
setInterval(() => {
  (async () => {
  console.log(await HomeService())
})()
}, 20000);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
