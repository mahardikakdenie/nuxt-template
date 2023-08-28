<template>
<div class="max-w-xxl">
    <SectionTitleDetail title="Detail Category" />
    <SectionCategoryDetail class="mt-6" />
</div>
</template>

<script>
export default {};
</script>

<style>
.circles {
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
}

.circles li:first-child {
    animation-delay: 0s;
    height: 80px;
    left: 25%;
    width: 80px;
}

.circles li {
    animation: animate 25s linear infinite;
    background-color: red;
    bottom: -150px;
    display: block;
    height: 20px;
    list-style: none;
    opacity: .2!important;
    position: absolute;
    width: 20px;
}
</style>
