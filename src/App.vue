<template>
  <v-app id="inspire">
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
      color="red"
      dark
    >
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="navDrawer = !navDrawer" />
        <v-toolbar-title>Covid-19 Data Tracker</v-toolbar-title>
      </div>

      <v-spacer />

      <div class="app__selector d-flex align-content-center my-auto">
        <v-select
          v-model="selected"
          :items="countryOptions"
          item-text="country"
          item-value="countryCode"
          item-color="red"
          outlined
        />
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { CovidDataService } from "@/utilities"
import { CountryInput, CountryOption } from "@/entities/countryInput"

@Component({})
export default class App extends Vue{
  private countryData: Array<CountryInput> = []
  private countryOptions: Array<CountryOption> = []
  private selected = "Woldwide"
  private navDrawer = false
  private ourRoutes = [
    { icon: "view_module", title: "Home", to: "/"},
    { icon: "mdi-help-box", title: "About", to: "/about"}
  ]
  private selectedPage = 0

  mounted(): void {
    CovidDataService.fetchCountries().then((response) => {
      this.countryData = response.data
    }).finally(() => {
      if (this.countryData.length >= 1) {
        this.countryOptions.push({
          country: "Worldwide",
          countryCode: "Woldwide"
        })
        this.countryData.forEach((countryInputData: CountryInput) => {
          this.countryOptions.push({
            country: countryInputData.country,
            countryCode: countryInputData.countryInfo.iso3
          })
        })
      }
    })
  }
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
}

.app__selector {
  min-width: 350px;
}

</style>