<script setup>
import { RouterView } from "vue-router";
import Footer from "@/components/footer/Footer.vue";
import Navbar from "@/components/header/Navbar.vue";
</script>
<template>
  <header>
    <Navbar />
  </header>
  <RouterView />
  <footer>
    <Footer />
  </footer>
</template>
