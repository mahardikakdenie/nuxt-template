<template>
<div class="border p-5 mb-3 rounded-md">
    <accourdion openFirst>
        <template #heading>
            <span>{{ title }} </span>
        </template>
        <template #body>
            <div class="accordion-body">
                <ul class="category-list">
                    <li v-for="(item, i) in items" :key="i" class="block my-[10px] text-ellipsis whitespace-nowrap">
                        <div class="form-check">
                            <input type="checkbox" name="" class="check-it">
                            <label for="" class="form-check-label">{{ item }}</label>
                        </div>
                    </li>
                </ul>
            </div>
        </template>
    </accourdion>
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