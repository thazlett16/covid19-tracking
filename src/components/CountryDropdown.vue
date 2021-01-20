<template>
  <div class="countryDropdown mt-6">
    <v-select
      v-model="selected"
      class="countryDropdown__dropdown"
      label="Country Option"
      :items="countryOptions"
      item-text="country"
      item-value="countryCode"
      item-color="cyan darken-1"
      outlined
      dense
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import { Provider } from "@/utilities"
import { CountryOption, CountryInput } from "@/entities"

@Component({
  name: "CountryDropdown"
})
export default class CountryDropdown extends Vue {
  private countryData: Array<CountryInput> = []
  private selected = "Woldwide"
  private countryOptions: Array<CountryOption> = []

  mounted(): void {
    Provider().covid.getAll().then((response) => {
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

.countryDropdown {
  display: flex;
  align-content: center;
}

.countryDropdown__dropdown > .v-input__control > .v-input__slot fieldset {
  border-color: #ffffff;
}

.countryDropdown__dropdown .theme--dark.v-label {
  color: hsla(0, 0, 100%, 100%);
}

</style>