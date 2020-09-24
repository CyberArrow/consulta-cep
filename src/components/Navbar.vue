<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <img src="../assets/img/logo-sccon.png"  style="width: 75%"/>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/" style="color: #fff;">Pesquisar CEP</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/about" style="color: #fff;">Sobre</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default  {
  name: 'Navbar',
}
</script>

<style>
.bg-info {
  background-color: #670000 !important;
}
</style>