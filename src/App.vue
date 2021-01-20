<template>
  <v-app 
    id="inspire"
    class="dark"
  >
    <v-navigation-drawer
      v-model="navDrawer"
      app
      clipped
      dark
    >
      <v-subheader>
        Pages
      </v-subheader>
      <v-list>
        <v-list-item-group
          v-model="selectedPage"
        >
          <v-list-item
            v-for="(routeItem, index) in ourRoutes"
            :key="index"
            :to="routeItem.to"
          >
            <v-list-item-icon>
              <v-icon v-text="routeItem.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="routeItem.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      clipped-left
      color="cyan lighten-2"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="navDrawer = !navDrawer" />
        <v-toolbar-title>Covid-19 Data Tracker</v-toolbar-title>
      </div>
      <v-spacer />
      <CountryDropdown />
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import CountryDropdown from "./components/CountryDropdown.vue"

@Component({
  components: {
    CountryDropdown
  }
})
export default class App extends Vue{
  private navDrawer = false
  private ourRoutes = [
    { icon: "view_module", title: "Home", to: "/"},
    { icon: "mdi-help-box", title: "About", to: "/about"}
  ]
  private selectedPage = 0

}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
}

</style>