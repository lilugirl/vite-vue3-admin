<template>
  <h1>APP</h1>
  <p>Hello {{ $store.state.name }}</p>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="about">About</router-link> |
    <router-link to="login">Login</router-link>
  </nav>
  <router-view> </router-view>
</template>

<script lang="ts">
export default {
  name: "App",
  components: {},
};
</script>
