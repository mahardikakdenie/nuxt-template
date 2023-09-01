<template>
<div class="max-w-[1400px] mx-auto px-3">
    <div class="grid grid-rows-1">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-4">
                <div class="">
                        <section-category-detail-side-accordion-menu 
                        title="Brand" 
                        :items="brands" 
                    />
                    <section-category-detail-side-accordion-menu 
                        title="Color" 
                        :items="brands" 
                    />
                </div>
            </div>
            <div class="col-span-8">
                <!-- Banner -->
                <banner-detail />
                <!-- Action Header -->
                <action-header />
                <!-- Product -->
                <product-list />
            </div>
        </div>
    </div>
</div>
</template>

<script setup>

const brands = [
    'Zara',
    'Louis Solly',
    'Louis Philippe',
    'Fila'
];

const layouts = [
    'https://voxo.vercel.app/_nuxt/grid-2.9871edb1.svg',
    'https://voxo.vercel.app/_nuxt/grid-3.bd64c199.svg',
    'https://voxo.vercel.app/_nuxt/grid.e3b46688.svg',
    'https://voxo.vercel.app/_nuxt/list.6abcd737.svg'

];

const activeLayout = ref('https://voxo.vercel.app/_nuxt/grid-2.9871edb1.svg');

const productFilter = ref('');
</script>

<style scoped>
.dropdown-toggle {
    @apply border border-solid border-[#eff2f7] text-[#8f8397] font-semibold py-[6px] pr-[36px] pl-[12px] text-left text-[12px];
}

.dropdown-item {
    @apply block w-[100%] py-1 px-4 clear-both font-normal text-inherit whitespace-nowrap bg-transparent border-0;
}

.layout-active {
    @apply bg-[#eff2f7] border-4 h-[34px];
}
</style>