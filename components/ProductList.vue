<template>
<div class="grid grid-rows-1 h-[25%]">
    <!-- Non Grid Layout -->
    <div
        v-if="activeLayout !== 'grid-layout'"
        class="grid grid-cols-12 gap-4"
    >
        <div
            v-for="i in 2"
            :key="i"
            :class="{
                'col-span-6': activeLayout === 'two-layout',
                'col-span-4': activeLayout === 'three-layout',
                'col-span-3': activeLayout === 'four-layout',
            }"
        >
            <div class="my-4">
                <div class="overflow-hidden">
                    <div class="overflow-hidden relative">
                        <div class="">
                            <a class="bg-no-repeat bg-cover block">
                                <img
                                    src="https://voxo.vercel.app/images/fashion/product/front/2.jpg"
                                    alt=""
                                    srcset=""
                                    class="bg-none w-[100%]"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Gird Layout -->
    <template v-else>
        <div v-for="i in 3" :key="i" class="grid grid-cols-12 gap-2">
            <div class="col-span-3">
                <div class="my-4">
                    <div class="w-[100%]">
                        <a
                            class="bg-no-repeat bg-cover block w-[100%] overflow-hidden h-[347px]"
                        >
                            <img
                                src="https://voxo.vercel.app/images/fashion/product/front/2.jpg"
                                alt=""
                                srcset=""
                                class="bg-none w-[100%] h-[320px] bg-cover"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div class="col-span-8 ml-4 mt-4">
                <div class="w-[90%]">
                    <div class="item-center flex justify-between">
                        <ul class="m-0 gap-2 mt-1 flex">
                            <li v-for="i in 5" :key="i">
                                <icon-star
                                    customClass="text-yellow-400 w-4 h-4"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mt-3">
                    <span class="text-[#232323] text-[16px]">
                        Blue Leather Jacket
                    </span>
                    <br />
                    <small class="font-thin text-[#7e7e7e]">Regular</small>
                </div>
                <small class="font-thin text-[#7e7e7e]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Sit, deserunt? Asperiores aliquam voluptatum culpa
                    aliquid ab ducimus eaque illum, quibusdam reiciendis id
                    ad consectetur quis, animi qui, minus quidem eveniet!
                    Dolorum magnam numquam, asperiores accusantium
                    architecto placeat quam officia, tempore repellendus
                </small>
                <h3 class="text-[#e22454] text-[30px] mt-5">$60.08</h3>
                <button
                    type="button"
                    class="text-white bg-[#e22454] hover:bg-white hover:border hover:border-[#e22454] hover:text-[#e22454] font-medium rounded-lg text-sm px-[30px] py-[10px] text-center inline-flex items-center mr-2 mb-2 mt-2 transition-colors duration-500 ease-in-out"
                    @mouseenter="setMouseEnter"
                    @mouseleave="setMouseEnter"
                >
                    <IconCart
                        id="cart"
                        :customClass="`
                        mr-2 w-4 h-4
                        transition-colors duration-500 ease-in-out ${
                            isMouseEnter ? 'text-[#e22454]' : 'text-white'
                        }
                    `"
                    />
                    Keranjang
                </button>
            </div>
        </div>
    </template>
</div>
</template>

<script setup>
import { useProductStore } from "@/store/product";

const store = useProductStore();

const setActiveLayout = (layoutKey) => {
    store.setActiveLayout(layoutKey);
};

const activeLayout = computed(() => store.activeLayout);
</script>

<style>
</style>