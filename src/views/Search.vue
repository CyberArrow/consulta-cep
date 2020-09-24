<template>
  <div>
    <Navbar />
    <Vspace :size="20" />
    <b-container>
      <Typo class="s28 w600">{{ title }}</Typo>
      <Vspace :size="8" />
      <Typo class="s14">Faça suas consultas de CEP</Typo>
      <Vspace :size="40" />
      <FormSearch />
    </b-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import FormSearch from "@/components/FormSearch";
import Vspace from "@/components/Vspace";
import Typo from "@/components/Typo";
export default  {
  name: 'Search',
  components: {Typo, Vspace, FormSearch, Navbar},
  data () {
    return {
      title: 'Buscador de CEP'
    }
  },
}
</script>

<style>

</style>