<template>
    <div class="accordion">
        <div 
            class="accordion-header" 
            @click="toggle"
            @mouseenter="onMouseHover"
            @mouseleave="onMouseHover"
        >
            <div 
                v-if="arrowPosition"
                class="accordion-left-icon"
                :class="{
                    'invisible': !showArrow,
                }"
            >
                <!-- <i class="icon material-icons"></i> -->
            </div>
        </div>
    </div>
</template>

<script setup>
const prop = defineProps({
    title: {
        type: String,
        default: "",
    },
    showArrow: {
        type: Boolean,
        default: true,
    },
    arrowPosition: {
        type: String,
        default: "right",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    autoClose: {
        type: Boolean,
        default: false,
    },
    openFirst: {
        type: Boolean,
        default: false,
    },
    open: {
        type: Boolean,
        default: false,
    },
    headerClass: {
        type: String,
        default: "",
    },
    tooltip: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(['toggle-click']);

const isOpen = ref(false);
const isOverElement = ref(false);

const toggle = () => {
    if(!prop.disabled) {
        isOpen.value = !isOpen.value;
        emit('toggle-click', isOpen.value);
    }
};

const handleClick = () => {
    if(prop.autoClose && !isOverElement.value && isOpen.value) {
        isOpen.value = !isOpen.value;
    }
};

const onMouseHover = () => {
    isOverElement.value = !isOverElement.value;
};

</script>

<style scoped>
.accordion {
    @apply relative w-[100%] bg-[#fff] border-t border-solid border-[#ddd] border-b-0 border-r-2 border-l-2;
}

.accordion-header {
    @apply p-[10px] bg-[#f5f5f5] border-b border-solid border-[#ddd] cursor-pointer flex items-center;
}

.accordion-left-icon {
    @apply opacity-[1];
}

.accordion-left-icon i {
    @apply mb-[4px];
}

.accordion-left-icon.invisible {
    @apply opacity-[.5]
}

</style>