<template>
<div class="grid grid-rows-1">
    <!-- Non Grid Layout -->
    <div v-if="activeLayout !== 'grid-layout'" class="grid grid-cols-12 gap-4">
        <div v-for="i in 2" :key="i" :class="{
            'col-span-6': activeLayout === 'two-layout',
            'col-span-4': activeLayout === 'three-layout',
            'col-span-3': activeLayout === 'four-layout',
        }">
            <div class="my-4">
                <div class="overflow-hidden">
                    <div class="overflow-hidden relative">
                        <div class="">
                            <a 
                                class="bg-no-repeat bg-cover block"
                            >
                                <img src="https://voxo.vercel.app/images/fashion/product/front/2.jpg" alt="" srcset="" class="bg-none w-[100%]">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Gird Layout -->
    <div v-else class="grid grid-cols-12 gap-4">
        <div class="col-span-4"></div>
        <div class="col-span-8"></div>
    </div>
</div>
</template>

<script setup>
import { useProductStore } from '@/store/product';

const store = useProductStore();

const setActiveLayout = (layoutKey) => {
    store.setActiveLayout(layoutKey);
};


const activeLayout = computed(() => store.activeLayout);

</script>

<style>

</style>