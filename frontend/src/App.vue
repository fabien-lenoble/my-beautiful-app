<template>
    <div id="nav">
        <router-link to="/">
            Home |
        </router-link>
        <router-link to="/about">
            About
        </router-link>
    </div>
    <router-view />
</template>

<script lang="ts">

export default {
};
</script>

<style>
body {
  min-height: 100vh;
  background-color: #41b883;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}
h1 {
  text-transform: uppercase;
}
</style>