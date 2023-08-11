<template>
<div class="max-w-xxl">
    <ul class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
    <div class="bg-[#eff2f7] p-[60px]">
        <div class="text-center">
            <h2 class="font-bold text-2xl">Detail category</h2>

            <div class="flex justify-center mt-4">
                <nav class="flex" aria-label="Breadcrumb">
                    <ol
                        class="inline-flex items-center space-x-1 md:space-x-3"
                    >
                        <li class="inline-flex items-center">
                            <a
                                href="#"
                                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                            >
                                <icon-home />
                                Home
                            </a>
                        </li>
                        <li>
                            <div class="flex items-center">
                                <svg
                                    class="w-3 h-3 text-gray-400 mx-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <a
                                    href="#"
                                    class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                                    >Projects</a
                                >
                            </div>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg
                                    class="w-3 h-3 text-gray-400 mx-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <span
                                    class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"
                                    >Flowbite</span
                                >
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
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
