<template>
<div class="max-w-[1400px] mx-auto px-3">
    <div class="grid grid-rows-1">
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-4">
                <div class="border p-5">
                    <accourdion openFirst>
                        <template #heading>
                            <span>Brand</span>
                        </template>
                        <template #body>
                            <div class="accordion-body">
                                <ul class="category-list">
                                    <li v-for="(brand, i) in brands" :key="i" class="block my-[10px] text-ellipsis whitespace-nowrap">
                                        <div class="form-check">
                                            <input type="checkbox" name="" class="check-it">
                                            <label for="" class="form-check-label">{{ brand }}</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </accourdion>
                </div>
                <div class="border p-5 mt-5">
                    <accourdion openFirst>
                        <template #heading>
                            <span>Color</span>
                        </template>
                        <template #body>
                            <div class="accordion-body">
                                <ul class="category-list">
                                    <li v-for="(brand, i) in brands" :key="i" class="block my-[10px] text-ellipsis whitespace-nowrap">
                                        <div class="form-check">
                                            <input type="checkbox" name="" class="check-it">
                                            <label for="" class="form-check-label">{{ brand }}</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </accourdion>
                </div>
            </div>
            <div class="col-span-8">
                <!-- Banner -->
                <div class="banner-detail">
                    <div class="relative">
                        <img src="https://voxo.vercel.app/images/fashion/banner.jpg" alt="" srcset="">
                        <div class="left-[14px] absolute top-[50%] translate-y-[-50%] w-[40%] p-5">
                            <div>
                                <h3 class="text-[#e22454] text-[30px]">
                                    Shop The Latest Trends
                                </h3>
                                <small class="text-[#7e7e7e]">
                                    Shop the latest clothing trends with our weekly edit of what's new in online at Voxo. From out latest woman collection.
                                </small>
                            </div>
                        </div>
                        <div class="mb-5 mt-3">
                            <small class="text-[#7e7e7e]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </small>
                        </div>
                    </div>
                </div>
                <!-- Action Header -->
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
                                        :class="{'layout-active': layout === activeLayout, 'opacity-50': layout !== activeLayout}"
                                        @click="activeLayout = layout"
                                    >
                                        <a class="items-center flex h-[100%] justify-center">
                                            <img :src="layout" alt="">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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

const productFilter = ref('')
</script>

<style scoped>
.accordion-body {
    @apply p-0 max-h-[250px] overflow-hidden;
}

.accordion-body .category-list {
    @apply overflow-hidden w-[100%] px-0;
}

.accordion-body .category-list .form-check {
    @apply flex items-center p-0;
}

.accordion-body .category-list .form-check-label {
    @apply text-[#212529] overflow-hidden text-ellipsis whitespace-nowrap ml-4;
}

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