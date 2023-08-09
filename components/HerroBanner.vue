<template>
    <section class="relative overflow-hidden">
        <div class="w-100 mx-auto">
            <div class="grid grid-rows-1">
                <div class="grid grid-cols-12">
                    <div
                        class="col-span-3 bg-[#232323] h-screen flex items-start justify-center px-4"
                    >
                        <div class="px-6 mt-[100px]">
                            <h2
                                class="text-[40px] leading-2 mb-3 text-white font-bold"
                            >
                                Raw Ham Colorblock T-shirt
                            </h2>
                            <div class="flex justify-start gap-4">
                                <svg
                                    v-for="i in 5"
                                    :key="i"
                                    class="w-3 h-3 text-yellow-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                    />
                                </svg>
                                <h6 class="text-white -mt-2">
                                    ( 5040 Review )
                                </h6>
                            </div>
                            <p
                                class="mt-10 leading-7 text-white mr-3 tracking-wider"
                            >
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
                                        <select class="
                                            border rounded-sm 
                                            cursor-pointer min-w-[75px] 
                                            bg-[#1d1d1d] text-white px-4 py-1 
                                            border-[#1d1d1d] shadow-md
                                        "
                                        >
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
                                        <select  class="
                                            border rounded-sm 
                                            cursor-pointer min-w-[75px] 
                                            bg-[#1d1d1d] text-white px-4 py-1 
                                            border-[#1d1d1d] shadow-md
                                        ">
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
                                        <select  class="
                                            border rounded-sm 
                                            cursor-pointer min-w-[75px] 
                                            bg-[#1d1d1d] text-white px-4 py-1 
                                            border-[#1d1d1d] shadow-md
                                        ">
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
                        </div>
                    </div>
                    <div class="col-span-9 bg-gray-300">Ini Biru</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style>
</style>