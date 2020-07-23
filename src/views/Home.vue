<template>
  <div class="home">
    <v-container>
      <HelloWorld />
    </v-container>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator"
import HelloWorld from "@/components/HelloWorld.vue"

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue{
  
}
</script>

<style lang="scss">

</style>