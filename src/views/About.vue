<template>
  <div>
    <Navbar />
    <b-container>
      <Vspace :size="40" />
     <Typo class="s14 w600">Projeto desenvolvido para consultar CEPs a partir da api ViaCEP (viacep.com.br).</Typo>
    </b-container>
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import Typo from "@/components/Typo";
  import Vspace from "@/components/Vspace";
  export default  {
    components: {Vspace, Typo, Navbar}
  }
</script>

<style>

</style>