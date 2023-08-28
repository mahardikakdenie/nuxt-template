<template>
	<div class="accordion">
		<div
			class="accordion-header"
			@click="toggle"
			@mouseenter="onMouseHover"
			@mouseleave="onMouseHover"
        >
			<div
				v-if="arrowPosition === 'left'"
				class="accordion-left-icon w-[100%]"
				:class="{
					invisible: !showArrow,
				}">
				<div class="flex justify-between">
					<slot name="heading"> heading </slot>
					<IconRight v-if="!isOpen" customClass="w-3 h-3 text-black relative top-1" />
					<IconDown v-if="isOpen" customClass="w-3 h-3 text-black relative top-1" />
				</div>
			</div>
		</div>
		<div 
            v-show="isOpen" 
            class="accordion-body"
            @mouseenter="onMouseHover"
			@mouseleave="onMouseHover"
        >
            <slot name="body" />
        </div>
	</div>
</template>

<script setup>
const prop = defineProps({
	title: {
		type: String,
		default: '',
	},
	showArrow: {
		type: Boolean,
		default: true,
	},
	arrowPosition: {
		type: String,
		default: 'left',
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
		default: '',
	},
	tooltip: {
		type: String,
		default: '',
	},
});

const emit = defineEmits(['toggle-click']);

const isOpen = ref(false);
const isOverElement = ref(false);

const toggle = () => {
	if (!prop.disabled) {
		isOpen.value = !isOpen.value;
		emit('toggle-click', isOpen.value);
	}
};

const handleClick = () => {
	if (prop.autoClose && !isOverElement.value && isOpen.value) {
		isOpen.value = !isOpen.value;
	}
};

const onMouseHover = () => {
	isOverElement.value = !isOverElement.value;
};
</script>

<style scoped>
.accordion {
	@apply relative w-[100%] bg-[#fff] border-b-0;
}

.accordion-header {
	@apply p-[10px] bg-[#f5f5f5] cursor-pointer flex items-center;
}

.accordion-left-icon {
	@apply opacity-[1];
}

.accordion-left-icon i {
	@apply mb-[4px];
}

.accordion-left-icon.invisible {
	@apply opacity-[.5];
}

.accordion-body {
	@apply p-[10px];
}
</style>
