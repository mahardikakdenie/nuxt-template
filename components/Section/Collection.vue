<template>
<section class="p-6">
    <div class="max-w-xxl">
        <div class="text-center">
            <h2 class="font-bold text-[30px]">New Arrival</h2>
            <small>Our Collection</small>
        </div>
        <div class="flex justify-center">
            <div class="grid grid-rows-1 p-6">
            <div class="grid grid-cols-12">
                <div v-for="(product, i) in productCollection" :key="i" class="col-span-3">
                    <div class="cursor-pointer relative w-[100%]">
                        <a class=" border border-gray-200 rounded-lg shadow">
                            <img
                                class="p-8 rounded-t-lg w-[100%]"
                                :src="product.img"
                                alt="product image"
                            />
                        </a>
                        <div class="flex justify-between px-6">
                            <span>
                                Blazers
                            </span>
                            <div class="flex">
                                <IconStarFilled
                                    v-for="i in 5"
                                    :key="i" 
                                />
                            </div>
                        </div>
                        <div class="flex justify-between px-6 mt-2">
                            <span class="font-bold">
                                Slim Fit Plastic
                            </span>
                            <span class="text-[#e22454] font-bold">
                                $86.00
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
const productCollection = [
    {
        img: 'https://voxo.vercel.app/images/fashion/product/front/1.jpg',
    },
    {
        img: 'https://voxo.vercel.app/images/fashion/product/front/3.jpg',
    },
    {
        img: 'https://voxo.vercel.app/images/fashion/product/front/4.jpg',
    },
    {
        img: 'https://voxo.vercel.app/images/fashion/product/front/5.jpg',
    },
];
</script>

<style>

</style>