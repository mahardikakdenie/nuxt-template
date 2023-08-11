<template>
<section class="relative overflow-hidden">
    <div class="w-100 mx-auto">
        <div class="grid grid-rows-1">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-3 bg-[#232323] h-screen flex items-center justify-center px-4">
                    <div class="px-6">
                        <h2
                            class="text-[40px] leading-2 mb-3 text-white font-bold">
                            Raw Ham Colorblock T-shirt
                        </h2>
                        <div class="flex justify-start gap-4">
                            <IconStar
                                v-for="i in 5"
                                :key="i" 
                            />
                            <h6 class="text-white -mt-2">
                                ( 5040 Review )
                            </h6>
                        </div>
                        <p
                            class="mt-10 leading-7 text-white mr-3 tracking-wider">
                            The international hoodies with excellent durable
                            fabric, not to heavy but simply PERFECT for
                            Indian summer.
                        </p>
                        <h3 class="text-white font-bold text-[30px] mt-4">
                            $49.55
                            <span
                                class="theme-color text-[20px] text-red-500"
                                >$49.55</span
                            >
                        </h3>
                        <ul class="mt-3 flex justify-start gap-5 px-0">
                            <li>
                                <div class="relative">
                                    <select
                                        class="border rounded-sm cursor-pointer min-w-[75px] bg-[#1d1d1d] text-white px-4 py-1 border-[#1d1d1d] shadow-md">
                                        <option>Size</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="L">L</option>
                                        <option value="XL">
                                            XL
                                        </option></select
                                    ><i class="fas fa-chevron-down"></i>
                                </div>
                            </li>
                            <li>
                                <div class="relative">
                                    <select
                                        class="border rounded-sm cursor-pointer min-w-[75px] bg-[#1d1d1d] text-white px-4 py-1 border-[#1d1d1d] shadow-md">
                                        <option>Color</option>
                                        <option value="color">Black</option>
                                        <option value="color">White</option>
                                        <option value="color">Blue</option>
                                        <option value="color">
                                            Gray
                                        </option></select
                                    ><i class="fas fa-chevron-down"></i>
                                </div>
                            </li>
                            <li>
                                <div class="relative">
                                    <select
                                        class="border rounded-sm cursor-pointer min-w-[75px] bg-[#1d1d1d] text-white px-4 py-1 border-[#1d1d1d] shadow-md">
                                        <option>Qty</option>
                                        <option value="qty">1</option>
                                        <option value="qty">2</option>
                                        <option value="qty">3</option>
                                        <option value="qty">
                                            4
                                        </option></select
                                    ><i class="fas fa-chevron-down"></i>
                                </div>
                            </li>
                        </ul>
                        <div class="my-6">
                            <button class="px-4 bg-white rounded-sm py-2">
                                Add To Cart
                            </button>
                            <button
                                class="px-6 bg-red-600 rounded-sm py-4 ml-2">
                                <svg
                                    class="w-3 h-3 text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 18">
                                    <path
                                        d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    class="col-span-9 bg-[url('https://voxo.vercel.app/images/fashion/slider/1.jpg')] bg-no-repeat">
                    <div class="flex items-center h-screen">
                        <div class="grid grid-rows-1 px-[30px]">
                        <div class="flex  items-center w-[60%] px-5">
                            <div class="col-span-3">
                                <h3 class="text-[##212529] mb-5 text-[20px] font-bold">
                                    Sale
                                    <span class="text-[#e22454]">70% OFF</span>
                                </h3>
                                <h1 class="font-bold m-0 capitalize leading-[60px] text-[60px]">
                                    New Tranding Fashion
                                </h1>
                                <h6 class="font-bold mt-4">
                                    BUY ONE GET ONE
                                    <span class="text-[#e22454]">FREE</span>
                                </h6>
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

<script>
export default {};
</script>

<style></style>
