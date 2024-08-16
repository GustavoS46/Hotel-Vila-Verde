<template>
  <div class="fixed top-0 left-0 w-full bg-[#623e2a] px-8 py-5 z-50">
    <div class="flex items-center justify-between max-w-screen-xl mx-auto">
      <div class="flex flex-col">
        <h2 class="text-md sm:text-md md:text-xl lg:text-2xl font-title text-white tracking-wider">
          Hotel Vila Verde
        </h2>
        <p class="font-title text-white text-center text-md mt-2 tracking-widest">
          Resort & Spa Hotel
        </p>
      </div>
      <button 
        @click="toggleMenu"
        class="lg:hidden text-white text-2xl relative focus:outline-none"
      >
        <span :class="{'hidden': isMenuOpen, 'block': !isMenuOpen}" class="block">☰</span>
        <span :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="block text-2xl">✕</span>
      </button>
      <!-- Menu visível em telas grandes -->
      <nav class="hidden lg:flex lg:space-x-5 lg:text-md lg:font-sans">
        <a href="#home" class="text-white hover:text-black border-b border-transparent lg:border-0 py-2">
          Home
        </a>
        <a href="#about" class="text-white hover:text-black border-b border-transparent lg:border-0 py-2">
          Sobre
        </a>
        <a href="#room" class="text-white hover:text-black border-b border-transparent lg:border-0 py-2">
          Quartos
        </a>
        <a href="#differential" class="text-white hover:text-black border-b border-transparent lg:border-0 py-2">
          Diferenciais
        </a>
        <a href="#testimonials" class="text-white hover:text-black border-b border-transparent lg:border-0 py-2">
          Depoimentos
        </a>
        <a href="#contact" class="text-white hover:text-black border-b border-transparent lg:border-0 py-2">
          Contato
        </a>
      </nav>
      <!-- Menu visível em telas pequenas -->
      <nav 
        :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}"
        class="lg:hidden absolute top-full left-0 w-full bg-[#623e2a] text-center text-md font-sans py-5 flex flex-col space-y-4 mt-0"
      >
        <a href="#home" class="text-white hover:text-[#A1DEFF] border-b border-gray-300 py-2 block">
          Home
        </a>
        <a href="#about" class="text-white hover:text-[#A1DEFF] border-b border-gray-300 py-2 block">
          Sobre
        </a>
        <a href="#room" class="text-white hover:text-[#A1DEFF] border-b border-gray-300 py-2 block">
          Quartos
        </a>
        <a href="#differential" class="text-white hover:text-[#A1DEFF] border-b border-gray-300 py-2 block">
          Diferenciais
        </a>
        <a href="#testimonials" class="text-white hover:text-[#A1DEFF] border-b border-gray-300 py-2 block">
          Depoimentos
        </a>
        <a href="#contact" class="text-white hover:text-[#A1DEFF] border-b border-gray-300 py-2 block">
          Contato
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style scoped>
/* Estilos adicionais, se necessário */
</style>
