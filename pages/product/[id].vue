<template>
<div class="max-w-xxl">
    <SectionTitleDetail title="Product" :paths="paths" />
    <SectionProductDetail />
</div>
</template>

<script setup>
const paths = [
    {
        title: '',
        link: '/',
    },
    {
        title: 'Product',
        link: '/proejct',
    },
]
</script>

<style>

</style>