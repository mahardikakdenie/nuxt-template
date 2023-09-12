<template>
<div class="bg-[#eff2f7] p-[60px]">
    <div class="text-center">
        <h2 class="font-bold text-2xl text-[#e22454]">{{title}}</h2>
        <SectionBreadcrumb :paths="paths" />
    </div>
</div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'Detail Section'
    },
    paths: {
        type: Array,
        default: null,
    }
});
</script>

<style>

</style>