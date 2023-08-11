<template>
    <section class="p-[100px]">
        <div class="">
            <div class="text-center">
                <h2 class="font-bold text-[30px]">New Arrival</h2>
                <small>Our Collection</small>
            </div>
            <div class="flex justify-center">
                <div class="grid grid-rows-1 p-6">
                    <div class="grid grid-cols-4 gap-4">
                        <div
                            v-for="(product, i) in productCollection"
                            :key="i"
                            class="gap-4"
                        >
                            <div class="cursor-pointer h-[450px] w-[350px]">
                                <div
                                    class="p-8 rounded-t-lg rounded-lg relative bg-cover h-[100%] flex justify-center"
                                    :style="`background-image: url('${product.img}')`"
                                    alt="product image"
                                    @mouseenter="setShowIcon(i)"
                                    @mouseleave="setShowIcon(i)"
                                >
                                    <div v-if="product.show" class="absolute top-0 bottom-8 flex items-end justify-center sm:-m-[25px]">
                                        <div class="flex justify-between gap-4">
                                            <button
                                                v-for="(icon, i) in icons"
                                                :key="i"
                                                class="text-white bg-blue-700 
                                                    hover:bg-red-800 focus:ring-4 focus:outline-none 
                                                    focus:ring-blue-300 font-medium rounded-md text-sm p-2.5 
                                                    text-center inline-flex items-center mr-2 dark:bg-blue-600 
                                                    dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:text-white
                                                "
                                            >
                                                <component
                                                    class="text-center"
                                                    :is="icon"
                                                    customClass="w-4 h-4 text-white"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-2">
                                    <div class="flex justify-between px-6">
                                        <span> Blazers </span>
                                        <div class="flex gap-1">
                                            <IconStar
                                                v-for="i in 5"
                                                :key="i"
                                            />
                                        </div>
                                    </div>
                                    <div class="flex justify-between px-6 mt-3">
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
        </div>
    </section>
</template>

<script setup>
const productCollection = ref([
    {
        img: "https://voxo.vercel.app/images/fashion/product/front/1.jpg",
        show: false,
    },
    {
        img: "https://voxo.vercel.app/images/fashion/product/front/3.jpg",
        show: false,
    },
    {
        img: "https://voxo.vercel.app/images/fashion/product/front/4.jpg",
        show: false,
    },
    {
        img: "https://voxo.vercel.app/images/fashion/product/front/5.jpg",
        show: false,
    },
]);

const IconCart = resolveComponent("IconCart");
const IconEye = resolveComponent("IconEye");
const IconHeart = resolveComponent("IconHeart");

const icons = [IconCart, IconEye, IconHeart];

const showIcon = ref(false);

const setShowIcon = (index) => {
    productCollection.value[index].show = !productCollection.value[index].show;
};
</script>

<style>
</style>