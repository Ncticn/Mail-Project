<script setup>
import Footer from "@/components/footer/Footer.vue";
import Navbar from "@/components/header/Navbar.vue";
import { RouterView } from "vue-router";


</script>
<template>
  <header>
    <Navbar />
  </header>
  <main>
    <div class="bg-white rounded-3xl p-6 md:px-8 md:py-6 mb-14">
      <RouterView/>
    </div>
  </main>
  <footer>
    <Footer />
  </footer>
</template>
