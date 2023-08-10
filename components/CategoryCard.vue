<template>
<div class="cursor-pointer relative">
    <a class=" border border-gray-200 rounded-lg shadow">
        <img
            class="p-8 rounded-t-lg"
            :src="image"
            alt="product image"
        />
    </a>
    <a style="top: unset" class="bottom-[60px] flex items-end justify-center h-[100%] absolute w-[100%]">
        <div style="backdrop-filter: blur(4px)" class="p-[40px] w-[50%] bg-[#232323d9] text-white">
            <h2 class="mb-2 font-bold text-[24px]">New Hoodie</h2>
            <span>BUY ONE GET ONE</span>
        </div>
    </a>
</div>
</template>

<script setup>
defineProps({
    image: {
        type: String,
        default: 'https://voxo.vercel.app/images/fashion/banner/1.jpg'
    }
})
</script>

<style>
</style>