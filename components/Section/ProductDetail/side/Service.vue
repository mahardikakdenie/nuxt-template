<template>
<div class="border p-5 mb-3 rounded-md">
    <div class="">
        <div class="p-0">
            <ul>
                <li v-for="i in 3" :key="i" class="mb-6">
                    <div class="flex items-center gap-4">
                        <IconCart customClass="w-6 h-6 text-red-500" />
                        <div class="whitespace-nowrap">
                            <h3>Customer Service</h3>
                            <small>Top notch customer service.</small>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'Brand'
    },
    items: {
        type: Array,
        default: () => ([]),
    },
});


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
</style>