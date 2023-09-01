<template>
<button
    data-collapse-toggle="navbar-default"
    type="button"
    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="navbar-default"
    aria-expanded="false"
>
    <span class="sr-only">Open main menu</span>
    <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
    >
        <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
        />
    </svg>
</button>
<div
    class="hidden w-full md:block md:w-auto ml-[35px] mt-[4px]"
    id="navbar-default"
>
    <ul
        class="nav-items"
    >
        <li 
            v-for="(navItem, i) in navItems"
            :key="i"
        >
            <router-link
                class="list-nav"
                aria-current="page"
                :to="navItem.path"
            >
                {{ navItem.label }}
            </router-link>
        </li>
    </ul>
</div>
</template>

<script setup>
const navItems = [
    {
        label: 'Home',
        path: '/',
    },
    {
        label: 'Product',
        path: '/product',
    },
    {
        label: 'Tentang',
        path: '/about',
    },
    {
        label: 'Kontak',
        path: '/contact',
    },
    {
        label: 'Konfirmasi Pembayaran',
        path: '/payment-confirm',
    }
];
</script>

<style scoped>
.nav-items {
    @apply font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700;
}
.nav-items .list-nav {
    @apply block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent text-[#7e7e7e] font-normal hover:text-[#e22454] cursor-pointer;
}
</style>