<template>
    <!-- Breadcrumb -->

    <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-lg py-3">
        <div
            class="max-w-[1700px] flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <div class="flex">
                <NavbarLogo />
                <NavbarItemList />
            </div>
            <div class="flex">
                <!-- <NavbarButtonAction /> -->
                <button type="button" class="text-white bg-[#e22454] 
                    hover:bg-white hover:border hover:border-[#e22454] hover:text-[#e22454] 
                    focus:ring-4 focus:outline-none 
                    focus:ring-[#24292F]/50 font-medium rounded-lg text-sm 
                    px-[30px] py-[10px] text-center inline-flex items-center 
                    dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 mt-2
                    transition-colors duration-500 ease-in-out
                "
                    @mouseenter="setMouseEnter"
                    @mouseleave="setMouseEnter"
                >
                    <IconCart
                        id="cart"
                        :customClass="`
                            mr-2 w-4 h-4
                            transition-colors duration-500 ease-in-out ${ isMouseEnter ? 'text-[#e22454]' : 'text-white' }
                        `" 
                    /> 
                        Keranjang
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>
const isMouseEnter = ref(false);
const setMouseEnter = () => {
    isMouseEnter.value = !isMouseEnter.value;
};
</script>

<style>
</style>
