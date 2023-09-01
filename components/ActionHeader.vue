<template>
<div class="grid grid-rows-1">
<div class="grid grid-cols-12">
    <div class="col-span-4">
        <div class="flex items-center">
            <div v-for="i in 2" :key="i" class="flex items-center flex-wrap gap-5 mr-2">
                <div>
                    <div class="border border-solid border-[#eff2f7] text-[#8f8397] rounded-none">
                        <select v-model="productFilter" name="" class="dropdown-toggle">
                            <option disabled value="" class="text-[12px] dropdown-item">
                                Products per Page
                            </option>
                            <option v-for="(brand, i) in brands" :key="i" :value="brand" class="text-[12px] dropdown-item">
                                {{ brand }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--  -->
    <div class="col-span-8 flex justify-end w-[100%]">
        <div class="ml-auto flex justify-end w-[100%]">
            <ul class="items-center flex flex-wrap gap-4">
                <li 
                    v-for="(layout,i) in layouts" 
                    :key="i" 
                    class="opacity-100 w-[35px] cursor-pointer hover:bg-[#eff2f7] hover:h-[34px]" 
                    :class="{'layout-active': activeLayout === layout.key, 'opacity-50': layout !== activeLayout}"
                    @click="setActiveLayout(layout.key)"
                >
                    <a class="items-center flex h-[100%] justify-center">
                        <img :src="layout.img" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
</div>
</template>

<script setup>
import { useProductStore } from '@/store/product'
const layouts = [
    {
        key: 'two-layout',
        img: 'https://voxo.vercel.app/_nuxt/grid-2.9871edb1.svg',
    },
    {
        key: 'three-layout',
        img: 'https://voxo.vercel.app/_nuxt/grid-3.bd64c199.svg'
    },
    {
        key: 'four-layout',
        img: 'https://voxo.vercel.app/_nuxt/grid.e3b46688.svg',
    },
    {
        key: 'grid-layout',
        img: 'https://voxo.vercel.app/_nuxt/list.6abcd737.svg'
    }
];

const brands = [
    'Zara',
    'Louis Solly',
    'Louis Philippe',
    'Fila'
];

const store = useProductStore();

const setActiveLayout = (layoutKey) => {
    store.setActiveLayout(layoutKey);
};


const activeLayout = computed(() => store.activeLayout);

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