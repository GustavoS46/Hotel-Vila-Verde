<template>
    <div id="room" class="relative w-full overflow-hidden min-h-[40vh] mt-0 bg-[#f4f1ed]">
        <div>
            <h2 class="font-title text-xl sm:text-2xl md:text-3xl lg:text-[42px] text-[#623e2a] text-center mt-4">
                Acomodações
            </h2>
        </div>
        <div class="relative px-4 py-8 max-w-screen-xl mx-auto h-full flex flex-col justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
                <!-- Primeiro Quarto -->
                <div @click="toggleRoom('luxo')" class="flex flex-col items-center cursor-pointer">
                    <img src="../../public/img/img-4.webp" alt="quarto" class="w-full h-[200px] object-cover">
                    <div class="border-2 border-[#623E2A] w-full mt-4 p-4">
                        <p class="text-[#623e2a] text-md">2 adultos | 1 criança abaixo de 7 anos</p>
                        <h3 class="text-sm sm:text-md font-welcome font-extrabold text-[#623e2a]">Quarto de Luxo</h3>
                        <p class="text-[#623e2a] text-md">R$750 por dia</p>
                    </div>
                </div>
                <!-- Segundo Quarto -->
                <div @click="toggleRoom('vistaMar')" class="flex flex-col items-center cursor-pointer">
                    <img src="../../public/img/img-5.jpg" alt="quarto" class="w-full h-[200px] object-cover">
                    <div class="border-2 border-[#623E2A] w-full mt-4 p-4">
                        <p class="text-[#623e2a] text-md">2 adultos | 1 criança abaixo de 7 anos</p>
                        <h3 class="text-sm sm:text-md font-welcome font-extrabold text-[#623e2a]">
                            Quarto De Luxo com Vista Mar
                        </h3>
                        <p class="text-[#623e2a] text-md">
                            R$850 por dia
                        </p>
                    </div>
                </div>
                <!-- Terceiro Quarto -->
                <div @click="toggleRoom('suiteFamilia')" class="flex flex-col items-center cursor-pointer">
                    <img src="../../public/img/img-2.webp" alt="quarto" class="w-full h-[200px] object-cover">
                    <div class="border-2 border-[#623E2A] w-full mt-4 p-4">
                        <p class="text-[#623e2a] text-md">
                            4 adultos | 2 criança abaixo de 7 anos
                        </p>
                        <h3 class="text-sm sm:text-md font-welcome font-extrabold text-[#623e2a]">
                            Suíte Família
                        </h3>
                        <p class="text-[#623e2a] text-md">
                            R$950 por dia
                        </p>
                    </div>
                </div>
            </div>

            <!-- Descrição dos Quartos -->
            <div v-if="selectedRoom" class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <div class="flex flex-col justify-center">
                    <h3 v-if="selectedRoom === 'luxo'"
                        class="font-title text-xl sm:text-2xl md:text-3xl lg:text-[42px] text-[#623e2a] mt-4">
                        Quarto de Luxo
                    </h3>
                    <h3 v-if="selectedRoom === 'vistaMar'"
                        class="font-title text-xl sm:text-2xl md:text-3xl lg:text-[42px] text-[#623e2a] mt-4">
                        Quarto De Luxo com Vista Mar
                    </h3>
                    <h3 v-if="selectedRoom === 'suiteFamilia'"
                        class="font-title text-xl sm:text-2xl md:text-3xl lg:text-[42px] text-[#623e2a] mt-4">
                        Suíte Família
                    </h3>

                    <p v-if="selectedRoom === 'luxo'" class="text-[#623e2a] text-md mt-4">
                        O Quarto de Luxo oferece uma experiência aconchegante e sofisticada para até 2 adultos e 1
                        criança. Com uma decoração elegante e amenidades modernas, este quarto é perfeito para uma
                        estadia relaxante. Os hóspedes podem desfrutar de uma cama confortável, um ambiente tranquilo e
                        todos os serviços de alto padrão do hotel.
                    </p>
                    <p v-if="selectedRoom === 'vistaMar'" class="text-[#623e2a] text-md mt-4">
                        O Quarto De Luxo com Vista Mar oferece vistas deslumbrantes do oceano, combinando conforto e
                        elegância. Perfeito para 2 adultos e 1 criança, este quarto inclui uma cama espaçosa, decoração
                        sofisticada e serviços de alto padrão para garantir uma estadia memorável.
                    </p>
                    <p v-if="selectedRoom === 'suiteFamilia'" class="text-[#623e2a] text-md mt-4">
                        A Suíte Família é a escolha ideal para grupos ou famílias, acomodando até 4 adultos e 2
                        crianças. Com áreas de descanso separadas e uma decoração elegante, esta suíte proporciona
                        conforto, privacidade e todos os serviços premium que o hotel tem a oferecer.
                    </p>
                </div>
                <div class="flex justify-center">
                    <img v-if="selectedRoom === 'luxo'" src="../../public/img/img-4.webp" alt="Quarto de Luxo"
                        class="w-full h-[300px] object-cover rounded-lg shadow-lg">
                    <img v-if="selectedRoom === 'vistaMar'" src="../../public/img/img-5.jpg"
                        alt="Quarto De Luxo com Vista Mar" class="w-full h-[300px] object-cover rounded-lg shadow-lg">
                    <img v-if="selectedRoom === 'suiteFamilia'" src="../../public/img/img-2.webp" alt="Suíte Família"
                        class="w-full h-[300px] object-cover rounded-lg shadow-lg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedRoom: null
        };
    },
    methods: {
        toggleRoom(room) {
            this.selectedRoom = this.selectedRoom === room ? null : room;
        }
    }
};
</script>