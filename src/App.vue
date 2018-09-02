<template>
  <div class="app">
    <div class="nav">
      <router-link to="/top">Top</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
.app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}
.nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $primary;
    &.router-link-exact-active {
      color: $secondary;
    }
  }
}
.container {
  margin: 0 auto;
  max-width: 650px;
}
</style>
