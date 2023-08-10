<template>
<section class="flex justify-center p-6">
    <div class="grid grid-rows-1">
        <div class="grid-cols-12 grid gap-4">
            <div v-for="(category, i) in categories" :key="i"  class="col-span-4">
                <category-card :image="category.image" />
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
const categories = [
    {
        image: 'https://voxo.vercel.app/images/fashion/banner/1.jpg',
    },
    {
        image: 'https://voxo.vercel.app/images/fashion/banner/2.jpg',
    },
    {
        image: 'https://voxo.vercel.app/images/fashion/banner/3.jpg',
    },
];
</script>

<style>

</style>