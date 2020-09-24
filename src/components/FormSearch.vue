<template>
  <div>
    <b-card class="center">
      <form @submit.prevent="onSubmit">
        <div :class="{'has-error': error}">
          <b-input-group>
            <b-form-input type="tel" placeholder="CEP" v-model="cep" v-mask="'#####-###'" masked="true"></b-form-input>
            <b-input-group-append>
              <b-button type="submit" variant="outline-secondary">Buscar</b-button>
            </b-input-group-append>
          </b-input-group>
          <div v-if="error">
            <Vspace :size="40" />
            <b-alert show dismissible fade variant="danger">{{ error }}</b-alert>
          </div>
        </div>
      </form>
      <Vspace :size="15" />
      <div v-if="preloader">
        <img src="../assets/img/preloader.gif" alt="Carregando">
      </div>
      <b-card-group deck v-if="address.cep">
        <b-card border-variant="primary" header="Resultado da pesquisa" header-bg-variant="primary" header-text-variant="white" align="center">
          <b-list-group class="list__group__custom">
            <b-list-group-item v-for="(add, index) in address" :key="index">
              <Typo class="s16 w600 list__group__custom--title">{{ index }}:</Typo> <Typo class="s14 text-gray">{{ add }}</Typo>
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-card-group>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
import Typo from "@/components/Typo";
import Vspace from "@/components/Vspace";

export default {
  components: {Typo, Vspace},
  data () {
    return {
      title: 'Buscador de CEP',
      cep: '',
      address: {},
      preloader: false,
      error: ''
    }
  },
  methods: {
    onSubmit() {
      this.reset()
      this.preloader = true
      axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
          .then(response => {
            if (response.data.erro) {
              this.error = 'Ops, CEP inválido. Por favor, verifique o dado informado.'
            } else {
              this.address = response.data
            }
            this.cep=''
          })
          .catch(error => {
            console.log(error)
            this.error = 'O campo de CEP deve ser preenchido'
          })
          .finally(() => this.preloader = false)
    },
    reset() {
      this.error = '',
          this.address = {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.has-error {
  color: map-get($pallete, red-light);
}
.has-error input {
  border:1px solid map-get($pallete, red-light);
}
.has-error button {
  border:1px solid map-get($pallete, red-light);
  background-color: map-get($pallete, red-light);
}

.btn-outline-secondary {
  background-color: #d7dbdd;
  color:map-get($pallete, black);
  border-color: #d7dbdd;
  &:hover{
    opacity: 0.6;
   }
}

.list{
  &__{
    &group{
      &__{
        &custom{
          text-align: left;
          &--{
            &title{
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }
}
</style>