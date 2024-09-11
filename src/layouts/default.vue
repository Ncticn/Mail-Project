<script setup>
import Footer from "@/components/Footer/Footer.vue";
import Navbar from "@/components/Header/Navbar.vue";

</script>
<template>
  <header>
    <Navbar />
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
