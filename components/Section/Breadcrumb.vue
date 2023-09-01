<template>
<div class="flex justify-center mt-4">
    <nav class="flex" aria-label="Breadcrumb">
        <ol
            class="inline-flex items-center"
        >
            <li v-for="(item, i) in paths" :key="i" class="inline-flex items-center text-center">
                <router-link
                    to="/"
                    class="inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                    <icon-home v-if="isFirstIndex(i)" />  {{ item.title }}
                    <IconRight v-if="!isLastIndex(i)" customClass="w-3 h-3 text-black mx-2" />
                </router-link>
            </li>
        </ol>
    </nav>
</div>
</template>

<script setup>
const items = [
    {
        title: '',
        link: '/',
    },
    {
        title: 'Category',
        link: '/proejct',
    },
    {
        title: 'Category',
        link: '/proejct',
    }
];

const props = defineProps({
    paths: {
        type: Array,
        default: () => [
    {
        title: '',
        link: '/',
    },
    {
        title: 'Category',
        link: '/proejct',
    },
    {
        title: 'Category',
        link: '/proejct',
    }
],
    },
});

const isLastIndex = (currentIndex) => {
    return currentIndex === props.paths.length - 1;
};

const isFirstIndex = (currentIndex) => {
    return currentIndex === 0;
};
</script>

<style>

</style>