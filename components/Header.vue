<template>
    <!-- Breadcrumb -->

    <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-lg py-3">
        <div
            class="max-w-[1700px] flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <div class="flex">
                <NavbarLogo />
                <NavbarItemList />
            </div>
            <div class="flex">
                <NavbarButtonAction />
                <button type="button" class="text-white bg-[#24292F] 
                    hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none 
                    focus:ring-[#24292F]/50 font-medium rounded-lg text-sm 
                    px-[20px] py-[3px] text-center inline-flex items-center 
                    dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 mt-2
                "
                >
                    Sign in
                </button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style></style>
