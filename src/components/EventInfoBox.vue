<template>
  <div class="infoBox">
    <v-card
      class="mx-auto"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="headline"
          >
            {{title}}
          </v-list-item-title>
          <v-list-item-subtitle>
            
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({})
export default class App extends Vue {
  private title = "HIyadsfafd"
}
</script>

<style lang="scss">

</style>